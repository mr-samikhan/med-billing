import { createContext, useContext, useMemo, useState, useCallback } from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

// ── Default palettes ────────────────────────────────────────────────────────
const DEFAULT_DARK = {
  primary:   '#42a5f5',
  secondary: '#29b6f6',
  success:   '#66bb6a',
  warning:   '#ffa726',
  error:     '#ef5350',
  bgDefault: '#0d1117',
  bgPaper:   '#161b22',
};

const DEFAULT_LIGHT = {
  primary:   '#1565c0',
  secondary: '#0277bd',
  success:   '#2e7d32',
  warning:   '#e65100',
  error:     '#c62828',
  bgDefault: '#f0f4f8',
  bgPaper:   '#ffffff',
};

const STORAGE_KEYS = {
  mode:        'medbill_theme',
  layout:      'medbill_layout',
  darkColors:  'medbill_dark_colors',
  lightColors: 'medbill_light_colors',
};

const read = (key, fallback) => {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
  catch { return fallback; }
};

const write = (key, val) => {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
};

const buildTypography = () => ({
  fontFamily: '"Inter", "Roboto", sans-serif',
  h1: { fontWeight: 700, fontSize: '2rem' },
  h2: { fontWeight: 600, fontSize: '1.5rem' },
  h3: { fontWeight: 600, fontSize: '1.25rem' },
  h4: { fontWeight: 600 },
  h5: { fontWeight: 500 },
  h6: { fontWeight: 500 },
  button: { textTransform: 'none', fontWeight: 500 },
  body1: { fontSize: '0.875rem' },
  body2: { fontSize: '0.8125rem' },
});

const buildComponents = (mode) => ({
  MuiButton: { styleOverrides: { root: { borderRadius: 8, fontWeight: 500 } } },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        ...(mode === 'dark'
          ? { border: '1px solid rgba(255,255,255,0.06)' }
          : { boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }),
      },
    },
  },
  MuiTableCell: { styleOverrides: { head: { fontWeight: 600, fontSize: '0.8125rem' } } },
});

const buildTheme = (mode, colors) =>
  createTheme({
    palette: {
      mode,
      primary:    { main: colors.primary },
      secondary:  { main: colors.secondary },
      success:    { main: colors.success },
      warning:    { main: colors.warning },
      error:      { main: colors.error },
      background: { default: colors.bgDefault, paper: colors.bgPaper },
      text: mode === 'dark'
        ? { primary: '#e6edf3', secondary: '#8b949e' }
        : { primary: '#1a2027', secondary: '#546e7a' },
      divider: mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
    },
    typography: buildTypography(),
    shape: { borderRadius: 8 },
    components: buildComponents(mode),
  });

// ── Context ─────────────────────────────────────────────────────────────────
const ThemeModeContext = createContext({
  mode: 'dark',
  layout: 'horizontal',        // 'horizontal' | 'sidebar'
  darkColors:  DEFAULT_DARK,
  lightColors: DEFAULT_LIGHT,
  toggle: () => {},
  setLayout: () => {},
  updateColors: () => {},
  resetColors: () => {},
});

export const ThemeModeProvider = ({ children }) => {
  const [mode,        setMode]        = useState(() => localStorage.getItem(STORAGE_KEYS.mode) || 'dark');
  const [layout,      setLayoutState] = useState(() => localStorage.getItem(STORAGE_KEYS.layout) || 'horizontal');
  const [darkColors,  setDarkColors]  = useState(() => read(STORAGE_KEYS.darkColors,  DEFAULT_DARK));
  const [lightColors, setLightColors] = useState(() => read(STORAGE_KEYS.lightColors, DEFAULT_LIGHT));

  const toggle = useCallback(() => {
    setMode(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem(STORAGE_KEYS.mode, next);
      return next;
    });
  }, []);

  const setLayout = useCallback((val) => {
    setLayoutState(val);
    localStorage.setItem(STORAGE_KEYS.layout, val);
  }, []);

  const updateColors = useCallback((targetMode, patch) => {
    if (targetMode === 'dark') {
      setDarkColors(prev => { const next = { ...prev, ...patch }; write(STORAGE_KEYS.darkColors, next); return next; });
    } else {
      setLightColors(prev => { const next = { ...prev, ...patch }; write(STORAGE_KEYS.lightColors, next); return next; });
    }
  }, []);

  const resetColors = useCallback((targetMode) => {
    if (targetMode === 'dark') {
      setDarkColors(DEFAULT_DARK); write(STORAGE_KEYS.darkColors, DEFAULT_DARK);
    } else {
      setLightColors(DEFAULT_LIGHT); write(STORAGE_KEYS.lightColors, DEFAULT_LIGHT);
    }
  }, []);

  const colors = mode === 'dark' ? darkColors : lightColors;
  const theme  = useMemo(() => buildTheme(mode, colors), [mode, colors]);

  return (
    <ThemeModeContext.Provider value={{ mode, layout, darkColors, lightColors, toggle, setLayout, updateColors, resetColors }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => useContext(ThemeModeContext);
export { DEFAULT_DARK, DEFAULT_LIGHT };
