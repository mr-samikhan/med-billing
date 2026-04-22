import {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
  useEffect,
} from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import {
  PRIMARY,
  SUCCESS,
  WARNING,
  DANGER,
  INFO,
  AUXILIARY,
  FONT_PRESETS,
} from "@theme/designTokens";

// ── Defaults ──────────────────────────────────────────────────────
export const DEFAULT_LIGHT = {
  primary: PRIMARY[700],
  secondary: PRIMARY[600],
  auxiliary: AUXILIARY[600],
  success: SUCCESS[600],
  warning: WARNING[600],
  danger: DANGER[600],
  info: INFO[600],
  bgDefault: "#F4F6F8",
  bgPaper: "#FFFFFF",
};

export const DEFAULT_DARK = {
  primary: PRIMARY[600],
  secondary: PRIMARY[500],
  auxiliary: AUXILIARY[500],
  success: SUCCESS[500],
  warning: WARNING[500],
  danger: DANGER[500],
  info: INFO[500],
  bgDefault: "#0D1117",
  bgPaper: "#161B22",
};

const STORAGE = {
  mode: "medbill_theme",
  layout: "medbill_layout",
  darkClr: "medbill_dark_colors",
  lightClr: "medbill_light_colors",
  fontId: "medbill_font",
};

const read = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;

    const parsed = JSON.parse(raw);

    // merge fallback + saved
    return { ...fallback, ...parsed };
  } catch {
    return fallback;
  }
};
const write = (k, v) => {
  try {
    localStorage.setItem(k, JSON.stringify(v));
  } catch {}
};

