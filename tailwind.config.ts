import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // surfaces
        "zf-black":    "#000000",
        "zf-ink":      "#0A0A0A",
        "zf-graphite": "#121212",
        "zf-iron":     "#1A1A1A",
        "zf-smoke":    "#242424",
        "zf-ash":      "#3A3A3A",
        // foreground
        "zf-bone": "#FAFAF7",
        "zf-fog":  "#C8C8C5",
        "zf-mist": "#8A8A88",
        "zf-dust": "#5A5A58",
        // accent
        "zf-sage":      "#8A9A86",
        "zf-sage-deep": "#6B7C68",
        "zf-sage-pale": "#B5C2B2",
        // semantic
        "zf-stock-low": "#C4756B",
        "zf-soldout":   "#6B6B6B",
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "Helvetica Neue", "Arial", "sans-serif"],
        body:    ["var(--font-body)", "Manrope", "Helvetica Neue", "Arial", "sans-serif"],
        mono:    ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        "zf-tighter": "-0.04em",
        "zf-tight":   "-0.02em",
        "zf-wide":    "0.06em",
        "zf-wider":   "0.14em",
        "zf-widest":  "0.22em",
      },
      boxShadow: {
        "zf-lift":  "0 12px 32px rgba(0,0,0,0.55)",
        "zf-modal": "0 24px 80px rgba(0,0,0,0.7)",
        "zf-focus": "0 0 0 1px #8A9A86, 0 0 0 4px rgba(138,154,134,0.18)",
      },
      transitionTimingFunction: {
        "zf-out": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        "zf-container": "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
