/* ═════════════════════════════════════════════════════════════════════════
   SCI-FI CUSTOM CURSOR & PARTICLE TRAIL (cursor.js)
   - Arrow/paper-plane pointer that rotates toward motion vector
   - Comet tail of glowing particles + floating binary '0'/'1' digits
   - Dynamically responds to theme color changes
   ═════════════════════════════════════════════════════════════════════════ */

/**
 * 🛠️ CONFIGURATION PARAMETERS
 * Adjust these values to customize trail density, length, and feel:
 */
const CURSOR_CONFIG = {
  // Particle Trail Limits & Timing
  maxParticles: 90,         // Max active particles on screen at once
  trailDuration: 0.85,      // Particle lifetime in seconds (0.6s - 1.0s)
  decayRateMin: 0.016,      // Minimum fade rate per frame
  decayRateMax: 0.026,      // Maximum fade rate per frame

  // Density & Physics
  densityMultiplier: 0.35,  // Density scaling with mouse speed (higher = denser trail)
  maxSpawnPerFrame: 3,      // Max particles spawned in a single frame
  baseSpeedThreshold: 1.2,  // Minimum mouse velocity to trigger rotation & trail
  particleSpread: 1.1,      // Random spread angle behind the pointer (radians)
  particleDrift: 0.55,      // Velocity drift factor

  // Binary Digit Characters
  binaryRatio: 0.24,        // 24% of spawned particles are '0' or '1' characters
  binaryFontSizeMin: 8,     // Min font size in px
  binaryFontSizeMax: 11,    // Max font size in px

  // Spring smoothing is time-based, so it remains consistent across refresh rates
  smoothTime: 0.055,        // Lower values follow more tightly; higher values feel softer
  rotationLerp: 0.12,       // Smooth direction changes without abrupt turns
  pointerSize: 28           // Pointer element dimensions in px
};