// ── Dynamic Google Font loader ────────────────────────────────────
const loadGoogleFont = (preset) => {
  if (!preset) return;
  const id = `gf-${preset.id}`;
  if (document.getElementById(id)) return;
  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?family=${preset.googleUrl}&display=swap`;
  document.head.appendChild(link);
};
const safe = (val, fallback) => val || fallback;

// ── Theme builder ─────────────────────────────────────────────────
const buildTheme = (mode, colors, fontFamily) =>
  createTheme({
    palette: {
      mode,
      primary: { main: colors.primary },
      secondary: { main: colors.secondary },
      success: { main: colors.success },
      warning: { main: colors.warning },
      error: { main: safe(colors.danger, "#d32f2f") }, // 👈 FIXED
      info: { main: colors.info },
      background: { default: colors.bgDefault, paper: colors.bgPaper },
      text:
        mode === "dark"
          ? { primary: "#E6EDF3", secondary: "#8B949E" }
          : { primary: "#111111", secondary: "#4D4548" },
      divider: mode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
      // Custom tokens accessible via theme.palette.auxiliary etc
      auxiliary: { main: colors.auxiliary },
    },
    typography: {
      fontFamily,
      fontSize: 14,
      // Text 1 — Bold — 18px / 125%
      h1: { fontWeight: 700, fontSize: "1.5rem", lineHeight: 1.25 },
      h2: { fontWeight: 700, fontSize: "1.25rem", lineHeight: 1.25 },
      h3: { fontWeight: 600, fontSize: "1.125rem", lineHeight: 1.25 },
      h4: { fontWeight: 600, fontSize: "1rem", lineHeight: 1.25 },
      h5: { fontWeight: 600, fontSize: "0.9375rem", lineHeight: 1.25 },
      h6: { fontWeight: 600, fontSize: "0.875rem", lineHeight: 1.25 },
      // Text — Semibold — 14px / 125% / ls: 0
      subtitle1: {
        fontWeight: 600,
        fontSize: "0.875rem",
        lineHeight: 1.25,
        letterSpacing: 0,
      },
      subtitle2: {
        fontWeight: 600,
        fontSize: "0.8125rem",
        lineHeight: 1.25,
        letterSpacing: 0,
      },
      // Text — Regular — 14px / 125% / ls: 0
      body1: {
        fontWeight: 400,
        fontSize: "0.875rem",
        lineHeight: 1.25,
        letterSpacing: 0,
      },
      body2: {
        fontWeight: 400,
        fontSize: "0.8125rem",
        lineHeight: 1.25,
        letterSpacing: 0,
      },
      caption: {
        fontWeight: 400,
        fontSize: "0.75rem",
        lineHeight: 1.25,
        letterSpacing: 0,
      },
      button: {
        fontWeight: 500,
        fontSize: "0.875rem",
        textTransform: "none",
        letterSpacing: 0,
      },
    },
    shape: { borderRadius: 6 },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 6,
            fontWeight: 500,
            boxShadow: "none",
            "&:hover": { boxShadow: "none" },
          },
          sizeSmall: { fontSize: "0.8125rem", padding: "4px 12px" },
          sizeMedium: { fontSize: "0.875rem", padding: "6px 16px" },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            ...(mode === "dark"
              ? {
                  border: "1px solid rgba(255,255,255,0.06)",
                  boxShadow: "none",
                }
              : {
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                }),
          },
        },
      },
      MuiTextField: {
        defaultProps: { size: "small" },
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 6,
              fontSize: "0.875rem",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: { root: { borderRadius: 6 } },
      },
      MuiTableCell: {
        styleOverrides: {
          head: { fontWeight: 600, fontSize: "0.8125rem", letterSpacing: 0 },
          body: { fontSize: "0.875rem" },
        },
      },
      MuiChip: {
        styleOverrides: { root: { borderRadius: 4, fontSize: "0.75rem" } },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            fontWeight: 500,
            fontSize: "0.875rem",
            textTransform: "none",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: { root: { boxShadow: "none" } },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            "&:hover": {
              bgcolor:
                mode === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
            },
          },
        },
      },
    },
  });

// ── Context ───────────────────────────────────────────────────────
const ThemeModeContext = createContext({});

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState(
    () => localStorage.getItem(STORAGE.mode) || "light",
  );
  const [layout, setLayoutSt] = useState(
    () => localStorage.getItem(STORAGE.layout) || "horizontal",
  );
  const [darkColors, setDarkClr] = useState(() =>
    read(STORAGE.darkClr, DEFAULT_DARK),
  );
  const [lightColors, setLightClr] = useState(() =>
    read(STORAGE.lightClr, DEFAULT_LIGHT),
  );
  const [fontId, setFontIdSt] = useState(
    () => localStorage.getItem(STORAGE.fontId) || "inter",
  );

  const fontPreset =
    FONT_PRESETS.find((f) => f.id === fontId) || FONT_PRESETS[0];

  // Load font on mount + when changed
  useEffect(() => {
    loadGoogleFont(fontPreset);
  }, [fontPreset]);

  const toggle = useCallback(() => {
    setMode((prev) => {
      const n = prev === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE.mode, n);
      return n;
    });
  }, []);

  const setLayout = useCallback((v) => {
    setLayoutSt(v);
    localStorage.setItem(STORAGE.layout, v);
  }, []);

  const setFont = useCallback((id) => {
    setFontIdSt(id);
    localStorage.setItem(STORAGE.fontId, id);
    const p = FONT_PRESETS.find((f) => f.id === id);
    if (p) loadGoogleFont(p);
  }, []);

  const updateColors = useCallback((targetMode, patch) => {
    if (targetMode === "dark") {
      setDarkClr((prev) => {
        const n = { ...prev, ...patch };
        write(STORAGE.darkClr, n);
        return n;
      });
    } else {
      setLightClr((prev) => {
        const n = { ...prev, ...patch };
        write(STORAGE.lightClr, n);
        return n;
      });
    }
  }, []);

  const resetColors = useCallback((targetMode) => {
    if (targetMode === "dark") {
      setDarkClr(DEFAULT_DARK);
      write(STORAGE.darkClr, DEFAULT_DARK);
    } else {
      setLightClr(DEFAULT_LIGHT);
      write(STORAGE.lightClr, DEFAULT_LIGHT);
    }
  }, []);

  const colors = mode === "dark" ? darkColors : lightColors;
  const theme = useMemo(
    () => buildTheme(mode, colors, fontPreset.family),
    [mode, colors, fontPreset],
  );

  return (
    <ThemeModeContext.Provider
      value={{
        mode,
        layout,
        darkColors,
        lightColors,
        fontId,
        fontPreset,
        toggle,
        setLayout,
        setFont,
        updateColors,
        resetColors,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => useContext(ThemeModeContext);
