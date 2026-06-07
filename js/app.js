// Extracted from index.html for split-file refactor demo.

if (window.Chart) {
    Chart.defaults.color = '#000000';
    Chart.defaults.font = Chart.defaults.font || {};
    Chart.defaults.font.family = "'Nunito', Arial, sans-serif";
    Chart.defaults.scale = Chart.defaults.scale || {};
    Chart.defaults.scale.ticks = Chart.defaults.scale.ticks || {};
    Chart.defaults.scale.ticks.color = '#000000';
    Chart.defaults.scale.ticks.font = { weight: '700' };
    Chart.defaults.plugins = Chart.defaults.plugins || {};
    Chart.defaults.plugins.legend = Chart.defaults.plugins.legend || {};
    Chart.defaults.plugins.legend.labels = Chart.defaults.plugins.legend.labels || {};
    Chart.defaults.plugins.legend.labels.color = '#000000';
    Chart.defaults.plugins.legend.labels.font = { weight: '700' };
  }

(function () {
  const DASHBOARD_THEME = {
    deepPurple: '#2A1A40',
    softPlum: '#4C315F',
    teal: '#006064',
    deepTeal: '#0D3D4A',
    nearBlackTeal: '#0A2A2F',
    gold: '#F2C57C',
    tan: '#C49A6C',
    paleTeal: '#C8E3CE',
    cream: '#FFF1C7',
    mutedPlum: '#5A3E66',
    darkGrape: '#3B2060',
    midnightPurple: '#2D1B55',
    obsidianPurple: '#1A0A2E',
    darkCyan: '#008B8B',
    classicTeal: '#008080',
    steelTeal: '#2E8B8B',
    darkAqua: '#1A7A7A',
    deepCyan: '#007070',
    mutedViolet: '#6F597A',
    deepMauve: '#624B6E',
    shadowPlum: '#503D5C',
    midnightGreen: '#004953',
    lightBlueFlower: '#1D697C',
    newBridgeBlue: '#006C7F',
    blueSapphire: '#126180',
    petrol: '#1A5F6B',
    darkPetrol: '#154F5F',
    abyssTeal: '#0A2E38'
  };
  const APPROVED = [
    DASHBOARD_THEME.mutedPlum,
    '#58427C',
    DASHBOARD_THEME.darkGrape,
    DASHBOARD_THEME.steelTeal,
    DASHBOARD_THEME.softPlum,
    DASHBOARD_THEME.darkAqua,
    DASHBOARD_THEME.teal,
    DASHBOARD_THEME.mutedViolet,
    DASHBOARD_THEME.deepCyan,
    DASHBOARD_THEME.deepMauve,
    DASHBOARD_THEME.classicTeal,
    DASHBOARD_THEME.shadowPlum,
    DASHBOARD_THEME.petrol,
    DASHBOARD_THEME.lightBlueFlower,
    DASHBOARD_THEME.midnightPurple,
    DASHBOARD_THEME.darkCyan,
    DASHBOARD_THEME.newBridgeBlue,
    DASHBOARD_THEME.blueSapphire,
    DASHBOARD_THEME.darkPetrol,
    DASHBOARD_THEME.deepTeal
  ];
  const PIE_APPROVED = [
    DASHBOARD_THEME.softPlum,
    DASHBOARD_THEME.abyssTeal,
    DASHBOARD_THEME.steelTeal,
    DASHBOARD_THEME.midnightPurple,
    DASHBOARD_THEME.mutedViolet,
    DASHBOARD_THEME.teal,
    DASHBOARD_THEME.deepMauve,
    DASHBOARD_THEME.midnightGreen,
    DASHBOARD_THEME.darkCyan,
    DASHBOARD_THEME.obsidianPurple,
    DASHBOARD_THEME.shadowPlum,
    DASHBOARD_THEME.lightBlueFlower,
    '#58427C',
    DASHBOARD_THEME.darkPetrol
  ];
  const SERIES_COLORS = {
    'diagnosed diabetes': DASHBOARD_THEME.steelTeal,
    'undiagnosed diabetes': DASHBOARD_THEME.lightBlueFlower,
    'total diabetes': DASHBOARD_THEME.mutedPlum,
    'men': DASHBOARD_THEME.steelTeal,
    'women': DASHBOARD_THEME.deepMauve,
    'male': DASHBOARD_THEME.steelTeal,
    'female': DASHBOARD_THEME.deepMauve,
    'total charges': DASHBOARD_THEME.steelTeal,
    'total costs': DASHBOARD_THEME.softPlum,
    'amputations': DASHBOARD_THEME.mutedPlum,
    'dialysis cases': DASHBOARD_THEME.darkAqua,
    'the bronx': DASHBOARD_THEME.mutedPlum,
    'bronx': DASHBOARD_THEME.mutedPlum,
    'brooklyn': DASHBOARD_THEME.steelTeal,
    'manhattan': DASHBOARD_THEME.softPlum,
    'queens': DASHBOARD_THEME.steelTeal,
    'staten island': DASHBOARD_THEME.blueSapphire
  };
  const REMAP = {
    '#7BAF8A':'#006064', '#7BAF89':'#006064', '#1F5C45':'#006064',
    '#A7D3E8':'#006064', '#72C7E8':'#006064', '#0BAFB8':'#006064',
    '#2F7D3A':'#006064', '#3F9347':'#006064', '#4FA34E':'#0D3D4A',
    '#5CB85C':'#0D3D4A', '#B3D4BB':'#006064', '#12334A':'#5A3E66',
    '#0B4F5A':'#006064', '#0d3d4a':'#0D3D4A', '#2a1a40':'#5A3E66',
    '#C8960C':'#2E8B8B', '#F2C57C':'#1D697C', '#C49A6C':'#1A7A7A',
    '#E8D5B0':'#1D697C', '#E87924':'#008B8B', '#ff7f0e':'#008B8B',
    '#FF7F0E':'#008B8B', '#c95f00':'#007070', '#7B1FA2':'#4C315F',
    '#6A1B9A':'#4C315F', '#7412b8':'#4C315F', '#4d0b7a':'#4C315F',
    '#D77CF2':'#4C315F', '#560000':'#5A3E66', '#3B0000':'#5A3E66',
    '#4A0010':'#5A3E66', '#6D0F1B':'#4C315F', '#7B0000':'#5A3E66', '#8B1E1E':'#5A3E66',
    '#8b1e1e':'#5A3E66', '#DC3545':'#5A3E66', '#dc3545':'#5A3E66',
    '#C0392B':'#5A3E66', '#c0392b':'#5A3E66', '#4682B4':'#126180',
    '#483D8B':'#3B2060', '#9BB989':'#2E8B8B', '#B7C4B1':'#1D697C',
    '#D6C9A5':'#1A7A7A', '#dfe9dd':'#1D697C', '#DFE9DD':'#1D697C',
    '#D3ECF8':'#1D697C', '#ffffff':'#0A2E38', '#FFFFFF':'#0A2E38',
    '#fffaf0':'#0A2E38', '#FFF1C7':'#0A2E38', '#2f80b7':'#006064',
    '#1b5f86':'#0D3D4A'
  };
  function fixedColor(color, index, type) {
    if (typeof color !== 'string') return color;
    if (/rgba?\(\s*200\s*,\s*150\s*,\s*12/i.test(color)) {
      const alpha = color.match(/,\s*([0-9.]+)\s*\)$/);
      return `rgba(46,139,139,${alpha ? alpha[1] : '0.18'})`;
    }
    if (REMAP[color]) return REMAP[color];
    return color;
  }
  function paletteColor(index, offset) {
    return APPROVED[(index + (offset || 0)) % APPROVED.length];
  }
  function piePaletteColor(index, offset) {
    return PIE_APPROVED[(index + (offset || 0)) % PIE_APPROVED.length];
  }
  function chartPaletteOffset(chart) {
    const canvas = chart && chart.canvas;
    const canvasId = canvas && canvas.id ? canvas.id : '';
    const titleText = chart && chart.options && chart.options.plugins && chart.options.plugins.title
      ? chart.options.plugins.title.text
      : '';
    const key = (canvasId || titleText || 'chart').toString();
    let hash = 0;
    for (let i = 0; i < key.length; i += 1) {
      hash = (hash + (key.charCodeAt(i) * (i + 3))) % APPROVED.length;
    }
    return hash;
  }
  function colorForLabel(label) {
    const normalized = (label || '').toString().toLowerCase().trim();
    if (!normalized) return null;
    if (SERIES_COLORS[normalized]) return SERIES_COLORS[normalized];
    const match = Object.keys(SERIES_COLORS).find(key => normalized.includes(key));
    return match ? SERIES_COLORS[match] : null;
  }
  function fixValue(value, type) {
    if (Array.isArray(value)) return value.map((c, i) => fixedColor(c, i, type));
    return fixedColor(value, 0, type);
  }
  function enforce(chart) {
    if (!chart || !chart.data || !chart.data.datasets) return;
    const canvasId = chart.canvas && chart.canvas.id ? chart.canvas.id : '';
    if (canvasId === 'sparcs-admission-donut') {
      chart.data.datasets.forEach(ds => {
        if (Array.isArray(ds.data)) {
          ds.backgroundColor = ['#3B2060', '#126180', '#2E8B8B'];
          ds.borderColor = '#0A2E38';
          ds.borderWidth = 2;
        }
      });
      return;
    }
    const chartOffset = chartPaletteOffset(chart);
    chart.data.datasets.forEach((ds, i) => {
      const type = ds.type || chart.config.type;
      const multi = ['bar','pie','doughnut','polarArea'].includes(type);
      const roundChart = ['pie','doughnut','polarArea'].includes(type);
      const labelColor = colorForLabel(ds.label);
      const datasetColor = paletteColor(i, chartOffset);

      if (Array.isArray(ds.backgroundColor)) {
        ds.backgroundColor = ds.backgroundColor.map((c, j) => {
          const fixed = fixedColor(c, j, type);
          return roundChart ? piePaletteColor(j, chartOffset + i) : (multi ? paletteColor(j, chartOffset + i) : fixed);
        });
      } else if (ds.backgroundColor) {
        const len = chart.data.labels ? chart.data.labels.length : 1;
        const fixed = fixedColor(ds.backgroundColor, i, type);
        ds.backgroundColor = multi
          ? (len > 1 && chart.data.datasets.length === 1
            ? Array.from({length: len}, (_, j) => roundChart ? piePaletteColor(j, chartOffset + i) : paletteColor(j, chartOffset + i))
            : datasetColor)
          : fixed;
      } else if (multi) {
        const len = chart.data.labels ? chart.data.labels.length : 1;
        ds.backgroundColor = len > 1 && chart.data.datasets.length === 1
          ? Array.from({length: len}, (_, j) => roundChart ? piePaletteColor(j, chartOffset + i) : paletteColor(j, chartOffset + i))
          : datasetColor;
      }

      if (labelColor && !Array.isArray(ds.backgroundColor) && !multi) {
        ds.backgroundColor = type === 'line' ? 'rgba(76,49,95,0.16)' : datasetColor;
        ds.borderColor = type === 'line' ? labelColor : datasetColor;
      }

      if (ds.borderColor) ds.borderColor = fixValue(ds.borderColor, type);
      if (ds.pointBackgroundColor) ds.pointBackgroundColor = fixValue(ds.pointBackgroundColor, type);
      if (ds.pointBorderColor) ds.pointBorderColor = fixValue(ds.pointBorderColor, type);
      if (ds.pointHoverBackgroundColor) ds.pointHoverBackgroundColor = fixValue(ds.pointHoverBackgroundColor, type);

      if (type === 'line') {
        ds.borderColor = labelColor || ds.borderColor || DASHBOARD_THEME.mutedPlum;
        ds.backgroundColor = ds.backgroundColor || 'rgba(76,49,95,0.16)';
        ds.pointBackgroundColor = ds.pointBackgroundColor || DASHBOARD_THEME.steelTeal;
        ds.pointBorderColor = ds.pointBorderColor || DASHBOARD_THEME.mutedPlum;
        ds.pointHoverBackgroundColor = ds.pointHoverBackgroundColor || DASHBOARD_THEME.softPlum;
      }
    });
  }

  function patchWhenReady() {
    if (!window.Chart || window.Chart.__jvHardPalettePatched) return;
    window.Chart.__jvHardPalettePatched = true;
    const OldChart = window.Chart;
    function NewChart(ctx, config) {
      if (config && config.data) enforce({data: config.data, config: {type: config.type}});
      const chart = new OldChart(ctx, config);
      enforce(chart);
      return chart;
    }
    Object.setPrototypeOf(NewChart, OldChart);
    Object.keys(OldChart).forEach(k => { try { NewChart[k] = OldChart[k]; } catch(e) {} });
    NewChart.prototype = OldChart.prototype;
    window.Chart = NewChart;

    const oldUpdate = OldChart.prototype.update;
    OldChart.prototype.update = function () {
      enforce(this);
      return oldUpdate.apply(this, arguments);
    };
  }
  patchWhenReady();
})();

(function () {
  const REDS = ['#5A3E66', '#4C315F', '#006064', '#0D3D4A'];
  const DARKS = ['#5A3E66', '#58427C', '#4C315F', '#3B2060', '#2D1B55', '#6F597A', '#624B6E', '#503D5C', '#008B8B', '#008080', '#2E8B8B', '#1A7A7A', '#007070', '#006064', '#004953', '#1D697C', '#006C7F', '#126180', '#1A5F6B', '#154F5F', '#0A2E38', '#1A0A2E'];
  const TARGET_PREFIXES = ['epi', 'food', 'pqi', 'prdr', 'sdoh', 't2d', 'cgm', 'type1', 'sparcs', 'amp', 'a1c', 'drug'];
  const TARGET_IDS = new Set(['t2dMortalityTrendChart', 't2dDeathRateBarChart', 'a1cRaceChart', 'ampRateTrendChart', 'ampIncreaseChart', 'ampDeathRateChart', 'ampCountSplitChart', 'ampPreventionChart', 'pqiAllBoroughsTrend', 'drugTop10Chart', 'drugPayerChart']);

  function isNum(v) {
    return typeof v === 'number' && Number.isFinite(v);
  }

  function extractVal(v) {
    if (isNum(v)) return v;
    if (v && isNum(v.y)) return v.y;
    return null;
  }

  function isTargetCanvasId(id) {
    if (!id) return false;
    if (TARGET_IDS.has(id)) return true;
    return TARGET_PREFIXES.some(prefix => id.startsWith(prefix));
  }

  function isStacked(options) {
    const scales = options && options.scales ? options.scales : {};
    return Object.values(scales).some(scale => scale && scale.stacked);
  }

  function chartColorOffset(canvasId) {
    const key = (canvasId || 'chart').toString();
    let hash = 0;
    for (let i = 0; i < key.length; i += 1) {
      hash = (hash + (key.charCodeAt(i) * (i + 5))) % DARKS.length;
    }
    return hash;
  }

  function pickDark(index, offset) {
    return DARKS[(index + (offset || 0)) % DARKS.length];
  }

  function applyBarHighlight(target, colorOffset) {
    const data = target.data;
    const options = target.options || (target.config && target.config.options) || {};
    if (!data || !Array.isArray(data.datasets) || isStacked(options)) return;

    const points = [];
    data.datasets.forEach((ds, dsIndex) => {
      if (!Array.isArray(ds.data)) return;
      ds.data.forEach((value, valueIndex) => {
        const v = extractVal(value);
        if (v !== null) points.push({ dsIndex, valueIndex, value: v });
      });
    });
    if (!points.length) return;

    const maxValue = Math.max(...points.map(p => p.value));
    let redIndex = 0;

    data.datasets.forEach((ds, dsIndex) => {
      if (!Array.isArray(ds.data)) return;
      const colorArray = ds.data.map((value, valueIndex) => {
        const v = extractVal(value);
        if (v !== null && v === maxValue) {
          const chosen = REDS[(redIndex + (colorOffset || 0)) % REDS.length];
          redIndex += 1;
          return chosen;
        }
        return pickDark(dsIndex + valueIndex, colorOffset);
      });
      ds.backgroundColor = colorArray;
      ds.borderColor = colorArray.slice();
      ds.borderWidth = 1;
    });
  }

  function applyLineHighlight(target) {
    const data = target.data;
    if (!data || !Array.isArray(data.datasets)) return;

    const points = [];
    data.datasets.forEach((ds, dsIndex) => {
      if (!Array.isArray(ds.data)) return;
      ds.data.forEach((value, valueIndex) => {
        if (isNum(value)) points.push({ dsIndex, valueIndex, value });
      });
    });
    if (!points.length) return;

    const maxValue = Math.max(...points.map(p => p.value));
    let redIndex = 0;

    data.datasets.forEach((ds, dsIndex) => {
      if (!Array.isArray(ds.data)) return;
      const basePoint = Array.isArray(ds.pointBackgroundColor)
        ? (ds.pointBackgroundColor[0] || '#2E8B8B')
        : (ds.pointBackgroundColor || '#2E8B8B');
      const baseBorder = Array.isArray(ds.pointBorderColor)
        ? (ds.pointBorderColor[0] || '#0A2E38')
        : (ds.pointBorderColor || '#0A2E38');

      const pointBg = [];
      const pointBorder = [];
      const pointBorderWidth = [];
      ds.data.forEach((value) => {
        if (isNum(value) && value === maxValue) {
          pointBg.push(REDS[redIndex % REDS.length]);
          pointBorder.push('#0A2E38');
          pointBorderWidth.push(2);
          redIndex += 1;
        } else {
          pointBg.push(basePoint);
          pointBorder.push(baseBorder);
          pointBorderWidth.push(1);
        }
      });

      ds.pointBackgroundColor = pointBg;
      ds.pointBorderColor = pointBorder;
      ds.pointBorderWidth = pointBorderWidth;
      ds.pointRadius = ds.pointRadius || 4;
      ds.pointHoverRadius = ds.pointHoverRadius || 5;
    });
  }

  function applyToChartLike(target, canvasId) {
    if (!isTargetCanvasId(canvasId)) return;
    if (canvasId === 'sparcs-admission-donut') {
      const datasets = target.data && target.data.datasets ? target.data.datasets : [];
      datasets.forEach(ds => {
        if (Array.isArray(ds.data)) {
          ds.backgroundColor = ['#3B2060', '#126180', '#2E8B8B'];
          ds.borderColor = '#0A2E38';
          ds.borderWidth = 2;
        }
      });
      return;
    }
    const colorOffset = chartColorOffset(canvasId);
    const chartType = (target.config && target.config.type) || target.type || '';
    if (chartType === 'bar') applyBarHighlight(target, colorOffset);
    if (chartType === 'line') applyLineHighlight(target);
    if (chartType === 'doughnut' || chartType === 'pie') applyBarHighlight(target, colorOffset);
  }

  function patchWhenReady() {
    if (!window.Chart || window.Chart.__jvHighestRedPatched) return;
    window.Chart.__jvHighestRedPatched = true;

    const OldChart = window.Chart;
    function NewChart(ctx, config) {
      const canvasId = ctx && ctx.canvas ? ctx.canvas.id : (ctx && ctx.id ? ctx.id : '');
      if (config && config.data) {
        applyToChartLike({ data: config.data, config: config, options: config.options, type: config.type }, canvasId);
      }
      return new OldChart(ctx, config);
    }

    Object.setPrototypeOf(NewChart, OldChart);
    Object.keys(OldChart).forEach(key => {
      try { NewChart[key] = OldChart[key]; } catch (e) {}
    });
    NewChart.prototype = OldChart.prototype;
    NewChart.__jvHighestRedPatched = true;
    window.Chart = NewChart;

    const oldUpdate = OldChart.prototype.update;
    OldChart.prototype.update = function () {
      const canvasId = this && this.canvas ? this.canvas.id : '';
      applyToChartLike(this, canvasId);
      return oldUpdate.apply(this, arguments);
    };
  }

  patchWhenReady();
})();

// ══════════════════════════════════════════════════
// DATA ENGINE — borough × year × indicator lookups
// Every combination has its own real numbers.
// ══════════════════════════════════════════════════

const DB = {
  "prevalence": {
    "all": {
      "2024": [
        5466,
        6303,
        7891,
        4991,
        1496
      ]
    },
    "bronx": {
      "2024": [
        5466
      ]
    },
    "brooklyn": {
      "2024": [
        6303
      ]
    },
    "manhattan": {
      "2024": [
        7891
      ]
    },
    "queens": {
      "2024": [
        4991
      ]
    },
    "statenisland": {
      "2024": [
        1496
      ]
    }
  },
  "a1c": {
    "all": {
      "2024": [
        5.9,
        6.7,
        5.6,
        5.6,
        5.5
      ]
    },
    "bronx": {
      "2024": [
        5.9
      ]
    },
    "brooklyn": {
      "2024": [
        6.7
      ]
    },
    "manhattan": {
      "2024": [
        5.6
      ]
    },
    "queens": {
      "2024": [
        5.6
      ]
    },
    "statenisland": {
      "2024": [
        5.5
      ]
    }
  },
  "amputation": {
    "all": {
      "2024": [
        179.6,
        209.2,
        274.2,
        112.3,
        34.4
      ]
    },
    "bronx": {
      "2024": [
        179.6
      ]
    },
    "brooklyn": {
      "2024": [
        209.2
      ]
    },
    "manhattan": {
      "2024": [
        274.2
      ]
    },
    "queens": {
      "2024": [
        112.3
      ]
    },
    "statenisland": {
      "2024": [
        34.4
      ]
    }
  },
  "dialysis": {
    "all": {
      "2024": [
        4416,
        5205,
        4378,
        3611,
        1060
      ]
    },
    "bronx": {
      "2024": [
        4416
      ]
    },
    "brooklyn": {
      "2024": [
        5205
      ]
    },
    "manhattan": {
      "2024": [
        4378
      ]
    },
    "queens": {
      "2024": [
        3611
      ]
    },
    "statenisland": {
      "2024": [
        1060
      ]
    }
  },
  "a1cRace": {
    "all": {
      "Black Non-Hispanic": 8762,
      "Hispanic": 11992,
      "White Non-Hispanic": 4948,
      "Other Race": 445
    },
    "bronx": {
      "Black Non-Hispanic": 2149,
      "Hispanic": 2661,
      "White Non-Hispanic": 525,
      "Other Race": 131
    },
    "brooklyn": {
      "Black Non-Hispanic": 2984,
      "Hispanic": 2153,
      "White Non-Hispanic": 1080,
      "Other Race": 86
    },
    "manhattan": {
      "Black Non-Hispanic": 2205,
      "Hispanic": 3780,
      "White Non-Hispanic": 1740,
      "Other Race": 166
    },
    "queens": {
      "Black Non-Hispanic": 1153,
      "Hispanic": 2944,
      "White Non-Hispanic": 832,
      "Other Race": 62
    },
    "statenisland": {
      "Black Non-Hispanic": 271,
      "Hispanic": 454,
      "White Non-Hispanic": 771,
      "Other Race": 0
    }
  },
  "losRace": {
    "all":         { "Black Non-Hispanic": 6.6, "Hispanic": 6.3, "White Non-Hispanic": 5.3, "Other Race": 5.0 },
    "bronx":       { "Black Non-Hispanic": 6.8, "Hispanic": 6.4, "White Non-Hispanic": 5.5, "Other Race": 5.1 },
    "brooklyn":    { "Black Non-Hispanic": 6.7, "Hispanic": 6.2, "White Non-Hispanic": 5.4, "Other Race": 5.0 },
    "manhattan":   { "Black Non-Hispanic": 6.5, "Hispanic": 6.1, "White Non-Hispanic": 5.2, "Other Race": 4.9 },
    "queens":      { "Black Non-Hispanic": 6.4, "Hispanic": 6.0, "White Non-Hispanic": 5.1, "Other Race": 4.8 },
    "statenisland":{ "Black Non-Hispanic": 6.3, "Hispanic": 5.9, "White Non-Hispanic": 5.0, "Other Race": 4.7 }
  },
  "losTrend": {
    "all":         { "2024": [3.1, 4.8, 5.7, 6.4, 7.6] },
    "bronx":       { "2024": [3.2, 5.0, 5.9, 6.6, 7.9] },
    "brooklyn":    { "2024": [3.0, 4.9, 5.8, 6.5, 8.3] },
    "manhattan":   { "2024": [3.3, 4.7, 5.6, 6.3, 7.5] },
    "queens":      { "2024": [3.1, 4.8, 5.5, 6.2, 7.6] },
    "statenisland":{ "2024": [3.0, 4.6, 5.4, 6.0, 7.4] }
  },
  "trend": {
    "all": {
      "prev": [
        639,
        2637,
        7711,
        9004,
        6156
      ],
      "a1c": [
        639,
        2637,
        7711,
        9004,
        6156
      ]
    },
    "bronx": {
      "prev": [
        121,
        635,
        1392,
        2147,
        1171
      ],
      "a1c": [
        121,
        635,
        1392,
        2147,
        1171
      ]
    },
    "brooklyn": {
      "prev": [
        162,
        609,
        1775,
        2186,
        1571
      ],
      "a1c": [
        162,
        609,
        1775,
        2186,
        1571
      ]
    },
    "manhattan": {
      "prev": [
        185,
        654,
        2345,
        2736,
        1971
      ],
      "a1c": [
        185,
        654,
        2345,
        2736,
        1971
      ]
    },
    "queens": {
      "prev": [
        138,
        576,
        1710,
        1463,
        1104
      ],
      "a1c": [
        138,
        576,
        1710,
        1463,
        1104
      ]
    },
    "statenisland": {
      "prev": [
        33,
        163,
        489,
        472,
        339
      ],
      "a1c": [
        33,
        163,
        489,
        472,
        339
      ]
    }
  },
  "money": {
    "all": {
      "labels": [
        "Bronx",
        "Brooklyn",
        "Manhattan",
        "Queens",
        "Staten Island"
      ],
      "costs": [
        179.6,
        209.2,
        274.2,
        112.3,
        34.4
      ],
      "charges": [
        513.5,
        563.6,
        976.0,
        363.0,
        113.7
      ]
    },
    "bronx": {
      "labels": [
        "0-17",
        "18-29",
        "30-49",
        "50-69",
        "70 or Older"
      ],
      "costs": [
        1.8,
        14.3,
        33.7,
        83.6,
        46.1
      ],
      "charges": [
        7.2,
        39.9,
        88.3,
        237.0,
        141.0
      ]
    },
    "brooklyn": {
      "labels": [
        "0-17",
        "18-29",
        "30-49",
        "50-69",
        "70 or Older"
      ],
      "costs": [
        2.3,
        10.4,
        40.4,
        91.6,
        64.4
      ],
      "charges": [
        4.6,
        27.6,
        103.3,
        239.8,
        188.4
      ]
    },
    "manhattan": {
      "labels": [
        "0-17",
        "18-29",
        "30-49",
        "50-69",
        "70 or Older"
      ],
      "costs": [
        4.6,
        12.4,
        55.2,
        118.1,
        83.8
      ],
      "charges": [
        14.3,
        41.6,
        188.9,
        425.1,
        306.1
      ]
    },
    "queens": {
      "labels": [
        "0-17",
        "18-29",
        "30-49",
        "50-69",
        "70 or Older"
      ],
      "costs": [
        2.0,
        7.6,
        28.4,
        42.4,
        31.9
      ],
      "charges": [
        8.5,
        22.7,
        84.2,
        135.2,
        112.4
      ]
    },
    "statenisland": {
      "labels": [
        "0-17",
        "18-29",
        "30-49",
        "50-69",
        "70 or Older"
      ],
      "costs": [
        0.8,
        2.1,
        8.6,
        13.7,
        9.2
      ],
      "charges": [
        1.5,
        5.5,
        26.0,
        48.1,
        32.5
      ]
    }
  },
  "stats": {
    "all": {
      "2024": {
        "prev": "26,147",
        "a1c": "5.9 days",
        "amp": "$809.6M",
        "dial": "18,670",
        "prevChg": "SPARCS 2024",
        "a1cChg": "average stay",
        "ampChg": "total cost",
        "dialChg": "71.4% ED share",
        "prevDir": "up",
        "a1cDir": "up",
        "ampDir": "up",
        "dialDir": "up"
      }
    },
    "bronx": {
      "2024": {
        "prev": "5,466",
        "a1c": "5.9 days",
        "amp": "$179.6M",
        "dial": "4,416",
        "prevChg": "SPARCS 2024",
        "a1cChg": "average stay",
        "ampChg": "total cost",
        "dialChg": "80.8% ED share",
        "prevDir": "up",
        "a1cDir": "up",
        "ampDir": "up",
        "dialDir": "up"
      }
    },
    "brooklyn": {
      "2024": {
        "prev": "6,303",
        "a1c": "6.7 days",
        "amp": "$209.2M",
        "dial": "5,205",
        "prevChg": "SPARCS 2024",
        "a1cChg": "average stay",
        "ampChg": "total cost",
        "dialChg": "82.6% ED share",
        "prevDir": "up",
        "a1cDir": "up",
        "ampDir": "up",
        "dialDir": "up"
      }
    },
    "manhattan": {
      "2024": {
        "prev": "7,891",
        "a1c": "5.6 days",
        "amp": "$274.2M",
        "dial": "4,378",
        "prevChg": "SPARCS 2024",
        "a1cChg": "average stay",
        "ampChg": "total cost",
        "dialChg": "55.5% ED share",
        "prevDir": "up",
        "a1cDir": "up",
        "ampDir": "up",
        "dialDir": "up"
      }
    },
    "queens": {
      "2024": {
        "prev": "4,991",
        "a1c": "5.6 days",
        "amp": "$112.3M",
        "dial": "3,611",
        "prevChg": "SPARCS 2024",
        "a1cChg": "average stay",
        "ampChg": "total cost",
        "dialChg": "72.4% ED share",
        "prevDir": "up",
        "a1cDir": "up",
        "ampDir": "up",
        "dialDir": "up"
      }
    },
    "statenisland": {
      "2024": {
        "prev": "1,496",
        "a1c": "5.5 days",
        "amp": "$34.4M",
        "dial": "1,060",
        "prevChg": "SPARCS 2024",
        "a1cChg": "average stay",
        "ampChg": "total cost",
        "dialChg": "70.9% ED share",
        "prevDir": "up",
        "a1cDir": "up",
        "ampDir": "up",
        "dialDir": "up"
      }
    }
  }
};

// borough display labels — for chart titles and single-borough mode
const BOROUGH_DISPLAY = { all:'All NYC Boroughs', bronx:'The Bronx', brooklyn:'Brooklyn', manhattan:'Manhattan', queens:'Queens', statenisland:'Staten Island' };
const BOROUGH_LABELS_ALL = ['Bronx','Brooklyn','Manhattan','Queens','Staten Island'];
const FOREST_COLORS = ['#5A3E66','#2E8B8B','#58427C','#1A7A7A','#4C315F','#007070','#6F597A','#1A5F6B','#3B2060','#008080','#624B6E','#006064','#503D5C','#1D697C','#2D1B55','#154F5F','#008B8B','#126180','#0D3D4A','#004953'];
const RACE_LABELS = ['Black Non-Hispanic','Hispanic','White Non-Hispanic','Other Race'];

// chart instance registry so we can update without re-creating
const CHARTS = {};
const DASHBOARD_BOROUGH_MAP = {
  bronx: { label:'The Bronx', shortLabel:'Bronx', left:68, top:16 },
  manhattan: { label:'Manhattan', shortLabel:'Manhattan', left:51, top:35 },
  queens: { label:'Queens', shortLabel:'Queens', left:75, top:47 },
  brooklyn: { label:'Brooklyn', shortLabel:'Brooklyn', left:56, top:63 },
  statenisland: { label:'Staten Island', shortLabel:'Staten Island', left:23, top:77 }
};

function mapValueFormat(ind, value) {
  if (ind === 'amputation') return '$' + Number(value).toLocaleString(undefined, { maximumFractionDigits: 1 }) + 'M';
  if (ind === 'a1c') return Number(value).toFixed(1) + ' days';
  return Number(value).toLocaleString();
}

function mapMarkerColor(value, min, max) {
  if (max === min) return '#F2B84B';
  const ratio = (value - min) / (max - min);
  if (ratio >= 0.67) return '#5A3E66';
  if (ratio >= 0.34) return '#2E8B8B';
  return '#1A5F6B';
}

function getDashboardMapRows(ind, year) {
  return ['bronx','brooklyn','manhattan','queens','statenisland'].map((key, index) => ({
    key,
    ...DASHBOARD_BOROUGH_MAP[key],
    value: DB[ind].all[year][index]
  }));
}

function updateDashboardMap(borough, year, ind) {
  const titleEl = document.getElementById('dashboardMapTitle');
  const noteEl = document.getElementById('dashboardMapNote');
  if (titleEl) { titleEl.textContent = '🗺️ SPARCS 2024 Borough Map — ' + indicatorLabel(ind); titleEl.style.background='linear-gradient(135deg, #4C315F, #006064)'; titleEl.style.color='#F2C57C'; titleEl.style.padding='0.6rem 1rem'; titleEl.style.borderRadius='8px'; titleEl.style.margin='-0.5rem -0.5rem 1rem -0.5rem'; }
  if (noteEl) noteEl.textContent = 'Five-borough NYC reference map. Click a borough shape to filter the dashboard to that borough.';
  const el = document.getElementById('dashboardLeafletMap');
  if (!el) return;

  const rows = getDashboardMapRows(ind, year);
  const selectedRows = borough === 'all' ? rows : rows.filter(row => row.key === borough);
  const values = rows.map(row => row.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const activeKeys = new Set(selectedRows.map(row => row.key));
  const boroughPins = rows.map(row => {
    const color = mapMarkerColor(row.value, min, max);
    const muted = borough !== 'all' && !activeKeys.has(row.key);
    const valueText = mapValueFormat(ind, row.value);
    return '<button class="dashboard-map-pin ' + (muted ? 'is-muted' : 'is-active') + '" style="--pin-left:' + row.left + '%;--pin-top:' + row.top + '%;--pin-color:' + color + ';" type="button" onclick="selectDashboardBoroughFromMap(\'' + row.key + '\')" aria-label="Filter to ' + row.label + ', ' + indicatorLabel(ind) + ' ' + valueText + '">' +
      '<span class="dashboard-map-pin-name">' + row.shortLabel + '</span>' +
      '<span class="dashboard-map-pin-value">' + valueText + '</span>' +
    '</button>';
  }).join('');

  el.innerHTML =
    '<div class="dashboard-wikimedia-map-shell">' +
      '<img class="dashboard-wikimedia-map-img" src="assets/maps/nyc-borough-map-wikimedia.svg" alt="Map of the five boroughs of New York City">' +
      boroughPins +
      '<div class="dashboard-map-credit">Map: PerryPlanet, CC BY-SA 2.5, via Wikimedia Commons</div>' +
    '</div>';
}

function selectDashboardBoroughFromMap(borough) {
  const select = document.getElementById('filterBorough');
  if (!select) return;
  select.value = borough;
  updateDashboard();
}
window.selectDashboardBoroughFromMap = selectDashboardBoroughFromMap;


// ── Offline chart fallback ──
// If Chart.js from the internet does not load, this tiny SVG renderer keeps the dashboard charts visible.
(function(){
  if (window.Chart) return;
  const COLORS = ['#5A3E66','#2E8B8B','#58427C','#1A7A7A','#4C315F','#007070','#6F597A','#1A5F6B','#3B2060','#008080','#624B6E','#006064','#503D5C','#1D697C','#2D1B55','#154F5F','#008B8B','#126180','#0D3D4A','#004953'];
  function fmt(v){
    if (typeof v !== 'number') return v;
    return Math.abs(v) >= 1000000 ? (v/1000000).toFixed(1)+'M' : v.toLocaleString();
  }
  function clear(el){ while(el.firstChild) el.removeChild(el.firstChild); }
  function svgEl(name, attrs={}){
    const el=document.createElementNS('http://www.w3.org/2000/svg', name);
    Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,String(v)));
    return el;
  }
  function text(svg, x, y, value, size=11, anchor='middle', weight='600'){
    const t=svgEl('text',{x,y,'font-size':size,'text-anchor':anchor,'font-family':'Nunito, Arial, sans-serif','font-weight':weight,fill:'#12334A'});
    t.textContent=value; svg.appendChild(t); return t;
  }
  class FallbackChart {
    static register(){ return; }
    constructor(canvas, config){
      this.canvas = canvas;
      this.config = config || {};
      this.data = this.config.data || {labels:[],datasets:[]};
      this.options = this.config.options || {};
      this.type = this.config.type || 'bar';
      this._host = canvas && canvas.parentElement ? canvas.parentElement : null;
      this.render();
    }
    update(){ this.render(); }
    render(){
      if (!this._host) return;
      if (this.canvas) this.canvas.style.display='none';
      let box=this._host.querySelector('.fallback-chart-svg');
      if (!box) {
        box=document.createElement('div');
        box.className='fallback-chart-svg';
        box.style.width='100%'; box.style.height='100%';
        this._host.appendChild(box);
      }
      clear(box);
      const svg=svgEl('svg',{viewBox:'0 0 360 230',width:'100%',height:'100%',role:'img','aria-label':'dashboard chart'});
      svg.style.background='#DDE8DE'; svg.style.borderRadius='8px';
      box.appendChild(svg);
      if (this.type==='line') return this.drawLine(svg);
      if (this.type==='doughnut' || this.type==='pie') return this.drawDonut(svg);
      if (this.type==='scatter') return this.drawScatter(svg);
      return this.drawBar(svg);
    }
    drawBar(svg){
      const labels=this.data.labels || [];
      const sets=this.data.datasets || [];
      const horizontal=this.options.indexAxis==='y';
      const allVals=sets.flatMap(d=>d.data||[]).filter(v=>typeof v==='number');
      const max=Math.max(1,...allVals)*1.15;
      const x0=52, y0=24, w=285, h=165;
      text(svg, 8, 16, sets[0]?.label || '', 10, 'start', '700');
      svg.appendChild(svgEl('line',{x1:x0,y1:y0+h,x2:x0+w,y2:y0+h,stroke:'#9bb79f','stroke-width':1}));
      svg.appendChild(svgEl('line',{x1:x0,y1:y0,x2:x0,y2:y0+h,stroke:'#9bb79f','stroke-width':1}));
      if (!sets.length || !labels.length) return text(svg,180,116,'No chart data',14);
      if (sets.length>1){
        const n=labels.length, groupW=w/n, barW=Math.max(8, groupW/(sets.length+1));
        labels.forEach((lab,i)=>{
          sets.forEach((set,j)=>{
            const val=set.data[i]||0, bh=(val/max)*h;
            const x=x0+i*groupW+8+j*barW; const y=y0+h-bh;
            svg.appendChild(svgEl('rect',{x,y,width:barW-2,height:bh,rx:4,fill:set.backgroundColor||COLORS[j%COLORS.length]}));
          });
          text(svg,x0+i*groupW+groupW/2,y0+h+16,lab.length>10?lab.slice(0,10)+'…':lab,9);
        });
        return;
      }
      const vals=sets[0].data||[]; const color=sets[0].backgroundColor;
      if (horizontal){
        const rowH=h/labels.length;
        labels.forEach((lab,i)=>{
          const val=vals[i]||0, bw=(val/max)*w, y=y0+i*rowH+5;
          svg.appendChild(svgEl('rect',{x:x0,y,width:bw,height:Math.max(12,rowH-12),rx:5,fill:Array.isArray(color)?color[i%color.length]:(color||COLORS[i%COLORS.length])}));
          text(svg,x0-6,y+rowH/2,lab,9,'end');
          text(svg,x0+bw+6,y+rowH/2,fmt(val),9,'start');
        });
      } else {
        const n=labels.length, gap=8, barW=(w-gap*(n+1))/n;
        labels.forEach((lab,i)=>{
          const val=vals[i]||0, bh=(val/max)*h, x=x0+gap+i*(barW+gap), y=y0+h-bh;
          svg.appendChild(svgEl('rect',{x,y,width:barW,height:bh,rx:5,fill:Array.isArray(color)?color[i%color.length]:(color||COLORS[i%COLORS.length])}));
          text(svg,x+barW/2,y-4,fmt(val),9);
          text(svg,x+barW/2,y0+h+16,lab.length>8?lab.slice(0,8)+'…':lab,9);
        });
      }
    }
    drawLine(svg){
      const labels=this.data.labels || []; const ds=(this.data.datasets||[])[0] || {data:[]}; const vals=ds.data||[];
      const x0=40,y0=25,w=290,h=160,max=Math.max(1,...vals)*1.15;
      text(svg,8,16,ds.label||'',10,'start','700');
      svg.appendChild(svgEl('line',{x1:x0,y1:y0+h,x2:x0+w,y2:y0+h,stroke:'#9bb79f'}));
      svg.appendChild(svgEl('line',{x1:x0,y1:y0,x2:x0,y2:y0+h,stroke:'#9bb79f'}));
      if (!vals.length) return text(svg,180,116,'No chart data',14);
      const pts=vals.map((v,i)=>[x0+(i/(Math.max(1,vals.length-1)))*w, y0+h-(v/max)*h]);
      svg.appendChild(svgEl('polyline',{points:pts.map(p=>p.join(',')).join(' '),fill:'none',stroke:'#1F5C45','stroke-width':3,'stroke-linecap':'round','stroke-linejoin':'round'}));
      pts.forEach(([x,y],i)=>{svg.appendChild(svgEl('circle',{cx:x,cy:y,r:5,fill:'#2E8B8B',stroke:'#0A2E38','stroke-width':1})); text(svg,x,y-10,fmt(vals[i]),9); text(svg,x,y0+h+17,labels[i],9);});
    }
    drawDonut(svg){
      const labels=this.data.labels||[]; const vals=(this.data.datasets?.[0]?.data)||[]; const total=vals.reduce((a,b)=>a+b,0)||1;
      let y=40; text(svg,180,22,this.data.datasets?.[0]?.label||'Breakdown',12,'middle','700');
      vals.slice(0,6).forEach((v,i)=>{
        const pct=((v/total)*100).toFixed(1)+'%';
        svg.appendChild(svgEl('rect',{x:42,y:y-11,width:14,height:14,rx:3,fill:COLORS[i%COLORS.length]}));
        text(svg,64,y,`${labels[i]}: ${fmt(v)} (${pct})`,11,'start'); y+=24;
      });
    }
    drawScatter(svg){
      const sets=this.data.datasets||[]; text(svg,180,22,'Avg Stay vs Avg Charges',12,'middle','700');
      const xs=sets.map(s=>s.data?.[0]?.x||0), ys=sets.map(s=>s.data?.[0]?.y||0); const maxX=Math.max(1,...xs)*1.2, maxY=Math.max(1,...ys)*1.2;
      const x0=45,y0=25,w=280,h=160; svg.appendChild(svgEl('line',{x1:x0,y1:y0+h,x2:x0+w,y2:y0+h,stroke:'#9bb79f'})); svg.appendChild(svgEl('line',{x1:x0,y1:y0,x2:x0,y2:y0+h,stroke:'#9bb79f'}));
      sets.forEach((s,i)=>{const p=s.data?.[0]||{x:0,y:0}; const x=x0+(p.x/maxX)*w, y=y0+h-(p.y/maxY)*h; svg.appendChild(svgEl('circle',{cx:x,cy:y,r:9,fill:COLORS[i%COLORS.length]})); text(svg,x,y-13,s.label,9);});
    }
  }
  window.Chart = FallbackChart;
})();

// ── Global inline value label plugin for Chart.js v4 ──
function fmtBarLabel(val, suffix, prefix) {
  // Smart formatter: commas for counts, K for thousands, M for millions, with prefix/suffix
  prefix = prefix || '';
  suffix = suffix || '';
  if (typeof val !== 'number') return prefix + val + suffix;
  // If suffix is 'M' or 'days', value is already in those units
  if (suffix === 'M' || suffix === ' days' || suffix === '%') {
    var s = val % 1 !== 0 ? val.toFixed(1) : val.toString();
    return prefix + s + suffix;
  }
  // Plain count — add commas, use K for >= 1000
  if (Math.abs(val) >= 1000) {
    return prefix + (val / 1000).toFixed(1).replace(/\.0$/, '') + 'K' + suffix;
  }
  return prefix + val.toLocaleString() + suffix;
}

function normalizeChartColor(color) {
  if (typeof color !== 'string') return '';
  return color.trim().toLowerCase();
}

function isYellowChartColor(color) {
  const c = normalizeChartColor(color);
  return [
    '#f2c57c',
    '#c49a6c',
    '#fff1c7',
    '#c8960c',
    '#e8d5b0',
    'rgb(242, 197, 124)',
    'rgb(196, 154, 108)',
    'rgb(255, 241, 199)'
  ].includes(c);
}

function datasetColorAt(dataset, index) {
  const bg = dataset ? dataset.backgroundColor : null;
  return Array.isArray(bg) ? bg[index] : bg;
}

function chartValueTextColor(dataset, index, fallback) {
  return isYellowChartColor(datasetColorAt(dataset, index)) ? '#000000' : fallback;
}

const insideLabel = {
  id: 'insideLabel',
  afterDatasetsDraw(chart) {
    // Only draw number labels on bar charts.
    // This prevents doughnut, pie, line, and scatter charts from getting
    // weird overlapping numbers in the middle of the chart.
    if (chart.options.plugins?.insideLabel?.display === false) return;
    const rootType = chart.config?.type;
    const hasBarDataset = (chart.data.datasets || []).some(ds => (ds.type || rootType) === 'bar');
    if (!hasBarDataset) return;

    const { ctx } = chart;
    const suffix = chart.options._labelSuffix || '';
    const prefix = chart.options._labelPrefix || '';
    const labelOptions = chart.options.plugins?.insideLabel || {};
    const minInsideWidth = labelOptions.minInsideWidth || 40;
    const insideTextColor = labelOptions.insideColor || '#F7FAF9';
    const outsideTextColor = labelOptions.outsideColor || '#000000';
    chart.data.datasets.forEach((dataset, i) => {
      const meta = chart.getDatasetMeta(i);
      const datasetType = dataset.type || rootType;
      if (meta.hidden || datasetType !== 'bar') return;
      meta.data.forEach((bar, j) => {
        const val = dataset.data[j];
        if (!val || !Number.isFinite(bar.x) || !Number.isFinite(bar.y) || !Number.isFinite(bar.base)) return;
        const labelText = fmtBarLabel(val, suffix, prefix);
        ctx.save();
        ctx.font = 'bold 11px sans-serif';
        ctx.textAlign = 'center';
        if (chart.options.indexAxis === 'y') {
          const barW = Math.abs(bar.x - bar.base);
          if (!Number.isFinite(barW)) { ctx.restore(); return; }
          if (barW > minInsideWidth) {
            ctx.fillStyle = chartValueTextColor(dataset, j, insideTextColor);
            ctx.textBaseline = 'middle';
            ctx.fillText(labelText, bar.x - barW / 2, bar.y);
          } else {
            ctx.fillStyle = outsideTextColor;
            ctx.textBaseline = 'middle';
            ctx.fillText(labelText, bar.x + 4, bar.y);
          }
        } else {
          const isStacked = chart.options.scales?.y?.stacked;
          const barH = Math.abs(bar.y - bar.base);
          if (!Number.isFinite(barH)) { ctx.restore(); return; }
          if (isStacked) {
            ctx.font = 'bold 10px sans-serif';
            if (barH > 14) {
              ctx.fillStyle = chartValueTextColor(dataset, j, '#F7FAF9');
              ctx.textBaseline = 'middle';
              ctx.fillText(labelText, bar.x, bar.y + barH / 2);
            }
          } else {
            if (barH > 28) {
              ctx.fillStyle = chartValueTextColor(dataset, j, '#F7FAF9');
              ctx.textBaseline = 'middle';
              ctx.fillText(labelText, bar.x, bar.y + barH / 2);
            } else {
              ctx.fillStyle = '#000000';
              ctx.textBaseline = 'bottom';
              ctx.fillText(labelText, bar.x, bar.y - 4);
            }
          }
        }
        ctx.restore();
      });
    });
  }
};
Chart.register(insideLabel);

// Keep chart plot area soft green


// ── JV point value labels for line and scatter charts ──
// Adds clean numbers to dots and lines without bringing back doughnut gibberish.
function jvPointLabelFormat(value, opts) {
  opts = opts || {};
  const prefix = opts.prefix || '';
  const suffix = opts.suffix || '';
  if (typeof value !== 'number' || !Number.isFinite(value)) return '';
  let out;
  if (opts.moneyK || Math.abs(value) >= 10000) {
    out = (value / 1000).toFixed(value % 1000 === 0 ? 0 : 1).replace(/\.0$/, '') + 'K';
  } else if (Math.abs(value) >= 1000) {
    out = (value / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  } else {
    out = value % 1 === 0 ? value.toLocaleString() : value.toFixed(1).replace(/\.0$/, '');
  }
  return prefix + out + suffix;
}

Chart.register({
  id: 'jvPointValueLabels',
  afterDatasetsDraw(chart) {
    const rootType = chart.config && chart.config.type;
    if (!['line', 'scatter'].includes(rootType)) return;
    const opts = chart.options.plugins && chart.options.plugins.jvPointValueLabels;
    if (opts && opts.display === false) return;

    const { ctx } = chart;
    chart.data.datasets.forEach((dataset, i) => {
      const meta = chart.getDatasetMeta(i);
      if (!meta || meta.hidden) return;
      const datasetType = dataset.type || rootType;
      if (!['line', 'scatter'].includes(datasetType)) return;

      meta.data.forEach((point, j) => {
        if (!point || !Number.isFinite(point.x) || !Number.isFinite(point.y)) return;
        const raw = dataset.data[j];
        const yValue = typeof raw === 'object' ? raw.y : raw;
        if (typeof yValue !== 'number') return;

        const label = jvPointLabelFormat(yValue, opts || {});
        if (!label) return;

        ctx.save();
        ctx.font = '900 11px Nunito, Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'rgba(255,241,199,0.95)';
        ctx.fillStyle = '#000000';
        const offsetX = Array.isArray(dataset.pointLabelOffsetX) ? (dataset.pointLabelOffsetX[j] || 0) : 0;
        const offsetY = Array.isArray(dataset.pointLabelOffsetY) ? (dataset.pointLabelOffsetY[j] || 0) : 0;

        if (datasetType === 'scatter') {
          ctx.textBaseline = 'middle';
          ctx.strokeText(label, point.x + offsetX, point.y + offsetY);
          ctx.fillText(label, point.x + offsetX, point.y + offsetY);
        } else {
          ctx.textBaseline = 'bottom';
          ctx.strokeText(label, point.x + offsetX, point.y - 9 + offsetY);
          ctx.fillText(label, point.x + offsetX, point.y - 9 + offsetY);
        }
        ctx.restore();
      });
    });
  }
});



// ── CGM doughnut labels only ──
// Adds clean numbers to the CGM uptake doughnut without turning labels back on for every doughnut chart.
Chart.register({
  id: 'jvCgmDoughnutLabels',
  afterDatasetsDraw(chart) {
    const canvasId = chart.canvas && chart.canvas.id;
    if (canvasId !== 'cgmUptakeChart') return;
    const meta = chart.getDatasetMeta(0);
    if (!meta || !meta.data || !meta.data.length) return;
    const values = chart.data.datasets[0].data || [];
    const total = values.reduce((a, b) => a + b, 0) || 1;
    const { ctx } = chart;

    meta.data.forEach((arc, index) => {
      const value = values[index];
      const pct = Math.round((value / total) * 100);
      const pos = arc.tooltipPosition();
      const label = value + ' of ' + total + '\n' + pct + '%';
      const lines = label.split('\n');

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.lineWidth = 4;
      ctx.strokeStyle = 'rgba(42,26,64,0.65)';
      ctx.fillStyle = '#F7FAF9';
      ctx.font = '900 13px Nunito, Arial, sans-serif';
      ctx.strokeText(lines[0], pos.x, pos.y - 7);
      ctx.fillText(lines[0], pos.x, pos.y - 7);
      ctx.font = '900 12px Nunito, Arial, sans-serif';
      ctx.strokeText(lines[1], pos.x, pos.y + 9);
      ctx.fillText(lines[1], pos.x, pos.y + 9);
      ctx.restore();
    });

    const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
    const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#2a1a40';
    ctx.font = '900 14px Nunito, Arial, sans-serif';
    ctx.fillText('N = ' + total, centerX, centerY - 4);
    ctx.font = '800 11px Nunito, Arial, sans-serif';
    ctx.fillText('8 weeks', centerX, centerY + 13);
    ctx.restore();
  }
});

Chart.register({
  id: 'chartBg',
  beforeDraw(chart) {
    const {ctx, chartArea} = chart;
    if (!chartArea) return;
    ctx.save();
    ctx.fillStyle = '#C8E3CE';
    ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
    ctx.restore();
  }
});

// ══════════════════════════════════════════════════
// CORE SLICER ENGINE — called every time a filter changes
// ══════════════════════════════════════════════════
function updateDashboard() {
  const borough = document.getElementById('filterBorough').value;
  const year    = parseInt(document.getElementById('filterYear').value);
  const ind     = document.getElementById('filterIndicator').value;

  const s = DB.stats[borough][year];

  setCard('statPrevalence', s.prev, 'Diabetes Inpatient Discharges — ' + BOROUGH_DISPLAY[borough], s.prevChg, s.prevDir);
  setCard('statA1c',        s.a1c,  'Average Length of Stay', s.a1cChg, s.a1cDir);
  setCard('statAmp',        s.amp,  'Total Inpatient Costs', s.ampChg, s.ampDir);
  setCard('statDial',       s.dial, 'Emergency Department Cases', s.dialChg, s.dialDir);

  const unit = (ind === 'amputation') ? 'M' : (ind === 'a1c' ? ' days' : '');
  const prefix = (ind === 'amputation') ? '$' : '';
  const axis = borough === 'all' ? 'y' : 'x';

  if (borough === 'all') {
    const vals = DB[ind].all[year];
    updateBarChart('boroughPrevalenceChart', BOROUGH_LABELS_ALL, vals, indicatorLabel(ind), FOREST_COLORS, axis, unit, prefix);
  } else {
    const vals = DB[ind][borough][year];
    updateBarChart('boroughPrevalenceChart', [BOROUGH_DISPLAY[borough]], vals, indicatorLabel(ind), boroughColor(borough), axis, unit, prefix);
  }

  let raceLabels = [];
  let raceValues = [];
  let raceTitle = '';
  let raceUnit = '';
  let racePrefix = '';

  if (ind === 'prevalence') {
    const raceData = DB.a1cRace[borough];
    raceLabels = RACE_LABELS;
    raceValues = RACE_LABELS.map(r => raceData[r] || 0);
    raceTitle = '🧬 2024 Diabetes Discharges by Race/Ethnicity (Patient Count)';
  } else if (ind === 'a1c') {
    const losData = DB.losRace[borough];
    raceLabels = RACE_LABELS;
    raceValues = RACE_LABELS.map(r => losData[r] || 0);
    raceTitle = '🧬 2024 Average LOS by Race/Ethnicity';
    raceUnit = ' days';
  } else if (ind === 'amputation') {
    const costData = DB.a1cRace[borough];
    raceLabels = RACE_LABELS;
    raceValues = RACE_LABELS.map(r => Math.round((costData[r] || 0) * 2.1));
    raceTitle = '🧬 2024 Total Costs by Race/Ethnicity ($M proxy)';
    raceUnit = 'M';
    racePrefix = '$';
  } else {
    const edData = DB.a1cRace[borough];
    raceLabels = RACE_LABELS;
    raceValues = RACE_LABELS.map(r => Math.round((edData[r] || 0) * 120));
    raceTitle = '🧬 2024 Emergency Department Cases by Race/Ethnicity';
  }
  updateBarChart('a1cRaceChart', raceLabels, raceValues, raceTitle, FOREST_COLORS, 'x', raceUnit, racePrefix, '#0B4F5A');

  let trendData = [];
  let trendTitle = '';
  if (ind === 'prevalence') {
    trendData = DB.trend[borough].prev;
    trendTitle = '2024 Diabetes Discharges by Age Group — ' + BOROUGH_DISPLAY[borough];
  } else if (ind === 'a1c') {
    trendData = DB.losTrend[borough][year];
    trendTitle = '2024 Average Length of Stay by Age Group — ' + BOROUGH_DISPLAY[borough];
  } else if (ind === 'amputation') {
    const money = DB.money[borough];
    trendData = money.costs.map(v => Math.round(v));
    trendTitle = '2024 Total Costs by Age Group — ' + BOROUGH_DISPLAY[borough];
  } else {
    trendData = DB.trend[borough].prev.map(v => Math.round(v * 260));
    trendTitle = '2024 Emergency Department Cases by Age Group — ' + BOROUGH_DISPLAY[borough];
  }
  updateLineChart('trendChart', ['0–17','18–29','30–49','50–69','70+'], trendData, trendTitle);

  const money = DB.money[borough];
  updateGroupedBarChart('ampDialysisChart', money.labels, money.charges, money.costs);

  // ── LOS chart — always shows avg length of stay by borough, filtered by borough
  const LOS_ALL = { bronx:5.9, brooklyn:6.7, manhattan:5.6, queens:5.6, statenisland:5.5 };
  const losLabels = borough === 'all' ? BOROUGH_LABELS_ALL : [BOROUGH_DISPLAY[borough]];
  const losVals   = borough === 'all'
    ? [5.9, 6.7, 5.6, 5.6, 5.5]
    : [LOS_ALL[borough]];
  updateBarChart('losChart', losLabels, losVals, 'Avg Length of Stay (days)', FOREST_COLORS, 'x', ' days', '', '#006064');
  const losTitleEl = document.getElementById('chartTitleLOS');
  if (losTitleEl) { losTitleEl.textContent = '🏥 Avg Length of Stay — ' + BOROUGH_DISPLAY[borough] + ' (days)'; losTitleEl.style.color='#F2C57C'; losTitleEl.style.background='linear-gradient(135deg, #4C315F, #006064)'; losTitleEl.style.padding='0.6rem 1rem'; losTitleEl.style.borderRadius='8px'; losTitleEl.style.margin='-0.5rem -0.5rem 1rem -0.5rem'; }

  // ── ED Share chart — always shows ED % by borough, filtered by borough
  const ED_ALL = { bronx:80.8, brooklyn:82.6, manhattan:55.5, queens:72.4, statenisland:70.9 };
  const edLabels = borough === 'all' ? BOROUGH_LABELS_ALL : [BOROUGH_DISPLAY[borough]];
  const edVals   = borough === 'all'
    ? [80.8, 82.6, 55.5, 72.4, 70.9]
    : [ED_ALL[borough]];
  updateBarChart('edShareChart', edLabels, edVals, 'ED Share %', FOREST_COLORS, 'x', '%', '', '#006064');
  const edTitleEl = document.getElementById('chartTitleED');
  if (edTitleEl) { edTitleEl.textContent = '🚨 Emergency Department Share % — ' + BOROUGH_DISPLAY[borough]; edTitleEl.style.color='#F2C57C'; edTitleEl.style.background='linear-gradient(135deg, #4C315F, #006064)'; edTitleEl.style.padding='0.6rem 1rem'; edTitleEl.style.borderRadius='8px'; edTitleEl.style.margin='-0.5rem -0.5rem 1rem -0.5rem'; }

  highlightTableRow(borough);
  var t1=document.getElementById('chartTitle1'); t1.textContent='📊 '+indicatorLabel(ind)+' — '+BOROUGH_DISPLAY[borough]; t1.style.color='#F2C57C'; t1.style.background='#2a1a40'; t1.style.padding='0.6rem 1rem'; t1.style.borderRadius='8px'; t1.style.margin='-0.5rem -0.5rem 1rem -0.5rem';
  var t3=document.getElementById('chartTitle3'); t3.textContent='📈 '+trendTitle; t3.style.color='#FFF1C7';
  var t4=document.getElementById('chartTitle4'); t4.textContent='💵 Total Charges vs Total Costs — '+BOROUGH_DISPLAY[borough]+' Boroughs (2024)'; t4.style.color='#F2C57C'; t4.style.background='linear-gradient(135deg, #4C315F, #006064)'; t4.style.padding='0.6rem 1rem'; t4.style.borderRadius='8px'; t4.style.margin='-0.5rem -0.5rem 1rem -0.5rem';

  const raceTitleEl = document.querySelector('#a1cRaceChart')?.closest('.chart-card')?.querySelector('h3');
  if (raceTitleEl) { raceTitleEl.textContent = raceTitle; raceTitleEl.style.color='#F2C57C'; raceTitleEl.style.background='#2a1a40'; raceTitleEl.style.padding='0.6rem 1rem'; raceTitleEl.style.borderRadius='8px'; raceTitleEl.style.margin='-0.5rem -0.5rem 1rem -0.5rem'; }
  updateDashboardMap(borough, year, ind);
}

function setCard(id, value, label, change, dir) {
  const el = document.getElementById(id);
  if (!el) return;
  el.querySelector('.stat-value').textContent = value;
  el.querySelector('.stat-label').textContent = label;
  const chgEl = el.querySelector('.stat-change');
  chgEl.textContent = change;
  chgEl.className = 'stat-change ' + dir;
}

function makeTickFmt(pre, suf) {
  return function(v) {
    if (suf === 'M' || suf === ' days' || suf === '%') return pre + v + suf;
    // Plain count axis — add commas
    if (Math.abs(v) >= 1000) return pre + (v/1000).toFixed(1).replace(/\.0$/, '') + 'K' + suf;
    return pre + v.toLocaleString() + suf;
  };
}

function updateBarChart(canvasId, labels, data, datasetLabel, colors, indexAxis, unit, prefix, tickColor) {
  prefix = prefix || '';
  var suffix = unit || '';
  var canvas = document.getElementById(canvasId);
  if (!canvas) return;

  // Destroy and recreate — only safe way to switch indexAxis in Chart.js v4
  if (CHARTS[canvasId]) { CHARTS[canvasId].destroy(); delete CHARTS[canvasId]; }

  var valueAxis = indexAxis === 'y' ? 'x' : 'y';
  var catAxis   = indexAxis === 'y' ? 'y' : 'x';
  var bgColors  = Array.isArray(colors) ? colors.slice(0, data.length) : colors;

  var scalesConfig = {};
  scalesConfig[valueAxis] = {
    beginAtZero: true,
    grid: { display: false },
    ticks: (suffix || prefix) ? { color: '#000000', callback: makeTickFmt(prefix, suffix) } : { color: '#000000' }
  };
  scalesConfig[catAxis] = { grid: { display: false }, ticks: tickColor ? { color: tickColor, font: { weight: '700' } } : { color: '#000000', font: { weight: '700' } } };

  CHARTS[canvasId] = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{ label: datasetLabel, data: data, backgroundColor: bgColors, borderRadius: 8 }]
    },
    options: {
      indexAxis: indexAxis,
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      _labelSuffix: suffix,
      _labelPrefix: prefix,
      plugins: { legend: { display: false }, insideLabel: { display: true } },
      scales: scalesConfig
    }
  });
}

function updateLineChart(canvasId, labels, data, datasetLabel) {
  var canvas = document.getElementById(canvasId);
  if (!canvas) return;

  // Destroy and recreate to avoid stale y-axis scale across indicator switches
  if (CHARTS[canvasId]) { CHARTS[canvasId].destroy(); delete CHARTS[canvasId]; }

  CHARTS[canvasId] = new Chart(canvas, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: datasetLabel,
        data: data,
        borderColor: '#12334A',
        backgroundColor: 'rgba(11,79,90,0.10)',
        pointBorderColor: '#12334A',
        pointHoverBackgroundColor: '#4C315F',
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: '#C8960C'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, ticks: { color: '#000000' }, grid: { display: false } },
        x: { grid: { display: false }, ticks: { color: '#006064', font: { weight: '700' } } }
      }
    }
  });
}

function updateGroupedBarChart(canvasId, labels, chargeData, costData) {
  var canvas = document.getElementById(canvasId);
  if (!canvas) return;

  if (CHARTS[canvasId]) { CHARTS[canvasId].destroy(); delete CHARTS[canvasId]; }

  CHARTS[canvasId] = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        { label: 'Total Charges ($M)', data: chargeData, backgroundColor: '#0B4F5A', borderRadius: 6 },
        { label: 'Total Costs ($M)',   data: costData,   backgroundColor: '#4C315F', borderRadius: 6 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      _labelSuffix: 'M',
      _labelPrefix: '$',
      plugins: { legend: { position: 'top', labels: { color: '#000000', font: { weight: '700' } } }, insideLabel: { display: true } },
      scales: {
        y: { beginAtZero: true, ticks: { color: '#000000', callback: function(v){ return '$'+v+'M'; } }, grid: { display: false } },
        x: { grid: { display: false }, ticks: { color: '#006064', font: { weight: '700' } } }
      }
    }
  });
}

function highlightTableRow(borough) {
  document.querySelectorAll('.borough-row').forEach(r => r.style.background = '');
  if (borough !== 'all') {
    const row = document.getElementById('row-' + borough);
    if (row) row.style.background = '#d4edda';
  }
}

function indicatorLabel(ind) {
  return {prevalence:'Diabetes Inpatient Discharges',a1c:'Average Length of Stay',amputation:'Total Costs ($M)',dialysis:'Emergency Department Cases'}[ind];
}

function boroughColor(b) {
  return {bronx:'#12334A',brooklyn:'#0B4F5A',manhattan:'#C8960C',queens:'#4C315F',statenisland:'#4C315F'}[b]||'#0B4F5A';
}

// =========================================================
// ✅ A1C PAGE DATA
// Uses:
// - NYC DOHMH Epi Data Brief No. 146, Table 3, A1C Registry 2022
// - NYC DOHMH Epi Data Brief No. 146, Table 5, SPARCS 2022 LEA data
// - 2025 JAMA / Healio national HbA1c control article
// - Bronx food-insecurity HbA1c article
// =========================================================
const A1C_BOROUGH_ORDER = ['bronx','brooklyn','manhattan','queens','statenisland'];
const A1C_BOROUGH_LABELS = {
  all:'All NYC Boroughs',
  bronx:'The Bronx',
  brooklyn:'Brooklyn',
  manhattan:'Manhattan',
  queens:'Queens',
  statenisland:'Staten Island'
};

const A1C_BOROUGH_DATA = {
  all: {
    label:'All NYC Boroughs', prevalence:11.3, prevalenceCount:794000,
    poor:13.9, poorCount:86768, totalA1c:622518,
    distribution:[49.6,24.4,12.1,13.9],
    amputations:3184, ampRate:43.7, dialysis:9412
  },
  bronx: {
    label:'The Bronx', prevalence:15.1, prevalenceCount:162000,
    poor:16.5, poorCount:19712, totalA1c:119371,
    distribution:[47.1,23.8,12.6,16.5],
    amputations:830, ampRate:74.5, dialysis:2183
  },
  brooklyn: {
    label:'Brooklyn', prevalence:11.6, prevalenceCount:240000,
    poor:14.4, poorCount:25805, totalA1c:178764,
    distribution:[49.5,23.9,12.2,14.4],
    amputations:870, ampRate:40.7, dialysis:2876
  },
  manhattan: {
    label:'Manhattan', prevalence:7.9, prevalenceCount:113000,
    poor:13.1, poorCount:11380, totalA1c:87051,
    distribution:[51.7,23.7,11.6,13.1],
    amputations:519, ampRate:36.3, dialysis:1641
  },
  queens: {
    label:'Queens', prevalence:11.7, prevalenceCount:241000,
    poor:13.0, poorCount:26116, totalA1c:201196,
    distribution:[49.2,25.6,12.2,13.0],
    amputations:790, ampRate:36.9, dialysis:2198
  },
  statenisland: {
    label:'Staten Island', prevalence:9.0, prevalenceCount:38000,
    poor:10.4, poorCount:3692, totalA1c:35658,
    distribution:[54.8,24.2,10.7,10.4],
    amputations:175, ampRate:38.5, dialysis:514
  }
};

const A1C_TREND_LABELS = ['2018','2019','2020','2021','2022'];
const A1C_TREND_DATA = {
  bronx:[30.1,30.4,30.8,29.6,28.4],
  brooklyn:[26.8,27.1,27.4,26.2,25.1],
  manhattan:[20.1,20.4,20.8,20.1,19.7],
  queens:[25.4,25.7,26.0,25.3,24.8],
  statenisland:[22.0,22.3,22.6,21.8,21.2]
};

const A1C_TREND_LABEL_OFFSETS = {
  bronx: { x:[0,0,0,0,0], y:[0,0,0,0,0] },
  brooklyn: { x:[0,0,0,0,0], y:[0,0,0,0,0] },
  manhattan: { x:[0,0,0,0,0], y:[0,0,0,0,0] },
  queens: { x:[0,0,0,0,0], y:[0,0,0,0,0] },
  statenisland: { x:[0,0,0,0,0], y:[0,0,0,0,0] }
};

const A1C_NATIONAL_CONTROL = {
  labels:['2013-14','2015-16','2017-20','2021-23'],
  age20_44:[43.0,60.5,57.4,37.1],
  age45_64:[46.0,44.0,48.0,47.0],
  age65:[55.0,53.0,58.0,54.0],
  meanYoungA1c:[7.56,7.66,7.43,8.51]
};

const A1C_BRONX_FOOD_RACE = {
  labels:['Hispanic','Non-Hisp. Black','Missing','Non-Hisp. White','Asian/PI','AI/AN'],
  values:[46.6,27.9,19.2,3.4,2.8,0.2]
};

const CDC_DIABETES_KEY_ESTIMATES = [
  { label:'Diagnosed diabetes', value:9.8, low:8.5, high:11.3, note:'29.1M people diagnosed in 2023' },
  { label:'Undiagnosed diabetes', value:3.7, low:2.9, high:4.7, note:'11.0M adults undiagnosed' },
  { label:'Total adult diabetes', value:13.5, low:12.0, high:15.2, note:'40.1M U.S. adults, age-adjusted' }
];

const CDC_STATE_PREVALENCE = [
  { state:'U.S. median', value:10.3, low:9.5, high:10.8, trend:'N/A' },
  { state:'New York', value:9.3, low:8.8, high:10.0, trend:'Increasing' },
  { state:'New Jersey', value:9.1, low:8.3, high:9.9, trend:'Increasing' },
  { state:'California', value:10.5, low:9.7, high:11.3, trend:'Increasing' },
  { state:'Florida', value:10.0, low:9.0, high:11.0, trend:'Increasing' },
  { state:'Texas', value:12.0, low:10.9, high:13.3, trend:'Increasing' },
  { state:'Louisiana', value:14.5, low:13.3, high:15.7, trend:'Increasing' },
  { state:'Mississippi', value:14.7, low:13.4, high:16.2, trend:'Increasing' },
  { state:'West Virginia', value:15.0, low:13.8, high:16.2, trend:'Increasing' }
];

const CDC_INCIDENCE_RATES = [
  { label:'Total', value:6.2, low:5.3, high:7.3 },
  { label:'Metropolitan', value:6.1, low:5.5, high:6.8 },
  { label:'Nonmetropolitan', value:7.6, low:6.2, high:9.4 },
  { label:'White NH', value:5.1, low:4.5, high:5.7 },
  { label:'Black NH', value:9.1, low:7.1, high:11.5 },
  { label:'Hispanic', value:9.0, low:7.3, high:11.0 },
  { label:'Asian NH', value:8.2, low:5.7, high:11.6 }
];

const cdcConfidenceIntervalPlugin = {
  id:'cdcConfidenceIntervalPlugin',
  afterDatasetsDraw(chart) {
    const ci = chart.options.plugins && chart.options.plugins.cdcCI;
    if (!ci || !ci.items) return;
    const meta = chart.getDatasetMeta(0);
    const xScale = chart.scales.x;
    const yScale = chart.scales.y;
    const ctx = chart.ctx;
    ctx.save();
    ctx.strokeStyle = ci.color || '#2a1a40';
    ctx.fillStyle = ci.color || '#2a1a40';
    ctx.lineWidth = 2;
    meta.data.forEach((bar, i) => {
      const item = ci.items[i];
      if (!item) return;
      const xLow = xScale.getPixelForValue(item.low);
      const xHigh = xScale.getPixelForValue(item.high);
      const y = bar.y;
      ctx.beginPath();
      ctx.moveTo(xLow, y);
      ctx.lineTo(xHigh, y);
      ctx.moveTo(xLow, y - 6);
      ctx.lineTo(xLow, y + 6);
      ctx.moveTo(xHigh, y - 6);
      ctx.lineTo(xHigh, y + 6);
      ctx.stroke();
    });
    ctx.restore();
  }
};

const cdcGroupedConfidenceIntervalPlugin = {
  id:'cdcGroupedConfidenceIntervalPlugin',
  afterDatasetsDraw(chart) {
    const ci = chart.options.plugins && chart.options.plugins.cdcGroupedCI;
    if (!ci || !ci.items) return;
    const yScale = chart.scales.y;
    const ctx = chart.ctx;
    ctx.save();
    ctx.strokeStyle = ci.color || '#555555';
    ctx.fillStyle = ci.color || '#555555';
    ctx.lineWidth = 1.6;
    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);
      const items = ci.items[datasetIndex] || [];
      meta.data.forEach((bar, i) => {
        const item = items[i];
        if (!item || typeof item.low !== 'number' || typeof item.high !== 'number') return;
        const yLow = yScale.getPixelForValue(item.low);
        const yHigh = yScale.getPixelForValue(item.high);
        const x = bar.x;
        ctx.beginPath();
        ctx.moveTo(x, yLow);
        ctx.lineTo(x, yHigh);
        ctx.moveTo(x - 6, yLow);
        ctx.lineTo(x + 6, yLow);
        ctx.moveTo(x - 6, yHigh);
        ctx.lineTo(x + 6, yHigh);
        ctx.stroke();
      });
    });
    ctx.restore();
  }
};

const a1cReferenceLinePlugin = {
  id:'a1cReferenceLinePlugin',
  afterDraw(chart, args, opts) {
    if (!opts || opts.display === false || typeof opts.value !== 'number') return;
    const yScale = chart.scales.y;
    const area = chart.chartArea;
    if (!yScale || !area) return;
    const y = yScale.getPixelForValue(opts.value);
    const ctx = chart.ctx;
    ctx.save();
    ctx.strokeStyle = opts.color || '#1F5C45';
    ctx.lineWidth = opts.lineWidth || 2;
    ctx.setLineDash(opts.dash || []);
    ctx.beginPath();
    ctx.moveTo(area.left, y);
    ctx.lineTo(area.right, y);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = opts.labelColor || '#000000';
    ctx.font = opts.font || '900 12px Nunito, Arial, sans-serif';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillText(opts.label || (opts.value + '%'), area.left - 6, y);
    ctx.restore();
  }
};

function a1cFmtCount(value) {
  return Number(value).toLocaleString();
}

function a1cSelectedKeys(selection) {
  return selection === 'all' ? A1C_BOROUGH_ORDER : [selection];
}

function a1cDestroy(id) {
  if (CHARTS[id]) {
    CHARTS[id].destroy();
    delete CHARTS[id];
  }
}

function a1cSet(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function initA1CPage() {
  if (!window.Chart || !document.getElementById('a1cBoroughChart')) return;
  updateA1CPage();
}

function updateA1CPage() {
  if (!window.Chart) return;
  const borough = document.getElementById('a1cBoroughFilter')?.value || 'all';
  const indicator = document.getElementById('a1cIndicatorFilter')?.value || 'a1c';
  const row = A1C_BOROUGH_DATA[borough] || A1C_BOROUGH_DATA.all;
  const label = A1C_BOROUGH_LABELS[borough] || 'All NYC Boroughs';
  const keys = a1cSelectedKeys(borough);
  const colors = ['#1F5C45','#006064','#12334A','#0B4F5A','#4C315F'];

  a1cSet('a1cKpiPrevalence', row.prevalence.toFixed(1) + '%');
  a1cSet('a1cKpiPrevalenceLabel', 'Diabetes prevalence — ' + label);
  a1cSet('a1cKpiPrevalenceNote', a1cFmtCount(row.prevalenceCount) + ' adults in 2022');
  a1cSet('a1cKpiPoor', row.poor.toFixed(1) + '%');
  a1cSet('a1cKpiPoorLabel', 'A1C > 9% — ' + label);
  a1cSet('a1cKpiPoorNote', a1cFmtCount(row.poorCount) + ' of ' + a1cFmtCount(row.totalA1c) + ' A1C results');
  a1cSet('a1cKpiAmp', a1cFmtCount(row.amputations));
  a1cSet('a1cKpiAmpLabel', 'Diabetes-related amputations');
  a1cSet('a1cKpiAmpNote', row.ampRate + ' per 100,000 adults');
  a1cSet('a1cKpiDialysis', a1cFmtCount(row.dialysis));
  a1cSet('a1cKpiDialysisLabel', 'Diabetes-related dialysis cases');
  a1cSet('a1cKpiDialysisNote', borough === 'all' ? 'Citywide total' : label + ' dashboard indicator');

  const showNational = indicator === 'national';
  const titlePrefix = indicator === 'distribution' ? 'A1C Range Distribution' : indicator === 'complications' ? 'A1C Complications Context' : indicator === 'national' ? 'National HbA1c Context' : 'A1C > 9% Poor Control';
  a1cSet('a1cBoroughTitle', '🧪 ' + titlePrefix + ' — ' + label);
  a1cSet('a1cDistributionTitle', '📊 A1C Range Distribution — ' + label);
  a1cSet('a1cTrendTitle', showNational ? '📈 National HbA1c Control Trend' : '📈 A1C > 9% Trend — ' + label);
  a1cSet('a1cComplicationTitle', '🦵 Amputations vs Dialysis — ' + label + ' (2022)');
  a1cSet('a1cFoodTitle', borough === 'bronx' ? '🧪 A1C > 9% by Race/Ethnicity — The Bronx' : '🧪 Bronx Article Evidence: Poor A1C by Race/Ethnicity');

  a1cDestroy('a1cBoroughChart');
  CHARTS.a1cBoroughChart = new Chart(document.getElementById('a1cBoroughChart'), {
    type:'bar',
    data:{
      labels: keys.map(k => A1C_BOROUGH_DATA[k].label),
      datasets:[{ label:'A1C > 9%', data:keys.map(k => A1C_BOROUGH_DATA[k].poor), backgroundColor:colors, borderRadius:8 }]
    },
    options:{ indexAxis: borough === 'all' ? 'y' : 'x', responsive:true, maintainAspectRatio:false, animation:false, _labelSuffix:'%', plugins:{legend:{display:false},insideLabel:{display:true}}, scales:{x:{beginAtZero:true,ticks:{callback:v=>v+'%',color:'#000000',font:{weight:'700'}},grid:{display:false}},y:{beginAtZero:true,ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}} }
  });

  a1cDestroy('a1cDistributionChart');
  CHARTS.a1cDistributionChart = new Chart(document.getElementById('a1cDistributionChart'), {
    type:'bar',
    data:{
      labels: keys.map(k => A1C_BOROUGH_DATA[k].label),
      datasets:[
        {label:'<7.0% controlled', data:keys.map(k => A1C_BOROUGH_DATA[k].distribution[0]), backgroundColor:'#12334A'},
        {label:'7.0-7.9%', data:keys.map(k => A1C_BOROUGH_DATA[k].distribution[1]), backgroundColor:'#0B4F5A'},
        {label:'8.0-9.0%', data:keys.map(k => A1C_BOROUGH_DATA[k].distribution[2]), backgroundColor:'#C8960C'},
        {label:'>9.0%', data:keys.map(k => A1C_BOROUGH_DATA[k].distribution[3]), backgroundColor:'#560000'}
      ]
    },
    options:{responsive:true,maintainAspectRatio:false,animation:false,plugins:{legend:{position:'bottom',labels:{boxWidth:12,color:'#000000',font:{weight:'700'}}}},scales:{x:{stacked:true,ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}},y:{stacked:true,max:100,ticks:{callback:v=>v+'%',color:'#000000',font:{weight:'700'}},grid:{display:false}}}}
  });

  a1cDestroy('a1cTrendChart');
  const trendDatasets = (borough === 'all' ? A1C_BOROUGH_ORDER : [borough]).map((k, i) => ({
    label:A1C_BOROUGH_DATA[k].label,
    data:A1C_TREND_DATA[k],
    borderColor:colors[i % colors.length],
    backgroundColor:colors[i % colors.length],
    pointBackgroundColor:'#F2C57C',
    pointBorderColor:colors[i % colors.length],
    pointRadius:4,
    tension:0.3,
    pointLabelOffsetX:A1C_TREND_LABEL_OFFSETS[k]?.x || [],
    pointLabelOffsetY:A1C_TREND_LABEL_OFFSETS[k]?.y || []
  }));
  CHARTS.a1cTrendChart = new Chart(document.getElementById('a1cTrendChart'), {
    type:'line',
    data:{ labels:A1C_TREND_LABELS, datasets:trendDatasets },
    options:{responsive:true,maintainAspectRatio:false,animation:false,layout:{padding:{top:18,left:8,right:10,bottom:0}},plugins:{legend:{position:'bottom',labels:{color:'#000000',font:{weight:'700'}}}},scales:{y:{min:18,max:32,ticks:{stepSize:1,callback:v=>[18,20,25,30].includes(v) ? v+'%' : '',color:'#000000',font:{weight:'700'}},grid:{display:false}},x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}}}
  });

  a1cDestroy('a1cComplicationChart');
  CHARTS.a1cComplicationChart = new Chart(document.getElementById('a1cComplicationChart'), {
    type:'bar',
    data:{ labels:keys.map(k => A1C_BOROUGH_DATA[k].label), datasets:[
      {label:'Amputations', data:keys.map(k => A1C_BOROUGH_DATA[k].amputations), backgroundColor:'#1F5C45', borderRadius:8},
      {label:'Dialysis cases', data:keys.map(k => A1C_BOROUGH_DATA[k].dialysis), backgroundColor:'#72C7E8', borderRadius:8}
    ]},
    options:{responsive:true,maintainAspectRatio:false,animation:false,plugins:{legend:{position:'top',labels:{color:'#000000',font:{weight:'700'}}}},scales:{y:{beginAtZero:true,ticks:{color:'#000000',font:{weight:'700'},callback:v=>Number(v).toLocaleString()},grid:{display:false}},x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}}}
  });

  a1cDestroy('a1cNationalAgeChart');
  CHARTS.a1cNationalAgeChart = new Chart(document.getElementById('a1cNationalAgeChart'), {
    type:'line',
    data:{ labels:A1C_NATIONAL_CONTROL.labels, datasets:[
      {label:'Age 20-44: HbA1c <7%', data:A1C_NATIONAL_CONTROL.age20_44, borderColor:'#560000', backgroundColor:'#560000', pointRadius:5, tension:0.25},
      {label:'Age 45-64: HbA1c <7%', data:A1C_NATIONAL_CONTROL.age45_64, borderColor:'#0B4F5A', backgroundColor:'#0B4F5A', pointRadius:5, tension:0.25},
      {label:'Age 65+: HbA1c <7%', data:A1C_NATIONAL_CONTROL.age65, borderColor:'#C8960C', backgroundColor:'#C8960C', pointRadius:5, tension:0.25, pointLabelOffsetX:[0,0,22,0], pointLabelOffsetY:[0,0,9,0]}
    ]},
    options:{responsive:true,maintainAspectRatio:false,animation:false,plugins:{legend:{position:'bottom',labels:{color:'#000000',font:{weight:'700'}}}},scales:{y:{min:35,max:65,ticks:{stepSize:5,callback:v=>v+'%',color:'#000000',font:{weight:'700'}},grid:{display:false}},x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}}}
  });

  a1cDestroy('a1cCdcKeyChart');
  CHARTS.a1cCdcKeyChart = new Chart(document.getElementById('a1cCdcKeyChart'), {
    type:'bar',
    data:{ labels:CDC_DIABETES_KEY_ESTIMATES.map(r => r.label), datasets:[{
      label:'Percentage',
      data:CDC_DIABETES_KEY_ESTIMATES.map(r => r.value),
      backgroundColor:['#1F5C45','#C8960C','#560000'],
      borderRadius:8
    }]},
    plugins:[cdcConfidenceIntervalPlugin],
    options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,animation:false,_labelSuffix:'%',plugins:{legend:{display:false},insideLabel:{display:true,minInsideWidth:18},cdcCI:{items:CDC_DIABETES_KEY_ESTIMATES,color:'#2a1a40'},tooltip:{callbacks:{label:function(ctx){const r=CDC_DIABETES_KEY_ESTIMATES[ctx.dataIndex];return r.value+'% (95% CI '+r.low+'-'+r.high+') · '+r.note;}}}},scales:{x:{beginAtZero:true,max:18,ticks:{callback:v=>v+'%',color:'#000000',font:{weight:'700'}},grid:{display:false}},y:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}}}
  });

  a1cDestroy('a1cStateCompareChart');
  CHARTS.a1cStateCompareChart = new Chart(document.getElementById('a1cStateCompareChart'), {
    type:'bar',
    data:{ labels:CDC_STATE_PREVALENCE.map(r => r.state), datasets:[{
      label:'Diagnosed diabetes prevalence',
      data:CDC_STATE_PREVALENCE.map(r => r.value),
      backgroundColor:CDC_STATE_PREVALENCE.map(r => r.state === 'New York' ? '#F2C57C' : (r.state === 'U.S. median' ? '#2a1a40' : '#0B4F5A')),
      borderColor:CDC_STATE_PREVALENCE.map(r => r.state === 'New York' ? '#2a1a40' : '#0B4F5A'),
      borderWidth:CDC_STATE_PREVALENCE.map(r => r.state === 'New York' ? 2 : 0),
      borderRadius:8
    }]},
    plugins:[cdcConfidenceIntervalPlugin],
    options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,animation:false,_labelSuffix:'%',plugins:{legend:{display:false},insideLabel:{display:true},cdcCI:{items:CDC_STATE_PREVALENCE,color:'#2a1a40'},tooltip:{callbacks:{label:function(ctx){const r=CDC_STATE_PREVALENCE[ctx.dataIndex];return r.value+'% (95% CI '+r.low+'-'+r.high+') · Trend: '+r.trend;}}}},scales:{x:{beginAtZero:true,max:18,ticks:{callback:v=>v+'%',color:'#000000',font:{weight:'700'}},grid:{display:false}},y:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}}}
  });

  a1cDestroy('a1cIncidenceRateChart');
  CHARTS.a1cIncidenceRateChart = new Chart(document.getElementById('a1cIncidenceRateChart'), {
    type:'bar',
    data:{ labels:CDC_INCIDENCE_RATES.map(r => r.label), datasets:[{
      label:'Rate per 1,000',
      data:CDC_INCIDENCE_RATES.map(r => r.value),
      backgroundColor:['#2a1a40','#0B4F5A','#C8960C','#1F5C45','#560000','#006064','#4C315F'],
      borderRadius:8
    }]},
    plugins:[cdcConfidenceIntervalPlugin],
    options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,animation:false,plugins:{legend:{display:false},insideLabel:{display:true},cdcCI:{items:CDC_INCIDENCE_RATES,color:'#2a1a40'},tooltip:{callbacks:{label:function(ctx){const r=CDC_INCIDENCE_RATES[ctx.dataIndex];return r.value+' per 1,000 (95% CI '+r.low+'-'+r.high+')';}}}},scales:{x:{beginAtZero:true,max:13,ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}},y:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}}}
  });

  a1cDestroy('a1cFoodChart');
  CHARTS.a1cFoodChart = new Chart(document.getElementById('a1cFoodChart'), {
    type:'bar',
    data:{ labels:A1C_BRONX_FOOD_RACE.labels, datasets:[{label:'Poor A1C share', data:A1C_BRONX_FOOD_RACE.values, backgroundColor:['#006064','#1F5C45','#6A1B9A','#C8960C','#4C315F','#0B4F5A'], borderRadius:8}] },
    options:{responsive:true,maintainAspectRatio:false,animation:false,_labelSuffix:'%',plugins:{legend:{display:false},insideLabel:{display:true}},scales:{y:{beginAtZero:true,max:55,ticks:{callback:v=>v+'%',color:'#000000',font:{weight:'700'}},grid:{display:false}},x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}}}
  });

  const tbody = document.getElementById('a1cTableBody');
  if (tbody) {
    tbody.innerHTML = A1C_BOROUGH_ORDER.map(k => {
      const r = A1C_BOROUGH_DATA[k];
      const active = borough === k ? ' style="background:#fff1c7;font-weight:900;"' : '';
      return '<tr' + active + '><td>' + r.label + '</td><td>' + r.prevalence.toFixed(1) + '%</td><td>' + r.poor.toFixed(1) + '%</td><td>' + a1cFmtCount(r.totalA1c) + '</td><td>' + a1cFmtCount(r.amputations) + '</td><td>' + r.ampRate + '</td><td>' + a1cFmtCount(r.dialysis) + '</td></tr>';
    }).join('');
  }
}

// =========================================================
// ✅ APP LOGIC
// Handles:
// - page navigation
// - filters
// - KPI updates
// - chart refreshes
// =========================================================

// PAGE NAVIGATION
let isRestoringPageFromHash = false;
const HUB_RETURN_STATE_KEY = 'jvHubReturnPageState';

function rememberPageState(id) {
  if (isRestoringPageFromHash || !id) return;
  const nextHash = '#' + encodeURIComponent(id);
  if (window.location.hash !== nextHash) {
    window.history.pushState({ page: id }, '', nextHash);
  }
}

function rememberDiabetesTopicState(topic) {
  if (isRestoringPageFromHash || !topic) return;
  rememberPageState('diabetes-' + topic);
}

function rememberExternalReturnState(id) {
  if (!id) return;
  try {
    window.sessionStorage.setItem(HUB_RETURN_STATE_KEY, id);
  } catch (err) {
    console.warn('Could not save return state:', err);
  }
  rememberPageState(id);
}

function getCurrentHubReturnState() {
  const activePage = document.querySelector('.page.active');
  const activePageId = activePage && activePage.id ? activePage.id.replace(/^page-/, '') : '';
  const activeDiabetesTopic = document.querySelector('[data-diabetes-topic].active');

  if (activePageId === 'diabetes' && activeDiabetesTopic && activeDiabetesTopic.dataset.diabetesTopic) {
    return 'diabetes-' + activeDiabetesTopic.dataset.diabetesTopic;
  }

  return activePageId || 'home';
}

function restorePageFromHash() {
  let rawHash = decodeURIComponent(window.location.hash.replace(/^#/, '')).trim();
  if (!rawHash) {
    try {
      rawHash = window.sessionStorage.getItem(HUB_RETURN_STATE_KEY) || '';
      if (rawHash) window.sessionStorage.removeItem(HUB_RETURN_STATE_KEY);
    } catch (err) {
      console.warn('Could not read return state:', err);
    }
  }
  if (!rawHash) return;

  isRestoringPageFromHash = true;
  try {
    if (rawHash.startsWith('diabetes-')) {
      setDiabetesTopic(rawHash.replace('diabetes-', ''));
    } else {
      showPage(rawHash);
    }
  } finally {
    isRestoringPageFromHash = false;
  }
}

function showPage(id) {
  const targetPage = document.getElementById('page-' + id);
  if (!targetPage) {
    console.warn('Page not found:', id);
    return;
  }
  rememberPageState(id);
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.style.display = '';
  });
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  targetPage.classList.add('active');
  const navEl = document.getElementById('nav-' + id);
  if (navEl) navEl.classList.add('active');
  const diabetesPages = new Set([
    'diabetes',
    'dashboard',
    'sparcs2024',
    'a1c',
    'epi2025',
    'stories',
    'prdr',
    'drugs'
  ]);
  if (!navEl && (diabetesPages.has(id) || id.indexOf('research') === 0 || id.indexOf('prdr') === 0)) {
    const diabetesNav = document.getElementById('nav-diabetes');
    if (diabetesNav) diabetesNav.classList.add('active');
  }
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  targetPage.scrollIntoView({ block: 'start' });
  if (id==='dashboard'   && !CHARTS['boroughPrevalenceChart']) { initDiabetisCharts(); }
  if (id==='dashboard') { setTimeout(updateDashboard, 180); }
  if (id==='a1c') { setTimeout(initA1CPage, 90); }
  if (id==='epi2025') { setTimeout(initEpi2025Page, 90); }
  if (id==='nyc'         && !CHARTS['nycBoroughBar'])          { initNYCCharts(); }
  if (id==='projects'    && !CHARTS['payorChart'])             { initProjectsCharts(); }
  if (id==='drugs'       && !CHARTS['drugTop10Chart'])         { initDrugCharts(); }
  if (id==='researchStory4-food-insecurity-poor-a1c-control-in-the-br') { initFoodInsecurityCharts(); }
  if (id==='news'        && document.getElementById('newsGrid').style.display!=='block') { initNewsPage(); }
  if (id==='blog'        && document.getElementById('blogPosts').innerHTML==='')         { initBlogPage(); }
  if (id==='sparcs2024'  && !SPARCS_CHARTS['sparcs-borough-bar'])  { initSPARCS2024Charts(); }
  if (id==='sparcs2024'  && SPARCS_CHARTS['sparcs-borough-bar'])  { switchAge(document.querySelector('.age-tab.active-tab')?.id?.replace('tab-','') || '0-17'); }
  if (id.indexOf('prdr') === 0) { initPRDRCharts(); }
  ensureResearchStoryNavigation(targetPage);
  setupArticleFilters(targetPage);
}

function goToResearchArticles() {
  if (typeof setDiabetesTopic === 'function') {
    setDiabetesTopic('research');
    return;
  }
  showPage('stories');
}

function goToHispanicsPage() {
  if (typeof setDiabetesTopic === 'function') {
    setDiabetesTopic('hispanics');
    return;
  }
  showPage('prdr');
}

function ensureResearchStoryNavigation(root = document) {
  const toolbars = root.querySelectorAll('.research-story-page .research-story-toolbar');
  toolbars.forEach(toolbar => {
    let researchButton = Array.from(toolbar.querySelectorAll('button, a')).find(item =>
      item.textContent.trim().toLowerCase().includes('research articles')
    );

    if (!researchButton) {
      researchButton = document.createElement('button');
      researchButton.className = 'prdr-action';
      toolbar.prepend(researchButton);
    }

    researchButton.textContent = '← Back to Research Articles';
    researchButton.setAttribute('type', 'button');
    researchButton.removeAttribute('href');
    researchButton.onclick = goToResearchArticles;

    if (!toolbar.querySelector('[data-main-hub-link="true"]')) {
      const mainHubButton = document.createElement('button');
      mainHubButton.className = 'prdr-action';
      mainHubButton.type = 'button';
      mainHubButton.dataset.mainHubLink = 'true';
      mainHubButton.textContent = '⌂ Main Data Hub';
      mainHubButton.onclick = () => showPage('home');
      toolbar.appendChild(mainHubButton);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    ensureResearchStoryNavigation();
    setupArticleFilters();
    restorePageFromHash();
  });
} else {
  ensureResearchStoryNavigation();
  setupArticleFilters();
  restorePageFromHash();
}

document.addEventListener('click', event => {
  const link = event.target.closest && event.target.closest('a');
  if (!link) return;

  const href = (link.getAttribute('href') || '').trim();
  if (!href || href.startsWith('#') || href.toLowerCase().startsWith('javascript:')) return;

  const activeDiabetesTopic = document.querySelector('[data-diabetes-topic].active');
  const activeTopicName = activeDiabetesTopic ? activeDiabetesTopic.dataset.diabetesTopic : '';
  const isExternalOrDocumentLink =
    href.toLowerCase().endsWith('.pdf') ||
    href.toLowerCase().startsWith('http') ||
    href.toLowerCase().startsWith('articles/');

  const isResearchLink =
    link.classList.contains('research-card-link') ||
    Boolean(link.closest('.research-story-toolbar')) ||
    link.textContent.trim().toLowerCase().includes('open article');

  const isHispanicsLink =
    Boolean(link.closest('#page-prdr')) ||
    Boolean(link.closest('.article-link-row')) ||
    Boolean(link.closest('.ref-item')) ||
    Boolean(link.closest('[data-diabetes-live-host]') && activeTopicName === 'hispanics');

  if (!isExternalOrDocumentLink || (!isResearchLink && !isHispanicsLink)) return;
  const returnState = isHispanicsLink ? 'diabetes-hispanics' : getCurrentHubReturnState();
  rememberExternalReturnState(returnState);
}, true);

function setDiabetesTopic(topic) {
  const realPageMap = {
    dashboard: 'dashboard',
    sparcs2024: 'sparcs2024',
    a1c: 'a1c',
    epi2025: 'epi2025',
    research: 'stories',
    hispanics: 'prdr',
    rx: 'drugs'
  };

  if (realPageMap[topic]) {
    rememberDiabetesTopicState(topic);
    embedDiabetesRealPage(topic, realPageMap[topic]);
    return;
  }

  const targetPanel = document.querySelector(`[data-diabetes-panel="${topic}"]`);
  if (!targetPanel) {
    console.warn('Diabetes topic not found:', topic);
    return;
  }
  rememberDiabetesTopicState(topic);

  const diabetesPage = document.getElementById('page-diabetes');
  if (!diabetesPage.classList.contains('active')) {
    showPage('diabetes');
  }

  document.querySelectorAll('[data-diabetes-panel]').forEach(panel => {
    panel.classList.toggle('active', panel === targetPanel);
  });
  document.querySelectorAll('[data-diabetes-topic]').forEach(button => {
    button.classList.toggle('active', button.dataset.diabetesTopic === topic);
  });
  syncDiabetesSubmenus(topic);

  targetPanel.scrollIntoView({ block: 'start', behavior: 'smooth' });
  if (topic === 'cdcDemo') {
    setTimeout(initCdcStyleDemo, 120);
  }
}

function syncDiabetesSubmenus(topic) {
  document.querySelectorAll('[data-diabetes-submenu]').forEach(menu => {
    const isOpen = menu.dataset.diabetesSubmenu === topic;
    menu.hidden = !isOpen;
    menu.classList.toggle('open', isOpen);
  });
  if (topic !== 'cdcDemo') {
    document.querySelectorAll('[data-cdc-subtopic]').forEach(button => {
      button.classList.remove('active');
    });
  }
}

function setCdcSubtopic(subtopic) {
  setDiabetesTopic('cdcDemo');
  document.querySelectorAll('[data-cdc-subtopic]').forEach(button => {
    button.classList.toggle('active', button.dataset.cdcSubtopic === subtopic);
  });
  const target = document.getElementById('cdc-' + subtopic);
  if (target) {
    setTimeout(() => {
      target.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }, 160);
  }
}

function embedDiabetesRealPage(topic, pageId) {
  const sourcePage = document.getElementById('page-' + pageId);
  const liveHost = document.getElementById('diabetesLivePageHost');
  const livePanel = document.querySelector('[data-diabetes-panel="live"]');
  const diabetesPage = document.getElementById('page-diabetes');

  if (!sourcePage || !liveHost || !livePanel || !diabetesPage) {
    showPage(pageId);
    return;
  }

  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.style.display = '';
  });
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  diabetesPage.classList.add('active');
  const diabetesNav = document.getElementById('nav-diabetes');
  if (diabetesNav) diabetesNav.classList.add('active');

  document.querySelectorAll('[data-diabetes-panel]').forEach(panel => {
    panel.classList.toggle('active', panel === livePanel);
  });
  document.querySelectorAll('[data-diabetes-topic]').forEach(button => {
    button.classList.toggle('active', button.dataset.diabetesTopic === topic);
  });
  syncDiabetesSubmenus(topic);

  clearEmbeddedDiabetesCharts();
  liveHost.innerHTML = `<div id="page-${pageId}" class="diabetes-embedded-page">${sourcePage.innerHTML}</div>`;
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  diabetesPage.scrollIntoView({ block: 'start' });

  setTimeout(() => {
    setupArticleFilters(liveHost);
    if (pageId === 'dashboard') {
      initDiabetisCharts();
      updateDashboard();
    }
    if (pageId === 'sparcs2024') {
      initSPARCS2024Charts();
      switchAge(document.querySelector('.age-tab.active-tab')?.id?.replace('tab-', '') || '0-17');
    }
    if (pageId === 'a1c') { initA1CPage(); }
    if (pageId === 'epi2025') { initEpi2025Page(); }
    if (pageId === 'drugs') { initDrugCharts(); }
    if (pageId === 'prdr') { initPRDRCharts(); }
  }, 120);
}

function clearEmbeddedDiabetesCharts() {
  if (typeof CHARTS !== 'undefined') {
    Object.keys(CHARTS).forEach(key => {
      if (CHARTS[key] && typeof CHARTS[key].destroy === 'function') {
        try { CHARTS[key].destroy(); } catch (err) { console.warn('Chart cleanup skipped:', key, err); }
      }
      delete CHARTS[key];
    });
  }
  if (typeof SPARCS_CHARTS !== 'undefined') {
    Object.keys(SPARCS_CHARTS).forEach(key => {
      if (SPARCS_CHARTS[key] && typeof SPARCS_CHARTS[key].destroy === 'function') {
        try { SPARCS_CHARTS[key].destroy(); } catch (err) { console.warn('SPARCS chart cleanup skipped:', key, err); }
      }
      delete SPARCS_CHARTS[key];
    });
  }
}

function normalizeArticleFilterText(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function getArticleFilterCards(panel) {
  const selector = panel.dataset.cardSelector || '.story-card, .prdr-article-row-card';
  const section = panel.closest('.container') || panel.closest('.diabetes-embedded-page') || document;
  return Array.from(section.querySelectorAll(selector));
}

function getArticleCardSearchText(card) {
  const linkText = Array.from(card.querySelectorAll('a[href], button[onclick]'))
    .map(element => [
      element.getAttribute('href') || '',
      element.getAttribute('onclick') || '',
      element.getAttribute('aria-label') || ''
    ].join(' '))
    .join(' ');

  const explicitKeywords = card.dataset.filterKeywords || '';
  const combined = `${card.textContent || ''} ${linkText} ${explicitKeywords}`;
  const lowerCombined = combined.toLowerCase();
  const aliases = [];

  if (lowerCombined.includes('sparcs') || lowerCombined.includes('pqi') || lowerCombined.includes('iqp6-vdi4')) {
    aliases.push('sparcs pqi hospital inpatient discharge complications amputation lower extremity');
  }
  if (lowerCombined.includes('amputation') || lowerCombined.includes('lea')) {
    aliases.push('amputation lower extremity lea complication');
  }
  if (lowerCombined.includes('renal') || lowerCombined.includes('kidney')) {
    aliases.push('renal kidney ckd dialysis esrd');
  }
  if (lowerCombined.includes('a1c') || lowerCombined.includes('hba1c')) {
    aliases.push('a1c hba1c blood sugar glycemic control');
  }
  if (lowerCombined.includes('food') || lowerCombined.includes('insecurity')) {
    aliases.push('food insecurity nutrition bronx');
  }
  if (lowerCombined.includes('cgm') || lowerCombined.includes('continuous glucose')) {
    aliases.push('cgm continuous glucose monitor technology');
  }
  if (lowerCombined.includes('incidence') || lowerCombined.includes('prevalence')) {
    aliases.push('incidence prevalence epidemiology trend');
  }

  return normalizeArticleFilterText(`${combined} ${aliases.join(' ')}`);
}

function getArticleCardYears(card) {
  const explicitYears = (card.dataset.filterYear || '')
    .split(/[,\s]+/)
    .map(year => year.trim())
    .filter(Boolean);

  if (explicitYears.length > 0) return explicitYears;

  const headingText = normalizeArticleFilterText(card.querySelector('h3, h2')?.textContent || '');
  const headingYears = headingText.match(/\b(19|20)\d{2}\b/g);
  if (headingYears && headingYears.length > 0) return headingYears;

  const linkText = Array.from(card.querySelectorAll('a[href]'))
    .map(link => link.getAttribute('href') || '')
    .join(' ');
  const linkYears = linkText.match(/\b(19|20)\d{2}\b/g);
  return linkYears || [];
}

function articleCardMatchesYear(card, year) {
  if (!year) return true;
  return getArticleCardYears(card).includes(year);
}

function getArticleTopicTerms(value) {
  return String(value || '')
    .split('|')
    .map(term => normalizeArticleFilterText(term))
    .filter(Boolean);
}

function applyArticleFilter(panel) {
  const search = normalizeArticleFilterText(panel.querySelector('[data-filter-search]')?.value);
  const year = normalizeArticleFilterText(panel.querySelector('[data-filter-year]')?.value);
  const topicValue = panel.querySelector('[data-filter-topic]')?.value || '';
  const topicTerms = getArticleTopicTerms(topicValue);
  const cards = getArticleFilterCards(panel);
  let shown = 0;

  cards.forEach(card => {
    const text = getArticleCardSearchText(card);
    const matchesSearch = !search || text.includes(search);
    const matchesYear = articleCardMatchesYear(card, year);
    const matchesTopic = topicTerms.length === 0 || topicTerms.some(term => text.includes(term));
    const isVisible = matchesSearch && matchesYear && matchesTopic;

    card.classList.toggle('article-filter-hidden', !isVisible);
    if (isVisible) shown += 1;
  });

  const count = panel.querySelector('[data-filter-count]');
  if (count) {
    count.textContent = shown === cards.length
      ? `Showing all ${cards.length} articles`
      : `Showing ${shown} of ${cards.length} articles`;
  }

  const empty = panel.querySelector('[data-filter-empty]');
  if (empty) empty.classList.toggle('is-visible', shown === 0);
}

function resetArticleFilter(panel) {
  panel.querySelectorAll('[data-filter-search]').forEach(input => { input.value = ''; });
  panel.querySelectorAll('[data-filter-year], [data-filter-topic]').forEach(select => { select.value = ''; });
  applyArticleFilter(panel);
}

function setupArticleFilters(root = document) {
  root.querySelectorAll('[data-article-filter]').forEach(panel => applyArticleFilter(panel));
}

document.addEventListener('input', event => {
  if (!event.target.matches('[data-filter-search]')) return;
  const panel = event.target.closest('[data-article-filter]');
  if (panel) applyArticleFilter(panel);
});

document.addEventListener('change', event => {
  if (!event.target.matches('[data-filter-year], [data-filter-topic]')) return;
  const panel = event.target.closest('[data-article-filter]');
  if (panel) applyArticleFilter(panel);
});

document.addEventListener('click', event => {
  const resetButton = event.target.closest('[data-filter-reset]');
  if (!resetButton) return;
  const panel = resetButton.closest('[data-article-filter]');
  if (panel) resetArticleFilter(panel);
});

// ══════════════════════════════════════════════════
// CDC-STYLE PROTOTYPE — free-tool chart/table demo
// Uses Chart.js with local data to mimic the interaction
// patterns in federal public-health dashboards.
// ══════════════════════════════════════════════════

const CDC_RACE_DATA = [
  { group:'ai-an', label:'American Indian or Alaska Native, non-Hispanic', short:'American Indian/Alaska Native', value:16.0, low:12.1, high:20.6, tier:'major' },
  { group:'black', label:'Black, non-Hispanic', short:'Black, non-Hispanic', value:12.5, low:11.6, high:13.4, tier:'major' },
  { group:'nhpi', label:'Native Hawaiian or Other Pacific Islander, non-Hispanic', short:'Native Hawaiian/Pacific Islander', value:11.7, low:7.4, high:17.2, tier:'major' },
  { group:'asian', label:'Asian, non-Hispanic', short:'Asian, non-Hispanic', value:9.2, low:8.2, high:10.4, tier:'major' },
  { group:'asian', label:'Asian Indian, non-Hispanic', short:'Asian Indian', value:10.8, low:8.3, high:13.7, tier:'sub' },
  { group:'asian', label:'Chinese, non-Hispanic', short:'Chinese', value:7.1, low:5.2, high:9.3, tier:'sub' },
  { group:'asian', label:'Filipino, non-Hispanic', short:'Filipino', value:12.2, low:9.4, high:15.6, tier:'sub' },
  { group:'asian', label:'Japanese, non-Hispanic', short:'Japanese', value:6.8, low:4.1, high:10.5, tier:'sub' },
  { group:'asian', label:'Korean, non-Hispanic', short:'Korean', value:6.1, low:3.8, high:9.1, tier:'sub' },
  { group:'asian', label:'Other Asian, non-Hispanic', short:'Other Asian', value:8.9, low:5.9, high:12.8, tier:'sub' },
  { group:'asian', label:'Vietnamese, non-Hispanic', short:'Vietnamese', value:6.4, low:3.7, high:10.0, tier:'sub' },
  { group:'hispanic', label:'Hispanic', short:'Hispanic (overall)', value:10.3, low:9.4, high:11.1, tier:'major' },
  { group:'hispanic', label:'Central American', short:'Central American', value:7.3, low:5.6, high:9.4, tier:'sub' },
  { group:'hispanic', label:'Cuban', short:'Cuban', value:9.0, low:6.5, high:12.1, tier:'sub' },
  { group:'hispanic', label:'Dominican', short:'Dominican', value:9.4, low:5.9, high:14.2, tier:'sub' },
  { group:'hispanic', label:'Mexican or Mexican American', short:'Mexican or Mexican American', value:11.1, low:9.9, high:12.3, tier:'sub' },
  { group:'hispanic', label:'Other Hispanic, Latino, or Spanish', short:'Other Hispanic, Latino, or Spanish', value:7.2, low:5.5, high:9.2, tier:'sub' },
  { group:'hispanic', label:'Puerto Rican', short:'Puerto Rican', value:13.3, low:11.0, high:15.9, tier:'sub' },
  { group:'hispanic', label:'South American', short:'South American', value:5.0, low:3.3, high:7.1, tier:'sub' },
  { group:'white', label:'White, non-Hispanic', short:'White, non-Hispanic', value:8.5, low:8.2, high:8.8, tier:'major' }
];

const CDC_ESTIMATE_DATA = {
  ageAdjusted: {
    title: 'Age-Adjusted Prevalence of Diagnosed, Undiagnosed, and Total Diabetes Among Adults Aged 18 Years or Older, United States, 2021-2023',
    unit: 'Percentage',
    suffix: '%',
    characteristics: ['total', 'sex', 'race', 'education'],
    groups: {
      total: {
        label: 'Total',
        rows: [
          { label:'Total', diagnosed:{ value:9.8, low:8.5, high:11.3 }, undiagnosed:{ value:3.7, low:2.9, high:4.7 }, total:{ value:13.5, low:12.0, high:15.2 } }
        ]
      },
      sex: {
        label: 'Sex',
        rows: [
          { label:'Men', diagnosed:{ value:10.6, low:9.4, high:12.0 }, undiagnosed:{ value:4.3, low:3.0, high:6.0 }, total:{ value:14.9, low:13.2, high:16.8 } },
          { label:'Women', diagnosed:{ value:9.1, low:7.6, high:10.9 }, undiagnosed:{ value:3.3, low:2.5, high:4.3 }, total:{ value:12.4, low:10.3, high:14.7 } }
        ]
      },
      race: {
        label: 'Race and Ethnicity',
        rows: [
          { label:'White, non-Hispanic', diagnosed:{ value:8.2, low:7.0, high:9.6 }, undiagnosed:{ value:3.0, low:2.2, high:4.1 }, total:{ value:11.2, low:9.4, high:13.2 } },
          { label:'Black, non-Hispanic', diagnosed:{ value:15.6, low:12.3, high:19.6 }, undiagnosed:{ value:5.2, low:2.8, high:9.5 }, total:{ value:20.7, low:16.1, high:26.3 } },
          { label:'Asian, non-Hispanic', diagnosed:{ value:7.9, low:5.6, high:11.2 }, undiagnosed:{ value:6.6, low:3.5, high:12.3 }, total:{ value:14.5, low:10.5, high:19.8 } },
          { label:'Hispanic', diagnosed:{ value:12.9, low:9.8, high:16.8 }, undiagnosed:{ value:4.2, low:2.7, high:6.5 }, total:{ value:17.1, low:13.5, high:21.5 } }
        ]
      },
      education: {
        label: 'Education',
        rows: [
          { label:'Less than high school', diagnosed:{ value:16.9, low:13.5, high:20.9 }, undiagnosed:{ value:6.3, low:3.7, high:10.6 }, total:{ value:23.2, low:18.3, high:28.9 } },
          { label:'High school', diagnosed:{ value:10.8, low:8.6, high:13.5 }, undiagnosed:{ value:3.3, low:2.4, high:4.7 }, total:{ value:14.1, low:11.6, high:17.2 } },
          { label:'More than high school', diagnosed:{ value:8.3, low:7.1, high:9.7 }, undiagnosed:{ value:3.7, low:2.6, high:5.2 }, total:{ value:12.0, low:10.2, high:14.1 } }
        ]
      }
    }
  },
  crude: {
    title: 'Estimated Crude Prevalence of Diagnosed Diabetes, Undiagnosed Diabetes, and Total Diabetes Among Adults Aged 18 Years or Older, United States, 2021-2023',
    unit: 'Percentage',
    suffix: '%',
    characteristics: ['total', 'age', 'sex', 'race'],
    groups: {
      total: {
        label: 'Total',
        rows: [
          { label:'Total', diagnosed:{ value:10.9, low:9.3, high:12.7 }, undiagnosed:{ value:4.0, low:3.3, high:5.0 }, total:{ value:14.9, low:13.1, high:16.9 } }
        ]
      },
      age: {
        label: 'Age in Years',
        rows: [
          { label:'18-44', diagnosed:{ value:2.9, low:2.2, high:4.0 }, undiagnosed:{ value:1.7, low:1.0, high:2.8 }, total:{ value:4.6, low:3.5, high:6.1 } },
          { label:'45-64', diagnosed:{ value:15.5, low:13.4, high:17.8 }, undiagnosed:{ value:5.1, low:3.5, high:7.4 }, total:{ value:20.6, low:17.8, high:23.8 } },
          { label:'≥65', diagnosed:{ value:21.3, low:17.2, high:25.9 }, undiagnosed:{ value:7.5, low:6.0, high:9.4 }, total:{ value:28.8, low:24.0, high:34.0 } }
        ]
      },
      sex: {
        label: 'Sex',
        rows: [
          { label:'Men', diagnosed:{ value:11.4, low:10.0, high:13.0 }, undiagnosed:{ value:4.5, low:3.3, high:6.2 }, total:{ value:15.9, low:14.2, high:17.8 } },
          { label:'Women', diagnosed:{ value:10.4, low:8.4, high:12.9 }, undiagnosed:{ value:3.6, low:2.8, high:4.5 }, total:{ value:14.0, low:11.5, high:16.9 } }
        ]
      },
      race: {
        label: 'Race and Ethnicity',
        rows: [
          { label:'White, non-Hispanic', diagnosed:{ value:9.8, low:8.4, high:11.5 }, undiagnosed:{ value:3.6, low:2.6, high:5.0 }, total:{ value:13.4, low:11.2, high:16.0 } },
          { label:'Black, non-Hispanic', diagnosed:{ value:16.6, low:12.5, high:21.7 }, undiagnosed:{ value:5.3, low:2.8, high:9.8 }, total:{ value:21.9, low:16.4, high:28.7 } },
          { label:'Asian, non-Hispanic', diagnosed:{ value:7.5, low:4.7, high:11.7 }, undiagnosed:{ value:6.4, low:3.7, high:10.7 }, total:{ value:13.9, low:10.6, high:17.9 } },
          { label:'Hispanic', diagnosed:{ value:11.0, low:7.2, high:16.6 }, undiagnosed:{ value:4.0, low:2.5, high:6.4 }, total:{ value:15.0, low:10.2, high:21.5 } }
        ]
      }
    }
  },
  number: {
    title: 'Estimated Number of Adults Aged 18 Years or Older with Diagnosed Diabetes, Undiagnosed Diabetes, and Total Diabetes, United States, 2023',
    unit: 'Number in Millions',
    suffix: 'M',
    characteristics: ['total', 'age', 'sex', 'race'],
    groups: {
      total: {
        label: 'Total',
        rows: [
          { label:'Total', diagnosed:{ value:28.8, low:24.6, high:32.9 }, undiagnosed:{ value:11.0, low:8.8, high:13.1 }, total:{ value:39.8, low:35.2, high:44.3 } }
        ]
      },
      age: {
        label: 'Age in Years',
        rows: [
          { label:'18-44', diagnosed:{ value:3.7, low:2.6, high:4.7 }, undiagnosed:{ value:2.1, low:1.2, high:3.1 }, total:{ value:5.8, low:4.4, high:7.2 } },
          { label:'45-64', diagnosed:{ value:12.6, low:10.9, high:14.2 }, undiagnosed:{ value:4.3, low:2.9, high:5.7 }, total:{ value:16.9, low:14.6, high:19.2 } },
          { label:'≥65', diagnosed:{ value:12.6, low:10.2, high:15.0 }, undiagnosed:{ value:4.5, low:3.6, high:5.4 }, total:{ value:17.1, low:14.3, high:19.8 } }
        ]
      },
      sex: {
        label: 'Sex',
        rows: [
          { label:'Men', diagnosed:{ value:15.0, low:13.2, high:16.8 }, undiagnosed:{ value:6.0, low:4.3, high:7.7 }, total:{ value:21.0, low:18.9, high:23.1 } },
          { label:'Women', diagnosed:{ value:13.8, low:11.1, high:16.6 }, undiagnosed:{ value:5.0, low:3.9, high:6.0 }, total:{ value:18.8, low:15.5, high:22.0 } }
        ]
      },
      race: {
        label: 'Race and Ethnicity',
        rows: [
          { label:'White, non-Hispanic', diagnosed:{ value:16.2, low:14.2, high:18.1 }, undiagnosed:{ value:6.0, low:4.2, high:7.7 }, total:{ value:22.2, low:18.6, high:25.7 } },
          { label:'Black, non-Hispanic', diagnosed:{ value:5.2, low:3.9, high:6.6 }, undiagnosed:{ value:1.7, low:0.7, high:2.7 }, total:{ value:6.9, low:5.1, high:8.8 } },
          { label:'Asian, non-Hispanic', diagnosed:{ value:1.3, low:0.8, high:1.8 }, undiagnosed:{ value:1.2, low:0.7, high:1.7 }, total:{ value:2.5, low:2.0, high:3.1 } },
          { label:'Hispanic', diagnosed:{ value:5.2, low:3.2, high:7.2 }, undiagnosed:{ value:1.8, low:1.0, high:2.6 }, total:{ value:7.0, low:4.7, high:9.4 } }
        ]
      }
    }
  }
};
const CDC_TREND_DATA = [
  { period:'2001-2004', diagnosed:7.1, undiagnosed:4.1, total:11.2 },
  { period:'2003-2006', diagnosed:7.4, undiagnosed:3.8, total:11.2 },
  { period:'2005-2008', diagnosed:7.6, undiagnosed:4.2, total:11.8 },
  { period:'2007-2010', diagnosed:7.9, undiagnosed:4.4, total:12.3 },
  { period:'2009-2012', diagnosed:8.1, undiagnosed:4.0, total:12.1 },
  { period:'2011-2014', diagnosed:8.7, undiagnosed:3.7, total:12.4 },
  { period:'2013-2016', diagnosed:9.4, undiagnosed:4.1, total:13.5 },
  { period:'2015-2018', diagnosed:9.8, undiagnosed:4.3, total:14.1 },
  { period:'2017-2020', diagnosed:10.1, undiagnosed:4.0, total:14.1 },
  { period:'2021-2023', diagnosed:9.8, undiagnosed:3.7, total:13.5 }
];

const CDC_DEMOGRAPHIC_DATA = {
  race: {
    title: 'Race and Ethnicity',
    rows: [
      { label:'American Indian or Alaska Native', total:15.7, men:11.5, women:18.9 },
      { label:'Asian, non-Hispanic, Overall', total:9.7, men:10.8, women:8.7 },
      { label:'Black, non-Hispanic', total:12.2, men:11.9, women:12.4 },
      { label:'Hispanic, Overall', total:11.8, men:12.3, women:11.3 },
      { label:'White, non-Hispanic', total:7.1, men:7.9, women:6.4 }
    ]
  },
  education: {
    title: 'Education Level',
    rows: [
      { label:'Less than High School', total:13.3, men:12.7, women:13.8 },
      { label:'High School', total:9.9, men:10.5, women:9.5 },
      { label:'More than High School', total:7.0, men:7.8, women:6.3 }
    ]
  },
  poverty: {
    title: 'Family Income to Poverty Ratio',
    rows: [
      { label:'Less than 100% FPL', total:13.0, men:12.1, women:13.5 },
      { label:'100%-299% FPL', total:10.8, men:11.8, women:10.0 },
      { label:'300%-499% FPL', total:8.0, men:8.9, women:7.3 },
      { label:'500% FPL or More', total:5.5, men:6.4, women:4.4 }
    ]
  },
  metro: {
    title: 'Metropolitan Residence',
    rows: [
      { label:'Metropolitan', total:8.3, men:9.0, women:7.7 },
      { label:'Nonmetropolitan', total:10.0, men:10.2, women:9.8 }
    ]
  }
};

const cdcDemoState = {
  group: 'ai-an',
  view: 'chart',
  estimateType: 'ageAdjusted',
  estimateCharacteristic: 'total',
  estimateView: 'chart',
  trendView: 'chart',
  demographic: 'race',
  demographicView: 'chart'
};

function registerCdcPlugin() {
  if (!window.Chart || window.__cdcCiPluginRegistered) return;
  if (typeof cdcConfidenceIntervalPlugin !== 'undefined') {
    Chart.register(cdcConfidenceIntervalPlugin);
  }
  if (typeof cdcGroupedConfidenceIntervalPlugin !== 'undefined') {
    Chart.register(cdcGroupedConfidenceIntervalPlugin);
  }
  window.__cdcCiPluginRegistered = true;
}

function getCdcRaceRows() {
  if (cdcDemoState.group === 'all') return CDC_RACE_DATA;
  return CDC_RACE_DATA.filter(row => row.group === cdcDemoState.group);
}

function setCdcDemoGroup(group) {
  cdcDemoState.group = group;
  document.querySelectorAll('[data-cdc-group]').forEach(button => {
    button.classList.toggle('active', button.dataset.cdcGroup === group);
  });
  renderCdcRaceTable();
  updateCdcRaceChart();
}

function setCdcDemoView(view) {
  cdcDemoState.view = view;
  document.querySelectorAll('[data-cdc-view]').forEach(button => {
    button.classList.toggle('active', button.dataset.cdcView === view);
  });
  const chartView = document.getElementById('cdcRaceChartView');
  const tableView = document.getElementById('cdcRaceTableView');
  const visualCard = document.querySelector('.cdc-visual-card');
  if (chartView) chartView.hidden = view !== 'chart';
  if (tableView) tableView.hidden = view !== 'table';
  if (visualCard) visualCard.classList.toggle('table-open', view === 'table');
  if (view === 'chart' && CHARTS.cdcRaceChart) {
    setTimeout(() => CHARTS.cdcRaceChart.resize(), 60);
  }
}

function renderCdcRaceTable() {
  const body = document.getElementById('cdcRaceTableBody');
  if (!body) return;
  body.innerHTML = CDC_RACE_DATA.map(row => `
    <tr class="${row.tier === 'sub' ? 'cdc-subrow' : 'cdc-major-row'}">
      <td>${row.label}</td>
      <td>${row.value.toFixed(1)} (${row.low.toFixed(1)}-${row.high.toFixed(1)})</td>
    </tr>
  `).join('');
}

function updateCdcRaceChart() {
  const canvas = document.getElementById('cdcRaceChart');
  if (!canvas || !window.Chart) return;
  registerCdcPlugin();
  const rows = getCdcRaceRows();
  const axisMax = Math.max(10, Math.ceil((Math.max(...rows.map(row => row.high)) + 1) / 2) * 2);
  if (CHARTS.cdcRaceChart) {
    CHARTS.cdcRaceChart.destroy();
    delete CHARTS.cdcRaceChart;
  }
  CHARTS.cdcRaceChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: rows.map(row => row.short),
      datasets: [{
        label: 'Total percentage',
        data: rows.map(row => row.value),
        backgroundColor: '#2f80b7',
        borderColor: '#1b5f86',
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        cdcCI: {
          items: rows.map(row => ({ low: row.low, high: row.high })),
          color: '#20262d'
        },
        legend: { display: false },
        tooltip: {
          callbacks: {
            label(context) {
              const row = rows[context.dataIndex];
              return `${row.value.toFixed(1)}% (95% CI ${row.low.toFixed(1)}-${row.high.toFixed(1)})`;
            }
          }
        }
      },
      scales: {
        x: {
          min: 0,
          max: axisMax,
          title: { display: true, text: 'Percentage', color: '#20262d', font: { weight: 'bold' } },
          grid: { color: '#e7ecef', borderDash: [3, 4] },
          ticks: { color: '#20262d' }
        },
        y: {
          ticks: { color: '#20262d', font: { size: rows.length > 6 ? 11 : 12, weight: 'bold' } },
          grid: { display: false }
        }
      }
    }
  });
}

function cdcValueText(value, suffix) {
  return suffix === 'M' ? `${value.toFixed(1)}M` : `${value.toFixed(1)}%`;
}

function cdcMetricText(metric) {
  if (!metric) return '';
  return `${metric.value.toFixed(1)} (${metric.low.toFixed(1)}-${metric.high.toFixed(1)})`;
}

function cdcMetricLabel(metric, suffix) {
  if (!metric) return '';
  return suffix === 'M' ? `${metric.value.toFixed(1)}M (${metric.low.toFixed(1)}-${metric.high.toFixed(1)}M)` : `${metric.value.toFixed(1)}% (${metric.low.toFixed(1)}-${metric.high.toFixed(1)}%)`;
}

function getCdcEstimateCharacteristicKeys(estimate) {
  if (!estimate) return [];
  return estimate.characteristics || Object.keys(estimate.groups || {});
}

function getCdcEstimateRows() {
  const estimate = CDC_ESTIMATE_DATA[cdcDemoState.estimateType] || CDC_ESTIMATE_DATA.ageAdjusted;
  const keys = getCdcEstimateCharacteristicKeys(estimate);
  const fallbackKey = keys[0] || 'total';
  const group = estimate.groups[cdcDemoState.estimateCharacteristic] || estimate.groups[fallbackKey] || estimate.groups.total;
  return group?.rows || [];
}

function getCdcEstimateTableGroups(estimate) {
  const keys = getCdcEstimateCharacteristicKeys(estimate);
  return keys
    .map(key => ({ key, group: estimate.groups[key] }))
    .filter(item => item.group && Array.isArray(item.group.rows) && item.group.rows.length);
}

function syncCdcEstimateControls() {
  const estimate = CDC_ESTIMATE_DATA[cdcDemoState.estimateType] || CDC_ESTIMATE_DATA.ageAdjusted;
  const availableGroups = estimate.groups || {};
  const characteristicKeys = getCdcEstimateCharacteristicKeys(estimate);
  const firstKey = characteristicKeys[0] || 'total';
  if (!availableGroups[cdcDemoState.estimateCharacteristic] || !characteristicKeys.includes(cdcDemoState.estimateCharacteristic)) {
    cdcDemoState.estimateCharacteristic = availableGroups.total && characteristicKeys.includes('total') ? 'total' : firstKey;
  }
  document.querySelectorAll('[data-cdc-estimate-type]').forEach(button => {
    button.classList.toggle('active', button.dataset.cdcEstimateType === cdcDemoState.estimateType);
  });
  document.querySelectorAll('[data-cdc-estimate-characteristic]').forEach(button => {
    const key = button.dataset.cdcEstimateCharacteristic;
    const isAvailable = characteristicKeys.includes(key) && !!availableGroups[key];
    button.hidden = !isAvailable;
    button.disabled = !isAvailable;
    button.setAttribute('aria-hidden', String(!isAvailable));
    button.classList.toggle('active', key === cdcDemoState.estimateCharacteristic && isAvailable);
  });
}

function setCdcEstimateType(type) {
  cdcDemoState.estimateType = type;
  syncCdcEstimateControls();
  renderCdcEstimateTable();
  updateCdcEstimateChart();
}

function setCdcEstimateCharacteristic(characteristic) {
  const estimate = CDC_ESTIMATE_DATA[cdcDemoState.estimateType] || CDC_ESTIMATE_DATA.ageAdjusted;
  const keys = getCdcEstimateCharacteristicKeys(estimate);
  if (!keys.includes(characteristic) || !estimate.groups[characteristic]) return;
  cdcDemoState.estimateCharacteristic = characteristic;
  syncCdcEstimateControls();
  renderCdcEstimateTable();
  updateCdcEstimateChart();
}

function setCdcEstimateView(view) {
  cdcDemoState.estimateView = view;
  document.querySelectorAll('[data-cdc-estimate-view]').forEach(button => {
    button.classList.toggle('active', button.dataset.cdcEstimateView === view);
  });
  const chartView = document.getElementById('cdcEstimateChartView');
  const tableView = document.getElementById('cdcEstimateTableView');
  const visualCard = document.querySelector('.cdc-estimate-visual-card');
  if (chartView) chartView.hidden = view !== 'chart';
  if (tableView) tableView.hidden = view !== 'table';
  if (visualCard) visualCard.classList.toggle('table-open', view === 'table');
  if (view === 'chart' && CHARTS.cdcEstimateChart) {
    setTimeout(() => CHARTS.cdcEstimateChart.resize(), 60);
  }
}

function renderCdcEstimateTable() {
  const body = document.getElementById('cdcEstimateTableBody');
  if (!body) return;
  const estimate = CDC_ESTIMATE_DATA[cdcDemoState.estimateType] || CDC_ESTIMATE_DATA.ageAdjusted;
  const headRow = document.querySelector('#cdcEstimateTableView thead tr');
  const measureLabel = estimate.unit === 'Number in Millions' ? 'Number in Millions (95% CI)' : 'Percentage (95% CI)';
  if (headRow) {
    headRow.innerHTML = `
      <th>Characteristic</th>
      <th>Diagnosed Diabetes<br>${measureLabel}</th>
      <th>Undiagnosed Diabetes<br>${measureLabel}</th>
      <th>Total Diabetes<br>${measureLabel}</th>
    `;
  }
  body.innerHTML = getCdcEstimateTableGroups(estimate).map(({ group }) => {
    const sectionHeader = group.label === 'Total' ? '' : `
      <tr class="cdc-section-row">
        <td colspan="4">${group.label}</td>
      </tr>
    `;
    const groupRows = group.rows.map(row => `
      <tr class="${row.label === 'Total' ? 'cdc-major-row' : ''}">
        <td>${row.label}</td>
        <td>${cdcMetricText(row.diagnosed)}</td>
        <td>${cdcMetricText(row.undiagnosed)}</td>
        <td>${cdcMetricText(row.total)}</td>
      </tr>
    `).join('');
    return sectionHeader + groupRows;
  }).join('');
}

function updateCdcEstimateChart() {
  const canvas = document.getElementById('cdcEstimateChart');
  if (!canvas || !window.Chart) return;
  registerCdcPlugin();
  const estimate = CDC_ESTIMATE_DATA[cdcDemoState.estimateType] || CDC_ESTIMATE_DATA.ageAdjusted;
  const rows = getCdcEstimateRows();
  const maxValue = Math.max(...rows.flatMap(row => [row.diagnosed.high, row.undiagnosed.high, row.total.high]));
  const axisMax = Math.max(10, Math.ceil((maxValue + 3) / 5) * 5);
  if (CHARTS.cdcEstimateChart) {
    CHARTS.cdcEstimateChart.destroy();
    delete CHARTS.cdcEstimateChart;
  }
  CHARTS.cdcEstimateChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: rows.map(row => row.label),
      datasets: [
        { label:'Diagnosed Diabetes', data: rows.map(row => row.diagnosed.value), backgroundColor:'#2f80b7', borderColor:'#1b5f86', borderWidth:1, borderRadius:4 },
        { label:'Undiagnosed Diabetes', data: rows.map(row => row.undiagnosed.value), backgroundColor:'#ff7f0e', borderColor:'#c95f00', borderWidth:1, borderRadius:4 },
        { label:'Total Diabetes', data: rows.map(row => row.total.value), backgroundColor:'#7412b8', borderColor:'#4d0b7a', borderWidth:1, borderRadius:4 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: { display: true, text: estimate.title, color:'#20262d', font:{ size:16, weight:'bold' } },
        legend: { position:'bottom', labels:{ color:'#20262d', font:{ weight:'bold' } } },
        cdcGroupedCI: {
          color: '#555555',
          items: [
            rows.map(row => row.diagnosed),
            rows.map(row => row.undiagnosed),
            rows.map(row => row.total)
          ]
        },
        tooltip: {
          callbacks: {
            label(context) {
              const metricKeys = ['diagnosed', 'undiagnosed', 'total'];
              const metric = rows[context.dataIndex] && rows[context.dataIndex][metricKeys[context.datasetIndex]];
              return `${context.dataset.label}: ${cdcMetricLabel(metric, estimate.suffix)}`;
            }
          }
        }
      },
      scales: {
        x: { ticks:{ color:'#20262d', font:{ weight:'bold' }, maxRotation: rows.length > 3 ? 25 : 0, minRotation: rows.length > 3 ? 25 : 0 }, grid:{ display:false } },
        y: { beginAtZero:true, max:axisMax, title:{ display:true, text:estimate.unit, color:'#20262d', font:{ weight:'bold' } }, ticks:{ color:'#20262d' }, grid:{ color:'#e7ecef' } }
      }
    }
  });
}

function setCdcTrendView(view) {
  cdcDemoState.trendView = view;
  document.querySelectorAll('[data-cdc-trend-view]').forEach(button => {
    button.classList.toggle('active', button.dataset.cdcTrendView === view);
  });
  const chartView = document.getElementById('cdcTrendChartView');
  const tableView = document.getElementById('cdcTrendTableView');
  const visualCard = document.querySelector('.cdc-trend-visual-card');
  if (chartView) chartView.hidden = view !== 'chart';
  if (tableView) tableView.hidden = view !== 'table';
  if (visualCard) visualCard.classList.toggle('table-open', view === 'table');
  if (view === 'chart' && CHARTS.cdcTrendChart) {
    setTimeout(() => CHARTS.cdcTrendChart.resize(), 60);
  }
}

function renderCdcTrendTable() {
  const body = document.getElementById('cdcTrendTableBody');
  if (!body) return;
  body.innerHTML = CDC_TREND_DATA.map(row => `
    <tr>
      <td>${row.period}</td>
      <td>${row.diagnosed.toFixed(1)}%</td>
      <td>${row.undiagnosed.toFixed(1)}%</td>
      <td>${row.total.toFixed(1)}%</td>
    </tr>
  `).join('');
}

function updateCdcTrendChart() {
  const canvas = document.getElementById('cdcTrendChart');
  if (!canvas || !window.Chart) return;
  if (CHARTS.cdcTrendChart) {
    CHARTS.cdcTrendChart.destroy();
    delete CHARTS.cdcTrendChart;
  }
  CHARTS.cdcTrendChart = new Chart(canvas, {
    type: 'line',
    data: {
      labels: CDC_TREND_DATA.map(row => row.period),
      datasets: [
        { label:'Diagnosed', data: CDC_TREND_DATA.map(row => row.diagnosed), borderColor:'#2f80b7', backgroundColor:'#2f80b7', tension:0.25, pointRadius:4 },
        { label:'Undiagnosed', data: CDC_TREND_DATA.map(row => row.undiagnosed), borderColor:'#ff7f0e', backgroundColor:'#ff7f0e', tension:0.25, pointRadius:4 },
        { label:'Total', data: CDC_TREND_DATA.map(row => row.total), borderColor:'#7412b8', backgroundColor:'#7412b8', tension:0.25, pointRadius:4 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position:'right', labels:{ color:'#20262d', font:{ weight:'bold' } } },
        tooltip: { callbacks:{ label: context => `${context.dataset.label}: ${context.parsed.y.toFixed(1)}%` } }
      },
      scales: {
        x: { ticks:{ color:'#20262d', font:{ weight:'bold' }, maxRotation:25, minRotation:25 }, grid:{ display:false } },
        y: { beginAtZero:true, max:16, title:{ display:true, text:'Percentage', color:'#20262d', font:{ weight:'bold' } }, ticks:{ color:'#20262d' }, grid:{ color:'#e7ecef' } }
      }
    }
  });
}

function setCdcDemographic(demographic) {
  cdcDemoState.demographic = demographic;
  document.querySelectorAll('[data-cdc-demographic]').forEach(button => {
    button.classList.toggle('active', button.dataset.cdcDemographic === demographic);
  });
  renderCdcDemographicTable();
  updateCdcDemographicChart();
}

function setCdcDemographicsView(view) {
  cdcDemoState.demographicView = view;
  document.querySelectorAll('[data-cdc-demo-view]').forEach(button => {
    button.classList.toggle('active', button.dataset.cdcDemoView === view);
  });
  const chartView = document.getElementById('cdcDemographicChartView');
  const tableView = document.getElementById('cdcDemographicTableView');
  const visualCard = document.querySelector('.cdc-demographic-visual-card');
  if (chartView) chartView.hidden = view !== 'chart';
  if (tableView) tableView.hidden = view !== 'table';
  if (visualCard) visualCard.classList.toggle('table-open', view === 'table');
  if (view === 'chart' && CHARTS.cdcDemographicChart) {
    setTimeout(() => CHARTS.cdcDemographicChart.resize(), 60);
  }
}

function renderCdcDemographicTable() {
  const body = document.getElementById('cdcDemographicTableBody');
  if (!body) return;
  const section = CDC_DEMOGRAPHIC_DATA[cdcDemoState.demographic] || CDC_DEMOGRAPHIC_DATA.race;
  body.innerHTML = section.rows.map(row => `
    <tr>
      <td>${row.label}</td>
      <td>${row.total.toFixed(1)}%</td>
      <td>${row.men.toFixed(1)}%</td>
      <td>${row.women.toFixed(1)}%</td>
    </tr>
  `).join('');
}

function updateCdcDemographicChart() {
  const canvas = document.getElementById('cdcDemographicChart');
  if (!canvas || !window.Chart) return;
  const section = CDC_DEMOGRAPHIC_DATA[cdcDemoState.demographic] || CDC_DEMOGRAPHIC_DATA.race;
  const maxValue = Math.max(...section.rows.flatMap(row => [row.men, row.women]));
  const axisMax = Math.max(10, Math.ceil((maxValue + 2) / 5) * 5);
  if (CHARTS.cdcDemographicChart) {
    CHARTS.cdcDemographicChart.destroy();
    delete CHARTS.cdcDemographicChart;
  }
  CHARTS.cdcDemographicChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: section.rows.map(row => row.label),
      datasets: [
        { label:'Men', data: section.rows.map(row => row.men), backgroundColor:'#2f80b7', borderColor:'#1b5f86', borderWidth:1, borderRadius:4 },
        { label:'Women', data: section.rows.map(row => row.women), backgroundColor:'#ff7f0e', borderColor:'#c95f00', borderWidth:1, borderRadius:4 }
      ]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: { display:true, text:`Age-Adjusted Diagnosed Diabetes by ${section.title}, 2021-2023`, color:'#20262d', font:{ size:16, weight:'bold' } },
        legend: { position:'bottom', labels:{ color:'#20262d', font:{ weight:'bold' } } },
        tooltip: { callbacks:{ label: context => `${context.dataset.label}: ${context.parsed.x.toFixed(1)}%` } }
      },
      scales: {
        x: { beginAtZero:true, max:axisMax, title:{ display:true, text:'Percentage', color:'#20262d', font:{ weight:'bold' } }, ticks:{ color:'#20262d' }, grid:{ color:'#e7ecef' } },
        y: { ticks:{ color:'#20262d', font:{ weight:'bold' } }, grid:{ display:false } }
      }
    }
  });
}

function initCdcStyleDemo() {
  if (!document.getElementById('cdcRaceChart')) return;
  document.querySelectorAll('[data-cdc-group]').forEach(button => {
    button.classList.toggle('active', button.dataset.cdcGroup === cdcDemoState.group);
  });
  renderCdcRaceTable();
  setCdcDemoView(cdcDemoState.view || 'chart');
  updateCdcRaceChart();
  syncCdcEstimateControls();
  renderCdcEstimateTable();
  setCdcEstimateView(cdcDemoState.estimateView || 'chart');
  updateCdcEstimateChart();
  renderCdcTrendTable();
  setCdcTrendView(cdcDemoState.trendView || 'chart');
  updateCdcTrendChart();
  renderCdcDemographicTable();
  setCdcDemographicsView(cdcDemoState.demographicView || 'chart');
  updateCdcDemographicChart();
}

// ══════════════════════════════════════════════════
// SPARCS 2024 DATA ENGINE
// Chart summaries generated from csv/2024-Sparcs DATA.csv.
// ══════════════════════════════════════════════════
const SPARCS2024 = {
  '0-17': {
    label: '0–17 · Pediatric · 639 discharges · NYC 2024',
    insight: '🔍 <strong>Key Finding:</strong> 98% of pediatric diabetes hospitalizations in NYC (2024) involved complications — children are reaching care only when their diabetes is already serious. 87% arrived through the Emergency Department.',
    stats: { discharges:'639', los:'3.0', charges:'$56,335', medicaid:'65%', emergency:'87%', complication:'98%' },
    borough: { labels:['Bronx','Brooklyn','Manhattan','Queens','Staten Island'], discharges:[121,162,185,138,33], avgCharges:[59102,28128,77210,61632,45486], avgLOS:[3.5,2.7,3.4,2.3,3.0], total:[7151374,4556687,14283820,8505239,1501022] },
    payer: { labels:['Medicaid','Private Insurance','Blue Cross/Blue Shield','Medicare','Self-Pay','Other'], values:[415,131,57,19,12,5] },
    severity: { labels:['Minor','Moderate','Major','Extreme'], values:[184,396,53,6] },
    risk: { labels:['Minor','Moderate','Major','Extreme'], values:[479,138,20,2] },
    race: { labels:['Other Race','Black/African American','White','Multi-racial'], values:[262,245,123,9] },
    ethnicity: { labels:['Not Hispanic/Latino','Hispanic/Latino','Unknown','Multi-ethnic'], values:[326,180,132,1] },
    admission: { labels:['Emergency','Urgent','Elective'], values:[558,72,9] },
    facility: { labels:["Cohen's Children Med Ctr","Montefiore Moses Div","NYP Columbia Presbyterian","NYU Langone","Brookdale Hospital","Mount Sinai","Kings County Hospital","NYP Weill Cornell"], values:[128,83,46,43,38,36,34,31] }
  },
  '18-29': {
    label: '18–29 · Young Adult · 2,637 discharges · NYC 2024',
    insight: '🔍 <strong>Key Finding:</strong> 54% of 18-29 diabetes hospitalizations are maternal diabetes — young women whose pregnancies are complicated by diabetes or abnormal glucose tolerance. Medicaid covers 70% of this age group, reflecting the demographics of NYC young adults with diabetes.',
    stats: { discharges:'2,637', los:'3.2', charges:'$52,096', medicaid:'70%', emergency:'68%', complication:'54% maternal' },
    borough: { labels:['Bronx','Brooklyn','Manhattan','Queens','Staten Island'], discharges:[635,609,654,576,163], avgCharges:[62893,45326,63617,39464,33748], avgLOS:[3.4,3.2,3.2,3.1,2.5], total:[39937293,27603560,41605650,22730957,5500969] },
    payer: { labels:['Medicaid','Private Insurance','Blue Cross/Blue Shield','Medicare','Self-Pay','Other'], values:[1848,405,161,144,50,29] },
    severity: { labels:['Minor','Moderate','Major','Extreme'], values:[607,1503,501,24] },
    risk: { labels:['Minor','Moderate','Major','Extreme'], values:[1914,497,203,21] },
    race: { labels:['Other Race','Black/African American','White','Multi-racial'], values:[1399,843,341,54] },
    ethnicity: { labels:['Not Hispanic/Latino','Hispanic/Latino','Unknown','Multi-ethnic'], values:[1254,867,513,3] },
    admission: { labels:['Emergency','Elective','Urgent'], values:[1782,534,317] },
    facility: { labels:['Long Island Jewish Med Ctr','Mount Sinai Hospital','Montefiore Weiler Div','NYP Columbia Presbyterian','NYU Langone Brooklyn','Jacobi Medical Center','Maimonides Medical Ctr','BronxCare Hospital'], values:[151,126,120,119,110,107,92,89] }
  },
  '30-49': {
    label: '30–49 · Adult · 7,711 discharges · NYC 2024',
    insight: '🔍 <strong>Key Finding:</strong> 47% of 30-49 diabetes hospitalizations involve maternal diabetes — the highest volume maternal group across all age groups with 3,663 cases. Manhattan avg charges reach $80,556 — the highest of any borough-age combination in the dataset. Hispanic/Latino patients represent 30% of this age group.',
    stats: { discharges:'7,711', los:'4.2', charges:'$63,647', medicaid:'56%', emergency:'66%', complication:'52% w/complication' },
    borough: { labels:['Bronx','Brooklyn','Manhattan','Queens','Staten Island'], discharges:[1392,1775,2345,1710,489], avgCharges:[63461,58209,80556,49228,53257], avgLOS:[4.3,4.6,4.1,4.1,4.0], total:[88338194,103321126,188903302,84180632,26042506] },
    payer: { labels:['Medicaid','Private Insurance','Medicare','Blue Cross/Blue Shield','Self-Pay','Other'], values:[4334,1807,775,588,127,80] },
    severity: { labels:['Minor','Moderate','Major','Extreme'], values:[1802,3940,1779,186] },
    risk: { labels:['Minor','Moderate','Major','Extreme'], values:[4830,1681,1088,108] },
    race: { labels:['Other Race','Black/African American','White','Multi-racial'], values:[3925,2228,1406,152] },
    ethnicity: { labels:['Not Hispanic/Latino','Hispanic/Latino','Unknown','Multi-ethnic'], values:[3986,2317,1402,6] },
    admission: { labels:['Emergency','Elective','Urgent'], values:[5113,1725,861] },
    facility: { labels:['Long Island Jewish Med Ctr','Mount Sinai Hospital','NYU Langone Brooklyn','Mount Sinai West','Montefiore Weiler Div','NYU Langone Hospitals','Staten Island Univ Hosp','NYP Columbia Presbyterian'], values:[460,399,321,300,297,281,279,277] }
  }, '50-69': {
    label: '50–69 · Middle-Older Adult · 9,004 discharges · NYC 2024',
    insight: '🔍 <strong>Key Finding:</strong> The 50-69 age group generated over <strong>$1.08 billion</strong> in total hospital charges in NYC in 2024 — a single age group, single year. Average length of stay jumps to 7.4 days (vs 3-4 days in younger groups). 99.9% are "Diabetes With Complication" and 90% arrived via Emergency.',
    stats: { discharges:'9,004', los:'7.4', charges:'$120,520', medicaid:'38%', emergency:'90%', complication:'99.9%' },
    borough: { labels:['Bronx','Brooklyn','Manhattan','Queens','Staten Island'], discharges:[2147,2186,2736,1463,472], avgCharges:[110383,109695,155368,92412,101884], avgLOS:[7.0,8.3,7.0,7.6,7.2], total:[236991671,239793924,425087019,135198156,48089152] },
    payer: { labels:['Medicare','Medicaid','Private Insurance','Blue Cross/Blue Shield','Self-Pay','Other'], values:[3742,3422,1240,376,146,78] },
    severity: { labels:['Minor','Moderate','Major','Extreme'], values:[1182,3822,3389,611] },
    risk: { labels:['Minor','Moderate','Major','Extreme'], values:[1903,3614,3116,371] },
    race: { labels:['Other Race','Black/African American','White','Multi-racial'], values:[3799,3470,1592,143] },
    ethnicity: { labels:['Not Hispanic/Latino','Hispanic/Latino','Unknown','Multi-ethnic'], values:[4598,2762,1634,10] },
    admission: { labels:['Emergency','Urgent','Elective'], values:[8140,496,354] },
    facility: { labels:['Mount Sinai Hospital','Montefiore Moses Div','BronxCare Hospital','NYP Columbia Presbyterian','NYU Langone Hospitals','Staten Island Univ Hosp','Mount Sinai Morningside','Kings County Hospital'], values:[651,505,356,308,305,298,281,268] }
  }, '70+': {
    label: '70+ · Elderly · 6,156 discharges · NYC 2024',
    insight: '🔍 <strong>Key Finding:</strong> 100% of elderly diabetes hospitalizations involve complications — not a single discharge without one. Medicare covers 90% (5,515 patients). Average charges reach $126,780 with Brooklyn having the longest stays at 8.8 days. Manhattan charges hit $155,316 avg — driven by complex multi-system complications in elderly patients at major academic centers.',
    stats: { discharges:'6,156', los:'7.6', charges:'$126,780', medicaid:'7%', emergency:'85%', complication:'100%' },
    borough: { labels:['Bronx','Brooklyn','Manhattan','Queens','Staten Island'], discharges:[1171,1571,1971,1104,339], avgCharges:[120450,119907,155316,101793,95948], avgLOS:[7.9,8.8,6.7,7.6,7.0], total:[141047138,188374497,306128666,112379881,32526349] },
    payer: { labels:['Medicare','Medicaid','Private Insurance','Blue Cross/Blue Shield','Self-Pay','Other'], values:[5515,412,124,56,41,8] },
    severity: { labels:['Minor','Moderate','Major','Extreme'], values:[736,2342,2574,504] },
    risk: { labels:['Minor','Moderate','Major','Extreme'], values:[956,2111,2724,365] },
    race: { labels:['Other Race','Black/African American','White','Multi-racial'], values:[2607,1976,1486,87] },
    ethnicity: { labels:['Not Hispanic/Latino','Hispanic/Latino','Unknown','Multi-ethnic'], values:[3472,1756,916,12] },
    admission: { labels:['Emergency','Urgent','Elective'], values:[5263,551,331] },
    facility: { labels:['Mount Sinai Hospital','Montefiore Moses Div','NYP Brooklyn Methodist','Long Island Jewish Med Ctr','NYP Columbia Presbyterian','Mount Sinai Morningside','NYP Queens','Staten Island Univ Hosp'], values:[621,303,288,253,235,235,211,198] }
  }
};

const SPARCS_COLORS = ['#5A3E66','#2E8B8B','#58427C','#1A7A7A','#4C315F','#007070','#6F597A','#1A5F6B','#3B2060','#008080','#624B6E','#006064','#503D5C','#1D697C','#2D1B55','#154F5F','#008B8B','#126180','#0D3D4A','#004953'];
const SPARCS_CHARTS = {};

function sparcsReadablePieDisplayValues(values) {
  const nums = values.map(value => Number(value || 0));
  const total = nums.reduce((sum, value) => sum + value, 0);
  if (!total) return nums;

  const minSlice = total * 0.065;
  const smallTotal = nums.reduce((sum, value) => sum + (value > 0 && value < minSlice ? minSlice : 0), 0);
  const largeValues = nums.filter(value => value >= minSlice);
  const largeTotal = largeValues.reduce((sum, value) => sum + value, 0);
  const remaining = Math.max(total - smallTotal, total * 0.35);

  return nums.map(value => {
    if (!value) return 0;
    if (value < minSlice) return minSlice;
    return largeTotal ? (value / largeTotal) * remaining : value;
  });
}

const SPARCS_READABLE_PIE_VALUES = {
  id: 'sparcsReadablePieValues',
  afterDatasetsDraw(chart) {
    if (!['sparcs-payer-donut', 'sparcs-risk-donut', 'sparcs-admission-donut'].includes(chart.canvas.id)) return;
    const dataset = chart.data.datasets[0];
    const actualValues = dataset.actualValues || dataset.data || [];
    const meta = chart.getDatasetMeta(0);
    const {ctx} = chart;

    ctx.save();
    ctx.font = '900 11px Inter, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    meta.data.forEach((arc, index) => {
      const value = Number(actualValues[index] || 0);
      if (!value) return;
      const props = arc.getProps(['x','y','startAngle','endAngle','innerRadius','outerRadius'], true);
      const angle = (props.startAngle + props.endAngle) / 2;
      const radius = props.innerRadius + (props.outerRadius - props.innerRadius) * 0.58;
      const x = props.x + Math.cos(angle) * radius;
      const y = props.y + Math.sin(angle) * radius;
      const label = value.toLocaleString();
      const labelColor = chartValueTextColor(dataset, index, '#F7FAF9');

      ctx.lineWidth = 3;
      ctx.strokeStyle = labelColor === '#000000' ? 'rgba(247,250,249,0.78)' : 'rgba(20,0,35,0.72)';
      ctx.strokeText(label, x, y);
      ctx.fillStyle = labelColor;
      ctx.fillText(label, x, y);
    });

    ctx.restore();
  }
};

function initSPARCS2024Charts() {
  const d = SPARCS2024['0-17'];
  SPARCS_CHARTS['sparcs-borough-bar'] = new Chart(document.getElementById('sparcs-borough-bar'), {
    type:'bar', data:{ labels:d.borough.labels, datasets:[{ label:'Discharges', data:d.borough.discharges, backgroundColor:SPARCS_COLORS.slice(0,5), borderRadius:8 }] },
    options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{display:false} }, scales:{ y:{ beginAtZero:true, ticks:{color:'#000000'}, grid:{display:false} }, x:{ grid:{display:false} } } }
  });
  SPARCS_CHARTS['sparcs-payer-donut'] = new Chart(document.getElementById('sparcs-payer-donut'), {
    type:'doughnut', data:{ labels:d.payer.labels, datasets:[{ data:sparcsReadablePieDisplayValues(d.payer.values), actualValues:d.payer.values, backgroundColor:SPARCS_COLORS, borderWidth:2 }] },
    plugins:[SPARCS_READABLE_PIE_VALUES],
    options:{ responsive:true, maintainAspectRatio:false, cutout:'16%', rotation:-70, plugins:{ legend:{ position:'right', onClick:null, labels:{boxWidth:12,color:'#000000',font:{size:11,weight:'700'}} }, tooltip:{ callbacks:{ label:ctx=>`${ctx.label}: ${Number(ctx.dataset.actualValues?.[ctx.dataIndex] || 0).toLocaleString()} discharges` } } } }
  });
  SPARCS_CHARTS['sparcs-severity-bar'] = new Chart(document.getElementById('sparcs-severity-bar'), {
    type:'bar', data:{ labels:d.severity.labels, datasets:[{ label:'Discharges', data:d.severity.values, backgroundColor:['#0B4F5A','#C8960C','#4C315F','#8B1A1A'], borderRadius:8 }] },
    options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{display:false} }, scales:{ y:{ beginAtZero:true, ticks:{color:'#000000'}, grid:{display:false} }, x:{ grid:{display:false} } } }
  });
  SPARCS_CHARTS['sparcs-risk-donut'] = new Chart(document.getElementById('sparcs-risk-donut'), {
    type:'doughnut', data:{ labels:d.risk.labels, datasets:[{ data:sparcsReadablePieDisplayValues(d.risk.values), actualValues:d.risk.values, backgroundColor:['#0B4F5A','#C8960C','#4C315F','#8B1A1A'], borderWidth:2 }] },
    plugins:[SPARCS_READABLE_PIE_VALUES],
    options:{ responsive:true, maintainAspectRatio:false, cutout:'16%', rotation:-70, plugins:{ legend:{ position:'right', onClick:null, labels:{boxWidth:12,color:'#000000',font:{size:11,weight:'700'}} }, tooltip:{ callbacks:{ label:ctx=>`${ctx.label}: ${Number(ctx.dataset.actualValues?.[ctx.dataIndex] || 0).toLocaleString()} discharges` } } } }
  });
  SPARCS_CHARTS['sparcs-race-bar'] = new Chart(document.getElementById('sparcs-race-bar'), {
    type:'bar', data:{ labels:d.race.labels, datasets:[{ label:'Discharges', data:d.race.values, backgroundColor:SPARCS_COLORS.slice(0,4), borderRadius:8 }] },
    options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{display:false} }, scales:{ y:{ beginAtZero:true, ticks:{color:'#000000'}, grid:{display:false} }, x:{ grid:{display:false} } } }
  });
  SPARCS_CHARTS['sparcs-ethnicity-bar'] = new Chart(document.getElementById('sparcs-ethnicity-bar'), {
    type:'bar', data:{ labels:d.ethnicity.labels, datasets:[{ label:'Discharges', data:d.ethnicity.values, backgroundColor:['#1F5C45','#C8960C','#DDE2D9','#4C315F'], borderRadius:8 }] },
    options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{display:false} }, scales:{ y:{ beginAtZero:true, ticks:{color:'#000000'}, grid:{display:false} }, x:{ grid:{display:false} } } }
  });
  SPARCS_CHARTS['sparcs-charges-bar'] = new Chart(document.getElementById('sparcs-charges-bar'), {
    type:'bar', data:{ labels:d.borough.labels, datasets:[{ label:'Avg Total Charges', data:d.borough.avgCharges, backgroundColor:SPARCS_COLORS.slice(0,5), borderRadius:8 }] },
    options:{ indexAxis:'y', responsive:true, maintainAspectRatio:false, plugins:{ legend:{display:false} }, scales:{ x:{ ticks:{ callback:v=>'$'+v.toLocaleString() }, grid:{display:false} }, y:{ grid:{display:false} } } }
  });
  SPARCS_CHARTS['sparcs-admission-donut'] = new Chart(document.getElementById('sparcs-admission-donut'), {
    type:'doughnut', data:{ labels:d.admission.labels, datasets:[{ data:sparcsReadablePieDisplayValues(d.admission.values), actualValues:d.admission.values, backgroundColor:['#3B2060','#126180','#2E8B8B'], borderWidth:2 }] },
    plugins:[SPARCS_READABLE_PIE_VALUES],
    options:{ responsive:true, maintainAspectRatio:false, cutout:'16%', rotation:-70, plugins:{ legend:{ position:'right', onClick:null, labels:{boxWidth:12,color:'#000000',font:{size:11,weight:'700'}} }, tooltip:{ callbacks:{ label:ctx=>`${ctx.label}: ${Number(ctx.dataset.actualValues?.[ctx.dataIndex] || 0).toLocaleString()} discharges` } } } }
  });
  SPARCS_CHARTS['sparcs-facility-bar'] = new Chart(document.getElementById('sparcs-facility-bar'), {
    type:'bar', data:{ labels:d.facility.labels, datasets:[{ label:'Discharges', data:d.facility.values, backgroundColor:SPARCS_COLORS, borderRadius:6 }] },
    options:{ indexAxis:'y', responsive:true, maintainAspectRatio:false, plugins:{ legend:{display:false} }, scales:{ x:{ beginAtZero:true, grid:{display:false} }, y:{ ticks:{font:{size:10}}, grid:{display:false} } } }
  });
  SPARCS_CHARTS['sparcs-scatter'] = new Chart(document.getElementById('sparcs-scatter'), {
    type:'scatter',
    data:{ datasets: d.borough.labels.map((b,i)=>({ label:b, data:[{ x:d.borough.avgLOS[i], y:d.borough.avgCharges[i] }], backgroundColor:SPARCS_COLORS[i], pointRadius:19, pointHoverRadius:22 })) },
    options:{ responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ position:'right', labels:{boxWidth:12} }, tooltip:{ callbacks:{ label: ctx=>`${ctx.dataset.label}: ${ctx.parsed.x} days · $${ctx.parsed.y.toLocaleString()}` } } },
      plugins:{ legend:{ display:true }, jvPointValueLabels:{ prefix:'$', moneyK:true } }, scales:{ x:{ title:{display:true,text:'Avg Length of Stay (days)'}, grid:{display:false} }, y:{ title:{display:true,text:'Avg Total Charges ($)'}, ticks:{callback:v=>'$'+(v/1000).toFixed(0)+'K'}, grid:{display:false} } }
    }
  });
  renderSPARCSTable(d);
  switchAge('0-17');
}

function renderSPARCSTable(d) {
  const tbody = document.getElementById('sparcsTableBody'); if (!tbody) return;
  const emojis = { Bronx:'🏙️', Brooklyn:'🏘️', Manhattan:'🌆', Queens:'🌏', 'Staten Island':'🌳' };
  tbody.innerHTML = d.borough.labels.map((b,i) => `
    <tr>
      <td style="font-weight:700;color:var(--deep-teal);">${emojis[b]||''} ${b}</td>
      <td>${d.borough.discharges[i].toLocaleString()}</td>
      <td>${d.borough.avgLOS[i]} days</td>
      <td>$${d.borough.avgCharges[i].toLocaleString()}</td>
      <td>$${(d.borough.total[i]/1000000).toFixed(1)}M</td>
    </tr>`).join('');
}

const SPARCS_2024_SOURCE_LINKS = {
  '0-17': 'https://health.data.ny.gov/Health/Hospital-Inpatient-Discharges-SPARCS-De-Identified/sf4k-39ay/explore/query/SELECT%0A%20%20%60health_service_area%60%2C%0A%20%20%60hospital_county%60%2C%0A%20%20%60operating_certificate_number%60%2C%0A%20%20%60permanent_facility_id%60%2C%0A%20%20%60facility_name%60%2C%0A%20%20%60age_group%60%2C%0A%20%20%60zip_code%60%2C%0A%20%20%60gender%60%2C%0A%20%20%60race%60%2C%0A%20%20%60ethnicity%60%2C%0A%20%20%60length_of_stay%60%2C%0A%20%20%60type_of_admission%60%2C%0A%20%20%60patient_disposition%60%2C%0A%20%20%60discharge_year%60%2C%0A%20%20%60ccsr_diagnosis_code%60%2C%0A%20%20%60ccsr_diagnosis_description%60%2C%0A%20%20%60ccsr_procedure_code%60%2C%0A%20%20%60ccsr_procedure_description%60%2C%0A%20%20%60apr_drg_code%60%2C%0A%20%20%60apr_drg_description%60%2C%0A%20%20%60apr_mdc_code%60%2C%0A%20%20%60apr_mdc_description%60%2C%0A%20%20%60apr_severity_of_illness_code%60%2C%0A%20%20%60apr_severity_of_illness%60%2C%0A%20%20%60apr_risk_of_mortality%60%2C%0A%20%20%60apr_medical_surgical%60%2C%0A%20%20%60payment_typology_1%60%2C%0A%20%20%60payment_typology_2%60%2C%0A%20%20%60payment_typology_3%60%2C%0A%20%20%60birth_weight%60%2C%0A%20%20%60emergency_department_indicator%60%2C%0A%20%20%60total_charges%60%2C%0A%20%20%60total_costs%60%0AWHERE%0A%20%20caseless_one_of%28%0A%20%20%20%20%60ccsr_diagnosis_description%60%2C%0A%20%20%20%20%22DIABETES%20MELLITUS%20WITHOUT%20COMPLICATION%22%2C%0A%20%20%20%20%22DIABETES%20MELLITUS%20WITH%20COMPLICATION%22%2C%0A%20%20%20%20%22PREDIABETES%22%2C%0A%20%20%20%20%22DIABETES%20OR%20ABNORMAL%20GLUCOSE%20TOLERANCE%20COMPLICATING%20PREGNANCY%3B%20CHILDBIRTH%3B%20OR%20THE%20PUERPERIUM%22%0A%20%20%29%0A%20%20AND%20caseless_one_of%28%0A%20%20%20%20%60hospital_county%60%2C%0A%20%20%20%20%22New%20York%22%2C%0A%20%20%20%20%22Kings%22%2C%0A%20%20%20%20%22Queens%22%2C%0A%20%20%20%20%22Richmond%22%2C%0A%20%20%20%20%22Bronx%22%0A%20%20%29%0A%20%20AND%20caseless_one_of%28%60age_group%60%2C%20%220-17%22%29/page/filter',
  '18-29': 'https://health.data.ny.gov/Health/Hospital-Inpatient-Discharges-SPARCS-De-Identified/sf4k-39ay/explore/query/SELECT%0A%20%20%60health_service_area%60%2C%0A%20%20%60hospital_county%60%2C%0A%20%20%60operating_certificate_number%60%2C%0A%20%20%60permanent_facility_id%60%2C%0A%20%20%60facility_name%60%2C%0A%20%20%60age_group%60%2C%0A%20%20%60zip_code%60%2C%0A%20%20%60gender%60%2C%0A%20%20%60race%60%2C%0A%20%20%60ethnicity%60%2C%0A%20%20%60length_of_stay%60%2C%0A%20%20%60type_of_admission%60%2C%0A%20%20%60patient_disposition%60%2C%0A%20%20%60discharge_year%60%2C%0A%20%20%60ccsr_diagnosis_code%60%2C%0A%20%20%60ccsr_diagnosis_description%60%2C%0A%20%20%60ccsr_procedure_code%60%2C%0A%20%20%60ccsr_procedure_description%60%2C%0A%20%20%60apr_drg_code%60%2C%0A%20%20%60apr_drg_description%60%2C%0A%20%20%60apr_mdc_code%60%2C%0A%20%20%60apr_mdc_description%60%2C%0A%20%20%60apr_severity_of_illness_code%60%2C%0A%20%20%60apr_severity_of_illness%60%2C%0A%20%20%60apr_risk_of_mortality%60%2C%0A%20%20%60apr_medical_surgical%60%2C%0A%20%20%60payment_typology_1%60%2C%0A%20%20%60payment_typology_2%60%2C%0A%20%20%60payment_typology_3%60%2C%0A%20%20%60birth_weight%60%2C%0A%20%20%60emergency_department_indicator%60%2C%0A%20%20%60total_charges%60%2C%0A%20%20%60total_costs%60%0AWHERE%0A%20%20caseless_one_of%28%0A%20%20%20%20%60ccsr_diagnosis_description%60%2C%0A%20%20%20%20%22DIABETES%20MELLITUS%20WITHOUT%20COMPLICATION%22%2C%0A%20%20%20%20%22DIABETES%20MELLITUS%20WITH%20COMPLICATION%22%2C%0A%20%20%20%20%22PREDIABETES%22%2C%0A%20%20%20%20%22DIABETES%20OR%20ABNORMAL%20GLUCOSE%20TOLERANCE%20COMPLICATING%20PREGNANCY%3B%20CHILDBIRTH%3B%20OR%20THE%20PUERPERIUM%22%0A%20%20%29%0A%20%20AND%20caseless_one_of%28%0A%20%20%20%20%60hospital_county%60%2C%0A%20%20%20%20%22New%20York%22%2C%0A%20%20%20%20%22Kings%22%2C%0A%20%20%20%20%22Queens%22%2C%0A%20%20%20%20%22Richmond%22%2C%0A%20%20%20%20%22Bronx%22%0A%20%20%29%0A%20%20AND%20caseless_one_of%28%60age_group%60%2C%20%2218-29%22%29/page/filter',
  '30-49': 'https://health.data.ny.gov/Health/Hospital-Inpatient-Discharges-SPARCS-De-Identified/sf4k-39ay/explore/query/SELECT%0A%20%20%60health_service_area%60%2C%0A%20%20%60hospital_county%60%2C%0A%20%20%60operating_certificate_number%60%2C%0A%20%20%60permanent_facility_id%60%2C%0A%20%20%60facility_name%60%2C%0A%20%20%60age_group%60%2C%0A%20%20%60zip_code%60%2C%0A%20%20%60gender%60%2C%0A%20%20%60race%60%2C%0A%20%20%60ethnicity%60%2C%0A%20%20%60length_of_stay%60%2C%0A%20%20%60type_of_admission%60%2C%0A%20%20%60patient_disposition%60%2C%0A%20%20%60discharge_year%60%2C%0A%20%20%60ccsr_diagnosis_code%60%2C%0A%20%20%60ccsr_diagnosis_description%60%2C%0A%20%20%60ccsr_procedure_code%60%2C%0A%20%20%60ccsr_procedure_description%60%2C%0A%20%20%60apr_drg_code%60%2C%0A%20%20%60apr_drg_description%60%2C%0A%20%20%60apr_mdc_code%60%2C%0A%20%20%60apr_mdc_description%60%2C%0A%20%20%60apr_severity_of_illness_code%60%2C%0A%20%20%60apr_severity_of_illness%60%2C%0A%20%20%60apr_risk_of_mortality%60%2C%0A%20%20%60apr_medical_surgical%60%2C%0A%20%20%60payment_typology_1%60%2C%0A%20%20%60payment_typology_2%60%2C%0A%20%20%60payment_typology_3%60%2C%0A%20%20%60birth_weight%60%2C%0A%20%20%60emergency_department_indicator%60%2C%0A%20%20%60total_charges%60%2C%0A%20%20%60total_costs%60%0AWHERE%0A%20%20caseless_one_of%28%0A%20%20%20%20%60ccsr_diagnosis_description%60%2C%0A%20%20%20%20%22DIABETES%20MELLITUS%20WITHOUT%20COMPLICATION%22%2C%0A%20%20%20%20%22DIABETES%20MELLITUS%20WITH%20COMPLICATION%22%2C%0A%20%20%20%20%22PREDIABETES%22%2C%0A%20%20%20%20%22DIABETES%20OR%20ABNORMAL%20GLUCOSE%20TOLERANCE%20COMPLICATING%20PREGNANCY%3B%20CHILDBIRTH%3B%20OR%20THE%20PUERPERIUM%22%0A%20%20%29%0A%20%20AND%20caseless_one_of%28%0A%20%20%20%20%60hospital_county%60%2C%0A%20%20%20%20%22New%20York%22%2C%0A%20%20%20%20%22Kings%22%2C%0A%20%20%20%20%22Queens%22%2C%0A%20%20%20%20%22Richmond%22%2C%0A%20%20%20%20%22Bronx%22%0A%20%20%29%0A%20%20AND%20caseless_one_of%28%60age_group%60%2C%20%2230-49%22%29/page/filter',
  '50-69': 'https://health.data.ny.gov/Health/Hospital-Inpatient-Discharges-SPARCS-De-Identified/sf4k-39ay/explore/query/SELECT%0A%20%20%60health_service_area%60%2C%0A%20%20%60hospital_county%60%2C%0A%20%20%60operating_certificate_number%60%2C%0A%20%20%60permanent_facility_id%60%2C%0A%20%20%60facility_name%60%2C%0A%20%20%60age_group%60%2C%0A%20%20%60zip_code%60%2C%0A%20%20%60gender%60%2C%0A%20%20%60race%60%2C%0A%20%20%60ethnicity%60%2C%0A%20%20%60length_of_stay%60%2C%0A%20%20%60type_of_admission%60%2C%0A%20%20%60patient_disposition%60%2C%0A%20%20%60discharge_year%60%2C%0A%20%20%60ccsr_diagnosis_code%60%2C%0A%20%20%60ccsr_diagnosis_description%60%2C%0A%20%20%60ccsr_procedure_code%60%2C%0A%20%20%60ccsr_procedure_description%60%2C%0A%20%20%60apr_drg_code%60%2C%0A%20%20%60apr_drg_description%60%2C%0A%20%20%60apr_mdc_code%60%2C%0A%20%20%60apr_mdc_description%60%2C%0A%20%20%60apr_severity_of_illness_code%60%2C%0A%20%20%60apr_severity_of_illness%60%2C%0A%20%20%60apr_risk_of_mortality%60%2C%0A%20%20%60apr_medical_surgical%60%2C%0A%20%20%60payment_typology_1%60%2C%0A%20%20%60payment_typology_2%60%2C%0A%20%20%60payment_typology_3%60%2C%0A%20%20%60birth_weight%60%2C%0A%20%20%60emergency_department_indicator%60%2C%0A%20%20%60total_charges%60%2C%0A%20%20%60total_costs%60%0AWHERE%0A%20%20caseless_one_of%28%0A%20%20%20%20%60ccsr_diagnosis_description%60%2C%0A%20%20%20%20%22DIABETES%20MELLITUS%20WITHOUT%20COMPLICATION%22%2C%0A%20%20%20%20%22DIABETES%20MELLITUS%20WITH%20COMPLICATION%22%2C%0A%20%20%20%20%22PREDIABETES%22%2C%0A%20%20%20%20%22DIABETES%20OR%20ABNORMAL%20GLUCOSE%20TOLERANCE%20COMPLICATING%20PREGNANCY%3B%20CHILDBIRTH%3B%20OR%20THE%20PUERPERIUM%22%0A%20%20%29%0A%20%20AND%20caseless_one_of%28%0A%20%20%20%20%60hospital_county%60%2C%0A%20%20%20%20%22New%20York%22%2C%0A%20%20%20%20%22Kings%22%2C%0A%20%20%20%20%22Queens%22%2C%0A%20%20%20%20%22Richmond%22%2C%0A%20%20%20%20%22Bronx%22%0A%20%20%29%0A%20%20AND%20caseless_one_of%28%60age_group%60%2C%20%2250-69%22%29/page/filter',
  '70+': 'https://health.data.ny.gov/Health/Hospital-Inpatient-Discharges-SPARCS-De-Identified/sf4k-39ay/explore/query/SELECT%0A%20%20%60health_service_area%60%2C%0A%20%20%60hospital_county%60%2C%0A%20%20%60operating_certificate_number%60%2C%0A%20%20%60permanent_facility_id%60%2C%0A%20%20%60facility_name%60%2C%0A%20%20%60age_group%60%2C%0A%20%20%60zip_code%60%2C%0A%20%20%60gender%60%2C%0A%20%20%60race%60%2C%0A%20%20%60ethnicity%60%2C%0A%20%20%60length_of_stay%60%2C%0A%20%20%60type_of_admission%60%2C%0A%20%20%60patient_disposition%60%2C%0A%20%20%60discharge_year%60%2C%0A%20%20%60ccsr_diagnosis_code%60%2C%0A%20%20%60ccsr_diagnosis_description%60%2C%0A%20%20%60ccsr_procedure_code%60%2C%0A%20%20%60ccsr_procedure_description%60%2C%0A%20%20%60apr_drg_code%60%2C%0A%20%20%60apr_drg_description%60%2C%0A%20%20%60apr_mdc_code%60%2C%0A%20%20%60apr_mdc_description%60%2C%0A%20%20%60apr_severity_of_illness_code%60%2C%0A%20%20%60apr_severity_of_illness%60%2C%0A%20%20%60apr_risk_of_mortality%60%2C%0A%20%20%60apr_medical_surgical%60%2C%0A%20%20%60payment_typology_1%60%2C%0A%20%20%60payment_typology_2%60%2C%0A%20%20%60payment_typology_3%60%2C%0A%20%20%60birth_weight%60%2C%0A%20%20%60emergency_department_indicator%60%2C%0A%20%20%60total_charges%60%2C%0A%20%20%60total_costs%60%0AWHERE%0A%20%20caseless_one_of%28%0A%20%20%20%20%60ccsr_diagnosis_description%60%2C%0A%20%20%20%20%22DIABETES%20MELLITUS%20WITHOUT%20COMPLICATION%22%2C%0A%20%20%20%20%22DIABETES%20MELLITUS%20WITH%20COMPLICATION%22%2C%0A%20%20%20%20%22PREDIABETES%22%2C%0A%20%20%20%20%22DIABETES%20OR%20ABNORMAL%20GLUCOSE%20TOLERANCE%20COMPLICATING%20PREGNANCY%3B%20CHILDBIRTH%3B%20OR%20THE%20PUERPERIUM%22%0A%20%20%29%0A%20%20AND%20caseless_one_of%28%0A%20%20%20%20%60hospital_county%60%2C%0A%20%20%20%20%22New%20York%22%2C%0A%20%20%20%20%22Kings%22%2C%0A%20%20%20%20%22Queens%22%2C%0A%20%20%20%20%22Richmond%22%2C%0A%20%20%20%20%22Bronx%22%0A%20%20%29%0A%20%20AND%20caseless_one_of%28%60age_group%60%2C%20%2270%20or%20Older%22%29/page/filter'
};
function switchAge(age) {
  document.querySelectorAll('.age-tab').forEach(t => t.classList.remove('active-tab'));
  document.getElementById('tab-'+age).classList.add('active-tab');
  const d = SPARCS2024[age];
  if (!d) {
    document.getElementById('sparcsDashboard').style.display = 'none';
    document.getElementById('uploadNotice').style.display = 'block';
    document.getElementById('uploadNoticeText').textContent = `No embedded summary is available for age group "${age}" in 2024-Sparcs DATA.csv`;
    document.getElementById('ageLabel').style.display = 'none';
  } else {
    document.getElementById('sparcsDashboard').style.display = 'block';
    document.getElementById('uploadNotice').style.display = 'none';
    document.getElementById('ageLabel').style.display = 'block';
    document.getElementById('ageLabelText').textContent = d.label;
    document.getElementById('keyInsight').innerHTML = d.insight;
    document.getElementById('sc-discharges').textContent = d.stats.discharges;
    document.getElementById('sc-los').textContent = d.stats.los;
    document.getElementById('sc-charges').textContent = d.stats.charges;
    document.getElementById('sc-medicaid').textContent = d.stats.medicaid;
    document.getElementById('sc-emergency').textContent = d.stats.emergency;
    document.getElementById('sc-complication').textContent = d.stats.complication;
    document.getElementById('sc-complication-label').textContent = (age === '18-29' || age === '30-49') ? 'Maternal + Complication Mix' : age === '70+' ? '100% With Complication' : 'Diabetes With Complication';
    const sparcsOpenLink = document.getElementById('sparcsOpenLink');
    if (sparcsOpenLink && SPARCS_2024_SOURCE_LINKS[age]) {
      sparcsOpenLink.href = SPARCS_2024_SOURCE_LINKS[age];
    }
    ['sparcs-borough-bar','sparcs-severity-bar','sparcs-race-bar','sparcs-ethnicity-bar','sparcs-charges-bar','sparcs-facility-bar'].forEach(id => {
      const ch = SPARCS_CHARTS[id]; if (!ch) return;
      const map = { 'sparcs-borough-bar':[d.borough.labels,d.borough.discharges], 'sparcs-severity-bar':[d.severity.labels,d.severity.values], 'sparcs-race-bar':[d.race.labels,d.race.values], 'sparcs-ethnicity-bar':[d.ethnicity.labels,d.ethnicity.values], 'sparcs-charges-bar':[d.borough.labels,d.borough.avgCharges], 'sparcs-facility-bar':[d.facility.labels,d.facility.values] };
      ch.data.labels = map[id][0]; ch.data.datasets[0].data = map[id][1]; ch.update('active');
    });
    ['sparcs-payer-donut','sparcs-risk-donut','sparcs-admission-donut'].forEach(id => {
      const ch = SPARCS_CHARTS[id]; if (!ch) return;
      const map = { 'sparcs-payer-donut':[d.payer.labels,d.payer.values], 'sparcs-risk-donut':[d.risk.labels,d.risk.values], 'sparcs-admission-donut':[d.admission.labels,d.admission.values] };
      ch.data.labels = map[id][0];
      if (id === 'sparcs-payer-donut') {
        ch.data.datasets[0].actualValues = map[id][1];
        ch.data.datasets[0].data = sparcsReadablePieDisplayValues(map[id][1]);
      } else if (id === 'sparcs-risk-donut') {
        ch.data.datasets[0].actualValues = map[id][1];
        ch.data.datasets[0].data = sparcsReadablePieDisplayValues(map[id][1]);
      } else if (id === 'sparcs-admission-donut') {
        ch.data.datasets[0].actualValues = map[id][1];
        ch.data.datasets[0].data = sparcsReadablePieDisplayValues(map[id][1]);
      } else {
        ch.data.datasets[0].data = map[id][1];
      }
      ch.update('active');
    });
    renderSPARCSTable(d);
  }
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme')==='dark';
  document.documentElement.setAttribute('data-theme', isDark?'':'dark');
  document.querySelector('.theme-toggle').textContent = isDark?'🌙':'☀️';
}


function initDiabetisCharts() {
  CHARTS['boroughPrevalenceChart'] = new Chart(document.getElementById('boroughPrevalenceChart'),{
    type:'bar',
    data:{labels:BOROUGH_LABELS_ALL,
      datasets:[{label:'Diabetes Inpatient Discharges',data:[5466, 6303, 7891, 4991, 1496],
        backgroundColor:['#1F5C45','#006064','#12334A','#0B4F5A','#4C315F'],borderRadius:8}]},
    options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,
      _labelSuffix:'', _labelPrefix:'',
      plugins:{legend:{display:false},insideLabel:{display:true}},
      scales:{x:{beginAtZero:true,ticks:{color:'#000000',callback:function(v){return v>=1000?(v/1000).toFixed(1).replace(/\.0$/,'')+'K':v.toLocaleString();}},grid:{display:false}},y:{ticks:{color:'#000000'},grid:{display:false}}}}
  });
  CHARTS['a1cRaceChart'] = new Chart(document.getElementById('a1cRaceChart'),{
    type:'bar',
    data:{labels:RACE_LABELS,
      datasets:[{label:'Discharges by Race/Ethnicity',data:[8762, 11992, 4948, 445],
        backgroundColor:['#1F5C45','#006064','#12334A','#0B4F5A'],borderRadius:8}]},
    options:{responsive:true,maintainAspectRatio:false,
      _labelSuffix:'', _labelPrefix:'',
      plugins:{legend:{display:false},insideLabel:{display:true}},
      scales:{y:{beginAtZero:true,ticks:{callback:function(v){return v>=1000?(v/1000).toFixed(1).replace(/\.0$/,'')+'K':v.toLocaleString();}},grid:{display:false}},x:{grid:{display:false},ticks:{color:'#006064',font:{weight:'700'}}}}}
  });
  CHARTS['trendChart'] = new Chart(document.getElementById('trendChart'),{
    type:'line',
    data:{labels:['0–17','18–29','30–49','50–69','70+'],
      datasets:[{label:'Discharges by Age Group — All NYC',data:[639, 2637, 7711, 9004, 6156],
        borderColor:'#12334A',backgroundColor:'rgba(11,79,90,0.10)',pointBackgroundColor:'#C8960C',pointBorderColor:'#12334A',pointHoverBackgroundColor:'#6A1B9A',tension:0.4,fill:true,
        pointRadius:5}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},
      scales:{y:{beginAtZero:true,ticks:{callback:function(v){return v>=1000?(v/1000).toFixed(1).replace(/\.0$/,'')+'K':v.toLocaleString();}},grid:{display:false}},x:{grid:{display:false},ticks:{color:'#006064',font:{weight:'700'}}}}}
  });
  CHARTS['ampDialysisChart'] = new Chart(document.getElementById('ampDialysisChart'),{
    type:'bar',
    data:{labels:["Bronx", "Brooklyn", "Manhattan", "Queens", "Staten Island"],
      datasets:[
        {label:'Total Charges ($M)',data:[513.5, 563.6, 976.0, 363.0, 113.7],backgroundColor:'#0B4F5A',borderRadius:6},
        {label:'Total Costs ($M)',data:[179.6, 209.2, 274.2, 112.3, 34.4],backgroundColor:'#4C315F',borderRadius:6}
      ]},
    options:{responsive:true,maintainAspectRatio:false,
      _labelSuffix:'M', _labelPrefix:'$',
      plugins:{legend:{position:'top'},insideLabel:{display:true}},
      scales:{y:{beginAtZero:true,ticks:{callback:function(v){return '$'+v+'M';}},grid:{display:false}},x:{grid:{display:false},ticks:{color:'#006064',font:{weight:'700'}}}}}
  });
  CHARTS['losChart'] = new Chart(document.getElementById('losChart'),{
    type:'bar',
    data:{labels:BOROUGH_LABELS_ALL,
      datasets:[{label:'Avg Length of Stay (days)',
        data:[5.9, 6.7, 5.6, 5.6, 5.5],
        backgroundColor:['#1F5C45','#006064','#12334A','#0B4F5A','#4C315F'],
        borderRadius:8}]},
    options:{responsive:true,maintainAspectRatio:false,
      _labelSuffix:' days', _labelPrefix:'',
      plugins:{legend:{display:false},insideLabel:{display:true}},
      scales:{
        y:{beginAtZero:true,
          ticks:{color:'#000000',font:{weight:'700'},callback:function(v){return v+' days';}},
          grid:{display:false}},
        x:{grid:{display:false},ticks:{color:'#006064',font:{weight:'700'}}}
      }}
  });
  CHARTS['edShareChart'] = new Chart(document.getElementById('edShareChart'),{
    type:'bar',
    data:{labels:BOROUGH_LABELS_ALL,
      datasets:[{label:'ED Share %',
        data:[80.8, 82.6, 55.5, 72.4, 70.9],
        backgroundColor:['#1F5C45','#006064','#12334A','#0B4F5A','#4C315F'],
        borderRadius:8}]},
    options:{responsive:true,maintainAspectRatio:false,
      _labelSuffix:'%', _labelPrefix:'',
      plugins:{legend:{display:false},insideLabel:{display:true}},
      scales:{
        y:{beginAtZero:true, max:100,
          ticks:{color:'#000000',font:{weight:'700'},callback:function(v){return v+'%';}},
          grid:{display:false}},
        x:{grid:{display:false},ticks:{color:'#006064',font:{weight:'700'}}}
      }}
  });
  updateDashboard();
}


function initNYCCharts() {
  CHARTS['nycBoroughBar'] = new Chart(document.getElementById('nycBoroughBar'),{
    type:'bar',
    data:{labels:BOROUGH_LABELS_ALL,
      datasets:[{label:'Prevalence (%)',data:[16.8,14.2,10.3,13.6,11.4],
        backgroundColor:['#0B4F5A','#12334A','#4C315F','#C8960C','#4C315F'],borderRadius:8}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},
      scales:{y:{beginAtZero:true,ticks:{color:'#000000',font:{weight:'700'},callback:v=>v+'%'},grid:{display:false}},x:{grid:{display:false},ticks:{color:'#006064',font:{weight:'700'}}}}}
  });
  CHARTS['nycRaceChart'] = new Chart(document.getElementById('nycRaceChart'),{
    type:'doughnut',
    data:{labels:RACE_LABELS,
      datasets:[{data:[30.2,28.7,17.4,21.3,19.8],backgroundColor:FOREST_COLORS.slice(0,5),borderWidth:2}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'right'}}}
  });
  CHARTS['nycA1cTrendChart'] = new Chart(document.getElementById('nycA1cTrendChart'),{
    type:'line',
    data:{labels:['2018','2019','2020','2021','2022'],
      datasets:[
        {label:'Bronx',    data:[30.1,30.4,30.8,29.6,28.4],borderColor:'#1F5C45',tension:0.4,pointRadius:4},
        {label:'Brooklyn', data:[26.8,27.1,27.4,26.2,25.1],borderColor:'#0B4F5A',tension:0.4,pointRadius:4},
        {label:'Manhattan',data:[20.1,20.4,20.8,20.1,19.7],borderColor:'#6A1B9A',tension:0.4,pointRadius:4},
        {label:'Queens',   data:[25.4,25.7,26.0,25.3,24.8],borderColor:'#C8960C',tension:0.4,pointRadius:4}
      ]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{position:'top',labels:{boxWidth:12}}},
      scales:{y:{ticks:{color:'#000000',font:{weight:'700'},callback:v=>v+'%'},grid:{display:false}},x:{grid:{display:false},ticks:{color:'#006064',font:{weight:'700'}}}}}
  });
}

function initProjectsCharts() {
  CHARTS['payorChart'] = new Chart(document.getElementById('payorChart'),{
    type:'doughnut',
    data:{labels:['Medicaid','Medicare','Commercial','Self-Pay','Other'],
      datasets:[{data:[62,22,9,4,3],
        backgroundColor:['#1F5C45','#0B4F5A','#6A1B9A','#C8960C','#4C315F'],borderWidth:2}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'right'}}}
  });
}

// ══════════════════════════════════════════════════
// REAL DRUG DATA — from uploaded CSV (NY APD 2023)
// ══════════════════════════════════════════════════

const DRUG_DATA_RAW = [
  // ── METFORMIN HCL ──
  {drug:'METFORMIN HCL',payer:'MEDICARE',rx:2326799,paid:69393377,members:520947,days:64.8,meanPaid:31.01,age65:86.9,pctFemale:52.0},
  {drug:'METFORMIN HCL',payer:'NYS PROGRAMS',rx:1806893,paid:8105988,members:281210,days:33.2,meanPaid:4.53,age65:11.9,pctFemale:55.4},
  {drug:'METFORMIN HCL',payer:'COMMERCIAL',rx:634125,paid:5980442,members:188240,days:45.1,meanPaid:9.43,age65:4.2,pctFemale:51.8},
  // ── SEMAGLUTIDE ──
  {drug:'SEMAGLUTIDE',payer:'MEDICARE',rx:434840,paid:479746217,members:138240,days:28.4,meanPaid:1052.60,age65:72.1,pctFemale:58.4},
  {drug:'SEMAGLUTIDE',payer:'COMMERCIAL',rx:505405,paid:684602121,members:157410,days:29.1,meanPaid:1354.60,age65:6.8,pctFemale:62.1},
  {drug:'SEMAGLUTIDE',payer:'NYS PROGRAMS',rx:346790,paid:315986511,members:108180,days:28.8,meanPaid:911.40,age65:18.4,pctFemale:60.2},
  // ── INSULIN GLARGINE ──
  {drug:'INSULIN GLARGINE',payer:'MEDICARE',rx:444099,paid:385478283,members:139240,days:88.1,meanPaid:868.40,age65:87.2,pctFemale:51.2},
  {drug:'INSULIN GLARGINE',payer:'NYS PROGRAMS',rx:394840,paid:244975781,members:123210,days:32.4,meanPaid:620.40,age65:12.1,pctFemale:54.1},
  {drug:'INSULIN GLARGINE',payer:'COMMERCIAL',rx:248932,paid:291015208,members:77890,days:58.2,meanPaid:1168.90,age65:8.4,pctFemale:50.9},
  // ── EMPAGLIFLOZIN ──
  {drug:'EMPAGLIFLOZIN',payer:'MEDICARE',rx:383340,paid:479746217,members:120710,days:87.4,meanPaid:1251.40,age65:81.2,pctFemale:48.4},
  {drug:'EMPAGLIFLOZIN',payer:'COMMERCIAL',rx:396205,paid:606781185,members:124240,days:88.1,meanPaid:1531.90,age65:8.4,pctFemale:49.1},
  {drug:'EMPAGLIFLOZIN',payer:'NYS PROGRAMS',rx:278760,paid:404334869,members:87480,days:86.8,meanPaid:1450.60,age65:14.8,pctFemale:49.8},
  // ── DULAGLUTIDE ──
  {drug:'DULAGLUTIDE',payer:'MEDICARE',rx:246062,paid:276798842,members:77710,days:28.1,meanPaid:1124.90,age65:71.8,pctFemale:57.9},
  {drug:'DULAGLUTIDE',payer:'NYS PROGRAMS',rx:300701,paid:182390408,members:94240,days:28.4,meanPaid:606.60,age65:16.2,pctFemale:59.4},
  {drug:'DULAGLUTIDE',payer:'COMMERCIAL',rx:219586,paid:145684344,members:68420,days:28.9,meanPaid:663.40,age65:5.9,pctFemale:58.8},
  // ── GLIPIZIDE ──
  {drug:'GLIPIZIDE',payer:'MEDICARE',rx:412840,paid:4280000,members:129710,days:64.1,meanPaid:10.37,age65:88.4,pctFemale:53.2},
  {drug:'GLIPIZIDE',payer:'NYS PROGRAMS',rx:298640,paid:2840000,members:93710,days:33.4,meanPaid:9.51,age65:14.1,pctFemale:54.8},
  {drug:'GLIPIZIDE',payer:'COMMERCIAL',rx:124928,paid:1243880,members:39280,days:48.8,meanPaid:9.96,age65:4.8,pctFemale:52.9},
  // ── SITAGLIPTIN PHOSPHATE ──
  {drug:'SITAGLIPTIN PHOSPHATE',payer:'MEDICARE',rx:236140,paid:108770048,members:74240,days:87.8,meanPaid:460.60,age65:83.4,pctFemale:52.1},
  {drug:'SITAGLIPTIN PHOSPHATE',payer:'NYS PROGRAMS',rx:218940,paid:162240000,members:68410,days:88.1,meanPaid:741.10,age65:14.8,pctFemale:53.4},
  {drug:'SITAGLIPTIN PHOSPHATE',payer:'COMMERCIAL',rx:167706,paid:128230275,members:52710,days:88.4,meanPaid:764.50,age65:7.2,pctFemale:51.9},
  // ── INSULIN GLARGINE-YFGN ──
  {drug:'INSULIN GLARGINE-YFGN',payer:'MEDICARE',rx:44719,paid:48775086,members:14040,days:88.1,meanPaid:1090.00,age65:87.2,pctFemale:51.4},
  {drug:'INSULIN GLARGINE-YFGN',payer:'NYS PROGRAMS',rx:27136,paid:19807449,members:8520,days:32.4,meanPaid:729.90,age65:12.1,pctFemale:54.1},
  {drug:'INSULIN GLARGINE-YFGN',payer:'COMMERCIAL',rx:12864,paid:6956124,members:4040,days:58.2,meanPaid:540.90,age65:8.4,pctFemale:50.9},
  // ── PIOGLITAZONE HCL ──
  {drug:'PIOGLITAZONE HCL',payer:'MEDICARE',rx:163748,paid:2180000,members:51410,days:87.8,meanPaid:13.31,age65:84.4,pctFemale:52.8},
  {drug:'PIOGLITAZONE HCL',payer:'NYS PROGRAMS',rx:124840,paid:1680000,members:39210,days:33.4,meanPaid:13.46,age65:13.8,pctFemale:54.1},
  {drug:'PIOGLITAZONE HCL',payer:'COMMERCIAL',rx:70419,paid:830566,members:22130,days:48.1,meanPaid:11.79,age65:5.1,pctFemale:53.4},
  // ── DAPAGLIFLOZIN ──
  {drug:'DAPAGLIFLOZIN',payer:'MEDICARE',rx:98420,paid:59996224,members:30940,days:87.4,meanPaid:609.70,age65:80.4,pctFemale:48.1},
  {drug:'DAPAGLIFLOZIN',payer:'COMMERCIAL',rx:74810,paid:80406369,members:23510,days:88.1,meanPaid:1075.00,age65:7.8,pctFemale:49.4},
  {drug:'DAPAGLIFLOZIN',payer:'NYS PROGRAMS',rx:62948,paid:97722007,members:19790,days:86.8,meanPaid:1552.50,age65:14.1,pctFemale:49.8},
];

// aggregate and store for filtering
let ALL_DRUGS = DRUG_DATA_RAW;
let FILTERED_DRUGS = [...ALL_DRUGS];

function filterDrugs() {
  const payer = document.getElementById('drugPayerFilter').value;
  const sort  = document.getElementById('drugSortFilter').value;

  FILTERED_DRUGS = payer === 'ALL'
    ? [...ALL_DRUGS]
    : ALL_DRUGS.filter(d => d.payer === payer);

  if (sort === 'rx')   FILTERED_DRUGS.sort((a,b) => b.rx - a.rx);
  if (sort === 'paid') FILTERED_DRUGS.sort((a,b) => b.paid - a.paid);
  if (sort === 'name') FILTERED_DRUGS.sort((a,b) => a.drug.localeCompare(b.drug));

  renderDrugTable();
  updateDrugCharts();
  document.getElementById('drugCount').textContent = FILTERED_DRUGS.length + ' records';
}

function renderDrugTable() {
  const tbody = document.getElementById('drugTableBody');
  tbody.innerHTML = FILTERED_DRUGS.map((d,i) => `
    <tr style="${i%2===0?'background:#C8E3CE':''}">
      <td style="font-weight:700;color:var(--deep-teal)">${d.drug}</td>
      <td><span class="badge ${d.payer==='MEDICARE'?'badge-blue':d.payer==='COMMERCIAL'?'badge-green':'badge-amber'}">${d.payer}</span></td>
      <td>${d.rx.toLocaleString()}</td>
      <td>${d.members.toLocaleString()}</td>
      <td>${d.days} days</td>
      <td>$${d.meanPaid.toLocaleString()}</td>
      <td>$${(d.paid/1000000).toFixed(1)}M</td>
      <td>${d.age65}%</td>
      <td>${d.pctFemale}%</td>
    </tr>`).join('');
  document.getElementById('drugTableWrap').style.display = 'block';
  document.getElementById('drugLoader').style.display = 'none';
}

function updateDrugCharts() {
  // Top 10 by Rx for current filter
  const top10 = [...FILTERED_DRUGS].sort((a,b)=>b.rx-a.rx).slice(0,10);
  if (CHARTS['drugTop10Chart']) {
    CHARTS['drugTop10Chart'].data.labels = top10.map(d => d.drug.length>22 ? d.drug.slice(0,22)+'…' : d.drug);
    CHARTS['drugTop10Chart'].data.datasets[0].data = top10.map(d=>d.rx);
    CHARTS['drugTop10Chart'].update('active');
  }
}

function initDrugCharts() {
  // top 10 horizontal bar
  const top10all = [...ALL_DRUGS].sort((a,b)=>b.rx-a.rx).slice(0,10);
  CHARTS['drugTop10Chart'] = new Chart(document.getElementById('drugTop10Chart'),{
    type:'bar',
    data:{
      labels: top10all.map(d=>d.drug.length>22?d.drug.slice(0,22)+'…':d.drug),
      datasets:[{label:'Prescriptions',data:top10all.map(d=>d.rx),
        backgroundColor:FOREST_COLORS.slice(0,10),borderRadius:6}]
    },
    options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false}, insideLabel:{display:false}},
      layout:{ padding:{ right:80 } },
      scales:{x:{min:0,max:4000000,ticks:{stepSize:500000,callback:v=>v>=1000000?(v/1000000).toFixed(1)+'M':v>=1000?(v/1000).toFixed(0)+'K':v},grid:{display:false}},y:{grid:{display:false}}},
    },
    plugins:[{
      id:'drugOutsideLabel',
      afterDatasetsDraw(chart) {
        const {ctx} = chart;
        chart.data.datasets.forEach((dataset,i) => {
          chart.getDatasetMeta(i).data.forEach((bar,j) => {
            const val = dataset.data[j];
            if (!val) return;
            const label = val >= 1000000 ? (val/1000000).toFixed(2)+'M' : val >= 1000 ? (val/1000).toFixed(0)+'K' : val;
            ctx.save();
            ctx.fillStyle = '#333';
            ctx.font = 'bold 11px sans-serif';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            ctx.fillText(label, bar.x + 6, bar.y);
            ctx.restore();
          });
        });
      }
    }]
  });

  // payer doughnut — real numbers with inside segment labels
  const payerDonutInsideLabels = {
    id: 'payerDonutInsideLabels',
    afterDatasetsDraw(chart) {
      const {ctx} = chart;
      const labels = ['$4.3B', '$1.9B', '$1.3B'];
      const textColors = ['#ffffff', '#000000', '#ffffff'];
      const meta = chart.getDatasetMeta(0);
      meta.data.forEach((arc, index) => {
        const props = arc.getProps(['x','y','startAngle','endAngle','innerRadius','outerRadius'], true);
        const angle = (props.startAngle + props.endAngle) / 2;
        const radius = (props.innerRadius + props.outerRadius) / 2;
        const x = props.x + Math.cos(angle) * radius;
        const y = props.y + Math.sin(angle) * radius;
        ctx.save();
        ctx.fillStyle = textColors[index];
        ctx.font = '900 15px Nunito, Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.lineWidth = 3;
        ctx.strokeStyle = index === 1 ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.45)';
        ctx.strokeText(labels[index], x, y);
        ctx.fillText(labels[index], x, y);
        ctx.restore();
      });
    }
  };

  CHARTS['drugPayerChart'] = new Chart(document.getElementById('drugPayerChart'),{
    type:'doughnut',
    data:{
      labels:['Medicare ($4.3B)','NYS Programs ($1.9B)','Commercial ($1.3B)'],
      datasets:[{data:[4326008124,1903374964,1298183384],
        backgroundColor:['#1F5C45','#C8960C','#6A1B9A'],borderWidth:2}]
    },
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{position:'bottom',labels:{boxWidth:12,color:'#000000',font:{size:11,weight:'700'}}}}},
    plugins:[payerDonutInsideLabels]
  });

  renderDrugTable();
  document.getElementById('drugCount').textContent = ALL_DRUGS.length + ' records';
}

// ══════════════════════════════════════════════════
// EPI DATA BRIEF No. 146 CHARTS — NYC DOHMH 2025
// Tables 1, 3 & 5 — NYC 2022 data
// ══════════════════════════════════════════════════
function initEPICharts() {
  if (CHARTS['epiBorough1']) return;
  const BOROUGH_COLORS = ['#006064','#12334A','#6A1B9A','#C8960C','#4C315F'];
  const BOROUGHS = ['Bronx','Brooklyn','Manhattan','Queens','Staten Island'];

  const pctOpts = (max) => ({
    responsive:true, maintainAspectRatio:false,
    _labelSuffix: '%',
    plugins:{ legend:{display:false} },
    scales:{ y:{ beginAtZero:true, max, ticks:{color:'#000000',font:{weight:'700'},callback:v=>v+'%'}, grid:{display:false} }, x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}} }
  });

  const rateOpts = () => ({
    responsive:true, maintainAspectRatio:false,
    plugins:{ legend:{display:false} },
    scales:{ y:{ beginAtZero:true, ticks:{color:'#000000',font:{weight:'700'}}, grid:{display:false}, title:{display:true,text:'Rate per 100,000',color:'#000000',font:{weight:'700'}} }, x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}} }
  });

  // Table 1 — Prevalence by borough
  CHARTS['epiBorough1'] = new Chart(document.getElementById('epiBorough1'), {
    type:'bar',
    data:{ labels:BOROUGHS, datasets:[{ label:'Diabetes Prevalence %', data:[15.1,11.6,7.9,11.7,9.0], backgroundColor:BOROUGH_COLORS, borderRadius:8 }] },
    options: pctOpts(20)
  });

  // Table 1 — Prevalence by race
  CHARTS['epiRace1'] = new Chart(document.getElementById('epiRace1'), {
    type:'bar',
    data:{ labels:['Latino','Black','Asian/PI','Other','White'], datasets:[{ label:'Diabetes Prevalence %', data:[14.0,13.6,13.4,10.2,7.0], backgroundColor:['#006064','#12334A','#6A1B9A','#4C315F','#C8960C'], borderRadius:8 }] },
    options: pctOpts(18)
  });

  // Table 1 — Prevalence by poverty
  CHARTS['epiPoverty1'] = new Chart(document.getElementById('epiPoverty1'), {
    type:'bar',
    data:{ labels:['Low (<10%)','Medium (10-20%)','High (20-30%)','Very High (30%+)'],
      datasets:[{ label:'Diabetes Prevalence %', data:[7.8,12.3,12.3,14.6], backgroundColor:['#0B4F5A','#C8960C','#4C315F','#006064'], borderRadius:8 }] },
    options: pctOpts(18)
  });

  // Table 1 — Prevalence by age
  CHARTS['epiAge1'] = new Chart(document.getElementById('epiAge1'), {
    type:'bar',
    data:{ labels:['18–44','45–64','65+'],
      datasets:[{ label:'Diabetes Prevalence %', data:[3.4,16.7,26.3], backgroundColor:['#6A1B9A','#C8960C','#006064'], borderRadius:8 }] },
    options: pctOpts(32)
  });

  // Table 3 — A1C by borough stacked
  CHARTS['epiA1CBorough'] = new Chart(document.getElementById('epiA1CBorough'), {
    type:'bar',
    data:{
      labels:BOROUGHS,
      datasets:[
        { label:'<7.0% (Controlled)',   data:[47.1,49.5,51.7,49.2,54.8], backgroundColor:'#12334A', borderRadius:0 },
        { label:'7.0–7.9%',             data:[23.8,23.9,23.7,25.6,24.2], backgroundColor:'#0B4F5A', borderRadius:0 },
        { label:'8.0–9.0%',             data:[12.6,12.2,11.6,12.2,10.7], backgroundColor:'#C8960C', borderRadius:0 },
        { label:'>9.0% (Poor Control)', data:[16.5,14.4,13.1,13.0,10.4], backgroundColor:'#560000', borderRadius:0 }
      ]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      _labelSuffix:'%',
      plugins:{ legend:{ position:'bottom', labels:{boxWidth:12,color:'#000000',font:{size:11,weight:'700'}} } },
      scales:{ x:{ stacked:true, ticks:{color:'#000000',font:{weight:'700'}}, grid:{display:false} }, y:{ stacked:true, max:100, ticks:{color:'#000000',font:{weight:'700'},callback:v=>v+'%'}, grid:{display:false} } }
    }
  });

  // Table 5 — Amputation by borough
  CHARTS['epiAmpBorough'] = new Chart(document.getElementById('epiAmpBorough'), {
    type:'bar',
    data:{ labels:BOROUGHS, datasets:[{ label:'Rate per 100,000', data:[74.5,40.7,36.3,36.9,38.5], backgroundColor:BOROUGH_COLORS, borderRadius:8 }] },
    options: rateOpts()
  });

  // Table 5 — Amputation by race
  CHARTS['epiAmpRace'] = new Chart(document.getElementById('epiAmpRace'), {
    type:'bar',
    data:{ labels:['Black','Latino','White','Asian/PI'], datasets:[{ label:'Rate per 100,000', data:[63.3,52.7,24.2,10.3], backgroundColor:['#12334A','#006064','#C8960C','#6A1B9A'], borderRadius:8 }] },
    options: rateOpts()
  });

  // Table 5 — Amputation by poverty
  CHARTS['epiAmpPoverty'] = new Chart(document.getElementById('epiAmpPoverty'), {
    type:'bar',
    data:{ labels:['Low (<10%)','Medium (10-20%)','High (20-30%)','Very High (30%+)'],
      datasets:[{ label:'Rate per 100,000', data:[27.1,38.3,50.4,81.8], backgroundColor:['#0B4F5A','#C8960C','#4C315F','#006064'], borderRadius:8 }] },
    options: rateOpts()
  });

  // Table 5 — Amputation by sex
  CHARTS['epiAmpSex'] = new Chart(document.getElementById('epiAmpSex'), {
    type:'bar',
    data:{ labels:['Male','Female'], datasets:[{ label:'Rate per 100,000', data:[70.5,21.0], backgroundColor:['#12334A','#006064'], borderRadius:8, barThickness:60 }] },
    options: rateOpts()
  });
}

// EPI 2025 public page — NYC diabetes prevalence and inequities
const EPI2025_TOPICS = {
  borough: {
    title: '🏙️ Diabetes Prevalence by Borough — 2022',
    label: 'Diabetes prevalence %',
    suffix: '%',
    max: 18,
    labels: ['Bronx','Brooklyn','Manhattan','Queens','Staten Island'],
    values: [15.1,11.6,7.9,11.7,9.0],
    colors: ['#006064','#12334A','#C8960C','#0B4F5A','#4C315F'],
    highlightValue: '15.1%',
    highlightText: 'Bronx had the highest borough prevalence.'
  },
  race: {
    title: '🧬 Diabetes Prevalence by Race/Ethnicity — 2022',
    label: 'Diabetes prevalence %',
    suffix: '%',
    max: 18,
    labels: ['Latino','Black','Asian/PI','Other','White'],
    values: [14.0,13.6,13.4,10.2,7.0],
    colors: ['#006064','#12334A','#6A1B9A','#4C315F','#C8960C'],
    highlightValue: '14.0%',
    highlightText: 'Latino adults had the highest prevalence in the brief.'
  },
  age: {
    title: '📅 Diabetes Prevalence by Age Group — 2022',
    label: 'Diabetes prevalence %',
    suffix: '%',
    max: 32,
    labels: ['18-44','45-64','65+'],
    values: [3.4,16.7,26.3],
    colors: ['#6A1B9A','#C8960C','#006064'],
    highlightValue: '26.3%',
    highlightText: 'Adults 65 and older had the highest prevalence.'
  },
  poverty: {
    title: '💰 Diabetes Prevalence by Neighborhood Poverty — 2022',
    label: 'Diabetes prevalence %',
    suffix: '%',
    max: 18,
    labels: ['Low poverty','Medium poverty','High poverty','Very high poverty'],
    values: [7.8,12.3,12.3,14.6],
    colors: ['#0B4F5A','#C8960C','#4C315F','#006064'],
    highlightValue: '14.6%',
    highlightText: 'Very high poverty neighborhoods had the highest prevalence.'
  },
  a1c: {
    title: '🧪 Poor A1C Control by Borough — 2022',
    label: 'A1C >9% among patients %',
    suffix: '%',
    max: 20,
    labels: ['Bronx','Brooklyn','Manhattan','Queens','Staten Island'],
    values: [16.5,14.4,13.1,13.0,10.4],
    colors: ['#560000','#006064','#12334A','#0B4F5A','#4C315F'],
    highlightValue: '16.5%',
    highlightText: 'Bronx had the highest share of poor A1C control.'
  },
  amputation: {
    title: '🦵 Diabetes-Related Amputation Rate — 2022',
    label: 'Rate per 100,000 people',
    suffix: ' per 100K',
    max: 90,
    labels: ['Bronx','Brooklyn','Manhattan','Queens','Staten Island'],
    values: [74.5,40.7,36.3,36.9,38.5],
    colors: ['#560000','#006064','#12334A','#0B4F5A','#4C315F'],
    highlightValue: '74.5',
    highlightText: 'Bronx had the highest lower-extremity amputation rate.'
  }
};
const EPI2025_MAP_ROWS = [
  { key:'bronx', label:'Bronx', prevalence:15.1, lat:40.8448, lng:-73.8648 },
  { key:'brooklyn', label:'Brooklyn', prevalence:11.6, lat:40.6782, lng:-73.9442 },
  { key:'manhattan', label:'Manhattan', prevalence:7.9, lat:40.7831, lng:-73.9712 },
  { key:'queens', label:'Queens', prevalence:11.7, lat:40.7282, lng:-73.7949 },
  { key:'statenisland', label:'Staten Island', prevalence:9.0, lat:40.5795, lng:-74.1502 }
];
function epi2025ValueFormat(topic, value) {
  if (topic === 'amputation') return value.toFixed(1) + ' per 100K';
  return value.toFixed(1) + '%';
}

function setEpi2025Topic(topic) {
  const data = EPI2025_TOPICS[topic] || EPI2025_TOPICS.borough;
  document.querySelectorAll('.epi2025-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.epiTab === topic);
  });
  document.querySelectorAll('.epi2025-detail-section').forEach(section => {
    const topics = (section.dataset.epiDetail || '').split(/\s+/);
    section.classList.toggle('epi2025-detail-hidden', !topics.includes(topic));
  });
  document.querySelectorAll('.epi2025-topic-card').forEach(card => {
    const topics = (card.dataset.epiCard || '').split(/\s+/);
    card.classList.toggle('epi2025-detail-hidden', !topics.includes(topic));
  });
  const title = document.getElementById('epi2025TopicTitle');
  const trendTitle = document.getElementById('epi2025TrendTitle');
  const value = document.getElementById('epi2025HighlightValue');
  const text = document.getElementById('epi2025HighlightText');
  if (title) title.textContent = data.title;
  if (trendTitle) trendTitle.textContent = 'Topic Highlight — ' + data.label;
  if (value) value.textContent = data.highlightValue;
  if (text) text.textContent = data.highlightText;

  const topicCanvas = document.getElementById('epi2025TopicChart');
  if (topicCanvas && window.Chart) {
    if (CHARTS.epi2025TopicChart) CHARTS.epi2025TopicChart.destroy();
    CHARTS.epi2025TopicChart = new Chart(topicCanvas, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [{ label: data.label, data: data.values, backgroundColor: data.colors, borderRadius: 8 }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        indexAxis: data.labels.length > 4 ? 'y' : 'x',
        plugins: {
          legend: { display:false },
          tooltip: { callbacks: { label: ctx => data.label + ': ' + epi2025ValueFormat(topic, data.labels.length > 4 ? ctx.parsed.x : ctx.parsed.y) } }
        },
        scales: {
          x: data.labels.length > 4
            ? { beginAtZero:true, max:data.max, ticks:{color:'#000000',font:{weight:'700'},callback:v => epi2025ValueFormat(topic, Number(v))}, grid:{display:false} }
            : { ticks:{color:'#000000',font:{weight:'700'}}, grid:{display:false} },
          y: data.labels.length > 4
            ? { ticks:{color:'#000000',font:{weight:'700'}}, grid:{display:false} }
            : { beginAtZero:true, max:data.max, ticks:{color:'#000000',font:{weight:'700'},callback:v => epi2025ValueFormat(topic, Number(v))}, grid:{display:false} }
        }
      }
    });
  }

  const rankCanvas = document.getElementById('epi2025RankChart');
  if (rankCanvas && window.Chart) {
    const ranked = data.labels.map((label, i) => ({ label, value:data.values[i], color:data.colors[i] })).sort((a, b) => b.value - a.value);
    if (CHARTS.epi2025RankChart) CHARTS.epi2025RankChart.destroy();
    CHARTS.epi2025RankChart = new Chart(rankCanvas, {
      type: 'line',
      data: {
        labels: ranked.map(row => row.label),
        datasets: [{
          label: data.label,
          data: ranked.map(row => row.value),
          borderColor: '#B85F1F',
          backgroundColor: 'rgba(242,197,124,0.58)',
          pointBackgroundColor: '#2E8B8B',
          pointBorderColor: '#2a1a40',
          pointRadius: 5,
          tension: 0.3,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: { legend:{display:false} },
        scales: {
          y: { beginAtZero:true, max:data.max, ticks:{color:'#000000',font:{weight:'700'},callback:v => epi2025ValueFormat(topic, Number(v))}, grid:{display:false} },
          x: { ticks:{color:'#000000',font:{weight:'700'}}, grid:{display:false} }
        }
      }
    });
  }
  setTimeout(() => {
    Object.values(CHARTS).forEach(chart => {
      if (chart && typeof chart.resize === 'function') chart.resize();
    });
  }, 80);
}
window.setEpi2025Topic = setEpi2025Topic;

const EPI2025_UHF34 = [
  {name:'Southwest Queens', borough:'Queens', count:56000, value:22.7, ci:'15.6-31.8', lat:40.685, lng:-73.835},
  {name:'Pelham - Throgs Neck', borough:'Bronx', count:44000, value:18.3, ci:'13.0-25.2', lat:40.842, lng:-73.828},
  {name:'East Harlem', borough:'Manhattan', count:16000, value:17.3, ci:'11.7-24.8', lat:40.795, lng:-73.936},
  {name:'East New York', borough:'Brooklyn', count:26000, value:17.1, ci:'11.9-24.0', lat:40.666, lng:-73.882},
  {name:'Flatbush', borough:'Brooklyn', count:43000, value:16.4, ci:'11.1-23.5', lat:40.641, lng:-73.959},
  {name:'South Bronx', borough:'Bronx', count:62000, value:15.6, ci:'11.7-20.5', lat:40.817, lng:-73.912},
  {name:'Bedford Stuyvesant - Crown Heights', borough:'Brooklyn', count:39000, value:15.4, ci:'10.7-21.7', lat:40.675, lng:-73.932},
  {name:'Northeast Bronx', borough:'Bronx', count:26000, value:14.9, ci:'9.3-23.0', lat:40.875, lng:-73.852},
  {name:'Jamaica', borough:'Queens', count:39000, value:14.8, ci:'10.3-20.8', lat:40.702, lng:-73.789},
  {name:'Coney Island', borough:'Brooklyn', count:40000, value:13.8, ci:'9.6-19.6', lat:40.583, lng:-73.965},
  {name:'Rockaway', borough:'Queens', count:14000, value:13.3, ci:'8.8-19.4', lat:40.59, lng:-73.80},
  {name:'Washington Heights', borough:'Manhattan', count:30000, value:12.9, ci:'7.5-21.4', lat:40.84, lng:-73.94},
  {name:'Sunset Park', borough:'Brooklyn', count:11000, value:12.5, ci:'6.3-23.4', lat:40.645, lng:-74.012},
  {name:'Fordham - Bronx Park', borough:'Bronx', count:21000, value:12.1, ci:'8.5-16.9', lat:40.861, lng:-73.891},
  {name:'Kingsbridge', borough:'Bronx', count:10000, value:11.2, ci:'5.9-20.1', lat:40.881, lng:-73.905},
  {name:'Southeast Queens', borough:'Queens', count:21000, value:10.6, ci:'6.2-17.6', lat:40.678, lng:-73.741},
  {name:'West Queens', borough:'Queens', count:36000, value:9.9, ci:'6.6-14.6', lat:40.745, lng:-73.89},
  {name:'Flushing', borough:'Queens', count:27000, value:9.9, ci:'6.0-15.8', lat:40.765, lng:-73.83},
  {name:'Williamsburg - Bushwick', borough:'Brooklyn', count:14000, value:9.7, ci:'5.4-16.9', lat:40.704, lng:-73.93},
  {name:'Borough Park', borough:'Brooklyn', count:23000, value:9.6, ci:'5.6-15.9', lat:40.633, lng:-73.996},
  {name:'Central Harlem', borough:'Manhattan', count:12000, value:9.7, ci:'5.3-17.0', lat:40.811, lng:-73.946},
  {name:'Northern Staten Island', borough:'Staten Island', count:17000, value:9.6, ci:'5.3-16.8', lat:40.631, lng:-74.093},
  {name:'Long Island City, Astoria', borough:'Queens', count:14000, value:9.0, ci:'4.7-16.5', lat:40.755, lng:-73.925},
  {name:'Bayside Little Neck-Fresh Meadows', borough:'Queens', count:15000, value:8.5, ci:'5.3-13.4', lat:40.746, lng:-73.78},
  {name:'Southern Staten Island', borough:'Staten Island', count:21000, value:8.5, ci:'5.7-12.5', lat:40.55, lng:-74.18},
  {name:'Canarsie', borough:'Brooklyn', count:15000, value:8.4, ci:'5.1-13.6', lat:40.637, lng:-73.90},
  {name:'Bensonhurst', borough:'Brooklyn', count:15000, value:8.3, ci:'4.7-14.5', lat:40.611, lng:-73.995},
  {name:'Ridgewood', borough:'Queens', count:19000, value:8.0, ci:'4.4-14.1', lat:40.71, lng:-73.90},
  {name:'Union Square-Lower Manhattan', borough:'Manhattan', count:17000, value:7.7, ci:'4.2-13.7', lat:40.725, lng:-73.995},
  {name:'Upper West Side', borough:'Manhattan', count:13000, value:6.0, ci:'2.6-13.1', lat:40.787, lng:-73.975},
  {name:'Chelsea-Village', borough:'Manhattan', count:13000, value:6.0, ci:'3.4-10.4', lat:40.742, lng:-74.0},
  {name:'Downtown - Heights - Park Slope', borough:'Brooklyn', count:10000, value:5.7, ci:'3.2-10.0', lat:40.684, lng:-73.99},
  {name:'Greenpoint', borough:'Brooklyn', count:3000, value:4.4, ci:'1.8-10.7', lat:40.73, lng:-73.954},
  {name:'Upper East Side-Gramercy', borough:'Manhattan', count:13000, value:3.7, ci:'2.0-6.9', lat:40.768, lng:-73.959}
];
const EPI2025_UHF42_A1C = [
  {name:'Kingsbridge - Riverdale', borough:'Bronx', count:753, denom:5649, value:13.3, lat:40.881, lng:-73.905},
  {name:'Northeast Bronx', borough:'Bronx', count:2523, denom:16708, value:15.1, lat:40.875, lng:-73.852},
  {name:'Fordham - Bronx Park', borough:'Bronx', count:3392, denom:19530, value:17.4, lat:40.861, lng:-73.891},
  {name:'Pelham - Throgs Neck', borough:'Bronx', count:4134, denom:26575, value:15.6, lat:40.842, lng:-73.828},
  {name:'Crotona - Tremont', borough:'Bronx', count:3271, denom:19002, value:17.2, lat:40.842, lng:-73.887},
  {name:'High Bridge - Morrisania', borough:'Bronx', count:3395, denom:19591, value:17.3, lat:40.834, lng:-73.917},
  {name:'Hunts Point - Mott Haven', borough:'Bronx', count:2244, denom:12316, value:18.2, lat:40.812, lng:-73.908},
  {name:'Greenpoint', borough:'Brooklyn', count:678, denom:5162, value:13.1, lat:40.73, lng:-73.954},
  {name:'Downtown - Heights - Park Slope', borough:'Brooklyn', count:1125, denom:8456, value:13.3, lat:40.684, lng:-73.99},
  {name:'Bedford Stuyvesant - Crown Heights', borough:'Brooklyn', count:4036, denom:23860, value:16.9, lat:40.675, lng:-73.932},
  {name:'East New York', borough:'Brooklyn', count:2989, denom:17511, value:17.1, lat:40.666, lng:-73.882},
  {name:'Sunset Park', borough:'Brooklyn', count:1283, denom:10012, value:12.8, lat:40.645, lng:-74.012},
  {name:'Borough Park', borough:'Brooklyn', count:2512, denom:20387, value:12.3, lat:40.633, lng:-73.996},
  {name:'East Flatbush - Flatbush', borough:'Brooklyn', count:4368, denom:25473, value:17.1, lat:40.645, lng:-73.94},
  {name:'Canarsie - Flatlands', borough:'Brooklyn', count:2734, denom:18222, value:15.0, lat:40.637, lng:-73.90},
  {name:'Bensonhurst - Bay Ridge', borough:'Brooklyn', count:1509, denom:14077, value:10.7, lat:40.611, lng:-73.995},
  {name:'Coney Island - Sheepshead Bay', borough:'Brooklyn', count:2321, denom:21698, value:10.7, lat:40.583, lng:-73.965},
  {name:'Williamsburg - Bushwick', borough:'Brooklyn', count:2250, denom:13906, value:16.2, lat:40.704, lng:-73.93},
  {name:'Washington Heights - Inwood', borough:'Manhattan', count:3367, denom:21748, value:15.5, lat:40.84, lng:-73.94},
  {name:'Central Harlem - Morningside Heights', borough:'Manhattan', count:1988, denom:12286, value:16.2, lat:40.811, lng:-73.946},
  {name:'East Harlem', borough:'Manhattan', count:1700, denom:10540, value:16.1, lat:40.795, lng:-73.936},
  {name:'Upper West Side', borough:'Manhattan', count:879, denom:8459, value:10.4, lat:40.787, lng:-73.975},
  {name:'Upper East Side', borough:'Manhattan', count:453, denom:5701, value:7.9, lat:40.768, lng:-73.959},
  {name:'Chelsea - Clinton', borough:'Manhattan', count:784, denom:6205, value:12.6, lat:40.742, lng:-74.0},
  {name:'Gramercy Park - Murray Hill', borough:'Manhattan', count:550, denom:4892, value:11.2, lat:40.745, lng:-73.975},
  {name:'Greenwich Village - Soho', borough:'Manhattan', count:172, denom:2245, value:7.7, lat:40.728, lng:-74.002},
  {name:'Union Square - Lower East Side', borough:'Manhattan', count:1319, denom:12986, value:10.2, lat:40.725, lng:-73.995},
  {name:'Lower Manhattan', borough:'Manhattan', count:168, denom:1989, value:8.4, lat:40.708, lng:-74.011},
  {name:'Long Island City - Astoria', borough:'Queens', count:1630, denom:11886, value:13.7, lat:40.755, lng:-73.925},
  {name:'West Queens', borough:'Queens', count:5225, denom:37945, value:13.8, lat:40.745, lng:-73.89},
  {name:'Flushing - Clearview', borough:'Queens', count:2099, denom:24830, value:8.5, lat:40.765, lng:-73.83},
  {name:'Bayside - Little Neck', borough:'Queens', count:472, denom:6288, value:7.5, lat:40.746, lng:-73.78},
  {name:'Ridgewood - Forest Hills', borough:'Queens', count:1636, denom:15397, value:10.6, lat:40.71, lng:-73.90},
  {name:'Fresh Meadows', borough:'Queens', count:753, denom:7980, value:9.4, lat:40.735, lng:-73.79},
  {name:'Southwest Queens', borough:'Queens', count:4450, denom:30790, value:14.5, lat:40.685, lng:-73.835},
  {name:'Jamaica', borough:'Queens', count:5511, denom:36159, value:15.2, lat:40.702, lng:-73.789},
  {name:'Southeast Queens', borough:'Queens', count:2910, denom:21015, value:13.8, lat:40.678, lng:-73.741},
  {name:'Rockaway', borough:'Queens', count:1430, denom:8906, value:16.1, lat:40.59, lng:-73.80},
  {name:'Port Richmond', borough:'Staten Island', count:817, denom:5604, value:14.6, lat:40.633, lng:-74.136},
  {name:'Stapleton - St. George', borough:'Staten Island', count:1119, denom:9540, value:11.7, lat:40.641, lng:-74.077},
  {name:'Willowbrook', borough:'Staten Island', count:633, denom:7450, value:8.5, lat:40.604, lng:-74.151},
  {name:'South Beach - Tottenville', borough:'Staten Island', count:1123, denom:13064, value:8.6, lat:40.55, lng:-74.18}
];
const EPI2025_UHF42_LEA = [
  {name:'Kingsbridge - Riverdale', borough:'Bronx', count:36, value:39.4, lat:40.881, lng:-73.905},
  {name:'Northeast Bronx', borough:'Bronx', count:115, value:62.1, lat:40.875, lng:-73.852},
  {name:'Fordham - Bronx Park', borough:'Bronx', count:116, value:61.4, lat:40.861, lng:-73.891},
  {name:'Pelham - Throgs Neck', borough:'Bronx', count:180, value:73.5, lat:40.842, lng:-73.828},
  {name:'Crotona - Tremont', borough:'Bronx', count:129, value:86.8, lat:40.842, lng:-73.887},
  {name:'High Bridge - Morissania', borough:'Bronx', count:123, value:77.5, lat:40.834, lng:-73.917},
  {name:'Hunts Point - Mott Haven', borough:'Bronx', count:101, value:100.5, lat:40.812, lng:-73.908},
  {name:'Greenpoint', borough:'Brooklyn', count:29, value:32.7, lat:40.73, lng:-73.954},
  {name:'Downtown - Heights - Park Slope', borough:'Brooklyn', count:53, value:28.9, lat:40.684, lng:-73.99},
  {name:'Bedford Stuyvesant - Crown Heights', borough:'Brooklyn', count:159, value:61.2, lat:40.675, lng:-73.932},
  {name:'East New York', borough:'Brooklyn', count:70, value:44.8, lat:40.666, lng:-73.882},
  {name:'Sunset Park', borough:'Brooklyn', count:38, value:42.9, lat:40.645, lng:-74.012},
  {name:'Borough Park', borough:'Brooklyn', count:74, value:28.6, lat:40.633, lng:-73.996},
  {name:'East Flatbush - Flatbush', borough:'Brooklyn', count:105, value:38.5, lat:40.641, lng:-73.959},
  {name:'Canarsie - Flatlands', borough:'Brooklyn', count:80, value:41.3, lat:40.637, lng:-73.90},
  {name:'Bensonhurst - Bay Ridge', borough:'Brooklyn', count:47, value:24.3, lat:40.611, lng:-73.995},
  {name:'Coney Island - Sheepshead Bay', borough:'Brooklyn', count:99, value:32.0, lat:40.583, lng:-73.965},
  {name:'Williamsburg - Bushwick', borough:'Brooklyn', count:96, value:64.4, lat:40.704, lng:-73.93},
  {name:'Washington Heights - Inwood', borough:'Manhattan', count:93, value:40.9, lat:40.84, lng:-73.94},
  {name:'Central Harlem - Morningside Heights', borough:'Manhattan', count:73, value:52.9, lat:40.811, lng:-73.946},
  {name:'East Harlem', borough:'Manhattan', count:108, value:115.5, lat:40.795, lng:-73.936},
  {name:'Upper West Side', borough:'Manhattan', count:42, value:17.9, lat:40.787, lng:-73.975},
  {name:'Upper East Side', borough:'Manhattan', count:37, value:18.5, lat:40.768, lng:-73.959},
  {name:'Chelsea - Clinton', borough:'Manhattan', count:39, value:28.6, lat:40.742, lng:-74.0},
  {name:'Gramercy Park - Murray Hill', borough:'Manhattan', count:22, value:18.9, lat:40.742, lng:-73.985},
  {name:'Greenwich Village - Soho', borough:'Manhattan', count:12, value:17.0, lat:40.725, lng:-74.0},
  {name:'Union Square - Lower East Side', borough:'Manhattan', count:54, value:32.1, lat:40.725, lng:-73.995},
  {name:'Long Island City - Astoria', borough:'Queens', count:48, value:30.5, lat:40.755, lng:-73.925},
  {name:'West Queens', borough:'Queens', count:117, value:30.6, lat:40.745, lng:-73.89},
  {name:'Flushing - Clearview', borough:'Queens', count:69, value:24.5, lat:40.765, lng:-73.83},
  {name:'Bayside - Little Neck', borough:'Queens', count:28, value:26.1, lat:40.746, lng:-73.78},
  {name:'Ridgewood - Forest Hills', borough:'Queens', count:63, value:25.0, lat:40.71, lng:-73.90},
  {name:'Fresh Meadows', borough:'Queens', count:25, value:26.7, lat:40.735, lng:-73.782},
  {name:'Southwest Queens', borough:'Queens', count:109, value:44.1, lat:40.685, lng:-73.835},
  {name:'Jamaica', borough:'Queens', count:153, value:50.8, lat:40.702, lng:-73.789},
  {name:'Southeast Queens', borough:'Queens', count:97, value:44.1, lat:40.678, lng:-73.741},
  {name:'Rockaway', borough:'Queens', count:68, value:58.2, lat:40.59, lng:-73.80},
  {name:'Port Richmond', borough:'Staten Island', count:31, value:56.5, lat:40.633, lng:-74.136},
  {name:'Stapleton - St. George', borough:'Staten Island', count:48, value:40.4, lat:40.641, lng:-74.077},
  {name:'Willowbrook', borough:'Staten Island', count:37, value:39.3, lat:40.604, lng:-74.151},
  {name:'South Beach - Tottenville', borough:'Staten Island', count:58, value:30.5, lat:40.55, lng:-74.18}
];
function epi2025MakeBar(id, labels, values, label, max, colors, axis) {
  const el = document.getElementById(id);
  if (!el || !window.Chart) return;
  if (CHARTS[id]) CHARTS[id].destroy();
  CHARTS[id] = new Chart(el, {
    type:'bar',
    data:{ labels, datasets:[{ label, data:values, backgroundColor:colors || FOREST_COLORS, borderRadius:8 }] },
    options:{
      responsive:true, maintainAspectRatio:false, animation:false, indexAxis:axis || 'x',
      plugins:{ legend:{display:false}, tooltip:{callbacks:{label:ctx => label + ': ' + (axis === 'y' ? ctx.parsed.x : ctx.parsed.y).toLocaleString()}} },
      scales:{
        x: axis === 'y' ? {beginAtZero:true,max,ticks:{color:'#000000',font:{weight:'700'},stepSize:max === 100 ? 20 : undefined},grid:{display:false}} : {ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}},
        y: axis === 'y' ? {ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}} : {beginAtZero:true,max,ticks:{color:'#000000',font:{weight:'700'},stepSize:max === 100 ? 20 : undefined},grid:{display:false}}
      }
    }
  });
}

function epi2025MaxRedColors(values, palette) {
  const max = Math.max(...values);
  const base = palette || ['#0B4F5A','#C8960C','#4C315F','#006064','#12334A','#1F5C45'];
  return values.map((value, i) => value === max ? '#560000' : base[i % base.length]);
}

function epi2025MakeTable1PrevalenceBar(id, rows, max, axis) {
  const el = document.getElementById(id);
  if (!el || !window.Chart) return;
  if (CHARTS[id]) CHARTS[id].destroy();
  const values = rows.map(r => r.value);
  CHARTS[id] = new Chart(el, {
    type:'bar',
    data:{
      labels:rows.map(r => r.label),
      datasets:[{
        label:'Prevalence %',
        data:values,
        backgroundColor:epi2025MaxRedColors(values),
        borderRadius:8
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      animation:false,
      indexAxis:axis || 'x',
      plugins:{
        legend:{display:false},
        tooltip:{callbacks:{label:function(ctx){const r=rows[ctx.dataIndex]; return r.value+'% · Weighted N '+r.weighted.toLocaleString()+' · 95% CI '+r.lower+'-'+r.upper+' · p-value '+r.p;}}}
      },
      scales:{
        x: axis === 'y' ? {beginAtZero:true,max,ticks:{color:'#000000',font:{weight:'700'},callback:v=>v+'%'},grid:{display:false}} : {ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}},
        y: axis === 'y' ? {ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}} : {beginAtZero:true,max,ticks:{color:'#000000',font:{weight:'700'},callback:v=>v+'%'},grid:{display:false}}
      }
    }
  });
}

function epi2025MakeTable1CiGroupBar(id, rows, max) {
  const el = document.getElementById(id);
  if (!el || !window.Chart) return;
  if (CHARTS[id]) CHARTS[id].destroy();
  const values = rows.map(r => r.value);
  CHARTS[id] = new Chart(el, {
    type:'bar',
    data:{
      labels:rows.map(r => r.label),
      datasets:[
        {label:'Lower 95% CI', data:rows.map(r => r.lower), backgroundColor:'#8FC6A3', borderRadius:8},
        {label:'%', data:values, backgroundColor:epi2025MaxRedColors(values, ['#0B4F5A','#0B4F5A','#0B4F5A','#0B4F5A','#0B4F5A','#0B4F5A']), borderRadius:8},
        {label:'Upper 95% CI', data:rows.map(r => r.upper), backgroundColor:'#C8960C', borderRadius:8}
      ]
    },
    options:{
      indexAxis:'y',
      responsive:true,
      maintainAspectRatio:false,
      animation:false,
      plugins:{
        legend:{position:'bottom',labels:{boxWidth:12,color:'#000000',font:{size:11,weight:'700'}}},
        tooltip:{callbacks:{label:function(ctx){const r=rows[ctx.dataIndex]; return ctx.dataset.label+': '+ctx.parsed.x+'% · Weighted N '+r.weighted.toLocaleString()+' · p-value '+(r.p || '-');}}}
      },
      scales:{
        x:{beginAtZero:true,max,ticks:{color:'#000000',font:{weight:'700'},callback:v=>v+'%'},grid:{display:false}},
        y:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}
      }
    }
  });
}

function epi2025MakeStacked(id, labels, datasets) {
  const el = document.getElementById(id);
  if (!el || !window.Chart) return;
  if (CHARTS[id]) CHARTS[id].destroy();
  CHARTS[id] = new Chart(el, {
    type:'bar',
    data:{ labels, datasets },
    options:{
      responsive:true, maintainAspectRatio:false, animation:false,
      plugins:{ legend:{position:'bottom',labels:{boxWidth:12,color:'#000000',font:{size:11,weight:'700'}}} },
      scales:{ x:{stacked:true,ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}, y:{stacked:true,max:100,ticks:{color:'#000000',font:{weight:'700'},callback:v=>v+'%'},grid:{display:false}} }
    }
  });
}

function epi2025MakeA1CDistribution(id, rows) {
  const el = document.getElementById(id);
  if (!el || !window.Chart) return;
  if (CHARTS[id]) CHARTS[id].destroy();
  CHARTS[id] = new Chart(el, {
    type:'bar',
    data:{
      labels: rows.map(r => r.label),
      datasets:[
        {label:'<7.0%', data:rows.map(r => r.pct[0]), backgroundColor:'#12334A'},
        {label:'7.0-7.9%', data:rows.map(r => r.pct[1]), backgroundColor:'#0B4F5A'},
        {label:'8.0-9.0%', data:rows.map(r => r.pct[2]), backgroundColor:'#C8960C'},
        {label:'>9%', data:rows.map(r => r.pct[3]), backgroundColor:'#560000'}
      ]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      animation:false,
      plugins:{
        legend:{position:'bottom',labels:{boxWidth:12,color:'#000000',font:{size:11,weight:'700'}}},
        tooltip:{callbacks:{label:function(ctx){const r=rows[ctx.dataIndex]; const count=r.counts[ctx.datasetIndex]; return ctx.dataset.label+': '+ctx.parsed.y+'% · '+count.toLocaleString()+' people';}}}
      },
      scales:{
        x:{stacked:true,ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}},
        y:{stacked:true,max:100,ticks:{color:'#000000',font:{weight:'700'},callback:v=>v+'%'},grid:{display:false}}
      }
    }
  });
}

function epi2025MakeA1CBoroughNeighborhoodBar(id, borough) {
  const rows = EPI2025_UHF42_A1C.filter(r => r.borough === borough);
  const el = document.getElementById(id);
  if (!el || !window.Chart) return;
  if (CHARTS[id]) CHARTS[id].destroy();
  CHARTS[id] = new Chart(el, {
    type:'bar',
    data:{
      labels: rows.map(r => r.name),
      datasets:[{
        label:'Percent with last A1C > 9%',
        data: rows.map(r => r.value),
        backgroundColor:epi2025MaxRedColors(rows.map(r => r.value), ['#0B4F5A','#C8960C','#4C315F','#006064','#12334A','#1F5C45']),
        borderRadius:8,
        custom: rows
      }]
    },
    options:{
      indexAxis:'y',
      responsive:true,
      maintainAspectRatio:false,
      animation:false,
      plugins:{
        legend:{display:false},
        tooltip:{callbacks:{label:function(ctx){const r=rows[ctx.dataIndex]; return r.value+'% · '+r.count.toLocaleString()+' of '+r.denom.toLocaleString()+' adults';}}}
      },
      scales:{
        x:{beginAtZero:true,max:20,ticks:{color:'#000000',font:{weight:'700'},callback:v=>v+'%'},grid:{display:false}},
        y:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}
      }
    }
  });
}

function epi2025MakeUhf34BoroughBar(id, borough) {
  const rows = EPI2025_UHF34
    .filter(r => r.borough === borough)
    .slice()
    .sort((a,b) => b.value - a.value);
  const el = document.getElementById(id);
  if (!el || !window.Chart) return;
  if (CHARTS[id]) CHARTS[id].destroy();
  CHARTS[id] = new Chart(el, {
    type:'bar',
    data:{
      labels: rows.map(r => r.name),
      datasets:[{
        label:'Diabetes prevalence %',
        data:rows.map(r => r.value),
        backgroundColor:epi2025MaxRedColors(rows.map(r => r.value), ['#0B4F5A','#C8960C','#4C315F','#006064','#12334A','#1F5C45']),
        borderRadius:8
      }]
    },
    options:{
      indexAxis:'y',
      responsive:true,
      maintainAspectRatio:false,
      animation:false,
      plugins:{
        legend:{display:false},
        tooltip:{callbacks:{label:function(ctx){const r=rows[ctx.dataIndex]; return r.value+'% · Weighted N '+r.count.toLocaleString()+' · 95% CI '+r.ci;}}}
      },
      scales:{
        x:{beginAtZero:true,max:25,ticks:{color:'#000000',font:{weight:'700'},callback:v=>v+'%'},grid:{display:false}},
        y:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}
      }
    }
  });
}

function epi2025MakeLeaNeighborhoodBar(id, borough) {
  const rows = EPI2025_UHF42_LEA
    .filter(r => r.borough === borough)
    .slice()
    .sort((a,b) => b.value - a.value);
  const el = document.getElementById(id);
  if (!el || !window.Chart) return;
  if (CHARTS[id]) CHARTS[id].destroy();
  CHARTS[id] = new Chart(el, {
    type:'bar',
    data:{
      labels: rows.map(r => r.name),
      datasets:[{
        label:'LEA rate per 100,000 adults',
        data:rows.map(r => r.value),
        backgroundColor:epi2025MaxRedColors(rows.map(r => r.value), ['#2F7D3A','#0B4F5A','#C8960C','#4C315F','#006064','#12334A']),
        borderRadius:8
      }]
    },
    options:{
      indexAxis:'y',
      responsive:true,
      maintainAspectRatio:false,
      animation:false,
      plugins:{
        legend:{display:false},
        tooltip:{callbacks:{label:function(ctx){const r=rows[ctx.dataIndex]; return r.value+' per 100,000 adults · '+r.count.toLocaleString()+' LEAs';}}}
      },
      scales:{
        x:{beginAtZero:true,max:125,ticks:{color:'#000000',font:{weight:'700'},stepSize:25},grid:{display:false}},
        y:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}
      }
    }
  });
}

function initEpi2025DeepDiveCharts() {
  if (!window.Chart) return;
  const t1AgeRows = [
    {label:'18-44', weighted:113000, value:3.4, lower:2.6, upper:4.4, p:'reference'},
    {label:'45-64', weighted:352000, value:16.7, lower:14.8, upper:18.9, p:'<0.001'},
    {label:'65+', weighted:329000, value:26.3, lower:23.2, upper:29.6, p:'<0.001'}
  ];
  const t1SexRows = [
    {label:'Female', weighted:384000, value:10.0, lower:8.9, upper:11.3, p:'reference'},
    {label:'Male', weighted:409000, value:12.8, lower:11.3, upper:14.4, p:'0.005'}
  ];
  const t1RaceRows = [
    {label:'White', weighted:177000, value:7.0, lower:5.9, upper:8.3, p:'reference'},
    {label:'Black', weighted:206000, value:13.6, lower:11.6, upper:15.9, p:'<0.001'},
    {label:'Latino', weighted:251000, value:14.0, lower:11.9, upper:16.4, p:'<0.001'},
    {label:'Asian/Pacific Islander', weighted:136000, value:13.4, lower:11.1, upper:16.1, p:'<0.001'},
    {label:'Other', weighted:24000, value:10.2, lower:6.2, upper:16.1, p:'0.211'}
  ];
  const t1PovertyRows = [
    {label:'Low poverty (<10%)', weighted:149000, value:7.8, lower:6.5, upper:9.3, p:'reference'},
    {label:'Medium poverty (10 to <20%)', weighted:393000, value:12.3, lower:10.8, upper:13.9, p:'<0.001'},
    {label:'High poverty (20 to <30%)', weighted:144000, value:12.3, lower:10.3, upper:14.6, p:'0.001'},
    {label:'Very high poverty (30%+)', weighted:108000, value:14.6, lower:11.8, upper:18.0, p:'<0.001'}
  ];
  const t1BoroughRows = [
    {label:'Bronx', weighted:162000, value:15.1, lower:12.7, upper:17.8, p:'<0.001'},
    {label:'Brooklyn', weighted:240000, value:11.6, lower:10.0, upper:13.4, p:'0.005'},
    {label:'Manhattan', weighted:113000, value:7.9, lower:6.2, upper:10.0, p:'reference'},
    {label:'Queens', weighted:241000, value:11.7, lower:10.0, upper:13.7, p:'0.005'},
    {label:'Staten Island', weighted:38000, value:9.0, lower:6.3, upper:12.7, p:'0.572'}
  ];
  const t1WeightedRows = [
    {label:'NYC overall', weighted:794000, value:11.3, lower:10.4, upper:12.3, p:''}
  ].concat(t1AgeRows, t1SexRows, t1RaceRows, t1PovertyRows, t1BoroughRows);
  epi2025MakeTable1PrevalenceBar('epi2025T1Age', t1AgeRows, 32);
  epi2025MakeTable1PrevalenceBar('epi2025T1Sex', t1SexRows, 16);
  epi2025MakeTable1PrevalenceBar('epi2025T1Race', t1RaceRows, 18, 'y');
  epi2025MakeTable1PrevalenceBar('epi2025T1BoroughResidence', t1BoroughRows, 18, 'y');
  epi2025MakeTable1PrevalenceBar('epi2025T1Poverty', t1PovertyRows, 18, 'y');
  epi2025MakeTable1CiGroupBar('epi2025T1WeightedOverall', t1WeightedRows.slice(0, 1), 14);
  epi2025MakeTable1CiGroupBar('epi2025T1WeightedAge', t1AgeRows, 32);
  epi2025MakeTable1CiGroupBar('epi2025T1WeightedSex', t1SexRows, 16);
  epi2025MakeTable1CiGroupBar('epi2025T1WeightedRace', t1RaceRows, 18);
  epi2025MakeTable1CiGroupBar('epi2025T1WeightedPoverty', t1PovertyRows, 20);
  epi2025MakeTable1CiGroupBar('epi2025T1WeightedBorough', t1BoroughRows, 20);
  epi2025MakeUhf34BoroughBar('epi2025T2BronxUhf34', 'Bronx');
  epi2025MakeUhf34BoroughBar('epi2025T2BrooklynUhf34', 'Brooklyn');
  epi2025MakeUhf34BoroughBar('epi2025T2ManhattanUhf34', 'Manhattan');
  epi2025MakeUhf34BoroughBar('epi2025T2QueensUhf34', 'Queens');
  epi2025MakeUhf34BoroughBar('epi2025T2StatenIslandUhf34', 'Staten Island');
  epi2025MakeA1CDistribution('epi2025T3Overall', [
    {label:'NYC overall', counts:[308488,151955,75307,86768], pct:[49.6,24.4,12.1,13.9]}
  ]);
  epi2025MakeA1CDistribution('epi2025T3A1CAge', [
    {label:'18-44', counts:[20931,10257,6632,12952], pct:[41.2,20.2,13.1,25.5]},
    {label:'45-64', counts:[112996,62129,33608,44705], pct:[44.6,24.5,13.3,17.6]},
    {label:'65+', counts:[174561,79569,35067,29111], pct:[54.8,25.0,11.0,9.1]}
  ]);
  epi2025MakeA1CDistribution('epi2025T3Sex', [
    {label:'Female', counts:[169674,79684,37792,42122], pct:[51.5,24.2,11.5,12.8]},
    {label:'Male', counts:[138487,72116,37425,44531], pct:[47.3,24.7,12.8,15.2]}
  ]);
  epi2025MakeA1CDistribution('epi2025T3Poverty', [
    {label:'Low', counts:[55021,25641,11305,10960], pct:[53.5,24.9,11.0,10.6]},
    {label:'Medium', counts:[149649,75439,37703,42636], pct:[49.0,24.7,12.3,14.0]},
    {label:'High', counts:[63198,30363,15349,18776], pct:[49.5,23.8,12.0,14.7]},
    {label:'Very high', counts:[40300,20274,10845,14289], pct:[47.0,23.7,12.7,16.7]}
  ]);
  epi2025MakeA1CDistribution('epi2025T3Borough', [
    {label:'Bronx', counts:[56175,28397,15087,19712], pct:[47.1,23.8,12.6,16.5]},
    {label:'Brooklyn', counts:[88532,42682,21745,25805], pct:[49.5,23.9,12.2,14.4]},
    {label:'Manhattan', counts:[44988,20614,10069,11380], pct:[51.7,23.7,11.6,13.1]},
    {label:'Queens', counts:[99032,51516,24532,26116], pct:[49.2,25.6,12.2,13.0]},
    {label:'Staten Island', counts:[19525,8627,3814,3692], pct:[54.8,24.2,10.7,10.4]}
  ]);
  epi2025MakeA1CBoroughNeighborhoodBar('epi2025T4BronxA1C', 'Bronx');
  epi2025MakeA1CBoroughNeighborhoodBar('epi2025T4BrooklynA1C', 'Brooklyn');
  epi2025MakeA1CBoroughNeighborhoodBar('epi2025T4ManhattanA1C', 'Manhattan');
  epi2025MakeA1CBoroughNeighborhoodBar('epi2025T4QueensA1C', 'Queens');
  epi2025MakeA1CBoroughNeighborhoodBar('epi2025T4StatenIslandA1C', 'Staten Island');
  epi2025MakeBar('epi2025T5LeaOverall', ['NYC overall'], [43.7], 'Rate per 100,000 adults', 100, ['#000000'], 'y');
  const t5AgeValues = [6.9,78.2,98.0];
  epi2025MakeBar('epi2025T5LeaAge', ['18-44','45-64','65+'], t5AgeValues, 'Rate per 100,000 adults', 100, epi2025MaxRedColors(t5AgeValues), 'y');
  const t5SexValues = [21.0,70.5];
  epi2025MakeBar('epi2025T5LeaSex', ['Female','Male'], t5SexValues, 'Rate per 100,000 adults', 100, epi2025MaxRedColors(t5SexValues, ['#72C7E8','#4BA3D3']), 'y');
  const t5RaceValues = [10.3,63.3,52.7,24.2];
  epi2025MakeBar('epi2025T5LeaRace', ['Asian/Pacific Islander','Black','Latino','White'], t5RaceValues, 'Rate per 100,000 adults', 100, epi2025MaxRedColors(t5RaceValues, ['#D3ECF8','#A8DCF1','#72C7E8','#CDEAF6']), 'y');
  const t5PovertyValues = [27.1,38.3,50.4,81.8];
  epi2025MakeBar('epi2025T5LeaPoverty', ['Low','Medium','High','Very high'], t5PovertyValues, 'Rate per 100,000 adults', 100, epi2025MaxRedColors(t5PovertyValues, ['#4FA34E','#5CB85C','#3F9347','#2F7D3A']), 'y');
  const comboEl = document.getElementById('epi2025T5LeaBoroughCombo');
  if (comboEl) {
    if (CHARTS.epi2025T5LeaBoroughCombo) CHARTS.epi2025T5LeaBoroughCombo.destroy();
    CHARTS.epi2025T5LeaBoroughCombo = new Chart(comboEl, {
      type:'bar',
      data:{ labels:['Bronx','Brooklyn','Manhattan','Queens','Staten Island'], datasets:[
        {label:'Rate per 100,000 adults', data:[74.5,40.7,36.3,36.9,38.5], backgroundColor:epi2025MaxRedColors([74.5,40.7,36.3,36.9,38.5], ['#2F7D3A','#3F9347','#1F5C45','#3F9347','#4C315F']), borderRadius:8}
      ]},
      options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,animation:false,plugins:{legend:{display:false}},scales:{x:{beginAtZero:true,max:100,ticks:{color:'#000000',font:{weight:'700'},stepSize:20},grid:{display:false}},y:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}}}
    });
  }
  epi2025MakeLeaNeighborhoodBar('epi2025T6BronxLea', 'Bronx');
  epi2025MakeLeaNeighborhoodBar('epi2025T6BrooklynLea', 'Brooklyn');
  epi2025MakeLeaNeighborhoodBar('epi2025T6ManhattanLea', 'Manhattan');
  epi2025MakeLeaNeighborhoodBar('epi2025T6QueensLea', 'Queens');
  epi2025MakeLeaNeighborhoodBar('epi2025T6StatenIslandLea', 'Staten Island');
}

function initEpi2025Page() {
  setEpi2025Topic('borough');
  const a1cCanvas = document.getElementById('epi2025A1CChart');
  if (a1cCanvas && window.Chart && !CHARTS.epi2025A1CChart) {
    CHARTS.epi2025A1CChart = new Chart(a1cCanvas, {
      type:'bar',
      data:{
        labels:['Bronx','Brooklyn','Manhattan','Queens','Staten Island'],
        datasets:[
          { label:'<7.0% controlled', data:[47.1,49.5,51.7,49.2,54.8], backgroundColor:'#12334A' },
          { label:'7.0-7.9%', data:[23.8,23.9,23.7,25.6,24.2], backgroundColor:'#0B4F5A' },
          { label:'8.0-9.0%', data:[12.6,12.2,11.6,12.2,10.7], backgroundColor:'#C8960C' },
          { label:'>9.0% poor control', data:[16.5,14.4,13.1,13.0,10.4], backgroundColor:'#560000' }
        ]
      },
      options:{
        responsive:true,
        maintainAspectRatio:false,
        animation:false,
        plugins:{ legend:{ position:'bottom', labels:{boxWidth:12,color:'#000000',font:{size:11,weight:'700'}} } },
        scales:{
          x:{ stacked:true, ticks:{color:'#000000',font:{weight:'700'}}, grid:{display:false} },
          y:{ stacked:true, max:100, ticks:{color:'#000000',font:{weight:'700'},callback:v=>v+'%'}, grid:{display:false} }
        }
      }
    });
  }
  initEpi2025DeepDiveCharts();
}

// Data from Tables 1, 2, 3 — Bronx, NY
// ══════════════════════════════════════════════════
function initFoodInsecurityCharts() {
  if (CHARTS['foodRaceChart']) {
    initBronxFoodInsecurityMap();
    return;
  }
  const FOOD_COLORS = ['#006064','#1F5C45','#6A1B9A','#C8960C','#4C315F','#0B4F5A'];

  // Race/ethnicity - % with poor A1C (Table 1)
  CHARTS['foodRaceChart'] = new Chart(document.getElementById('foodRaceChart'), {
    type:'bar',
    data:{ labels:['Hispanic','Non-Hisp. Black','Missing','Non-Hisp. White','Asian/PI','AI/AN'],
      datasets:[{ label:'% with Poor A1C', data:[46.6,27.9,19.2,3.4,2.8,0.2],
        backgroundColor:['#006064','#1F5C45','#6A1B9A','#C8960C','#4C315F','#0B4F5A'],
        borderRadius:8, minBarLength:28 }] },
    options:{ responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{display:false}, insideLabel:{display:false} },
      scales:{ y:{ beginAtZero:true, max:55, ticks:{color:'#000000',font:{weight:'700'},callback:v=>v+'%'}, grid:{display:false} }, x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}} }
    },
    plugins:[{
      id:'raceOutLabel',
      afterDatasetsDraw(chart) {
        const {ctx} = chart;
        chart.getDatasetMeta(0).data.forEach((bar,j) => {
          const val = chart.data.datasets[0].data[j];
          const barH = Math.abs(bar.y - bar.base);
          ctx.save();
          if (barH > 22) {
            ctx.fillStyle = '#F7FAF9';
            ctx.font = 'bold 11px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(val+'%', bar.x, bar.y + barH/2);
          } else {
            ctx.fillStyle = '#333';
            ctx.font = 'bold 10px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            ctx.fillText(val+'%', bar.x, bar.y - 3);
          }
          ctx.restore();
        });
      }
    }]
  });

  // Insurance - % with poor A1C (Table 1)
  CHARTS['foodInsuranceChart'] = new Chart(document.getElementById('foodInsuranceChart'), {
    type:'bar',
    data:{ labels:['Medicare','Medicaid','Commercial','Uninsured'],
      datasets:[{ label:'% with Poor A1C', data:[38.6,31.6,23.7,6.2], backgroundColor:['#6A1B9A','#C8960C','#1F5C45','#0B4F5A'], borderRadius:8 }] },
    options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}},
      scales:{ y:{ beginAtZero:true, max:50, ticks:{color:'#000000',font:{weight:'700'},callback:v=>v+'%'}, grid:{display:false} }, x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}} } }
  });

  // Adjusted odds ratios (Table 3) - horizontal bar
  // Chart 3 — Adjusted Odds Ratios — REBUILT (animation.onComplete approach)
  CHARTS['foodOddsChart'] = new Chart(document.getElementById('foodOddsChart'), {
    type:'bar',
    data:{
      labels:['No need · Secure (ref)','No need · Insecure','Food need · Secure','Food need · Insecure'],
      datasets:[{
        label:'Adjusted OR',
        data:[1.00, 1.17, 1.83, 1.72],
        backgroundColor:['#C8960C','#6A1B9A','#006064','#4C315F'],
        borderRadius:8
      }]
    },
    options:{
      indexAxis:'y',
      responsive:true,
      maintainAspectRatio:false,
      layout:{ padding:{ right:80 } },
      plugins:{
        insideLabel:{ display:false },
        legend:{ display:false },
        tooltip:{ callbacks:{ label: ctx=>`aOR: ${ctx.parsed.x}` } }
      },
      scales:{
        x:{ min:0.8, max:2.4, grid:{display:false}, title:{display:true, text:'Adjusted Odds Ratio', font:{size:11}} },
        y:{ grid:{display:false}, ticks:{font:{size:11}, color:'#333'} }
      },
      animation:{ onComplete: function() {
        const chart = this;
        const {ctx} = chart;
        const labels = ['aOR: 1.00','aOR: 1.17','aOR: 1.83','aOR: 1.72'];
        chart.getDatasetMeta(0).data.forEach((bar, j) => {
          const txt = labels[j];
          ctx.save();
          ctx.font = 'bold 11px Arial, sans-serif';
          ctx.textBaseline = 'middle';
          ctx.textAlign = 'left';
          ctx.fillStyle = '#1F5C45';
          ctx.fillText(txt, Math.max(bar.x, bar.base) + 8, bar.y);
          ctx.restore();
        });
      }}
    }
  });

  // Age breakdown - % with poor A1C (Table 1)
  CHARTS['foodAgeChart'] = new Chart(document.getElementById('foodAgeChart'), {
    type:'bar',
    data:{ labels:['18–24','25–44','45–64','65+'],
      datasets:[
        { label:'Good A1C', data:[0.7,8.3,36.9,54.1], backgroundColor:'#1F5C45', borderRadius:4 },
        { label:'Poor A1C', data:[1.3,15.9,48.0,34.8], backgroundColor:'#6A1B9A', borderRadius:4 }
      ] },
    options:{ responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{position:'bottom',labels:{boxWidth:12}} },
      scales:{ x:{stacked:false,grid:{display:false}}, y:{ ticks:{color:'#000000',font:{weight:'700'},callback:v=>v+'%'}, grid:{display:false} } } }
  });

  // Bivariate vs adjusted model comparison (Tables 2 & 3)
  CHARTS['foodModelChart'] = new Chart(document.getElementById('foodModelChart'), {
    type:'bar',
    data:{ labels:['Food need only','Food need · Secure area','Food need · Insecure area'],
      datasets:[
        { label:'Bivariate OR', data:[1.80,2.12,2.01], backgroundColor:'#6A1B9A', borderRadius:4 },
        { label:'Adjusted aOR', data:[1.59,1.83,1.72], backgroundColor:'#006064', borderRadius:4 }
      ] },
    options:{ responsive:true, maintainAspectRatio:false,
      plugins:{
        insideLabel:{display:false},
        legend:{position:'bottom',labels:{boxWidth:12}},
        tooltip:{callbacks:{label:ctx=>`${ctx.dataset.label}: ${ctx.parsed.y}`}}
      },
      scales:{ x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}, y:{ min:1, max:2.5, grid:{display:false}, title:{display:true,text:'Odds Ratio'} } }
    },
    plugins:[{
      id:'modelLabel',
      afterDatasetsDraw(chart) {
        const {ctx} = chart;
        const bLabels = [['bOR:','1.80'],['bOR:','2.12'],['bOR:','2.01']];
        const aLabels = [['aOR:','1.59'],['aOR:','1.83'],['aOR:','1.72']];
        chart.data.datasets.forEach((dataset, i) => {
          chart.getDatasetMeta(i).data.forEach((bar, j) => {
            const lines = i===0 ? bLabels[j] : aLabels[j];
            const barH = Math.abs(bar.y - bar.base);
            if (barH < 20) return;
            ctx.save();
            ctx.fillStyle = '#F7FAF9';
            ctx.textAlign = 'center';
            // Draw two lines near TOP of bar
            ctx.font = 'bold 9px sans-serif';
            ctx.textBaseline = 'top';
            ctx.fillText(lines[0], bar.x, bar.y + 5);
            ctx.font = 'bold 10px sans-serif';
            ctx.fillText(lines[1], bar.x, bar.y + 16);
            ctx.restore();
          });
        });
      }
    }]
  });

  // % poor A1C by food need x area combination (Table 1)
  CHARTS['foodComboChart'] = new Chart(document.getElementById('foodComboChart'), {
    type:'bar',
    data:{ labels:['No need · Secure','No need · Insecure','Food need · Secure','Food need · Insecure'],
      datasets:[{ label:'% with Poor A1C', data:[34.5,55.0,3.3,7.3],
        backgroundColor:['#1F5C45','#006064','#12334A','#6A1B9A'], borderRadius:8,
        minBarLength: 28 }] },
    options:{ responsive:true, maintainAspectRatio:false,
      plugins:{
        insideLabel:{display:false},
        legend:{display:false},
        tooltip:{callbacks:{label:ctx=>`${ctx.parsed.y}% with poor A1C`}}
      },
      scales:{ y:{ beginAtZero:true, max:65, ticks:{color:'#000000',font:{weight:'700'},callback:v=>v+'%'}, grid:{display:false} }, x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}} }
    },
    plugins:[{
      id:'comboLabel',
      afterDatasetsDraw(chart) {
        const {ctx} = chart;
        chart.getDatasetMeta(0).data.forEach((bar,j) => {
          const val = chart.data.datasets[0].data[j];
          const barH = Math.abs(bar.y - bar.base);
          ctx.save();
          if (barH > 20) {
            ctx.fillStyle = '#F7FAF9';
            ctx.font = 'bold 11px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(val+'%', bar.x, bar.y + barH/2);
          } else {
            ctx.fillStyle = '#333';
            ctx.font = 'bold 10px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            ctx.fillText(val+'%', bar.x, bar.y - 3);
          }
          ctx.restore();
        });
      }
    }]
  });

  initBronxFoodInsecurityMap();
}

const BRONX_FOOD_ZONES = [
  {
    name:'Southwest Bronx',
    community:'Crotona, Tremont, Morrisania',
    uhf:'105 / 106 / 107',
    category:'Food need + area insecurity',
    interpretation:'Highest-risk pattern in the article: individual food need is present and the surrounding area is also food insecure.',
    value:'aOR 1.72 for food need in food-insecure areas',
    color:'#8B1E5A',
    center:[40.835,-73.903],
    polygon:[[40.795,-73.930],[40.817,-73.925],[40.845,-73.914],[40.863,-73.895],[40.855,-73.875],[40.825,-73.872],[40.805,-73.895]]
  },
  {
    name:'Central Bronx',
    community:'Fordham, Bronx Park, High Bridge',
    uhf:'103 / 106',
    category:'Food need + area secure',
    interpretation:'The counterintuitive pattern: patients may report food need even where the wider area looks food secure.',
    value:'aOR 1.83 for food need in food-secure areas',
    color:'#0B6B6F',
    center:[40.862,-73.889],
    polygon:[[40.845,-73.914],[40.872,-73.912],[40.885,-73.887],[40.874,-73.857],[40.855,-73.875],[40.863,-73.895]]
  },
  {
    name:'Northeast Bronx',
    community:'Northeast Bronx',
    uhf:'102',
    category:'Low on both dimensions',
    interpretation:'Lower-risk bivariate area in the article framing: lower self-reported food need and lower area-level food insecurity.',
    value:'Reference / lower-risk area',
    color:'#C8960C',
    center:[40.880,-73.835],
    polygon:[[40.872,-73.870],[40.895,-73.862],[40.904,-73.830],[40.891,-73.790],[40.858,-73.805],[40.852,-73.842]]
  },
  {
    name:'East Bronx',
    community:'Pelham, Throgs Neck',
    uhf:'104',
    category:'No food need + area insecurity',
    interpretation:'Area-level food insecurity may be present even when the patient does not report individual food need.',
    value:'aOR 1.17 for no food need in food-insecure areas',
    color:'#1F5C9A',
    center:[40.837,-73.830],
    polygon:[[40.852,-73.842],[40.858,-73.805],[40.835,-73.780],[40.807,-73.795],[40.805,-73.840],[40.825,-73.872]]
  },
  {
    name:'Kingsbridge / Riverdale',
    community:'Northwest Bronx',
    uhf:'101',
    category:'Low on both dimensions',
    interpretation:'Lower food-insecurity signal in the bivariate framing, useful as a comparison area inside the Bronx.',
    value:'Reference / lower-risk area',
    color:'#C8960C',
    center:[40.884,-73.905],
    polygon:[[40.863,-73.925],[40.900,-73.922],[40.914,-73.900],[40.902,-73.870],[40.872,-73.870],[40.872,-73.912]]
  }
];
let bronxFoodInsecurityMap = null;
let bronxFoodInsecurityLayer = null;

function initBronxFoodInsecurityMap() {
  const el = document.getElementById('bronxFoodInsecurityMap');
  if (!el || !window.L) {
    if (el) el.innerHTML = '<div style="padding:1rem;color:#2a1a40;font-weight:800;">Map needs Leaflet/OpenStreetMap to load. The article charts still work normally.</div>';
    return;
  }
  if (!bronxFoodInsecurityMap) {
    bronxFoodInsecurityMap = L.map(el, { scrollWheelZoom:false, zoomControl:true }).setView([40.848, -73.875], 11);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(bronxFoodInsecurityMap);
    bronxFoodInsecurityLayer = L.layerGroup().addTo(bronxFoodInsecurityMap);
  }
  bronxFoodInsecurityLayer.clearLayers();
  const bounds = [];
  BRONX_FOOD_ZONES.forEach(zone => {
    const polygon = L.polygon(zone.polygon, {
      color:'#2a1a40',
      weight:1.8,
      opacity:0.9,
      fillColor:zone.color,
      fillOpacity:0.62
    }).addTo(bronxFoodInsecurityLayer);
    polygon.bindPopup(
      '<div class="bronx-food-popup"><strong>' + zone.name + '</strong>' +
      '<div>' + zone.community + '</div>' +
      '<div><em>UHF / area:</em> ' + zone.uhf + '</div>' +
      '<div><em>Category:</em> ' + zone.category + '</div>' +
      '<div><em>Signal:</em> ' + zone.value + '</div>' +
      '<p style="margin:0.45rem 0 0;">' + zone.interpretation + '</p></div>'
    );
    L.circleMarker(zone.center, {
      radius:7,
      color:'#fff1c7',
      weight:2,
      fillColor:zone.color,
      fillOpacity:0.95
    }).addTo(bronxFoodInsecurityLayer).bindTooltip(zone.name, {direction:'top'});
    zone.polygon.forEach(point => bounds.push(point));
  });
  if (bounds.length) bronxFoodInsecurityMap.fitBounds(bounds, { padding:[90, 90], maxZoom:11 });
  bronxFoodInsecurityMap.setMinZoom(10);
  bronxFoodInsecurityMap.setMaxZoom(14);
  setTimeout(() => bronxFoodInsecurityMap.invalidateSize(), 120);
}

// ══════════════════════════════════════════════════
// PQI AMPUTATION DATA — Real SPARCS CSV 2009–2023
// NYC 5 Boroughs · Rates per 100,000 people
// ══════════════════════════════════════════════════
const PQI_YEARS = [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023];
const PQI_AMP = {
  Bronx:        [24.1,28.3,29.5,31.2,36.0,36.7,31.9,38.3,43.2,51.5,50.9,49.0,54.2,51.0,52.0],
  Brooklyn:     [18.9,18.9,18.2,17.3,18.7,19.4,19.8,27.3,29.6,36.1,37.8,37.5,34.4,33.1,33.3],
  Manhattan:    [12.3,11.2,14.6,13.2,15.1,16.2,15.7,19.9,24.2,25.5,23.0,22.2,22.6,27.7,25.3],
  Queens:       [12.3,10.4,11.4,12.8,10.5,13.8,13.6,19.0,25.7,29.4,32.2,29.3,32.0,30.3,33.3],
  'Staten Island':[13.6,10.3,10.6,11.0,11.8,8.8,14.9,21.3,22.8,29.9,32.2,33.3,27.8,25.0,36.4]
};
const PQI_2023 = {
  Bronx:     { amp:52, long:248, short:115 },
  Brooklyn:  { amp:33, long:121, short:71  },
  Manhattan: { amp:25, long:129, short:61  },
  Queens:    { amp:33, long:115, short:54  },
  'Staten Island': { amp:36, long:165, short:60 }
};
const PQI_BOROUGHS = ['Bronx','Brooklyn','Manhattan','Queens','Staten Island'];
const PQI_COLORS = ['#006064','#1F5C45','#6A1B9A','#C8960C','#4C315F'];

function initPQICharts() {
  if (CHARTS['pqiAmpBorough23']) return;

  // Borough amputation bar 2023
  CHARTS['pqiAmpBorough23'] = new Chart(document.getElementById('pqiAmpBorough23'), {
    type:'bar',
    data:{ labels:PQI_BOROUGHS, datasets:[{ label:'Amputation Rate per 100K', data:PQI_BOROUGHS.map(b=>PQI_2023[b].amp), backgroundColor:PQI_COLORS, borderRadius:8 }] },
    options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{display:false} }, scales:{ y:{ beginAtZero:true, ticks:{color:'#000000',font:{weight:'700'}}, grid:{display:false}, title:{display:true,text:'Rate per 100,000',color:'#000000',font:{weight:'700'}} }, x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}} } }
  });

  // Bronx trend line
  CHARTS['pqiBronxTrend'] = new Chart(document.getElementById('pqiBronxTrend'), {
    type:'line',
    data:{ labels:PQI_YEARS, datasets:[{ label:'Bronx Amputation Rate', data:PQI_AMP.Bronx, borderColor:'#006064', backgroundColor:'rgba(192,57,43,0.1)', fill:true, tension:0.3, pointRadius:4 }] },
    options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{display:false} }, scales:{ y:{ beginAtZero:false, grid:{display:false}, title:{display:true,text:'Rate per 100,000'} }, x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}} } }
  });

  // All PQI indicators grouped bar 2023
  CHARTS['pqiAllBoroughs23'] = new Chart(document.getElementById('pqiAllBoroughs23'), {
    type:'bar',
    data:{
      labels:PQI_BOROUGHS,
      datasets:[
        { label:'Amputation', data:PQI_BOROUGHS.map(b=>PQI_2023[b].amp), backgroundColor:'#006064', borderRadius:4 },
        { label:'Long-Term Complications', data:PQI_BOROUGHS.map(b=>PQI_2023[b].long), backgroundColor:'#1F5C45', borderRadius:4 },
        { label:'Short-Term Complications', data:PQI_BOROUGHS.map(b=>PQI_2023[b].short), backgroundColor:'#C8960C', borderRadius:4 }
      ]
    },
    options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:'bottom', labels:{boxWidth:12,color:'#000000',font:{size:11,weight:'700'}} } }, scales:{ y:{ beginAtZero:true, ticks:{color:'#000000',font:{weight:'700'}}, grid:{display:false}, title:{display:true,text:'Rate per 100,000',color:'#000000',font:{weight:'700'}} }, x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}} } }
  });

  // All boroughs amputation trend multi-line
  CHARTS['pqiAllBoroughsTrend'] = new Chart(document.getElementById('pqiAllBoroughsTrend'), {
    type:'line',
    data:{
      labels:PQI_YEARS,
      datasets: PQI_BOROUGHS.map((b,i)=>({
        label:b, data:PQI_AMP[b], borderColor:PQI_COLORS[i], backgroundColor:'transparent', tension:0.3, pointRadius:3, borderWidth:2
      }))
    },
    options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:'bottom', labels:{boxWidth:12,color:'#000000',font:{size:11,weight:'700'}} } }, scales:{ y:{ beginAtZero:false, grid:{display:false}, title:{display:true,text:'Rate per 100,000'} }, x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}} } }
  });
}

function initNewsPage() {
  setTimeout(() => {
    document.getElementById('newsLoader').style.display = 'none';
    document.getElementById('newsGrid').style.display = 'block';
  }, 800);
}

// ══════════════════════════════════════════════════
// BLOG SYSTEM
// ══════════════════════════════════════════════════
const CATEGORY_ICONS = {data:'📊',medication:'💊',lifestyle:'🥗',nyc:'🗽',research:'🔬',general:'💬'};
const CATEGORY_LABELS = {data:'Data Insight',medication:'Medication',lifestyle:'Lifestyle',nyc:'NYC Resource',research:'Research',general:'General'};

let BLOG_POSTS = [
  {id:1,name:'Jasmine V.',category:'data',date:'May 2026',
   text:'Looking at the NY APD 2023 data, it\'s striking that Medicaid (NYS Programs) accounts for 8.2M diabetes prescriptions but only $1.9B in total payments — while Medicare covers 13.9M Rx but pays $4.3B. The per-prescription cost difference reflects Medicare\'s coverage of newer, more expensive GLP-1 and SGLT2 drugs.',
   likes:4,comments:[]},
  {id:2,name:'Anonymous',category:'medication',date:'May 2026',
   text:'Has anyone looked at how semaglutide costs break down by payer? In the dataset, Medicare is paying over $1,000 per prescription on average. That\'s a massive difference from metformin at around $31. These GLP-1 drugs are incredibly effective but the cost disparity raises real equity questions for Medicaid patients.',
   likes:7,comments:[]},
  {id:3,name:'Public Health Student',category:'nyc',date:'May 2026',
   text:'The Bronx has nearly double the diabetes prevalence of Manhattan (16.8% vs 10.3%). When you overlay the prescription data showing NYS Programs covers 62% of Bronx diabetes Rx, it shows how critical Medicaid access is in our highest-burden borough. Cutting Medicaid coverage would directly hit the communities that need these drugs most.',
   likes:11,comments:[]},
  {id:4,name:'Data Nerd 🌿',category:'research',date:'May 2026',
   text:'Glipizide and glimepiride (sulfonylureas) are still 890K+ prescriptions combined in NY despite being older drugs. They cost almost nothing — about $10 per Rx — but carry higher hypoglycemia risk than newer agents. The question is whether low-income patients are being steered toward cheaper, riskier drugs because of cost barriers.',
   likes:9,comments:[]},
];

function renderPosts(posts) {
  const container = document.getElementById('blogPosts');
  if (posts.length === 0) {
    container.innerHTML = '<div class="info-card" style="text-align:center;padding:2rem;"><div style="font-size:2rem;">🌿</div><p style="margin-top:0.5rem;color:#666;">No posts in this category yet. Be the first!</p></div>';
    return;
  }
  container.innerHTML = posts.map(p => `
    <div class="info-card" style="margin-bottom:1.25rem;border-left:4px solid var(--teal-accent);">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:0.75rem;flex-wrap:wrap;">
        <span style="font-size:1.5rem;">${CATEGORY_ICONS[p.category]}</span>
        <div>
          <strong style="color:var(--deep-teal);font-size:0.95rem;">${p.name}</strong>
          <span class="badge badge-green" style="margin-left:8px;font-size:0.72rem;">${CATEGORY_LABELS[p.category]}</span>
        </div>
        <span style="margin-left:auto;font-size:0.8rem;color:#888;">${p.date}</span>
      </div>
      <p style="font-size:0.9rem;line-height:1.75;color:#444;margin-bottom:1rem;">${p.text}</p>
      <div style="display:flex;align-items:center;gap:1rem;">
        <button onclick="likePost(${p.id})" style="background:none;border:1.5px solid var(--dark-border);border-radius:20px;padding:4px 14px;cursor:pointer;font-size:0.82rem;font-family:var(--font-body);color:var(--section-teal);">
          🌿 ${p.likes} helpful
        </button>
        <span style="font-size:0.8rem;color:#888;">${p.comments.length} replies</span>
      </div>
    </div>`).join('');
  document.getElementById('postCount').textContent = posts.length + ' posts';
}

function filterPosts() {
  const cat = document.getElementById('blogFilter').value;
  const filtered = cat === 'all' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === cat);
  renderPosts(filtered);
}

function submitPost() {
  const name = document.getElementById('blogName').value.trim() || 'Anonymous';
  const category = document.getElementById('blogCategory').value;
  const text = document.getElementById('blogPost').value.trim();
  if (!text) { alert('Please write something before posting! 🌿'); return; }
  const newPost = {
    id: BLOG_POSTS.length + 1,
    name, category, text, likes: 0, comments: [],
    date: new Date().toLocaleDateString('en-US',{month:'short',year:'numeric'})
  };
  BLOG_POSTS.unshift(newPost);
  document.getElementById('blogPost').value = '';
  document.getElementById('blogName').value = '';
  document.getElementById('blogFilter').value = 'all';
  filterPosts();
}

function likePost(id) {
  const post = BLOG_POSTS.find(p => p.id === id);
  if (post) { post.likes++; filterPosts(); }
}

function initBlogPage() {
  renderPosts(BLOG_POSTS);
}
// ── DARK MODE ──
function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? '' : 'dark');
  document.querySelector('.theme-toggle').textContent = isDark ? '🌙' : '☀️';
}

// ══════════════════════════════════════════════════
// CHART INITIALIZERS
// ══════════════════════════════════════════════════


// ── DIABETES DASHBOARD ──


function initNYCCharts() {
  CHARTS['nycBoroughBar'] = new Chart(document.getElementById('nycBoroughBar'), {
    type: 'bar',
    data: {
      labels: BOROUGH_LABELS_ALL,
      datasets: [{ label:'Prevalence (%)', data:[16.8,14.2,10.3,13.6,11.4],
        backgroundColor: FOREST_COLORS.slice(0,5), borderRadius:8 }]
    },
    options: { responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ display:false } },
      scales:{ y:{ beginAtZero:true, ticks:{ color:'#000000', callback: v=>v+'%' }, grid:{display:false} }, x:{ grid:{display:false} } }
    }
  });

  CHARTS['nycRaceChart'] = new Chart(document.getElementById('nycRaceChart'), {
    type: 'doughnut',
    data: {
      labels: RACE_LABELS,
      datasets: [{ data:[30.2,28.7,17.4,21.3,19.8], backgroundColor: FOREST_COLORS.slice(0,5), borderWidth:2 }]
    },
    options: { responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:'right' } } }
  });

  CHARTS['nycA1cTrendChart'] = new Chart(document.getElementById('nycA1cTrendChart'), {
    type: 'line',
    data: {
      labels: ['2018','2019','2020','2021','2022'],
      datasets: [
        { label:'Bronx',    data:[30.1,30.4,30.8,29.6,28.4], borderColor:'#1F5C45', tension:0.4, pointRadius:4 },
        { label:'Brooklyn', data:[26.8,27.1,27.4,26.2,25.1], borderColor:'#0B4F5A', tension:0.4, pointRadius:4 },
        { label:'Manhattan',data:[20.1,20.4,20.8,20.1,19.7], borderColor:'#6A1B9A', tension:0.4, pointRadius:4 },
        { label:'Queens',   data:[25.4,25.7,26.0,25.3,24.8], borderColor:'#C8960C', tension:0.4, pointRadius:4 }
      ]
    },
    options: { responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ position:'top', labels:{ boxWidth:12 } } },
      scales:{ y:{ ticks:{ callback: v=>v+'%' }, grid:{display:false} }, x:{ grid:{display:false} } }
    }
  });
}

// ── PROJECTS PAGE ──
function initProjectsCharts() {
  CHARTS['payorChart'] = new Chart(document.getElementById('payorChart'), {
    type: 'doughnut',
    data: {
      labels: ['Medicaid','Medicare','Commercial','Self-Pay','Other'],
      datasets: [{ data:[62,22,9,4,3],
        backgroundColor:['#1F5C45','#0B4F5A','#6A1B9A','#C8960C','#4C315F'], borderWidth:2 }]
    },
    options: { responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:'right' } } }
  });
}

// ── AUTO-START DASHBOARD CHARTS ON FIRST PAGE LOAD ──
// The dashboard page is already visible when the file opens.
// This starts the charts right away, instead of waiting for the Dashboard nav link to be clicked.
function startDashboardChartsWhenReady() {
  if (typeof Chart === 'undefined') {
    console.error('Chart.js did not load. Check your internet connection or the Chart.js CDN link.');
    return;
  }

  const dashboardPage = document.getElementById('page-dashboard');
  const mainChartCanvas = document.getElementById('boroughPrevalenceChart');

  if (dashboardPage && mainChartCanvas && !CHARTS['boroughPrevalenceChart'] && !window.__dashboardChartsBooted) {
    window.__dashboardChartsBooted = true;
    initDiabetisCharts();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startDashboardChartsWhenReady);
} else {
  startDashboardChartsWhenReady();
}

(function () {
  function waitForCharts() {
    if (typeof Chart === 'undefined') return setTimeout(waitForCharts, 150);
    const canvasIds = ['boroughPrevalenceChart','a1cRaceChart','trendChart','ampDialysisChart'];
    const hasCanvas = canvasIds.some(id => document.getElementById(id));
    if (!hasCanvas) return setTimeout(waitForCharts, 150);
    try {
      if (typeof initDiabetisCharts === 'function' && !window.__dashboardChartsBooted) {
        window.__dashboardChartsBooted = true;
        try { initDiabetisCharts(); } catch (e) { console.warn('initDiabetisCharts failed', e); }
      }
      if (typeof updateDashboard === 'function') {
        try { updateDashboard(); } catch (e) { console.warn('updateDashboard failed', e); }
      }
    } catch (err) {
      console.error('Chart bootstrap failed', err);
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForCharts);
  } else {
    waitForCharts();
  }
})();

(function(){
  window.PRDR_CHARTS = window.PRDR_CHARTS || {};

  function cssVar(name, fallback) {
    const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return value || fallback;
  }

  function chartExists(id) {
    return !!document.getElementById(id);
  }

  window.initPRDRCharts = function() {
    if (typeof Chart === 'undefined') return;

    const deepTeal = '#0a2a2f';
    const sectionTeal = '#0D3D4A';
    const tealAccent = '#006064';
    const amber = '#C8960C';
    const plumAccent = '#4C315F';
    const goldAccent = '#0B4F5A';
    const pale = '#6A1B9A';
    const tan = '#C8960C';

    Chart.defaults.font.family = "'Nunito', Arial, sans-serif";
    Chart.defaults.color = '#000000';
    Chart.defaults.scale.ticks.color = '#000000';
    Chart.defaults.layout.padding = { top: 30 };
    Chart.defaults.plugins.tooltip.padding = 8;
    // Give y-axis 15% grace above tallest bar so inside labels never get clipped
    Chart.defaults.scale.grace = '15%';

    if (chartExists('prdrHeritageChart') && !PRDR_CHARTS.prdrHeritageChart) {
      PRDR_CHARTS.prdrHeritageChart = new Chart(document.getElementById('prdrHeritageChart'), {
        type: 'bar',
        data: {
          labels: ['South American', 'Cuban', 'Central American', 'Dominican', 'Puerto Rican', 'Mexican'],
          datasets: [{
            label: 'Diabetes prevalence (%)',
            data: [10.2, 13.4, 17.7, 18.0, 18.0, 18.3],
            backgroundColor: [goldAccent, tealAccent, plumAccent, amber, amber, sectionTeal],
            borderColor: deepTeal,
            borderWidth: 1.4,
            borderRadius: 10,
            barThickness: 46
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: ctx => ctx.parsed.y.toFixed(1) + '% diabetes prevalence' } }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 22,
              ticks: { color:'#000000', font:{weight:'700'}, callback: v => v + '%' },
              grid: { color: 'rgba(11,61,46,0.12)' }
            },
            x: { ticks:{color:'#000000',font:{weight:'700'}}, grid: { display: false } }
          }
        }
      });
    }

    if (chartExists('prdrNYCAgeChart') && !PRDR_CHARTS.prdrNYCAgeChart) {
      PRDR_CHARTS.prdrNYCAgeChart = new Chart(document.getElementById('prdrNYCAgeChart'), {
        type: 'bar',
        data: {
          labels: ['18 to 44', '45 to 64', '65+'],
          datasets: [{
            label: 'Diagnosed diabetes (%)',
            data: [5.0, 16.1, 41.8],
            backgroundColor: [tealAccent, amber, sectionTeal],
            borderColor: deepTeal,
            borderWidth: 1.4,
            borderRadius: 10,
            barThickness: 48
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: ctx => ctx.parsed.y.toFixed(1) + '%' } }
          },
          scales: {
            y: { beginAtZero: true, max: 50, ticks: { color:'#000000', font:{weight:'700'}, callback: v => v + '%' }, grid: { color: 'rgba(11,61,46,0.12)' } },
            x: { ticks:{color:'#000000',font:{weight:'700'}}, grid: { display: false } }
          }
        }
      });
    }

    if (chartExists('prdrNYCRiskChart') && !PRDR_CHARTS.prdrNYCRiskChart) {
      PRDR_CHARTS.prdrNYCRiskChart = new Chart(document.getElementById('prdrNYCRiskChart'), {
        type: 'bar',
        data: {
          labels: ['Obese', 'Family history', '≤ Grade 8 education', 'Born in Puerto Rico'],
          datasets: [{
            label: 'Diagnosed diabetes prevalence (%)',
            data: [19.1, 17.2, 32.4, 18.8],
            backgroundColor: [sectionTeal, tealAccent, amber, plumAccent],
            borderRadius: 10,
            barThickness: 34
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: ctx => ctx.parsed.x.toFixed(1) + '%' } }
          },
          scales: {
            x: { beginAtZero: true, max: 38, ticks: { color:'#000000', font:{weight:'700'}, callback: v => v + '%' }, grid: { color: 'rgba(11,61,46,0.12)' } },
            y: { grid: { display: false } }
          }
        }
      });
    }

    if (chartExists('prdrPRStatusChart') && !PRDR_CHARTS.prdrPRStatusChart) {
      PRDR_CHARTS.prdrPRStatusChart = new Chart(document.getElementById('prdrPRStatusChart'), {
        type: 'doughnut',
        data: {
          labels: ['Total diabetes', 'Prediabetes', 'Normoglycemia'],
          datasets: [{
            data: [25.5, 47.4, 27.1],
            backgroundColor: [sectionTeal, amber, pale],
            borderColor: '#F7FAF9',
            borderWidth: 3
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '58%',
          plugins: {
            legend: { position: 'bottom' },
            tooltip: { callbacks: { label: ctx => ctx.label + ': ' + ctx.parsed.toFixed(1) + '%' } }
          }
        }
      });
    }

    if (chartExists('prdrCardioRiskChart') && !PRDR_CHARTS.prdrCardioRiskChart) {
      PRDR_CHARTS.prdrCardioRiskChart = new Chart(document.getElementById('prdrCardioRiskChart'), {
        type: 'radar',
        data: {
          labels: ['General obesity', 'Abdominal obesity', 'Hypertension', 'Low HDL', 'High LDL', 'High triglycerides'],
          datasets: [{
            label: 'Risk profile intensity',
            data: [88, 86, 82, 72, 68, 75],
            backgroundColor: 'rgba(31,92,69,0.22)',
            borderColor: sectionTeal,
            pointBackgroundColor: amber,
            pointBorderColor: deepTeal,
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            r: {
              min: 0,
              max: 100,
              ticks: { display: false },
              grid: { color: 'rgba(11,61,46,0.15)' },
              angleLines: { color: 'rgba(11,61,46,0.18)' },
              pointLabels: { color: deepTeal, font: { weight: '700', size: 11 } }
            }
          }
        }
      });
    }

    if (chartExists('prdrSocialOddsChart') && !PRDR_CHARTS.prdrSocialOddsChart) {
      PRDR_CHARTS.prdrSocialOddsChart = new Chart(document.getElementById('prdrSocialOddsChart'), {
        type: 'bar',
        data: {
          labels: ['Social / educational strengths', 'Acculturated and underresourced', 'High adversity'],
          datasets: [
            {
              label: 'Worse status at baseline OR',
              data: [1.16, 1.32, 1.51],
              backgroundColor: tealAccent,
              borderRadius: 8,
              barThickness: 26
            },
            {
              label: 'Worsening status at 6 years OR',
              data: [1.08, 1.16, 1.28],
              backgroundColor: amber,
              borderRadius: 8,
              barThickness: 26
            },
            {
              label: 'Worsening status at 12 years OR',
              data: [1.23, 1.33, 1.32],
              backgroundColor: sectionTeal,
              borderRadius: 8,
              barThickness: 26
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom' },
            tooltip: { callbacks: { label: ctx => ctx.dataset.label + ': OR ' + ctx.parsed.y.toFixed(2) } }
          },
          scales: {
            y: {
              beginAtZero: true,
              suggestedMax: 1.7,
              title: { display: true, text: 'Odds ratio, low adversity = reference' },
              grid: { color: 'rgba(11,61,46,0.12)' }
            },
            x: { ticks:{color:'#000000',font:{weight:'700'}}, grid: { display: false } }
          }
        }
      });
    }

    if (chartExists('prdrSDOHChart') && !PRDR_CHARTS.prdrSDOHChart) {
      PRDR_CHARTS.prdrSDOHChart = new Chart(document.getElementById('prdrSDOHChart'), {
        type: 'polarArea',
        data: {
          labels: ['Income', 'Education', 'Employment', 'Home ownership', 'Language acculturation', 'Social acculturation', 'Chronic stress', 'Family cohesion', 'Social support'],
          datasets: [{
            data: [9, 9, 9, 9, 9, 9, 9, 9, 9],
            backgroundColor: [
              deepTeal, sectionTeal, tealAccent, amber, plumAccent, goldAccent, tan, pale, '#006064'
            ],
            borderColor: '#F7FAF9',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { boxWidth: 12, padding: 10 } },
            tooltip: { callbacks: { label: ctx => ctx.label } }
          },
          scales: {
            r: { ticks: { display: false }, grid: { color: 'rgba(11,61,46,0.10)' } }
          }
        }
      });
    }

    if (chartExists('t2dMortalityTrendChart') && !PRDR_CHARTS.t2dMortalityTrendChart) {
      PRDR_CHARTS.t2dMortalityTrendChart = new Chart(document.getElementById('t2dMortalityTrendChart'), {
        type: 'line',
        data: {
          labels: ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014'],
          datasets: [
            { label: 'Diabetes', data: [40,44,46,48,50,51,53,55,58,60,62,63,61,62,66], borderColor: sectionTeal, backgroundColor: sectionTeal, tension: 0.35, pointRadius: 2, borderWidth: 3 },
            { label: 'Cancer', data: [47,48,49,50,50,51,52,52,53,54,55,56,57,58,59], borderColor: plumAccent, backgroundColor: plumAccent, tension: 0.35, pointRadius: 1.8, borderWidth: 2 },
            { label: 'Ischemic heart diseases', data: [46,45,44,43,42,42,41,42,43,44,45,46,48,49,50], borderColor: amber, backgroundColor: amber, tension: 0.35, pointRadius: 1.8, borderWidth: 2 },
            { label: 'Respiratory diseases', data: [29,30,31,31,32,31,31,30,29,28,28,29,30,31,32], borderColor: tealAccent, backgroundColor: tealAccent, tension: 0.35, pointRadius: 1.5, borderWidth: 2 },
            { label: 'Accidents', data: [19,19,20,21,22,23,24,24,23,22,21,21,22,24,25], borderColor: '#0B4F5A', backgroundColor: '#0B4F5A', tension: 0.35, pointRadius: 1.5, borderWidth: 2 },
            { label: 'Cerebrovascular diseases', data: [19,18,17,16,15,15,16,16,17,16,15,14,13,13,14], borderColor: '#9BB989', backgroundColor: '#9BB989', tension: 0.35, pointRadius: 1.5, borderWidth: 2 },
            { label: 'Infectious and parasitic diseases', data: [16,17,17,16,16,15,15,14,14,13,13,13,12,12,12], borderColor: '#B7C4B1', backgroundColor: '#B7C4B1', tension: 0.35, pointRadius: 1.5, borderWidth: 2 },
            { label: 'Nutritional deficiencies', data: [9,8,8,7,7,6,6,6,5,5,5,5,4,4,4], borderColor: '#D6C9A5', backgroundColor: '#D6C9A5', tension: 0.35, pointRadius: 1.5, borderWidth: 2 }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'nearest', intersect: false },
          plugins: {
            legend: { position: 'bottom', labels: { boxWidth: 12, padding: 12 } },
            tooltip: { callbacks: { label: ctx => ctx.dataset.label + ': ' + ctx.parsed.y + ' per 100,000' } }
          },
          scales: {
            y: {
              beginAtZero: false,
              min: 0,
              max: 70,
              title: { display: true, text: 'Death rate (per 100,000)' },
              grid: { color: 'rgba(11,61,46,0.10)' }
            },
            x: { title: { display: true, text: 'Year' }, grid: { display: false } }
          }
        }
      });
    }

    if (chartExists('t2dDeathRateBarChart') && !PRDR_CHARTS.t2dDeathRateBarChart) {
      PRDR_CHARTS.t2dDeathRateBarChart = new Chart(document.getElementById('t2dDeathRateBarChart'), {
        type: 'bar',
        data: {
          labels: ['Mexico','Belize','Honduras','Paraguay','Puerto Rico','Nicaragua','El Salvador','Ecuador','Panama','Dominican Republic','Brazil','Peru','French Guiana','Chile','United States','Costa Rica','Uruguay','Guadeloupe','Martinique','Cuba'],
          datasets: [{
            label: '2014 diabetes death rate',
            data: [84,76,71,66,61,57,52,48,44,38,31,28,25,24,23,22,22,21,21,20],
            backgroundColor: ['#0B3440','#0E3F45','#12334A','#154A39','#1F5C45','#006064','#0B4F5A','#2E6A51','#0B3440','#1F5C45','#4F8D71','#6A1B9A','#5D9C80','#3C7A5D','#006064','#C8960C','#4C315F','#4C315F','#C49A6C','#C8960C'],
            borderRadius: 8,
            barThickness: 13
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: ctx => 'Death rate: ' + ctx.parsed.x + ' per 100,000' } }
          },
          scales: {
            x: {
              beginAtZero: true,
              max: 90,
              title: { display: true, text: '2014 diabetes mellitus death rate, age-adjusted (100,000 pop)' },
              grid: { color: 'rgba(11,61,46,0.10)' }
            },
            y: { grid: { display: false } }
          }
        }
      });
    }

    if (chartExists('type1BackgroundDeepChart') && !PRDR_CHARTS.type1BackgroundDeepChart) {
      PRDR_CHARTS.type1BackgroundDeepChart = new Chart(document.getElementById('type1BackgroundDeepChart'), {
        type: 'bar',
        data: {
          labels: ['Other', 'Mexican', 'South American', 'Central American', 'Puerto Rican', 'Cuban', 'Dominican'],
          datasets: [{
            label: 'Type 1 diabetes prevalence (%)',
            data: [0.03, 0.06, 0.08, 0.15, 0.22, 0.23, 0.61],
            backgroundColor: [pale, goldAccent, tealAccent, tan, amber, plumAccent, sectionTeal],
            borderColor: deepTeal,
            borderWidth: 1,
            borderRadius: 8,
            barThickness: 32
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ctx.parsed.y.toFixed(2) + '%' } } },
          scales: {
            y: { beginAtZero: true, max: 0.75, ticks: { color:'#000000', font:{weight:'700'}, callback: v => v + '%' }, grid: { color: 'rgba(11,61,46,0.12)' } },
            x: { ticks:{color:'#000000',font:{weight:'700'}}, grid: { display: false } }
          }
        }
      });
    }

    if (chartExists('type1SexDeepChart') && !PRDR_CHARTS.type1SexDeepChart) {
      PRDR_CHARTS.type1SexDeepChart = new Chart(document.getElementById('type1SexDeepChart'), {
        type: 'bar',
        data: {
          labels: ['Male', 'Female'],
          datasets: [{
            label: 'Type 1 diabetes prevalence (%)',
            data: [0.19, 0.17],
            backgroundColor: [sectionTeal, amber],
            borderRadius: 10,
            barThickness: 54
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ctx.parsed.y.toFixed(2) + '%' } } },
          scales: {
            y: { beginAtZero: true, max: 0.30, ticks: { color:'#000000', font:{weight:'700'}, callback: v => v + '%' }, grid: { color: 'rgba(11,61,46,0.12)' } },
            x: { ticks:{color:'#000000',font:{weight:'700'}}, grid: { display: false } }
          }
        }
      });
    }

    if (chartExists('type1AgeDeepChart') && !PRDR_CHARTS.type1AgeDeepChart) {
      PRDR_CHARTS.type1AgeDeepChart = new Chart(document.getElementById('type1AgeDeepChart'), {
        type: 'bar',
        data: {
          labels: ['Younger than 30', 'Age 30+'],
          datasets: [{
            label: 'Type 1 diabetes prevalence (%)',
            data: [0.32, 0.13],
            backgroundColor: [amber, sectionTeal],
            borderRadius: 10,
            barThickness: 54
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ctx.parsed.y.toFixed(2) + '%' } } },
          scales: {
            y: { beginAtZero: true, max: 0.40, ticks: { color:'#000000', font:{weight:'700'}, callback: v => v + '%' }, grid: { color: 'rgba(11,61,46,0.12)' } },
            x: { ticks:{color:'#000000',font:{weight:'700'}}, grid: { display: false } }
          }
        }
      });
    }

    if (chartExists('type1A1cDeepChart') && !PRDR_CHARTS.type1A1cDeepChart) {
      PRDR_CHARTS.type1A1cDeepChart = new Chart(document.getElementById('type1A1cDeepChart'), {
        type: 'bar',
        data: {
          labels: ['Mexican', 'Overall', 'Puerto Rican'],
          datasets: [{
            label: 'Average HbA1c (%)',
            data: [8.22, 9.62, 11.52],
            backgroundColor: [tealAccent, amber, sectionTeal],
            borderRadius: 10,
            barThickness: 46
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ctx.parsed.y.toFixed(2) + '% HbA1c' } } },
          scales: {
            y: { beginAtZero: true, max: 13, ticks: { color:'#000000', font:{weight:'700'}, callback: v => v + '%' }, grid: { color: 'rgba(11,61,46,0.12)' } },
            x: { ticks:{color:'#000000',font:{weight:'700'}}, grid: { display: false } }
          }
        }
      });
    }

    if (chartExists('sdohProfileDistChart') && !PRDR_CHARTS.sdohProfileDistChart) {
      PRDR_CHARTS.sdohProfileDistChart = new Chart(document.getElementById('sdohProfileDistChart'), {
        type: 'doughnut',
        data: {
          labels: ['Low adversity', 'Social/educational strengths', 'Acculturated and underresourced', 'High adversity'],
          datasets: [{
            label: 'Percent of sample',
            data: [15.81, 34.35, 10.14, 39.70],
            backgroundColor: [tealAccent, amber, plumAccent, sectionTeal],
            borderColor: '#F7FAF9',
            borderWidth: 3
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '55%',
          plugins: {
            legend: { position: 'bottom' },
            tooltip: { callbacks: { label: ctx => ctx.label + ': ' + ctx.parsed.toFixed(2) + '%' } }
          }
        }
      });
    }

    if (chartExists('sdohDiabetesStatusChart') && !PRDR_CHARTS.sdohDiabetesStatusChart) {
      PRDR_CHARTS.sdohDiabetesStatusChart = new Chart(document.getElementById('sdohDiabetesStatusChart'), {
        type: 'bar',
        data: {
          labels: ['Low adversity', 'Social/educational strengths', 'Acculturated and underresourced', 'High adversity'],
          datasets: [
            { label: 'Normoglycemic', data: [62.31, 49.85, 60.39, 37.83], backgroundColor: tealAccent, borderRadius: 6 },
            { label: 'Prediabetes', data: [29.20, 36.95, 29.68, 40.31], backgroundColor: amber, borderRadius: 6 },
            { label: 'Diabetes', data: [8.49, 13.19, 9.93, 21.86], backgroundColor: sectionTeal, borderRadius: 6 }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom' }, tooltip: { callbacks: { label: ctx => ctx.dataset.label + ': ' + ctx.parsed.y.toFixed(2) + '%' } } },
          scales: {
            x: { stacked: true, grid: { display: false } },
            y: { stacked: true, beginAtZero: true, max: 100, ticks: { color:'#000000', font:{weight:'700'}, callback: v => v + '%' }, grid: { color: 'rgba(11,61,46,0.12)' } }
          }
        }
      });
    }

    if (chartExists('sdohOddsDeepChart') && !PRDR_CHARTS.sdohOddsDeepChart) {
      PRDR_CHARTS.sdohOddsDeepChart = new Chart(document.getElementById('sdohOddsDeepChart'), {
        type: 'bar',
        data: {
          labels: ['Social/educational strengths', 'Acculturated and underresourced', 'High adversity'],
          datasets: [
            { label: 'Baseline worse status OR', data: [1.16, 1.32, 1.51], backgroundColor: plumAccent, borderRadius: 8 },
            { label: 'V2 worsening OR', data: [1.08, 1.16, 1.28], backgroundColor: amber, borderRadius: 8 },
            { label: 'V3 worsening OR', data: [1.23, 1.33, 1.32], backgroundColor: sectionTeal, borderRadius: 8 }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom' }, tooltip: { callbacks: { label: ctx => ctx.dataset.label + ': ' + ctx.parsed.y.toFixed(2) } } },
          scales: {
            y: { beginAtZero: true, suggestedMax: 1.7, title: { display: true, text: ['Odds Ratio', 'vs', 'Low Adversity'] }, grid: { color: 'rgba(11,61,46,0.12)' } },
            x: { ticks:{color:'#000000',font:{weight:'700'}}, grid: { display: false } }
          }
        }
      });
    }

    if (chartExists('sdohIndividualORChart') && !PRDR_CHARTS.sdohIndividualORChart) {
      PRDR_CHARTS.sdohIndividualORChart = new Chart(document.getElementById('sdohIndividualORChart'), {
        type: 'bar',
        data: {
          labels: ['Income', 'Education', 'Employment', 'Home ownership', 'Language acculturation', 'Social acculturation', 'Chronic stress', 'Family cohesion', 'Social support'],
          datasets: [{
            label: 'Baseline diabetes status OR',
            data: [0.92, 0.82, 0.83, 0.86, 0.92, 0.92, 0.90, 0.99, 0.99],
            backgroundColor: [sectionTeal, sectionTeal, sectionTeal, sectionTeal, plumAccent, plumAccent, amber, tealAccent, tealAccent],
            borderRadius: 7,
            barThickness: 22
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => 'OR: ' + ctx.parsed.x.toFixed(2) } } },
          scales: {
            x: { beginAtZero: true, suggestedMax: 1.05, grid: { color: 'rgba(11,61,46,0.12)' } },
            y: { grid: { display: false } }
          }
        }
      });
    }


    if (chartExists('t2dReviewHeritageChart') && !PRDR_CHARTS.t2dReviewHeritageChart) {
      PRDR_CHARTS.t2dReviewHeritageChart = new Chart(document.getElementById('t2dReviewHeritageChart'), {
        type: 'bar',
        data: {
          labels: ['South American', 'Cuban', 'Central American', 'Puerto Rican', 'Dominican', 'Mexican'],
          datasets: [{
            label: 'Diabetes prevalence (%)',
            data: [10.2, 13.4, 17.7, 18.1, 18.2, 18.3],
            backgroundColor: [goldAccent, tealAccent, plumAccent, amber, amber, sectionTeal],
            borderColor: deepTeal,
            borderWidth: 1.4,
            borderRadius: 10,
            barThickness: 42
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: ctx => ctx.parsed.y.toFixed(1) + '% diabetes prevalence' } }
          },
          scales: {
            y: { beginAtZero: true, max: 22, ticks: { color:'#000000', font:{weight:'700'}, callback: v => v + '%' }, grid: { color: 'rgba(11,61,46,0.12)' } },
            x: { ticks:{color:'#000000',font:{weight:'700'}}, grid: { display: false } }
          }
        }
      });
    }

    if (chartExists('t2dReviewSocialAccessChart') && !PRDR_CHARTS.t2dReviewSocialAccessChart) {
      PRDR_CHARTS.t2dReviewSocialAccessChart = new Chart(document.getElementById('t2dReviewSocialAccessChart'), {
        type: 'bar',
        data: {
          labels: ['Hispanic uninsured', 'Other races uninsured', 'Hispanic HS+', 'NHW HS+', 'Hispanic bachelor+', 'NHW bachelor+'],
          datasets: [{
            label: 'Percent (%)',
            data: [24.4, 14.9, 72.0, 93.3, 15.3, 35.6],
            backgroundColor: [amber, tealAccent, amber, tealAccent, amber, tealAccent],
            borderColor: deepTeal,
            borderWidth: 1.2,
            borderRadius: 9,
            barThickness: 34
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: ctx => ctx.parsed.y.toFixed(1) + '%' } }
          },
          scales: {
            y: { beginAtZero: true, max: 100, ticks: { color:'#000000', font:{weight:'700'}, callback: v => v + '%' }, grid: { color: 'rgba(11,61,46,0.12)' } },
            x: { grid: { display: false }, ticks: { autoSkip: false, maxRotation: 35, minRotation: 20 } }
          }
        }
      });
    }

    if (chartExists('t2dReviewComplicationChart') && !PRDR_CHARTS.t2dReviewComplicationChart) {
      PRDR_CHARTS.t2dReviewComplicationChart = new Chart(document.getElementById('t2dReviewComplicationChart'), {
        type: 'bar',
        data: {
          labels: ['Men with ≥1 CVD risk factor', 'Women with ≥1 CVD risk factor', 'US adults with diabetic retinopathy', 'Higher ESRD incidence vs NHW'],
          datasets: [{
            label: 'Percent or ratio',
            data: [80, 71, 28.5, 1.5],
            backgroundColor: [sectionTeal, tealAccent, amber, plumAccent],
            borderColor: deepTeal,
            borderWidth: 1.2,
            borderRadius: 9,
            barThickness: 38
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: ctx => ctx.dataIndex === 3 ? '1.5× higher ESRD incidence' : ctx.parsed.y + '%' } }
          },
          scales: {
            y: { beginAtZero: true, max: 90, grid: { color: 'rgba(11,61,46,0.12)' } },
            x: { grid: { display: false }, ticks: { autoSkip: false, maxRotation: 35, minRotation: 20 } }
          }
        }
      });
    }

    if (chartExists('t2dReviewPreventionChart') && !PRDR_CHARTS.t2dReviewPreventionChart) {
      PRDR_CHARTS.t2dReviewPreventionChart = new Chart(document.getElementById('t2dReviewPreventionChart'), {
        type: 'bar',
        data: {
          labels: ['DPP lifestyle', 'DPP age 60+', 'DPP metformin', 'DPPOS lifestyle', 'DPPOS metformin'],
          datasets: [{
            label: 'Diabetes risk reduction (%)',
            data: [58, 71, 31, 43, 18],
            backgroundColor: [sectionTeal, deepTeal, tealAccent, amber, plumAccent],
            borderColor: deepTeal,
            borderWidth: 1.2,
            borderRadius: 9,
            barThickness: 42
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: ctx => ctx.parsed.y + '% risk reduction' } }
          },
          scales: {
            y: { beginAtZero: true, max: 80, ticks: { color:'#000000', font:{weight:'700'}, callback: v => v + '%' }, grid: { color: 'rgba(11,61,46,0.12)' } },
            x: { grid: { display: false }, ticks: { autoSkip: false, maxRotation: 25, minRotation: 15 } }
          }
        }
      });
    }

    if (chartExists('cgmSemBarriersChart') && !PRDR_CHARTS.cgmSemBarriersChart) {
      PRDR_CHARTS.cgmSemBarriersChart = new Chart(document.getElementById('cgmSemBarriersChart'), {
        type: 'bar',
        data: {
          labels: ['Societal/System', 'Interpersonal/Community', 'Individual'],
          datasets: [
            {
              label: 'Barriers, agreement count',
              data: [155, 147, 150],
              backgroundColor: amber,
              borderColor: deepTeal,
              borderWidth: 1.2,
              borderRadius: 9,
              barThickness: 34
            },
            {
              label: 'Facilitators, agreement count',
              data: [158, 151, 152],
              backgroundColor: sectionTeal,
              borderColor: deepTeal,
              borderWidth: 1.2,
              borderRadius: 9,
              barThickness: 34
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom' } },
          scales: {
            y: { beginAtZero: true, grid: { color: 'rgba(11,61,46,0.12)' } },
            x: { grid: { display: false }, ticks: { autoSkip: false, maxRotation: 25, minRotation: 10 } }
          }
        }
      });
    }

    if (chartExists('cgmBenefitsChart') && !PRDR_CHARTS.cgmBenefitsChart) {
      PRDR_CHARTS.cgmBenefitsChart = new Chart(document.getElementById('cgmBenefitsChart'), {
        type: 'bar',
        data: {
          labels: ['Low blood sugar alerts', 'Dietary changes', 'No fears / continue use', 'Improved control', 'Fewer fingersticks'],
          datasets: [{
            label: 'Theme frequency',
            data: [21, 21, 11, 9, 6],
            backgroundColor: [deepTeal, sectionTeal, tealAccent, amber, plumAccent],
            borderColor: deepTeal,
            borderWidth: 1.2,
            borderRadius: 9,
            barThickness: 36
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true, grid: { color: 'rgba(11,61,46,0.12)' } },
            x: { grid: { display: false }, ticks: { autoSkip: false, maxRotation: 35, minRotation: 20 } }
          }
        }
      });
    }

    if (chartExists('cgmUptakeChart') && !PRDR_CHARTS.cgmUptakeChart) {
      PRDR_CHARTS.cgmUptakeChart = new Chart(document.getElementById('cgmUptakeChart'), {
        type: 'doughnut',
        data: {
          labels: ['Obtained CGM', 'Did not obtain CGM'],
          datasets: [{
            data: [11, 5],
            backgroundColor: [sectionTeal, amber],
            borderColor: '#C8960C',
            borderWidth: 3,
            hoverOffset: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '58%',
          plugins: {
            legend: { position: 'bottom' },
            tooltip: { callbacks: { label: ctx => ctx.label + ': ' + ctx.parsed + ' participants' } }
          }
        }
      });
    }

    if (chartExists('cgmParticipantChart') && !PRDR_CHARTS.cgmParticipantChart) {
      PRDR_CHARTS.cgmParticipantChart = new Chart(document.getElementById('cgmParticipantChart'), {
        type: 'bar',
        data: {
          labels: ['Total participants', 'Age 18–65', 'Age 65+', 'Insulin >5 years', 'Obtained CGM'],
          datasets: [{
            label: 'Participants',
            data: [16, 11, 5, 10, 11],
            backgroundColor: [deepTeal, sectionTeal, tealAccent, amber, plumAccent],
            borderColor: deepTeal,
            borderWidth: 1.2,
            borderRadius: 9,
            barThickness: 38
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true, ticks: { stepSize: 2 }, grid: { color: 'rgba(11,61,46,0.12)' } },
            x: { grid: { display: false }, ticks: { autoSkip: false, maxRotation: 30, minRotation: 15 } }
          }
        }
      });
    }

    if (chartExists('cgmAdoptionPathwayLineChart') && !PRDR_CHARTS.cgmAdoptionPathwayLineChart) {
      PRDR_CHARTS.cgmAdoptionPathwayLineChart = new Chart(document.getElementById('cgmAdoptionPathwayLineChart'), {
        type: 'line',
        data: {
          labels: ['No recent CGM use', '30-day CGM trial', '8-week follow-up'],
          datasets: [{
            label: 'Participants with CGM access/use',
            data: [0, 16, 11],
            borderColor: deepTeal,
            backgroundColor: 'rgba(0,96,100,0.16)',
            pointBackgroundColor: amber,
            pointBorderColor: deepTeal,
            pointRadius: 7,
            tension: 0.38,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, jvPointValueLabels: { suffix: '' }, tooltip: { callbacks: { label: ctx => ctx.parsed.y + ' of 16 participants' } } },
          scales: {
            y: { beginAtZero: true, max: 16, ticks: { stepSize: 4, color:'#000000', font:{weight:'700'} }, title: { display: true, text: 'Participants' }, grid: { color: 'rgba(11,61,46,0.12)' } },
            x: { ticks:{color:'#000000',font:{weight:'700'}, maxRotation: 0, minRotation: 0}, grid: { display: false } }
          }
        }
      });
    }



  };

  document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.page.active') && document.querySelector('.page.active').id.indexOf('page-prdr') === 0) {
      window.initPRDRCharts();
    }
  });
})();

(function(){
  window.RENAL_CHARTS = window.RENAL_CHARTS || {};
  function has(id){ return !!document.getElementById(id); }
  function make(id, config){
    if (!window.Chart || !has(id) || window.RENAL_CHARTS[id]) return;
    window.RENAL_CHARTS[id] = new Chart(document.getElementById(id), config);
  }
  function baseScales(xMax, suffix){
    return {
      x: { beginAtZero: true, max: xMax, ticks: { color:'#000000', font:{weight:'700'}, callback:function(v){ return suffix ? v + suffix : v; } }, grid: { color: 'rgba(11,61,46,0.12)' } },
      y: { ticks:{color:'#000000',font:{weight:'700'}}, grid: { display:false } }
    };
  }
  window.initRenalCharts = function(){
    if (!window.Chart) return;
    const dark = '#12334A', teal = '#006064', tealGreen = '#1F5C45', gold = '#C8960C', purple = '#6A1B9A', plum = '#4C315F';
    make('renalDKDBurdenChart', {
      type:'bar',
      data:{ labels:['Overall diabetes population','Type 1 diabetes','Type 2 diabetes'], datasets:[{ label:'Estimated DKD share', data:[33,30,35], backgroundColor:[dark,gold,tealGreen], borderRadius:10, barThickness:42 }] },
      options:{ indexAxis:'y', responsive:true, maintainAspectRatio:false, _labelSuffix:'%', plugins:{ legend:{display:false}, insideLabel:{display:true}, tooltip:{callbacks:{label:function(ctx){return ctx.parsed.x + '% estimated DKD share';}}} }, scales:baseScales(45,'%') }
    });
    make('renalGlobalGrowthChart', {
      type:'bar',
      data:{ labels:['2021','2045 projected'], datasets:[{type:'bar',label:'Adults with diabetes, millions',data:[536.6,783.2],backgroundColor:[teal,dark],borderRadius:10,yAxisID:'y',order:2},{type:'line',label:'Diabetes prevalence',data:[10.5,12.2],borderColor:gold,backgroundColor:gold,pointBackgroundColor:gold,pointBorderColor:dark,pointRadius:7,tension:0.35,yAxisID:'y1',order:1}] },
      options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{position:'bottom'}, tooltip:{callbacks:{label:function(ctx){return ctx.dataset.label + ': ' + ctx.parsed.y;}}} }, scales:{ y:{beginAtZero:true,max:900,title:{display:true,text:'Millions of adults'},ticks:{color:'#000000',font:{weight:'700'}},grid:{color:'rgba(11,61,46,0.12)'}}, y1:{position:'right',beginAtZero:true,max:15,title:{display:true,text:'Prevalence %'},ticks:{color:'#000000',font:{weight:'700'},callback:function(v){return v+'%';}},grid:{drawOnChartArea:false}}, x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}} } }
    });
    make('renalCostForecastChart', {
      type:'line',
      data:{ labels:['2021','2045 projected'], datasets:[{ label:'Global diabetes-related health expenditure', data:[966,1054], borderColor:dark, backgroundColor:'rgba(200,150,12,0.20)', pointBackgroundColor:gold, pointBorderColor:dark, pointRadius:8, tension:0.35, fill:true }] },
      options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{display:false}, jvPointValueLabels:{prefix:'$',suffix:'B'}, tooltip:{callbacks:{label:function(ctx){return '$'+ctx.parsed.y+'B';}}} }, scales:{ y:{min:900,max:1100,ticks:{color:'#000000',font:{weight:'700'},callback:function(v){return '$'+v+'B';}},grid:{color:'rgba(11,61,46,0.12)'}}, x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}} } }
    });
    make('renalPreventionSignalsChart', {
      type:'bar',
      data:{ labels:['UKPDS albuminuria reduction','CREDENCE renal outcome reduction','Aldosterone antagonist albuminuria reduction'], datasets:[{ label:'Reported reduction', data:[33,30,45], backgroundColor:[tealGreen,dark,purple], borderRadius:10, barThickness:30 }] },
      options:{ indexAxis:'y', responsive:true, maintainAspectRatio:false, _labelSuffix:'%', plugins:{ legend:{display:false}, insideLabel:{display:true}, tooltip:{callbacks:{label:function(ctx){return ctx.parsed.x + '% reported reduction';}}} }, scales:baseScales(60,'%') }
    });
    make('renalProgressionPathwayChart', {
      type:'line',
      data:{ labels:['Hyperfiltration','Albuminuria','Hypertension','Proteinuria','GFR loss','ESRD'], datasets:[{ label:'DKD progression stage', data:[1,2,3,4,5,6], borderColor:dark, backgroundColor:'rgba(0,96,100,0.16)', pointBackgroundColor:[gold,tealGreen,teal,plum,purple,dark], pointBorderColor:dark, pointRadius:7, tension:0.30, fill:true }] },
      options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{display:false}, tooltip:{callbacks:{label:function(ctx){return 'Stage '+ctx.parsed.y;}}} }, scales:{ y:{beginAtZero:true,max:6.5,ticks:{display:false},grid:{color:'rgba(11,61,46,0.12)'}}, x:{ticks:{color:'#000000',font:{weight:'700'},maxRotation:0,minRotation:0},grid:{display:false}} } }
    });
  };
  const oldShowPage = window.showPage;
  if (typeof oldShowPage === 'function' && !window.__renalShowPagePatched) {
    window.__renalShowPagePatched = true;
    window.showPage = function(id){
      const result = oldShowPage.apply(this, arguments);
      if (id === 'researchStory1-renal-disease-in-type-2-diabetes-magnitude') {
        setTimeout(window.initRenalCharts, 80);
      }
      return result;
    };
  }
  document.addEventListener('DOMContentLoaded', function(){ setTimeout(window.initRenalCharts, 120); });
})();

(function(){
  if (window.__amputationStatChartsAdded) return;
  window.__amputationStatChartsAdded = true;
  const localLabelPlugin = { id:'amputationLocalValueLabels', afterDatasetsDraw(chart,args,opts){ if(!opts||opts.display===false)return; const ctx=chart.ctx; ctx.save(); ctx.font=opts.font||'800 11px Nunito, Arial, sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; const suffix=opts.suffix||''; const decimals=opts.decimals??null; chart.data.datasets.forEach((dataset,di)=>{ if(typeof chart.isDatasetVisible==='function' && !chart.isDatasetVisible(di))return; const meta=chart.getDatasetMeta(di); if(!meta||meta.hidden)return; meta.data.forEach((point,i)=>{ if(opts.onlyLast&&i!==dataset.data.length-1)return; const raw=dataset.data[i]; if(raw===null||raw===undefined)return; const val=decimals===null?raw:Number(raw).toFixed(decimals); let x=point.x,y=point.y,color=opts.color||'#000000'; if(chart.config.type==='bar'&&chart.options.indexAxis==='y'){ x=Math.max(point.x-26,32); y=point.y; color=chartValueTextColor(dataset,i,opts.barColor||'#F7FAF9'); } else if(chart.config.type==='bar'){ x=point.x; y=point.y+28; color=chartValueTextColor(dataset,i,opts.barColor||'#F7FAF9'); } else { const pointOx = Array.isArray(dataset.pointLabelOffsetX) ? (dataset.pointLabelOffsetX[i] || 0) : 0; const pointOy = Array.isArray(dataset.pointLabelOffsetY) ? (dataset.pointLabelOffsetY[i] || 0) : 0; const last=(i===dataset.data.length-1); const ox=pointOx + (last?(dataset.lastLabelOffsetX||0):0); const oy=pointOy + (last?(dataset.lastLabelOffsetY||0):0); x=point.x+ox; y=point.y-12+oy; color=opts.color||'#000000'; } ctx.fillStyle=color; if(opts.labelBg){ const metrics=ctx.measureText(val+suffix); const padX=5, padY=3; ctx.save(); ctx.fillStyle=opts.labelBg; ctx.fillRect(x-metrics.width/2-padX,y-8-padY,metrics.width+padX*2,16+padY*2); ctx.restore(); ctx.fillStyle=color; } ctx.fillText(val+suffix,x,y); }); }); ctx.restore(); } };
  const charts={}; function make(id,config){ const el=document.getElementById(id); if(!el||!window.Chart)return; if(charts[id])charts[id].destroy(); charts[id]=new Chart(el,config); }
  window.initAmputationStoryCharts=function(){ if(!window.Chart)return; const dark='#12334A',teal='#006064',tealGreen='#1F5C45',gold='#C8960C',purple='#6A1B9A',plum='#4C315F'; const paleGrid='rgba(11,61,46,0.12)'; const years=['2009','2010','2011','2012','2013','2014','2015','2016','2017'];
    make('ampRateTrendChart',{ type:'line', data:{ labels:years, datasets:[ {label:'Bronx',data:[24.1,28.9,29.5,31.2,36.0,36.7,31.9,38.3,43.2],borderColor:dark,backgroundColor:dark,pointBackgroundColor:gold,pointBorderColor:dark,pointRadius:4,tension:0.28,pointLabelOffsetY:[-2,-2,-2,-2,-2,-2,-2,-2,-2]}, {label:'Brooklyn / Kings',data:[18.9,18.9,18.2,17.3,18.7,19.4,19.8,27.3,29.6],borderColor:teal,backgroundColor:teal,pointBackgroundColor:teal,pointRadius:4,tension:0.28,pointLabelOffsetY:[-2,-2,-2,-2,-2,-2,-2,-2,-2],pointLabelOffsetX:[0,0,0,0,0,0,0,0,6]}, {label:'Manhattan / New York',data:[12.3,11.2,14.6,13.2,15.1,16.2,15.7,19.9,24.2],borderColor:purple,backgroundColor:purple,pointBackgroundColor:purple,pointRadius:4,tension:0.28,pointLabelOffsetY:[18,18,18,18,18,18,18,18,18],pointLabelOffsetX:[-8,-8,-8,-8,-8,-8,-8,-8,-10]}, {label:'Queens',data:[12.3,10.5,11.4,12.8,10.5,13.8,13.6,19.0,25.7],borderColor:gold,backgroundColor:gold,pointBackgroundColor:gold,pointRadius:4,tension:0.28,pointLabelOffsetY:[8,18,8,12,-2,12,8,14,6],pointLabelOffsetX:[8,0,0,0,0,0,0,0,-8]}, {label:'Statewide',data:[14.5,14.1,14.5,14.5,15.3,15.8,15.7,21.4,25.7],borderColor:tealGreen,backgroundColor:tealGreen,pointBackgroundColor:tealGreen,pointRadius:4,tension:0.28,pointLabelOffsetY:[0,8,-4,0,-6,-6,-4,-4,18],pointLabelOffsetX:[0,0,0,0,0,0,0,0,8]} ] }, plugins:[localLabelPlugin], options:{responsive:true,maintainAspectRatio:false,layout:{padding:{right:54,top:10,bottom:4,left:8}},plugins:{legend:{position:'bottom'},jvPointValueLabels:{display:false},amputationLocalValueLabels:{display:true,onlyLast:false},tooltip:{callbacks:{label:function(ctx){return ctx.dataset.label+': '+ctx.parsed.y+' per 100K';}}}},scales:{y:{beginAtZero:true,max:50,title:{display:true,text:'Rate per 100,000 adults'},ticks:{color:'#000000',font:{weight:'700'},stepSize:5},grid:{color:paleGrid}},x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}}} });
    make('ampIncreaseChart',{type:'bar',data:{labels:['Nationwide','New York State','NYC Overall','Bronx','Manhattan','Queens'],datasets:[{label:'Increase',data:[47,84.1,92.4,96.7,113.9,122.5],backgroundColor:[plum,tealGreen,dark,teal,purple,gold],borderRadius:10}]},plugins:[localLabelPlugin],options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},insideLabel:{display:false},amputationLocalValueLabels:{display:true,suffix:'%',barColor:'#F7FAF9'},tooltip:{callbacks:{label:function(ctx){return ctx.parsed.y+'% increase';}}}},scales:{y:{beginAtZero:true,max:140,ticks:{color:'#000000',font:{weight:'700'},callback:function(v){return v+'%';}},grid:{color:paleGrid}},x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}}}});
    make('ampCountSplitChart',{type:'doughnut',data:{labels:['Documented 2009–2017','Projected missing years 2018–2021'],datasets:[{data:[23370,25996],backgroundColor:[dark,gold],borderColor:'#e4f1e6',borderWidth:3}]},plugins:[localLabelPlugin],options:{responsive:true,maintainAspectRatio:false,cutout:'58%',plugins:{legend:{position:'bottom'},amputationLocalValueLabels:{display:false},tooltip:{callbacks:{label:function(ctx){return ctx.label+': '+ctx.parsed.toLocaleString()+' amputations';}}}}}});
    make('ampDeathRateChart',{type:'bar',data:{labels:['Minor amputation','Major amputation'],datasets:[{label:'Five-year death rate',data:[29,57],backgroundColor:[teal,purple],borderRadius:12,barThickness:62}]},plugins:[localLabelPlugin],options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},insideLabel:{display:false},amputationLocalValueLabels:{display:true,suffix:'%',barColor:'#F7FAF9'},tooltip:{callbacks:{label:function(ctx){return ctx.parsed.y+'% five-year death rate';}}}},scales:{y:{beginAtZero:true,max:70,ticks:{color:'#000000',font:{weight:'700'},callback:function(v){return v+'%';}},grid:{color:paleGrid}},x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}}}});
    make('ampPreventionChart',{type:'bar',data:{labels:['Mississippi county early care','Medicare annual wellness visit','Swiss hospital below-knee amputations'],datasets:[{label:'Reduction',data:[75,36,50],backgroundColor:[tealGreen,gold,dark],borderRadius:10}]},plugins:[localLabelPlugin],options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},insideLabel:{display:false},amputationLocalValueLabels:{display:true,suffix:'%',barColor:'#F7FAF9'},tooltip:{callbacks:{label:function(ctx){return ctx.parsed.x+'% reduction';}}}},scales:{x:{beginAtZero:true,max:90,ticks:{color:'#000000',font:{weight:'700'},callback:function(v){return v+'%';}},grid:{color:paleGrid}},y:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}}}});
  };
  const oldShowPage=window.showPage; if(typeof oldShowPage==='function'&&!window.__amputationShowPagePatched){window.__amputationShowPagePatched=true;window.showPage=function(id){const result=oldShowPage.apply(this,arguments); if(id==='researchStory5-new-york-state-diabetes-related-amputation')setTimeout(window.initAmputationStoryCharts,80); return result;};}
  document.addEventListener('DOMContentLoaded',function(){setTimeout(window.initAmputationStoryCharts,180);});
})();

(function(){
  if (window.__incidenceEpiArticleChartsAdded) return;
  window.__incidenceEpiArticleChartsAdded = true;
  const articleCharts = {};
  function make(id, config) {
    const el = document.getElementById(id);
    if (!el || !window.Chart) return;
    if (articleCharts[id]) articleCharts[id].destroy();
    articleCharts[id] = new Chart(el, config);
  }
  function baseOptions(extra) {
    return Object.assign({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom' },
        tooltip: { mode: 'index', intersect: false }
      },
      scales: {
        x: { ticks: { color:'#000000', font:{weight:'700'} }, grid:{ display:false } },
        y: { beginAtZero:true, ticks:{ color:'#000000', font:{weight:'700'} }, grid:{ color:'rgba(11,61,46,0.12)' } }
      }
    }, extra || {});
  }
  function palette() {
    return { dark:'#12334A', teal:'#006064', tealGreen:'#1F5C45', gold:'#C8960C', purple:'#6A1B9A', plum:'#4C315F' };
  }
  window.initIncidencePrevalenceCharts = function(){
    if (!window.Chart) return;
    const c = palette();
    make('cdcPrevalenceTrendChart', {
      type:'line',
      data:{ labels:['1980','1990','2000','2010','2021'], datasets:[{ label:'Diagnosed diabetes prevalence, % of U.S. adults', data:[2.5,4.5,6.2,8.3,11.6], borderColor:c.dark, backgroundColor:'rgba(200,150,12,0.18)', pointBackgroundColor:c.gold, pointBorderColor:c.dark, pointRadius:6, tension:0.32, fill:true }] },
      options:baseOptions({ plugins:{ legend:{display:false}, tooltip:{callbacks:{label:function(ctx){return ctx.parsed.y + '% diagnosed prevalence';}}} }, scales:{ x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}, y:{beginAtZero:true,max:13,ticks:{color:'#000000',font:{weight:'700'},callback:function(v){return v+'%';}},grid:{color:'rgba(11,61,46,0.12)'}} } })
    });
    make('cdcIncidencePatternChart', {
      type:'bar',
      data:{ labels:['1997','2009 peak era','2019','2021'], datasets:[{ label:'New diagnosed cases, millions', data:[0.9,1.7,1.4,1.2], backgroundColor:[c.teal,c.purple,c.tealGreen,c.gold], borderRadius:10 }] },
      options:baseOptions({ plugins:{ legend:{display:false}, tooltip:{callbacks:{label:function(ctx){return ctx.parsed.y + 'M new diagnosed cases';}}} }, scales:{ x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}, y:{beginAtZero:true,max:2,ticks:{color:'#000000',font:{weight:'700'},callback:function(v){return v+'M';}},grid:{color:'rgba(11,61,46,0.12)'}} } })
    });
    make('cdcAgeGradientChart', {
      type:'bar',
      data:{ labels:['18-44','45-64','65+'], datasets:[{ label:'Relative diagnosed diabetes burden', data:[4,14,25], backgroundColor:[c.tealGreen,c.teal,c.dark], borderRadius:10 }] },
      options:baseOptions({ plugins:{ legend:{display:false}, tooltip:{callbacks:{label:function(ctx){return ctx.parsed.y + '% illustrative age-group burden';}}} }, scales:{ x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}, y:{beginAtZero:true,max:30,ticks:{color:'#000000',font:{weight:'700'},callback:function(v){return v+'%';}},grid:{color:'rgba(11,61,46,0.12)'}} } })
    });
    make('cdcStateTierChart', {
      type:'doughnut',
      data:{ labels:['Lower burden states','Middle burden states','Higher burden states'], datasets:[{ data:[15,22,13], backgroundColor:[c.tealGreen,c.gold,c.purple], borderColor:'#e4f1e6', borderWidth:3 }] },
      options:{ responsive:true, maintainAspectRatio:false, cutout:'56%', plugins:{ legend:{position:'bottom'}, tooltip:{callbacks:{label:function(ctx){return ctx.label + ': ' + ctx.parsed + ' states (tier view)';}}} } }
    });
  };
  window.initEpidemiologicalPatternCharts = function(){
    if (!window.Chart) return;
    const c = palette();
    make('epiPatternsBurdenIndexChart', {
      type:'line',
      data:{ labels:['1990','2000','2010','2020','2024'], datasets:[{ label:'Diabetes burden index, 1990=100', data:[100,135,178,215,232], borderColor:c.dark, backgroundColor:'rgba(0,96,100,0.18)', pointBackgroundColor:c.gold, pointBorderColor:c.dark, pointRadius:6, tension:0.32, fill:true }] },
      options:baseOptions({ plugins:{ legend:{display:false}, tooltip:{callbacks:{label:function(ctx){return 'Index: ' + ctx.parsed.y;}}} }, scales:{ x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}, y:{beginAtZero:true,max:260,ticks:{color:'#000000',font:{weight:'700'}},grid:{color:'rgba(11,61,46,0.12)'}} } })
    });
    make('epiPatternsTypeShareChart', {
      type:'doughnut',
      data:{ labels:['Type 2 diabetes','Type 1 diabetes','Other/unspecified'], datasets:[{ data:[88,7,5], backgroundColor:[c.dark,c.gold,c.teal], borderColor:'#e4f1e6', borderWidth:3 }] },
      options:{ responsive:true, maintainAspectRatio:false, cutout:'58%', plugins:{ legend:{position:'bottom'}, tooltip:{callbacks:{label:function(ctx){return ctx.label + ': ' + ctx.parsed + '% illustrative share';}}} } }
    });
    make('epiPatternsAgeChart', {
      type:'bar',
      data:{ labels:['Children/teens','Young adults','Middle adults','Older adults'], datasets:[{ label:'Relative burden index', data:[20,55,125,210], backgroundColor:[c.tealGreen,c.teal,c.gold,c.purple], borderRadius:10 }] },
      options:baseOptions({ plugins:{ legend:{display:false}, tooltip:{callbacks:{label:function(ctx){return 'Relative index: ' + ctx.parsed.y;}}} }, scales:{ x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}, y:{beginAtZero:true,max:240,ticks:{color:'#000000',font:{weight:'700'}},grid:{color:'rgba(11,61,46,0.12)'}} } })
    });
    make('epiPatternsDisparityChart', {
      type:'bar',
      data:{ labels:['White','Black','Hispanic','Asian/PI','AI/AN'], datasets:[{ label:'Relative disparity signal', data:[100,145,138,116,172], backgroundColor:[c.tealGreen,c.dark,c.teal,c.gold,c.purple], borderRadius:10 }] },
      options:baseOptions({ plugins:{ legend:{display:false}, tooltip:{callbacks:{label:function(ctx){return 'Relative index: ' + ctx.parsed.y;}}} }, scales:{ x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}}, y:{beginAtZero:true,max:190,ticks:{color:'#000000',font:{weight:'700'}},grid:{color:'rgba(11,61,46,0.12)'}} } })
    });
  };
  const oldShowPage = window.showPage;
  if (typeof oldShowPage === 'function' && !window.__incidenceEpiShowPagePatched) {
    window.__incidenceEpiShowPagePatched = true;
    window.showPage = function(id) {
      const result = oldShowPage.apply(this, arguments);
      if (id === 'researchDiabetesIncidencePrevalence2024') setTimeout(window.initIncidencePrevalenceCharts, 80);
      if (id === 'researchEpidemiologicalPatterns2025') setTimeout(window.initEpidemiologicalPatternCharts, 80);
      return result;
    };
  }
})();

(function(){
  if (window.__hispanicExtraArticleChartsAdded) return;
  window.__hispanicExtraArticleChartsAdded = true;
  const charts = {};
  const colors = ['#12334A','#006064','#1F5C45','#C8960C','#6A1B9A','#4C315F'];
  function make(id, config) {
    const el = document.getElementById(id);
    if (!el || !window.Chart || charts[id]) return;
    charts[id] = new Chart(el, config);
  }
  function bar(id, labels, data, title, max) {
    make(id, {
      type:'bar',
      data:{ labels, datasets:[{ label:title, data, backgroundColor:colors.slice(0, labels.length), borderRadius:10 }] },
      options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{display:false}, tooltip:{callbacks:{label:function(ctx){return ctx.parsed.y + ' theme score';}}} }, scales:{ y:{beginAtZero:true,max:max||100,ticks:{color:'#000000',font:{weight:'700'}},grid:{color:'rgba(11,61,46,0.12)'}}, x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}} } }
    });
  }
  function radar(id, labels, data, title) {
    make(id, {
      type:'radar',
      data:{ labels, datasets:[{ label:title, data, borderColor:'#12334A', backgroundColor:'rgba(200,150,12,0.25)', pointBackgroundColor:'#C8960C', pointBorderColor:'#12334A', pointRadius:4 }] },
      options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{position:'bottom'} }, scales:{ r:{ beginAtZero:true, max:100, ticks:{color:'#000000',font:{weight:'700'},backdropColor:'rgba(255,255,255,0.65)'}, pointLabels:{color:'#000000',font:{weight:'800'}}, grid:{color:'rgba(11,61,46,0.18)'}, angleLines:{color:'rgba(11,61,46,0.18)'} } } }
    });
  }
  function line(id, labels, data, title) {
    make(id, {
      type:'line',
      data:{ labels, datasets:[{ label:title, data, borderColor:'#12334A', backgroundColor:'rgba(0,96,100,0.18)', pointBackgroundColor:'#C8960C', pointBorderColor:'#12334A', pointRadius:6, tension:0.35, fill:true }] },
      options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{display:false} }, scales:{ y:{beginAtZero:true,max:100,ticks:{color:'#000000',font:{weight:'700'}},grid:{color:'rgba(11,61,46,0.12)'}}, x:{ticks:{color:'#000000',font:{weight:'700'}},grid:{display:false}} } }
    });
  }
  window.initHispanicExtraArticleCharts = function(){
    if (!window.Chart) return;
    line('hispIncidenceRiskChart', ['Early risk','Prediabetes','Diagnosis','Complications'], [35,58,76,92], 'Risk pathway');
    radar('hispIncidenceContextChart', ['Subgroup','Age','Access','Income','Family history'], [92,78,86,80,72], 'Context map');
    radar('sdohImpactDomainsChart', ['Neighborhood','Food','Care access','Stress','Income'], [88,82,90,76,84], 'Social domains');
    bar('sdohImpactStackChart', ['One barrier','Two barriers','Three+ barriers'], [38,65,91], 'Barrier stack');
    radar('medicareEquityDomainsChart', ['Screening','Medication','Follow-up','Education','Cost'], [82,86,74,70,88], 'Equity domains');
    bar('medicareCareGapChart', ['Prevention','Diagnosis','Control','Complications'], [62,70,84,78], 'Care gap signals');
    line('mortalityPatternIndexChart', ['Low burden','Middle burden','High burden','Very high burden'], [28,48,72,94], 'Mortality pattern');
    radar('mortalityDriversChart', ['Care access','Complications','Prevention','Comorbidities','Follow-up'], [82,90,76,86,78], 'Mortality drivers');
    radar('textMessagePrioritiesChart', ['Plain language','Culture fit','Reminders','Trust','Action steps'], [96,90,84,88,92], 'Message priorities');
    line('textMessagePathwayChart', ['Message','Understanding','Daily action','Follow-up'], [30,58,76,88], 'Support pathway');
    radar('hypertensionSharedRiskChart', ['Blood pressure','Blood sugar','Kidney risk','Heart risk','Medication'], [88,92,78,90,82], 'Shared risk');
    bar('hypertensionCareNeedsChart', ['Monitoring','Medication','Nutrition','Primary care','Education'], [84,88,76,92,80], 'Care needs');
    radar('neighborhoodFactorsChart', ['Food access','Walkability','Safety','Resources','Care nearby'], [86,78,80,74,82], 'Neighborhood factors');
    bar('neighborhoodPreventionChart', ['Healthy food','Safe activity','Clinics','Community support'], [88,80,76,84], 'Prevention environment');
    radar('hispDiabetesFocusChart', ['Risk','Screening','Education','Care access','Complications'], [90,86,82,88,84], 'Focus areas');
    bar('hispDiabetesEquityChart', ['Language','Insurance','Food support','Primary care','Trust'], [86,90,82,88,84], 'Equity support');
    radar('hispObesityLinkChart', ['Metabolic risk','Food access','Activity space','Stress','Prevention'], [90,86,78,76,84], 'Obesity link');
    bar('hispObesitySupportChart', ['Nutrition','Movement','Clinical care','Community programs'], [88,82,78,84], 'Support areas');
    radar('sdohPart2ClusterChart', ['Income','Housing','Language','Stress','Support'], [86,78,82,88,74], 'Clustered barriers');
    bar('sdohPart2SupportChart', ['Care','Food','Language','Family','Referrals'], [88,84,90,76,82], 'Support points');
  };
  const oldShowPage = window.showPage;
  if (typeof oldShowPage === 'function' && !window.__hispanicExtraShowPagePatched) {
    window.__hispanicExtraShowPagePatched = true;
    window.showPage = function(id) {
      const result = oldShowPage.apply(this, arguments);
      if (id.indexOf('prdr') === 0) setTimeout(window.initHispanicExtraArticleCharts, 90);
      return result;
    };
  }
})();

