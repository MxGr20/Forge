(function initForgeColorTokens() {
  const designTokens = {
    palettes: {
      primary: {
        "50": "#EEF2FF",
        "100": "#E0E7FF",
        "200": "#C7D2FE",
        "300": "#A5B4FC",
        "400": "#7C8CFF",
        "500": "#4F66FF",
        "600": "#2D3B8D",
        "700": "#27306F",
        "800": "#1F2657",
        "900": "#151A3D"
      },
      secondary: {
        "50": "#F8FAFC",
        "100": "#F1F5F9",
        "200": "#E2E8F0",
        "300": "#CBD5E1",
        "400": "#94A3B8",
        "500": "#64748B",
        "600": "#475569",
        "700": "#334155",
        "800": "#1E293B",
        "900": "#0F172A"
      }
    },
    grays: {
      bgAppLight: "#F6F8FC",
      surfaceLight: "#FFFFFF",
      dividerLight: "#E6EAF2",
      mutedFillLight: "#F2F5FB",
      textPrimaryLight: "#111827",
      textSecondaryLight: "#6B7280",
      iconMutedLight: "#94A3B8",
      bgAppDark: "#0B1024",
      surfaceDark: "#0F1733",
      surfaceDarkElevated: "#141C3F",
      dividerDark: "#1F2A4D",
      textPrimaryDark: "#F8FAFC",
      textSecondaryDark: "#AAB3C5",
      iconMutedDark: "#7D8AA6"
    },
    accents: {
      chartBarLight: "#CED7FF",
      chartBarMid: "#8FA0FF",
      chartBarDark: "#4F66FF",
      illustrationStroke: "#2D3B8D",
      illustrationFill: "#A5B4FC",
      success: "#22C55E",
      warning: "#F59E0B",
      danger: "#EF4444"
    },
    semantic: {
      light: {
        appBg: "#F6F8FC",
        surface: "#FFFFFF",
        surfaceMuted: "#F2F5FB",
        surfaceElevated: "#FFFFFF",
        textPrimary: "#111827",
        textSecondary: "#6B7280",
        iconMuted: "#94A3B8",
        divider: "#E6EAF2",
        brand: "#2D3B8D",
        brandStrong: "#27306F",
        brandSoft: "#E0E7FF",
        onBrand: "#FFFFFF",
        chartSurface: "#151A3D"
      },
      dark: {
        appBg: "#0B1024",
        surface: "#0F1733",
        surfaceMuted: "#141C3F",
        surfaceElevated: "#141C3F",
        textPrimary: "#F8FAFC",
        textSecondary: "#AAB3C5",
        iconMuted: "#7D8AA6",
        divider: "#1F2A4D",
        brand: "#4F66FF",
        brandStrong: "#7C8CFF",
        brandSoft: "#151A3D",
        onBrand: "#FFFFFF",
        chartSurface: "#151A3D"
      }
    },
    gradients: {
      primaryPanel: {
        from: "#2D3B8D",
        to: "#4F66FF"
      },
      deepPanel: {
        from: "#0F1733",
        to: "#27306F"
      }
    },
    chartSeries: ["#4F66FF", "#8FA0FF", "#22C55E", "#F59E0B", "#EF4444", "#A5B4FC", "#14B8A6", "#F97316"],
    metricSeries: {
      bodyWeight: "#4F66FF",
      muscleWeight: "#22C55E",
      boneWeight: "#F59E0B",
      bodyFat: "#EF4444",
      tbw: "#8FA0FF",
      bmi: "#A5B4FC",
      heaviestWeight: "#4F66FF",
      oneRmBrzycki: "#8FA0FF",
      bestSetVolume: "#22C55E",
      bestSessionVolume: "#F59E0B",
      mostReps: "#EF4444"
    }
  };

  function toRgb(hex) {
    const value = String(hex || "").replace("#", "");
    if (value.length !== 6) return "79 102 255";
    const r = parseInt(value.slice(0, 2), 16);
    const g = parseInt(value.slice(2, 4), 16);
    const b = parseInt(value.slice(4, 6), 16);
    return `${r} ${g} ${b}`;
  }

  function applyTheme(themeName) {
    const mode = themeName === "dark" ? "dark" : "light";
    const semantic = designTokens.semantic[mode];
    const root = document.documentElement;

    const vars = {
      "--color-app-bg": semantic.appBg,
      "--color-surface": semantic.surface,
      "--color-surface-muted": semantic.surfaceMuted,
      "--color-surface-elevated": semantic.surfaceElevated,
      "--color-text-primary": semantic.textPrimary,
      "--color-text-secondary": semantic.textSecondary,
      "--color-icon-muted": semantic.iconMuted,
      "--color-divider": semantic.divider,
      "--color-brand": semantic.brand,
      "--color-brand-strong": semantic.brandStrong,
      "--color-brand-soft": semantic.brandSoft,
      "--color-on-brand": semantic.onBrand,
      "--color-chart-surface": semantic.chartSurface,
      "--color-success": designTokens.accents.success,
      "--color-warning": designTokens.accents.warning,
      "--color-danger": designTokens.accents.danger,
      "--success-rgb": toRgb(designTokens.accents.success),
      "--warning-rgb": toRgb(designTokens.accents.warning),
      "--danger-rgb": toRgb(designTokens.accents.danger),
      "--gradient-primary-from": designTokens.gradients.primaryPanel.from,
      "--gradient-primary-to": designTokens.gradients.primaryPanel.to,
      "--gradient-deep-from": designTokens.gradients.deepPanel.from,
      "--gradient-deep-to": designTokens.gradients.deepPanel.to,
      "--chart-grid-stroke": mode === "dark" ? "rgba(170, 179, 197, 0.24)" : "rgba(71, 85, 105, 0.18)",
      "--chart-axis-text": mode === "dark" ? "#AAB3C5" : "#64748B",
      "--panel-shadow": mode === "dark"
        ? "0 10px 30px rgba(0, 0, 0, 0.40)"
        : "0 10px 30px rgba(16, 24, 40, 0.10)",
      "--floating-shadow": mode === "dark"
        ? "0 20px 40px rgba(0, 0, 0, 0.55)"
        : "0 20px 40px rgba(16, 24, 40, 0.14)",
      "--brand-rgb": toRgb(semantic.brand),
      "--brand-soft-rgb": toRgb(semantic.brandSoft)
    };

    designTokens.chartSeries.forEach((color, idx) => {
      vars[`--chart-series-${idx + 1}`] = color;
    });

    Object.entries(designTokens.metricSeries).forEach(([key, value]) => {
      vars[`--metric-${key}`] = value;
    });

    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    root.setAttribute("data-theme", mode);
    return mode;
  }

  function getMetricColor(metricKey) {
    return designTokens.metricSeries[metricKey] || designTokens.chartSeries[0];
  }

  function getSeriesColor(index) {
    const normalized = Math.abs(parseInt(index, 10) || 0) % designTokens.chartSeries.length;
    return designTokens.chartSeries[normalized];
  }

  window.FORGE_COLORS = {
    tokens: designTokens,
    applyTheme,
    getMetricColor,
    getSeriesColor
  };
})();
