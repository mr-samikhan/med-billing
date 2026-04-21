import { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '@theme/theme';

const ThemeModeContext = createContext({ mode: 'dark', toggle: () => {} });

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState(
    () => localStorage.getItem('medbill_theme') || 'dark'
  );

  const toggle = () => {
    setMode(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('medbill_theme', next);
      return next;
    });
  };

  const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode]);

  return (
    <ThemeModeContext.Provider value={{ mode, toggle }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => useContext(ThemeModeContext);
