/* ═════════════════════════════════════════════════════════════════════════
   THEME COLOUR CHANGER & STUDIO (theme-changer.js)
   - Dynamic CSS variable synchronization across the entire website
   - Curated accent presets + custom HTML5 color picker + dark/light toggle
   - Zero-FOUC persistence in localStorage
   - Coordinates with custom cursor and 3D scene
   ═════════════════════════════════════════════════════════════════════════ */

/**
 * Preset accent palettes
 */
const THEME_PRESETS = [
  { id: 'cyan',    name: 'Cyan / Ice',      hex: '#06b6d4', label: 'Cyan' },
  { id: 'purple',  name: 'Electric Indigo', hex: '#8b5cf6', label: 'Indigo' },
  { id: 'green',   name: 'Emerald Matrix',  hex: '#10b981', label: 'Emerald' },
  { id: 'crimson', name: 'Cyber Crimson',   hex: '#f43f5e', label: 'Crimson' },
  { id: 'pink',    name: 'Neon Fuchsia',    hex: '#ec4899', label: 'Pink' },
  { id: 'amber',   name: 'Amber Gold',      hex: '#f59e0b', label: 'Gold' },
  { id: 'navy',    name: 'Classic Navy',    hex: '#1e3a8a', label: 'Navy' },
  { id: 'slate',   name: 'Modern Slate',    hex: '#475569', label: 'Slate' },
  { id: 'blue',    name: 'Royal Blue',      hex: '#2563eb', label: 'Blue' },
  { id: 'teal',    name: 'Executive Teal',  hex: '#0f766e', label: 'Teal' },
  { id: 'forest',  name: 'Forest Green',    hex: '#166534', label: 'Forest' },
  { id: 'burgundy',name: 'Burgundy',        hex: '#9f1239', label: 'Burgundy' },
  { id: 'white',   name: 'Pure White',      hex: '#ffffff', label: 'White' },
  { id: 'black',   name: 'Jet Black',       hex: '#000000', label: 'Black' },
  { id: 'steel',   name: 'Steel Blue',      hex: '#3b6b8f', label: 'Steel Blue' },
  { id: 'mint',    name: 'Soft Mint',       hex: '#2f9e84', label: 'Mint' },
  { id: 'plum',    name: 'Muted Plum',      hex: '#7e4a8e', label: 'Plum' },
  { id: 'coral',   name: 'Warm Coral',      hex: '#e76f51', label: 'Coral' },
  { id: 'champagne', name: 'Champagne Gold', hex: '#c49a45', label: 'Champagne' }
];

const DEFAULT_ACCENT = '#06b6d4'; // Default sci-fi icy cyan

