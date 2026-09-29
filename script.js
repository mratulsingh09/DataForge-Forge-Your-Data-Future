    /* ==========================================================================
       1. EXTENSIVE HARDWARE CATALOG DATA
       ========================================================================== */
    const CATALOG = {
      cpus: [
        { id: 'epyc-9374f', name: 'AMD EPYC 9374F (32 Cores / 64 Threads)', cores: 32, socket: 'SP5', dual: false, tdp: 320, pcieLanes: 128, memCh: 12, scoreCinebench: 33000, price: 3950 },
        { id: 'epyc-9654-dual', name: 'Dual AMD EPYC 9654 (192 Cores / 384 Threads)', cores: 192, socket: 'SP5', dual: true, tdp: 720, pcieLanes: 160, memCh: 24, scoreCinebench: 210000, price: 23610 },
        { id: 'epyc-9754-dual', name: 'Dual AMD EPYC 9754 Berg (256 Cores / 512 Threads)', cores: 256, socket: 'SP5', dual: true, tdp: 720, pcieLanes: 160, memCh: 24, scoreCinebench: 240000, price: 23960 },
        { id: 'xeon-8592-dual', name: 'Dual Intel Xeon Platinum 8592+ (128 Cores / 256 Threads)', cores: 128, socket: 'LGA4677', dual: true, tdp: 700, pcieLanes: 112, memCh: 16, scoreCinebench: 125000, price: 23200 },
        { id: 'xeon-6980p', name: 'Intel Xeon 6980P (128 Cores / 256 Threads)', cores: 128, socket: 'LGA4677', dual: false, tdp: 480, pcieLanes: 136, memCh: 16, scoreCinebench: 164000, price: 14600 },
        { id: 'tr-7995wx', name: 'AMD Threadripper PRO 7995WX (96 Cores / 192 Threads)', cores: 96, socket: 'sTR5', dual: false, tdp: 350, pcieLanes: 128, memCh: 8, scoreCinebench: 102000, price: 9999 },
        { id: 'xeon-w3495x', name: 'Intel Xeon w9-3495X (56 Cores / 112 Threads)', cores: 56, socket: 'LGA4677', dual: false, tdp: 350, pcieLanes: 112, memCh: 8, scoreCinebench: 65000, price: 5889 }
      ],
      gpus: [
        { id: 'h100-sxm5', name: 'NVIDIA H100 SXM5 80GB HBM3', vram: 80, tdp: 700, fp16: 1989, int8: 3978, pcieGen: 5, form: 'SXM5', price: 35000 },
        { id: 'h200-sxm5', name: 'NVIDIA H200 SXM5 141GB HBM3e', vram: 141, tdp: 700, fp16: 1989, int8: 3978, pcieGen: 5, form: 'SXM5', price: 45000 },
        { id: 'b200-sxm', name: 'NVIDIA B200 SXM 180GB HBM3e', vram: 180, tdp: 1000, fp16: 4500, int8: 9000, pcieGen: 5, form: 'SXM', price: 68000 },
        { id: 'rtx-6000-ada', name: 'NVIDIA RTX 6000 Ada 48GB GDDR6 ECC', vram: 48, tdp: 300, fp16: 91, int8: 1450, pcieGen: 4, form: 'PCIe', price: 6800 },
        { id: 'mi300x', name: 'AMD Instinct MI300X 192GB HBM3', vram: 192, tdp: 750, fp16: 1300, int8: 2600, pcieGen: 5, form: 'OAM', price: 22500 },
        { id: 'l40s', name: 'NVIDIA L40S 48GB GDDR6', vram: 48, tdp: 350, fp16: 366, int8: 733, pcieGen: 4, form: 'PCIe', price: 7200 },
        { id: 'rtx-4090', name: 'NVIDIA GeForce RTX 4090 24GB', vram: 24, tdp: 450, fp16: 83, int8: 1320, pcieGen: 4, form: 'PCIe', price: 1899 },
        { id: 'none', name: 'Headless / No Discrete GPU', vram: 0, tdp: 0, fp16: 0, int8: 0, pcieGen: 4, form: 'None', price: 0 }
      ],
      ram: [
        { id: 'ddr5-128gb', name: '128GB DDR5-4800 ECC Registered RDIMM', sizeGb: 128, price: 680 },
        { id: 'ddr5-64gb', name: '64GB DDR5-4800 ECC Registered RDIMM', sizeGb: 64, price: 290 },
        { id: 'ddr5-32gb', name: '32GB DDR5-5200 ECC Registered RDIMM', sizeGb: 32, price: 180 }
      ],
      storage: [
        { id: 'micron-9400-7tb', name: '7.68TB Micron 9400 Enterprise NVMe PCIe 5.0 U.3', iops: 1500000, price: 980, tdp: 18 },
        { id: 'kioxia-cm7-15tb', name: '15.36TB Kioxia CM7 Enterprise NVMe PCIe 5.0', iops: 2100000, price: 1400, tdp: 22 },
        { id: 'samsung-pm1743-3tb', name: '3.84TB Samsung PM1743 PCIe 5.0 NVMe', iops: 1200000, price: 590, tdp: 12 }
      ],
      motherboards: [
        { id: 'mb-sp5-dual-4u', name: 'Supermicro H13DSH Dual SP5 SXM HGX Server Board', socket: 'SP5', dual: true, maxDimms: 24, pcieSlots: 8, price: 2450 },
        { id: 'mb-str5-wrx90', name: 'ASUS Pro WS WRX90E-SAGE SE', socket: 'sTR5', dual: false, maxDimms: 8, pcieSlots: 7, price: 1299 },
        { id: 'mb-lga4677-dual', name: 'ASRock Rack DUAL-LGA4677 Workstation', socket: 'LGA4677', dual: true, maxDimms: 16, pcieSlots: 6, price: 1650 }
      ],
      psu: [
        { id: 'psu-12000w-quad', name: '12,000W (4x 3000W) N+1 Titanium Redundant Array', wattage: 12000, price: 3600 },
        { id: 'psu-6000w-dual', name: '6,000W (2x 3000W) Titanium Redundant Unit', wattage: 6000, price: 1800 },
        { id: 'psu-2000w-single', name: '2,000W Single Titanium ATX3.0 Power Supply', wattage: 2000, price: 650 }
      ],
      chassis: [
        { id: 'chassis-4u-hgx', name: '4U Industrial HGX High-Density Rack Chassis', type: 'Server', maxGpus: 8, price: 1850 },
        { id: 'chassis-liquid-tower', name: 'E-ATX Custom Liquid-Cooled Enterprise Workstation Tower', type: 'Tower', maxGpus: 4, price: 1200 }
      ],
      networking: [
        { id: 'net-cx7-400g', name: 'NVIDIA ConnectX-7 400Gbps NDR InfiniBand / OSFP', price: 2850 },
        { id: 'net-dual-100g', name: 'Dual-Port 100GbE QSFP28 OCP 3.0 SmartNIC', price: 1250 },
        { id: 'net-quad-25g', name: 'Quad-Port 25GbE SFP28 PCIe Adapter', price: 450 }
      ],
      cooling: [
        { id: 'cool-d2c-liquid', name: 'Direct-To-Chip (D2C) Liquid Cooling Loop + 420mm Radiator', type: 'Liquid', price: 1450 },
        { id: 'cool-high-static-air', name: 'Industrial Dual-Rotor High-Static Pressure Fan Array', type: 'Air', price: 480 }
      ]
    };

    const PRESETS = [
      {
        id: 'preset-ai-405b',
        tag: 'AI LLM 405B Node',
        title: '8x H100 SXM5 640GB VRAM Cluster Node',
        config: { cpuId: 'epyc-9654-dual', cpuQty: 2, gpuId: 'h100-sxm5', gpuQty: 8, ramId: 'ddr5-128gb', ramQty: 24, storageId: 'kioxia-cm7-15tb', storageQty: 8, motherboardId: 'mb-sp5-dual-4u', psuId: 'psu-12000w-quad', chassisId: 'chassis-4u-hgx', networkId: 'net-cx7-400g', coolingId: 'cool-d2c-liquid' }
      },
      {
        id: 'preset-vfx-8k',
        tag: '8K Render Farm',
        title: 'Threadripper PRO + 4x RTX 6000 Ada',
        config: { cpuId: 'tr-7995wx', cpuQty: 1, gpuId: 'rtx-6000-ada', gpuQty: 4, ramId: 'ddr5-64gb', ramQty: 8, storageId: 'micron-9400-7tb', storageQty: 4, motherboardId: 'mb-str5-wrx90', psuId: 'psu-6000w-dual', chassisId: 'chassis-liquid-tower', networkId: 'net-dual-100g', coolingId: 'cool-d2c-liquid' }
      },
      {
        id: 'preset-san-cluster',
        tag: 'Virtualization SAN',
        title: 'Dual Xeon + 122TB NVMe Flash Array',
        config: { cpuId: 'xeon-8592-dual', cpuQty: 2, gpuId: 'none', gpuQty: 0, ramId: 'ddr5-128gb', ramQty: 16, storageId: 'kioxia-cm7-15tb', storageQty: 16, motherboardId: 'mb-lga4677-dual', psuId: 'psu-6000w-dual', chassisId: 'chassis-4u-hgx', networkId: 'net-dual-100g', coolingId: 'cool-high-static-air' }
      }
    ];

    let state = {
      ...PRESETS[0].config,
      raidMode: 'RAID 10',
      isStressTesting: false,
      kwhRate: 0.15,
      dutyHours: 24,
      pue: 1.25
    };

    let radarChart = null;
    let tcoPieChart = null;

    document.addEventListener('DOMContentLoaded', () => {
      renderPresets();
      populateDropdowns();
      bindEvents();
      loadStoredTheme();
      loadSavedConfig();
      initCharts();
      recalculateAll();
    });

    function loadStoredTheme() {
      const savedTheme = localStorage.getItem('dataforge-theme') || 'dark';
      applyTheme(savedTheme);
    }

    function applyTheme(theme) {
      const root = document.documentElement;
      const isDark = theme === 'dark';
      root.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
      const toggleBtn = document.getElementById('themeToggleBtn');
      const toggleIcon = document.getElementById('themeToggleIcon');
      const toggleLabel = document.getElementById('themeToggleLabel');

      if (!toggleBtn || !toggleIcon || !toggleLabel) return;

      toggleBtn.classList.toggle('btn-outline-light', !isDark);
      toggleBtn.classList.toggle('btn-outline-secondary', isDark);
      toggleIcon.className = isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
      toggleLabel.textContent = isDark ? 'Dark' : 'Light';
      localStorage.setItem('dataforge-theme', theme);
    }

    function syncControlsToState() {
      const selectIds = [
        ['selectCpu', 'cpuId'], ['selectCpuQty', 'cpuQty'],
        ['selectGpu', 'gpuId'], ['selectGpuQty', 'gpuQty'],
        ['selectRam', 'ramId'], ['selectRamQty', 'ramQty'],
        ['selectStorage', 'storageId'], ['selectStorageQty', 'storageQty'],
        ['selectMotherboard', 'motherboardId'], ['selectPsu', 'psuId'],
        ['selectChassis', 'chassisId'], ['selectNetwork', 'networkId'],
        ['selectCooling', 'coolingId'], ['selectRaid', 'raidMode']
      ];

      selectIds.forEach(([id, key]) => {
        const el = document.getElementById(id);
        if (!el) return;
        const value = state[key];
        if (value !== undefined) {
          el.value = value;
        }
      });

      document.getElementById('inputKwhRate').value = state.kwhRate;
      document.getElementById('inputDutyHours').value = state.dutyHours;
      document.getElementById('inputPue').value = state.pue;
    }

    function renderPresets() {
      const container = document.getElementById('presetContainer');
      container.innerHTML = PRESETS.map((p, idx) => `
        <div class="col-md-4">
          <div class="preset-card p-3 ${idx === 0 ? 'active' : ''}" onclick="applyPreset('${p.id}', this)">
            <span class="badge bg-cyan-subtle text-cyan font-mono text-uppercase mb-1" style="font-size: 0.65rem;">${p.tag}</span>
            <div class="fw-bold text-white small">${p.title}</div>
          </div>
        </div>
      `).join('');
    }

    function populateDropdowns() {
      populateSelect('selectCpu', CATALOG.cpus, c => `${c.name} - $${c.price.toLocaleString()}`);
      populateSelect('selectGpu', CATALOG.gpus, g => `${g.name} - $${g.price.toLocaleString()}`);
      populateSelect('selectRam', CATALOG.ram, r => `${r.name} - $${r.price}`);
      populateSelect('selectStorage', CATALOG.storage, s => `${s.name} - $${s.price}`);
      populateSelect('selectMotherboard', CATALOG.motherboards, m => `${m.name} - $${m.price}`);
      populateSelect('selectPsu', CATALOG.psu, p => `${p.name} - $${p.price}`);
      populateSelect('selectChassis', CATALOG.chassis, c => `${c.name} - $${c.price}`);
      populateSelect('selectNetwork', CATALOG.networking, n => `${n.name} - $${n.price}`);
      populateSelect('selectCooling', CATALOG.cooling, c => `${c.name} - $${c.price}`);
    }

    function populateSelect(id, list, formatter) {
      document.getElementById(id).innerHTML = list.map(item => `<option value="${item.id}">${formatter(item)}</option>`).join('');
    }

    function bindEvents() {
      const map = {
        selectCpu: 'cpuId', selectCpuQty: 'cpuQty',
        selectGpu: 'gpuId', selectGpuQty: 'gpuQty',
        selectRam: 'ramId', selectRamQty: 'ramQty',
        selectStorage: 'storageId', selectStorageQty: 'storageQty', selectRaid: 'raidMode',
        selectMotherboard: 'motherboardId', selectPsu: 'psuId',
        selectChassis: 'chassisId', selectNetwork: 'networkId', selectCooling: 'coolingId'
      };

      Object.entries(map).forEach(([elId, key]) => {
        document.getElementById(elId).addEventListener('change', e => {
          let val = e.target.value;
          if (!isNaN(val) && elId !== 'selectRaid') val = Number(val);
          state[key] = val;
          recalculateAll();
        });
      });

      document.getElementById('themeToggleBtn').addEventListener('click', () => {
        const nextTheme = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
      });

      document.getElementById('saveConfigBtn').addEventListener('click', saveCurrentConfig);
      document.getElementById('resetConfigBtn').addEventListener('click', () => {
        const defaultPreset = PRESETS[0];
        applyPreset(defaultPreset.id);
        showToast('Default architecture restored.');
      });
      document.getElementById('copySummaryBtn').addEventListener('click', copySystemSummary);

      document.getElementById('inputKwhRate').addEventListener('input', e => { state.kwhRate = parseFloat(e.target.value) || 0.15; recalculateTco(); });
      document.getElementById('inputDutyHours').addEventListener('input', e => { state.dutyHours = parseFloat(e.target.value) || 24; recalculateTco(); });
      document.getElementById('inputPue').addEventListener('input', e => { state.pue = parseFloat(e.target.value) || 1.25; recalculateTco(); });
    }

    function saveCurrentConfig() {
      localStorage.setItem('dataforge-config', JSON.stringify({
        ...state,
        kwhRate: state.kwhRate,
        dutyHours: state.dutyHours,
        pue: state.pue
      }));
      showToast('Current configuration saved.');
    }

    function loadSavedConfig() {
      const stored = localStorage.getItem('dataforge-config');
      if (!stored) return;

      try {
        const parsed = JSON.parse(stored);
        Object.assign(state, parsed);
        syncControlsToState();
        showToast('Saved configuration restored.');
      } catch (error) {
        console.warn('Unable to restore config:', error);
      }
    }

    function copySystemSummary() {
      const cpu = CATALOG.cpus.find(c => c.id === state.cpuId);
      const gpu = CATALOG.gpus.find(g => g.id === state.gpuId);
      const ram = CATALOG.ram.find(r => r.id === state.ramId);
      const storage = CATALOG.storage.find(s => s.id === state.storageId);
      const total = document.getElementById('sidebarGrandTotal').textContent;
      const summary = `DataForge System Summary\nCPU: ${cpu.name}\nGPU: ${gpu.name} x ${state.gpuQty}\nRAM: ${ram.name} x ${state.ramQty}\nStorage: ${storage.name} x ${state.storageQty}\nTotal: ${total}`;

      navigator.clipboard.writeText(summary)
        .then(() => showToast('System summary copied.'))
        .catch(() => showToast('Copy failed — clipboard unavailable.'));
    }

    function showToast(message) {
      const toastEl = document.getElementById('liveToast');
      const toastMessage = document.getElementById('toastMessage');
      if (!toastEl || !toastMessage) return;
      toastMessage.textContent = message;
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }

    function applyPreset(presetId, cardEl) {
      document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active'));
      if(cardEl) cardEl.classList.add('active');

      const p = PRESETS.find(x => x.id === presetId);
      if(!p) return;

      state = { ...state, ...p.config };

      document.getElementById('selectCpu').value = state.cpuId;
      document.getElementById('selectCpuQty').value = state.cpuQty;
      document.getElementById('selectGpu').value = state.gpuId;
      document.getElementById('selectGpuQty').value = state.gpuQty;
      document.getElementById('selectRam').value = state.ramId;
      document.getElementById('selectRamQty').value = state.ramQty;
      document.getElementById('selectStorage').value = state.storageId;
      document.getElementById('selectStorageQty').value = state.storageQty;
      document.getElementById('selectMotherboard').value = state.motherboardId;
      document.getElementById('selectPsu').value = state.psuId;
      document.getElementById('selectChassis').value = state.chassisId;
      document.getElementById('selectNetwork').value = state.networkId;
      document.getElementById('selectCooling').value = state.coolingId;

      recalculateAll();
    }

    function recalculateAll() {
      const cpu = CATALOG.cpus.find(c => c.id === state.cpuId);
      const gpu = CATALOG.gpus.find(g => g.id === state.gpuId);
      const ram = CATALOG.ram.find(r => r.id === state.ramId);
      const storage = CATALOG.storage.find(s => s.id === state.storageId);
      const mb = CATALOG.motherboards.find(m => m.id === state.motherboardId);
      const psu = CATALOG.psu.find(p => p.id === state.psuId);
      const chassis = CATALOG.chassis.find(c => c.id === state.chassisId);
      const net = CATALOG.networking.find(n => n.id === state.networkId);
      const cool = CATALOG.cooling.find(c => c.id === state.coolingId);

      const cpuPower = cpu.tdp * (cpu.dual ? 1 : state.cpuQty);
      const gpuPower = gpu.tdp * state.gpuQty;
      const ramPower = state.ramQty * 6;
      const storagePower = state.storageQty * storage.tdp;
      let totalPower = cpuPower + gpuPower + ramPower + storagePower + 120;

      if (state.isStressTesting) {
        totalPower = Math.round(totalPower * 1.18);
      }

      const psuCapacity = psu.wattage;
      const recPsu = Math.ceil((totalPower * 1.25) / 100) * 100;

      const availableLanes = cpu.pcieLanes;
      const demandedLanes = (state.gpuQty * 16) + (state.storageQty * 4) + 16;
      const totalRamGb = ram.sizeGb * state.ramQty;
      const activeChannels = Math.min(state.ramQty, cpu.memCh);
      const ramBandwidthGbps = Math.round((activeChannels * 4800 * 64) / 8 / 1000);

      const hardwareCost = (cpu.price) + (gpu.price * state.gpuQty) + (ram.price * state.ramQty) +
                           (storage.price * state.storageQty) + mb.price + psu.price + chassis.price + net.price + cool.price;
      const slaCost = Math.round(hardwareCost * 0.08);
      const taxCost = (hardwareCost + slaCost) * 0.085;
      const grandTotal = hardwareCost + slaCost + taxCost;

      const warnings = [];
      if (mb.socket !== cpu.socket) warnings.push(`Socket Mismatch: Board requires ${mb.socket}, but CPU is ${cpu.socket}.`);
      if (state.gpuQty > chassis.maxGpus) warnings.push(`Chassis Constraint: Chassis supports max ${chassis.maxGpus} GPUs (${state.gpuQty} selected).`);
      if (psuCapacity < totalPower) warnings.push(`PSU Overload: Total draw (${totalPower}W) exceeds PSU capacity (${psuCapacity}W).`);
      if (demandedLanes > availableLanes) warnings.push(`PCIe Lane Oversubscription: Demanding ${demandedLanes} lanes from ${availableLanes} lane bus.`);
      if (state.ramQty % cpu.memCh !== 0) warnings.push(`Memory Channel Asymmetry: Populating ${state.ramQty} DIMMs across ${cpu.memCh} channels causes performance drops.`);

      const readiness = Math.max(72, Math.min(99, 100 - warnings.length * 8 - (state.gpuQty > 4 ? 4 : 0) + (gpu.vram > 80 ? 3 : 0)));
      const leadTime = Math.max(7, Math.min(28, 8 + Math.round(state.gpuQty * 2.5 + state.storageQty / 2)));
      const riskLevel = warnings.length === 0 ? 'Low' : warnings.length <= 2 ? 'Medium' : 'High';
      const uptime = (99.90 + (state.gpuQty === 0 ? 0.05 : 0.03) + (state.ramQty > 12 ? 0.03 : 0)).toFixed(2) + '%';

      updateHeaderAndTelemetryUI(totalPower, psuCapacity, recPsu, demandedLanes, availableLanes, totalRamGb, activeChannels, cpu.memCh, ramBandwidthGbps, gpu, hardwareCost, slaCost, taxCost, grandTotal, warnings, readiness, leadTime, riskLevel, uptime);
      updateBlueprintSvg(cpu, gpu, ram, mb, chassis, cool);
      updateTopologySvg(cpu, gpu);
      updateAiAnalytics(gpu, totalRamGb, ramBandwidthGbps);
      recalculateTco(totalPower, grandTotal);
      updateBomAndIac(cpu, gpu, ram, storage, mb, psu, chassis, net, cool, hardwareCost, slaCost, taxCost, grandTotal);
      updateRadarChart(cpu, gpu, ramBandwidthGbps, storage);
    }

    function updateHeaderAndTelemetryUI(power, psuCap, recPsu, demLanes, availLanes, totalRam, actCh, maxCh, ramBw, gpu, hwCost, slaCost, taxCost, grandTotal, warnings, readiness, leadTime, riskLevel, uptime) {
      document.getElementById('hdrPowerText').innerText = `${power} W`;
      document.getElementById('hdrRamBwText').innerText = `${ramBw} GB/s`;
      document.getElementById('hdrAiComputeText').innerText = `${(gpu.fp16 * state.gpuQty).toLocaleString()} TFLOPS`;

      const fmtTotal = `$${grandTotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
      document.getElementById('hdrGrandTotal').innerText = fmtTotal;
      document.getElementById('sidebarGrandTotal').innerText = fmtTotal;

      document.getElementById('telemetryPowerText').innerText = `${power}W / ${psuCap}W`;
      const pPct = Math.min(100, (power / psuCap) * 100);
      const pBar = document.getElementById('powerProgressBar');
      pBar.style.width = `${pPct}%`;
      pBar.className = `progress-bar ${pPct > 100 ? 'bg-danger' : pPct > 80 ? 'bg-warning' : 'bg-info'}`;

      document.getElementById('telemetryPsuRec').innerText = `${recPsu}W`;
      document.getElementById('psuRedundancyBadge').innerText = psuCap >= (power * 1.5) ? "N+1 Titanium Redundant" : "Non-Redundant";

      document.getElementById('telemetryPcieText').innerText = `${demLanes} / ${availLanes} Lanes`;
      const lBar = document.getElementById('pcieProgressBar');
      const lPct = Math.min(100, (demLanes / availLanes) * 100);
      lBar.style.width = `${lPct}%`;
      lBar.className = `progress-bar ${lPct > 100 ? 'bg-danger' : 'bg-cyan'}`;

      document.getElementById('telemetryTotalRamText').innerText = `${totalRam} GB`;
      document.getElementById('telemetryRamSymmetryText').innerText = state.ramQty % maxCh === 0 ? "100% Symmetrical" : "Asymmetrical Channel Deficit";
      document.getElementById('telemetryRamBwText').innerText = `${ramBw} GB/s`;

      document.getElementById('costHardwareText').innerText = `$${hwCost.toLocaleString()}`;
      document.getElementById('costSlaText').innerText = `$${slaCost.toLocaleString()}`;
      document.getElementById('costTaxText').innerText = `$${taxCost.toFixed(2)}`;

      document.getElementById('opsReadiness').innerText = `${Math.round(readiness)}%`;
      document.getElementById('opsLeadTime').innerText = `${leadTime} days`;
      document.getElementById('opsRisk').innerText = riskLevel;
      document.getElementById('opsUptime').innerText = uptime;

      const alertBox = document.getElementById('validationAlertBox');
      const alertList = document.getElementById('validationList');
      if (warnings.length === 0) {
        alertBox.classList.add('d-none');
      } else {
        alertBox.classList.remove('d-none');
        alertList.innerHTML = warnings.map(w => `<li>${w}</li>`).join('');
      }
    }

    function updateBlueprintSvg(cpu, gpu, ram, mb, chassis, cool) {
      const svg = document.getElementById('blueprintSvg');
      const isLiquid = cool.type === 'Liquid';
      const isStress = state.isStressTesting;

      let html = `
        <rect x="10" y="10" width="660" height="400" rx="14" fill="#090d16" stroke="${isStress ? '#f43f5e' : '#1e293b'}" stroke-width="2"/>
        <text x="30" y="38" fill="#64748b" font-family="JetBrains Mono" font-size="11">CHASSIS BLUEPRINT: ${chassis.name.toUpperCase()} (${isStress ? 'STRESS TEST LOAD ACTIVE' : 'NOMINAL LOAD'})</text>
      `;

      html += `<rect x="30" y="50" width="620" height="340" rx="10" fill="#0f172a" stroke="#1e293b" stroke-width="1.5" />`;

      const socketCount = cpu.dual ? 2 : 1;
      for (let s = 0; s < socketCount; s++) {
        const sx = socketCount === 1 ? 340 : 220 + (s * 240);
        html += `
          <g transform="translate(${sx - 65}, 70)">
            <rect width="130" height="100" rx="8" fill="#1e293b" stroke="${isStress ? '#f59e0b' : '#06b6d4'}" stroke-width="2"/>
            <text x="65" y="45" fill="#06b6d4" font-family="JetBrains Mono" font-size="11" font-weight="bold" text-anchor="middle">CPU SOCKET #${s+1}</text>
            <text x="65" y="65" fill="#94a3b8" font-family="Inter" font-size="9" text-anchor="middle">${cpu.socket}</text>
          </g>
        `;

        for (let d = 0; d < 8; d++) {
          const isFilled = (s * 8 + d) < state.ramQty;
          const dx = sx - 85 + (d * 22);
          html += `<rect x="${dx}" y="180" width="14" height="35" rx="2" fill="${isFilled ? '#8b5cf6' : '#1e293b'}" stroke="#334155" />`;
        }
      }

      if (isLiquid) {
        html += `
          <path d="M 180 120 Q 340 30 500 120" fill="none" class="${isStress ? 'liquid-tube-hot' : 'liquid-tube'}" stroke-width="6" stroke-linecap="round"/>
        `;
      }

      for (let g = 0; g < state.gpuQty; g++) {
        const gy = 230 + (g * 18);
        html += `
          <g transform="translate(60, ${gy})">
            <rect width="560" height="14" rx="3" fill="#065f46" stroke="#10b981" stroke-width="1.5" />
            <circle cx="530" cy="7" r="5" class="${isStress ? 'fan-spinning-fast' : 'fan-spinning'}" fill="none" stroke="#34d399" stroke-width="1.5" stroke-dasharray="3 3"/>
            <text x="15" y="10" fill="#ecfdf5" font-family="JetBrains Mono" font-size="8">GPU ACCELERATOR #${g+1}: ${gpu.name}</text>
          </g>
        `;
      }

      svg.innerHTML = html;
    }

    function updateTopologySvg(cpu, gpu) {
      const svg = document.getElementById('topologySvg');
      const box = document.getElementById('topologyMetricsBox');

      let html = `
        <circle cx="90" cy="120" r="35" fill="#1e1b4b" stroke="#6366f1" stroke-width="2"/>
        <text x="90" y="124" fill="#a5b4fc" font-family="JetBrains Mono" font-size="10" text-anchor="middle">CPU 0</text>

        <circle cx="250" cy="120" r="35" fill="#1e1b4b" stroke="#6366f1" stroke-width="2"/>
        <text x="250" y="124" fill="#a5b4fc" font-family="JetBrains Mono" font-size="10" text-anchor="middle">CPU 1</text>

        <line x1="125" y1="120" x2="215" y2="120" stroke="#06b6d4" stroke-width="4" stroke-dasharray="4 4"/>
        <text x="170" y="110" fill="#06b6d4" font-family="JetBrains Mono" font-size="8" text-anchor="middle">UPI / xGMI Mesh</text>
      `;

      svg.innerHTML = html;

      box.innerHTML = `
        <div class="d-flex justify-content-between">
          <span class="text-secondary">Inter-Socket Bandwidth:</span>
          <span class="text-white fw-bold">128 GB/s Full-Duplex</span>
        </div>
        <div class="d-flex justify-content-between">
          <span class="text-secondary">GPU NVLink Topology:</span>
          <span class="text-indigo fw-bold" style="color: #a855f7;">${gpu.form === 'SXM5' ? '900 GB/s All-To-All NVSwitch Mesh' : 'PCIe Gen5 P2P Direct'}</span>
        </div>
      `;
    }

    function updateAiAnalytics(gpu, totalRamGb, ramBw) {
      const totalVramGb = gpu.vram * state.gpuQty;

      const l70bSpeed = Math.round((totalVramGb >= 140 ? 38 : (totalVramGb >= 70 ? 18 : 0)) * Math.max(1, state.gpuQty * 0.85));
      document.getElementById('llama70bSpeed').innerText = `${l70bSpeed} tok/s`;
      document.getElementById('llama70bBar').style.width = `${Math.min(100, (totalVramGb / 140) * 100)}%`;
      document.getElementById('llama70bBadge').className = `badge ${totalVramGb >= 140 ? 'bg-success' : totalVramGb >= 70 ? 'bg-warning' : 'bg-danger'}`;

      const l405bSpeed = Math.round((totalVramGb >= 405 ? 14 : 0) * Math.max(1, state.gpuQty * 0.8));
      document.getElementById('llama405bSpeed').innerText = `${l405bSpeed} tok/s`;
      document.getElementById('llama405bBar').style.width = `${Math.min(100, (totalVramGb / 810) * 100)}%`;
      document.getElementById('llama405bBadge').className = `badge ${totalVramGb >= 810 ? 'bg-success' : totalVramGb >= 405 ? 'bg-warning' : 'bg-danger'}`;

      const sdxl = Math.round(state.gpuQty * 42);
      document.getElementById('sdxlSpeed').innerText = `${sdxl} img/min`;

      const octane = Math.round(state.gpuQty * 650);
      document.getElementById('octaneScore').innerText = `${octane} OB`;
    }

    function recalculateTco(totalPowerW, hwGrandTotal) {
      const kwhDaily = (totalPowerW / 1000) * state.dutyHours * state.pue;
      const kwhYearly = kwhDaily * 365;

      const cost1Yr = kwhYearly * state.kwhRate;
      const cost3Yr = cost1Yr * 3;
      const carbonTons = (kwhYearly * 0.385) / 1000;

      document.getElementById('tco1YrCost').innerText = `$${Math.round(cost1Yr).toLocaleString()}`;
      document.getElementById('tco3YrCost').innerText = `$${Math.round(cost3Yr).toLocaleString()}`;
      document.getElementById('tcoCarbon').innerText = `${carbonTons.toFixed(1)} Metric Tons`;

      updateTcoChart(hwGrandTotal, cost3Yr);
    }

    function initCharts() {
      const ctxRadar = document.getElementById('radarChartCanvas').getContext('2d');
      radarChart = new Chart(ctxRadar, {
        type: 'radar',
        data: {
          labels: ['Compute TFLOPS', 'VRAM Capacity', 'RAM Bandwidth', 'Storage IOPS', 'Network Gbps'],
          datasets: [{
            label: 'Current System Profile',
            data: [20, 20, 20, 20, 20],
            backgroundColor: 'rgba(6, 182, 212, 0.2)',
            borderColor: '#06b6d4',
            pointBackgroundColor: '#6366f1'
          }]
        },
        options: {
          scales: { r: { min: 0, max: 100, ticks: { display: false } } },
          plugins: { legend: { labels: { color: '#f1f5f9' } } }
        }
      });

      const ctxPie = document.getElementById('tcoPieChartCanvas').getContext('2d');
      tcoPieChart = new Chart(ctxPie, {
        type: 'doughnut',
        data: {
          labels: ['Hardware Capital Expense', '3-Year Power & Cooling Energy'],
          datasets: [{
            data: [70, 30],
            backgroundColor: ['#06b6d4', '#f59e0b']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { labels: { color: '#f1f5f9' } } }
        }
      });
    }

    function updateRadarChart(cpu, gpu, ramBw, storage) {
      if(!radarChart) return;
      const fp16 = gpu.fp16 * state.gpuQty;
      const vram = gpu.vram * state.gpuQty;

      radarChart.data.datasets[0].data = [
        Math.min(100, (fp16 / 16000) * 100),
        Math.min(100, (vram / 1000) * 100),
        Math.min(100, (ramBw / 1000) * 100),
        Math.min(100, ((storage.iops * state.storageQty) / 10000000) * 100),
        state.networkId.includes('400g') ? 100 : 50
      ];
      radarChart.update();
    }

    function updateTcoChart(hwTotal, energy3Yr) {
      if(!tcoPieChart) return;
      tcoPieChart.data.datasets[0].data = [Math.round(hwTotal), Math.round(energy3Yr)];
      tcoPieChart.update();
    }

    function updateBomAndIac(cpu, gpu, ram, storage, mb, psu, chassis, net, cool, hwCost, slaCost, taxCost, grandTotal) {
      const items = [
        { cat: 'Processor', desc: cpu.name, qty: cpu.dual ? 2 : state.cpuQty, price: cpu.price },
        ...(state.gpuQty > 0 ? [{ cat: 'GPU Accelerator', desc: gpu.name, qty: state.gpuQty, price: gpu.price }] : []),
        { cat: 'Memory Module', desc: ram.name, qty: state.ramQty, price: ram.price },
        { cat: 'NVMe Storage', desc: `${storage.name} (${state.raidMode})`, qty: state.storageQty, price: storage.price },
        { cat: 'Motherboard', desc: mb.name, qty: 1, price: mb.price },
        { cat: 'Power Supply', desc: psu.name, qty: 1, price: psu.price },
        { cat: 'Chassis Shell', desc: chassis.name, qty: 1, price: chassis.price },
        { cat: 'Networking Card', desc: net.name, qty: 1, price: net.price },
        { cat: 'Cooling Module', desc: cool.name, qty: 1, price: cool.price },
        { cat: 'Enterprise Support', desc: '3-Year Mission-Critical 24/7 SLA', qty: 1, price: slaCost }
      ];

      document.getElementById('bomTableBody').innerHTML = items.map(i => `
        <tr>
          <td class="text-cyan fw-bold">${i.cat}</td>
          <td class="text-white">${i.desc}</td>
          <td class="text-center">${i.qty}</td>
          <td class="text-end">$${i.price.toLocaleString()}</td>
          <td class="text-end text-white fw-bold">$${(i.price * i.qty).toLocaleString()}</td>
        </tr>
      `).join('');

      const iacCode = `# DataForge Terraform Provisioning Manifest
module "dataforge_node_x99" {
  source = "git::https://github.com/dataforge/infrastructure-modules.git"

  chassis_type       = "${chassis.id}"
  cpu_architecture   = "${cpu.id}"
  gpu_accelerators   = "${gpu.id}"
  gpu_count          = ${state.gpuQty}
  ram_total_dimms    = ${state.ramQty}
  nvme_raid_mode     = "${state.raidMode}"
  network_interface  = "${net.id}"

  tags = {
    Environment = "Production"
    Workload    = "High-Performance Compute"
    GeneratedBy = "DataForge Architect"
  }
}`;
      document.getElementById('iacCodeBox').innerText = iacCode;
    }

    function toggleStressTest() {
      state.isStressTesting = !state.isStressTesting;
      const btn = document.getElementById('btnStressTest');
      const label = document.getElementById('stressBtnLabel');

      if (state.isStressTesting) {
        btn.className = 'btn btn-danger btn-sm font-mono fw-bold d-flex align-items-center gap-2';
        label.innerText = 'Stop Stress Simulation';
      } else {
        btn.className = 'btn btn-outline-warning btn-sm font-mono fw-bold d-flex align-items-center gap-2';
        label.innerText = 'Simulate Full Load Stress';
      }
      recalculateAll();
    }

    function runAiArchitectWizard() {
      const obj = document.getElementById('wizardWorkload').value;
      const budget = parseFloat(document.getElementById('wizardBudget').value) || 100000;

      if (obj === 'ai-405b') {
        applyPreset('preset-ai-405b');
      } else if (obj === 'vfx-8k') {
        applyPreset('preset-vfx-8k');
      } else {
        applyPreset('preset-san-cluster');
      }

      const modalEl = document.getElementById('aiArchitectModal');
      const modal = bootstrap.Modal.getInstance(modalEl);
      if(modal) modal.hide();
    }

    function switchToTab(tabId) {
      const el = document.getElementById(tabId);
      if(el) {
        const tab = new bootstrap.Tab(el);
        tab.show();
      }
    }

    function exportJsonBOM() {
      const str = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
      const anchor = document.createElement('a');
      anchor.setAttribute("href", str);
      anchor.setAttribute("download", "DataForge_Configuration.json");
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
    }