(function initSciFiCursor() {
  // Check touch and reduced motion preferences
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isTouch || prefersReducedMotion) {
    return; // Exit early, native cursor will remain active
  }

  // DOM Elements
  const cursorEl = document.getElementById('sci-fi-cursor');
  const canvas = document.getElementById('cursor-trail-canvas');
  if (!cursorEl || !canvas) return;

  const ctx = canvas.getContext('2d');

  // Mouse & Pointer State
  const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const pointer = { x: mouse.x, y: mouse.y, angle: -Math.PI / 4, targetAngle: -Math.PI / 4 };
  const pointerVelocity = { x: 0, y: 0 };
  let lastMouse = { x: mouse.x, y: mouse.y };
  let velocity = { x: 0, y: 0, speed: 0 };
  let isClicking = false;
  let isVisible = false;
  let animFrameId = null;
  let lastFrameTime = performance.now();

  function scheduleRender() {
    if (animFrameId === null) {
      lastFrameTime = performance.now();
      animFrameId = requestAnimationFrame(render);
    }
  }

  function smoothDampAxis(current, target, axis, deltaTime) {
    const omega = 2 / CURSOR_CONFIG.smoothTime;
    const scaledTime = omega * deltaTime;
    const decay = 1 / (1 + scaledTime + 0.48 * scaledTime ** 2 + 0.235 * scaledTime ** 3);
    const difference = current - target;
    const step = (pointerVelocity[axis] + omega * difference) * deltaTime;
    pointerVelocity[axis] = (pointerVelocity[axis] - omega * step) * decay;
    return target + (difference + step) * decay;
  }

  // Particle System Storage
  const particles = [];

  // Theme Color Cache
  let themeRGB = { r: 6, g: 182, b: 212 }; // Default cyan

  function parseRGB(rgbString) {
    if (!rgbString) return null;
    const parts = rgbString.split(',').map(s => parseInt(s.trim(), 10));
    if (parts.length >= 3 && !parts.some(isNaN)) {
      return { r: parts[0], g: parts[1], b: parts[2] };
    }
    return null;
  }

  function updateThemeColors() {
    const style = getComputedStyle(document.documentElement);
    const rgbStr = style.getPropertyValue('--primary-rgb').trim();
    const parsed = parseRGB(rgbStr);
    if (parsed) {
      themeRGB = parsed;
    } else {
      // Fallback: check --primary hex
      const hex = style.getPropertyValue('--primary').trim();
      if (hex && hex.startsWith('#')) {
        const c = hex.replace('#', '');
        if (c.length === 6) {
          themeRGB = {
            r: parseInt(c.substring(0, 2), 16),
            g: parseInt(c.substring(2, 4), 16),
            b: parseInt(c.substring(4, 6), 16)
          };
        }
      }
    }
  }
  updateThemeColors();

  // Listen for theme changes from the theme changer
  window.addEventListener('themeColorChange', () => {
    updateThemeColors();
  });

  // Canvas High-DPI Resizing
  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas, { passive: true });

  // Mouse Event Listeners
  window.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch') return;
    if (!isVisible) {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      lastMouse.x = e.clientX;
      lastMouse.y = e.clientY;
    }
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    if (!isVisible) {
      isVisible = true;
      cursorEl.style.opacity = '1';
    }

    scheduleRender();
  }, { passive: true });

  document.documentElement.addEventListener('pointerleave', () => {
    isVisible = false;
    cursorEl.style.opacity = '0';
  });

  window.addEventListener('blur', () => {
    isVisible = false;
    cursorEl.style.opacity = '0';
  });

  window.addEventListener('mousedown', () => {
    isClicking = true;
    cursorEl.classList.add('is-clicking');
  });

  window.addEventListener('mouseup', () => {
    isClicking = false;
    cursorEl.classList.remove('is-clicking');
  });

  // Delegate hover detection so dynamic content does not require page-wide rescans.
  const interactiveSelector = 'a, button, input, select, textarea, [role="button"], label, .flip-card, .hex-tile, .preset-card, .theme-swatch, .color-picker-btn';
  document.addEventListener('pointerover', (e) => {
    const target = e.target instanceof Element ? e.target.closest(interactiveSelector) : null;
    if (!target || (e.relatedTarget instanceof Node && target.contains(e.relatedTarget))) return;
    cursorEl.classList.add('is-hovered');
  });
  document.addEventListener('pointerout', (e) => {
    const target = e.target instanceof Element ? e.target.closest(interactiveSelector) : null;
    if (!target || (e.relatedTarget instanceof Node && target.contains(e.relatedTarget))) return;
    cursorEl.classList.remove('is-hovered');
  });

  // Particle Constructor
  class TrailParticle {
    constructor(x, y, angle, speed) {
      this.x = x;
      this.y = y;

      // Type: small glowing dot or binary digit '0'/'1'
      this.isBinary = Math.random() < CURSOR_CONFIG.binaryRatio;
      this.char = Math.random() > 0.5 ? '1' : '0';

      // Velocity: ejected backward relative to movement direction with random spread
      const spread = (Math.random() - 0.5) * CURSOR_CONFIG.particleSpread;
      const ejectAngle = angle + Math.PI + spread;
      const ejectSpeed = (Math.random() * 1.5 + 0.4) * CURSOR_CONFIG.particleDrift;

      this.vx = Math.cos(ejectAngle) * ejectSpeed;
      this.vy = Math.sin(ejectAngle) * ejectSpeed;

      // Appearance
      this.size = this.isBinary
        ? Math.floor(Math.random() * (CURSOR_CONFIG.binaryFontSizeMax - CURSOR_CONFIG.binaryFontSizeMin + 1)) + CURSOR_CONFIG.binaryFontSizeMin
        : Math.random() * 2.2 + 0.8; // 0.8px - 3px dots

      this.life = 1.0;
      this.decay = Math.random() * (CURSOR_CONFIG.decayRateMax - CURSOR_CONFIG.decayRateMin) + CURSOR_CONFIG.decayRateMin;
      this.alpha = 1.0;
      this.color = { ...themeRGB };
    }

    update(frameScale) {
      this.x += this.vx * frameScale;
      this.y += this.vy * frameScale;
      // Slight atmospheric drag
      const drag = Math.pow(0.96, frameScale);
      this.vx *= drag;
      this.vy *= drag;

      this.life -= this.decay * frameScale;
      this.alpha = Math.max(0, this.life);
      return this.life > 0;
    }

    draw(ctx) {
      if (this.alpha <= 0) return;

      const { r, g, b } = this.color;

      if (this.isBinary) {
        // Draw tiny binary '0' or '1'
        ctx.save();
        ctx.font = `600 ${this.size}px "Space Grotesk", "JetBrains Mono", monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.alpha * 0.85})`;
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${this.alpha * 0.9})`;
        ctx.shadowBlur = 6;
        ctx.fillText(this.char, this.x, this.y);
        ctx.restore();
      } else {
        // Draw glowing circular particle
        ctx.save();
        ctx.beginPath();
        const currentRadius = Math.max(0.2, this.size * this.life);
        ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);

        // Core white with glowing theme aura
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha * 0.95})`;
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${this.alpha})`;
        ctx.shadowBlur = 5;
        ctx.fill();

        // Soft outer halo
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.alpha * 0.35})`;
        ctx.shadowBlur = 0;
        ctx.fill();
        ctx.restore();
      }
    }
  }

  // Spawn particles from rear nozzle of arrow pointer
  function spawnTrail(x, y, angle, speed) {
    if (speed < CURSOR_CONFIG.baseSpeedThreshold) return;

    // Rear position of the 28px arrow centered at (14, 14)
    // Offset backwards from pointer center
    const rearDistance = 11;
    const rearX = x - Math.cos(angle) * rearDistance;
    const rearY = y - Math.sin(angle) * rearDistance;

    // Density scales with mouse speed
    const count = Math.min(
      CURSOR_CONFIG.maxSpawnPerFrame,
      Math.floor(speed * CURSOR_CONFIG.densityMultiplier) + 1
    );

    for (let i = 0; i < count; i++) {
      if (particles.length >= CURSOR_CONFIG.maxParticles) {
        particles.shift(); // Recycle oldest particle
      }
      particles.push(new TrailParticle(rearX, rearY, angle, speed));
    }
  }

  // Animation Loop
  function render(timestamp) {
    animFrameId = null;
    const deltaTime = Math.min((timestamp - lastFrameTime) / 1000, 0.05);
    const frameScale = deltaTime * 60;
    lastFrameTime = timestamp;

    // 1. Calculate velocity
    velocity.x = mouse.x - lastMouse.x;
    velocity.y = mouse.y - lastMouse.y;
    velocity.speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);

    lastMouse.x = mouse.x;
    lastMouse.y = mouse.y;

    // 2. Follow the pointer with a damped spring for smooth, non-overshooting motion
    pointer.x = smoothDampAxis(pointer.x, mouse.x, 'x', deltaTime);
    pointer.y = smoothDampAxis(pointer.y, mouse.y, 'y', deltaTime);

    // 3. Rotate along the smoothed cursor's movement direction
    const pointerSpeed = Math.hypot(pointerVelocity.x, pointerVelocity.y);
    if (pointerSpeed > 18) {
      pointer.targetAngle = Math.atan2(pointerVelocity.y, pointerVelocity.x);
    }

    // Smooth angular interpolation without 360 flip glitch
    let diff = pointer.targetAngle - pointer.angle;
    while (diff < -Math.PI) diff += Math.PI * 2;
    while (diff > Math.PI) diff -= Math.PI * 2;
    const rotationLerp = 1 - Math.pow(1 - CURSOR_CONFIG.rotationLerp, frameScale);
    pointer.angle += diff * rotationLerp;

    // Spawn particles only while the physical pointer is moving
    if (velocity.speed > CURSOR_CONFIG.baseSpeedThreshold) {
      spawnTrail(pointer.x, pointer.y, pointer.angle, velocity.speed);
    }

    // 4. Update pointer DOM element transform
    // Note: arrow SVG points right (0 rad) by default, so pointer.angle maps directly!
    const deg = pointer.angle * (180 / Math.PI);
    cursorEl.style.transform = `translate3d(${pointer.x - 14}px, ${pointer.y - 14}px, 0) rotate(${deg}deg)`;

    // 5. Render Particle Canvas
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // Update and draw existing particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      if (p.update(frameScale)) {
        p.draw(ctx);
      } else {
        particles.splice(i, 1);
      }
    }

    if (particles.length ||
        Math.abs(mouse.x - pointer.x) > 0.1 ||
        Math.abs(mouse.y - pointer.y) > 0.1 ||
        Math.abs(pointerVelocity.x) > 0.1 ||
        Math.abs(pointerVelocity.y) > 0.1 ||
        Math.abs(diff) > 0.001) {
      scheduleRender();
    }
  }

})();