(function initThemeStudio() {
  // Color calculation helpers
  function hexToRgb(hex) {
    let clean = hex.replace('#', '').trim();
    if (clean.length === 3) {
      clean = clean.split('').map(c => c + c).join('');
    }
    const num = parseInt(clean, 16);
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255
    };
  }

  function rgbToHex(r, g, b) {
    const toHex = (n) => {
      const h = Math.max(0, Math.min(255, Math.round(n))).toString(16);
      return h.length === 1 ? '0' + h : h;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return { h: h * 360, s: s * 100, l: l * 100 };
  }

  function hslToRgb(h, s, l) {
    h /= 360; s /= 100; l /= 100;
    let r, g, b;

    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
    };
  }

  // Generate lighter and darker shades from base hex
  function generateColorShades(baseHex) {
    const rgb = hexToRgb(baseHex);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

    // Light shade (+14% lightness)
    const lightRgb = hslToRgb(hsl.h, Math.min(100, hsl.s * 1.05), Math.min(92, hsl.l + 14));
    const lightHex = rgbToHex(lightRgb.r, lightRgb.g, lightRgb.b);

    // Dim shade (-14% lightness)
    const dimRgb = hslToRgb(hsl.h, hsl.s, Math.max(15, hsl.l - 14));
    const dimHex = rgbToHex(dimRgb.r, dimRgb.g, dimRgb.b);

    // Darker shade (-28% lightness)
    const darkerRgb = hslToRgb(hsl.h, hsl.s, Math.max(8, hsl.l - 28));
    const darkerHex = rgbToHex(darkerRgb.r, darkerRgb.g, darkerRgb.b);

    return {
      hex: baseHex,
      rgb: `${rgb.r}, ${rgb.g}, ${rgb.b}`,
      rgbObj: rgb,
      lightHex,
      dimHex,
      darkerHex,
      glowSoft: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.12)`,
      glowMed: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.25)`,
      glowStrong: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.45)`
    };
  }

  // Apply color system to document :root
  function applyThemeColor(hex, persist = true) {
    if (!hex || !hex.startsWith('#')) return;

    const shades = generateColorShades(hex);
    const root = document.documentElement;

    // Set standard theme variables
    root.style.setProperty('--primary', shades.hex);
    root.style.setProperty('--primary-rgb', shades.rgb);
    root.style.setProperty('--primary-light', shades.lightHex);
    root.style.setProperty('--primary-dim', shades.dimHex);
    root.style.setProperty('--primary-darker', shades.darkerHex);
    root.style.setProperty('--primary-glow', shades.glowSoft);
    root.style.setProperty('--primary-glow-med', shades.glowMed);
    root.style.setProperty('--primary-glow-strong', shades.glowStrong);

    // Semantic Aliases
    root.style.setProperty('--accent', shades.hex);
    root.style.setProperty('--accent-rgb', shades.rgb);
    root.style.setProperty('--accent-light', shades.lightHex);
    root.style.setProperty('--accent-dim', shades.dimHex);
    root.style.setProperty('--accent-glow', shades.glowSoft);

    // Synchronize legacy --gold variables used throughout the page
    root.style.setProperty('--gold', shades.hex);
    root.style.setProperty('--gold-light', shades.lightHex);
    root.style.setProperty('--gold-dim', shades.dimHex);
    root.style.setProperty('--gold-darker', shades.darkerHex);
    root.style.setProperty('--gold-glow', shades.glowSoft);
    root.style.setProperty('--gold-glow-med', shades.glowMed);
    root.style.setProperty('--gold-glow-strong', shades.glowStrong);

    // Update active swatch indicator in panel
    updateActiveSwatchUI(shades.hex);

    // Save in localStorage
    if (persist) {
      localStorage.setItem('df-accent-color', shades.hex);
    }

    // Broadcast event for custom cursor and 3D scene
    window.dispatchEvent(new CustomEvent('themeColorChange', {
      detail: {
        hex: shades.hex,
        rgb: shades.rgbObj,
        shades
      }
    }));
  }

  function updateActiveSwatchUI(hex) {
    const lowerHex = hex.toLowerCase();
    const swatches = document.querySelectorAll('.theme-swatch');
    let matchedPreset = null;

    swatches.forEach(swatch => {
      const swatchHex = swatch.getAttribute('data-color').toLowerCase();
      if (swatchHex === lowerHex) {
        swatch.classList.add('active');
        matchedPreset = swatch.getAttribute('data-name');
      } else {
        swatch.classList.remove('active');
      }
    });

    // Update color picker & hex display
    const colorInput = document.getElementById('themeCustomColor');
    const hexDisplay = document.getElementById('themeHexDisplay');
    const activeName = document.getElementById('themeActiveName');

    if (colorInput) colorInput.value = lowerHex;
    if (hexDisplay) hexDisplay.textContent = lowerHex.toUpperCase();
    if (activeName) activeName.textContent = matchedPreset || 'Custom';
  }

  // Dark / Light Mode Switch Handler
  function setMode(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('df-theme', mode);

    // Sync navbar icons
    const isDark = mode === 'dark';
    const darkIcon = 'fa-solid fa-moon';
    const lightIcon = 'fa-solid fa-sun';

    const icon = document.getElementById('themeIcon');
    if (icon) icon.className = isDark ? lightIcon : darkIcon;

    const mIcon = document.getElementById('themeIconMobile');
    const mText = document.getElementById('themeTextMobile');
    if (mIcon) mIcon.className = isDark ? lightIcon : darkIcon;
    if (mText) mText.textContent = isDark ? 'Light Mode' : 'Dark Mode';

    // Sync panel mode buttons
    const btnDark = document.getElementById('themeModeDark');
    const btnLight = document.getElementById('themeModeLight');
    if (btnDark && btnLight) {
      btnDark.classList.toggle('active', isDark);
      btnLight.classList.toggle('active', !isDark);
    }

    // Notify listeners
    window.dispatchEvent(new CustomEvent('themeColorChange', {
      detail: { mode, isDark }
    }));
  }

  // Panel Toggle & Accessibility
  function setupPanelControls() {
    const trigger = document.getElementById('themeStudioTrigger');
    const panel = document.getElementById('themeStudioPanel');
    const closeBtn = document.getElementById('themeStudioClose');
    if (!trigger || !panel) return;

    function openPanel() {
      panel.classList.add('active');
      trigger.classList.add('panel-open');
      trigger.setAttribute('aria-expanded', 'true');
    }

    function closePanel() {
      panel.classList.remove('active');
      trigger.classList.remove('panel-open');
      trigger.setAttribute('aria-expanded', 'false');
    }

    function togglePanel() {
      if (panel.classList.contains('active')) {
        closePanel();
      } else {
        openPanel();
      }
    }

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePanel();
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closePanel();
      });
    }

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (panel.classList.contains('active') && !panel.contains(e.target) && e.target !== trigger) {
        closePanel();
      }
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && panel.classList.contains('active')) {
        closePanel();
        trigger.focus();
      }
    });

    // Swatch Clicks
    document.querySelectorAll('.theme-swatch').forEach(swatch => {
      swatch.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        applyThemeColor(color);
      });
    });

    // Custom Color Input
    const colorInput = document.getElementById('themeCustomColor');
    if (colorInput) {
      colorInput.addEventListener('input', (e) => {
        applyThemeColor(e.target.value, false);
      });
      colorInput.addEventListener('change', (e) => {
        applyThemeColor(e.target.value, true);
      });
    }

    // Mode Buttons in Studio Panel
    const btnDark = document.getElementById('themeModeDark');
    const btnLight = document.getElementById('themeModeLight');
    if (btnDark) {
      btnDark.addEventListener('click', () => setMode('dark'));
    }
    if (btnLight) {
      btnLight.addEventListener('click', () => setMode('light'));
    }

    // Navbar mode toggle buttons
    const navToggle = document.getElementById('themeToggle');
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme') || 'light';
        setMode(cur === 'dark' ? 'light' : 'dark');
      });
    }
    const navToggleMobile = document.getElementById('themeToggleMobile');
    if (navToggleMobile) {
      navToggleMobile.addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme') || 'light';
        setMode(cur === 'dark' ? 'light' : 'dark');
      });
    }

    // Reset button
    const resetBtn = document.getElementById('themeResetBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        applyThemeColor(DEFAULT_ACCENT);
        setMode('dark');
      });
    }
  }

  // Restore saved theme on initial load
  function restoreSavedSettings() {
    const savedColor = localStorage.getItem('df-accent-color') || DEFAULT_ACCENT;
    applyThemeColor(savedColor, false);

    const savedTheme = localStorage.getItem('df-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setMode(savedTheme);
  }

  // Execute initialization
  document.addEventListener('DOMContentLoaded', () => {
    restoreSavedSettings();
    setupPanelControls();
  });

  // Expose API for external scripts (e.g. console or integration tests)
  window.DataForgeTheme = {
    setColor: applyThemeColor,
    setMode: setMode,
    presets: THEME_PRESETS
  };
})();
