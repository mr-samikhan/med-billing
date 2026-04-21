import { createTheme } from '@mui/material/styles';

const baseTypography = {
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
};

const baseComponents = {
  MuiButton: {
    styleOverrides: {
      root: { borderRadius: 8, fontWeight: 500 },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: { borderRadius: 12, boxShadow: '0 1px 4px rgba(0,0,0,0.08)' },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      head: { fontWeight: 600, fontSize: '0.8125rem' },
    },
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary:    { main: '#1565c0', light: '#1976d2', dark: '#003c8f' },
    secondary:  { main: '#0277bd', light: '#0288d1', dark: '#01579b' },
    success:    { main: '#2e7d32' },
    warning:    { main: '#e65100' },
    error:      { main: '#c62828' },
    background: { default: '#f0f4f8', paper: '#ffffff' },
    text:       { primary: '#1a2027', secondary: '#546e7a' },
    divider:    'rgba(0,0,0,0.08)',
  },
  typography: baseTypography,
  shape: { borderRadius: 8 },
  components: baseComponents,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary:    { main: '#42a5f5', light: '#80d6ff', dark: '#0077c2' },
    secondary:  { main: '#29b6f6', light: '#73e8ff', dark: '#0086c3' },
    success:    { main: '#66bb6a' },
    warning:    { main: '#ffa726' },
    error:      { main: '#ef5350' },
    background: { default: '#0d1117', paper: '#161b22' },
    text:       { primary: '#e6edf3', secondary: '#8b949e' },
    divider:    'rgba(255,255,255,0.08)',
  },
  typography: baseTypography,
  shape: { borderRadius: 8 },
  components: {
    ...baseComponents,
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' },
      },
    },
  },
});
