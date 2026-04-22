import { useState } from 'react';
import {
  Box, Card, CardContent, Typography, ToggleButton, ToggleButtonGroup,
  Grid, Divider, Button, Tooltip, Chip, Stack, Paper, Alert,
  Snackbar, IconButton, useTheme,
} from '@mui/material';
import {
  ViewSidebar, WebAsset, DarkMode, LightMode, RestartAlt, Check,
} from '@mui/icons-material';
import PageHeader from '@components/common/PageHeader';
import { useThemeMode, DEFAULT_DARK, DEFAULT_LIGHT } from '@theme/ThemeContext';

// ── Colour presets ───────────────────────────────────────────────────────────
const DARK_PRESETS = [
  { label: 'Ocean Blue',   colors: { primary: '#42a5f5', secondary: '#29b6f6', bgDefault: '#0d1117', bgPaper: '#161b22' } },
  { label: 'Emerald',      colors: { primary: '#4caf50', secondary: '#26a69a', bgDefault: '#0a1628', bgPaper: '#0f2240' } },
  { label: 'Violet Storm', colors: { primary: '#ab47bc', secondary: '#7e57c2', bgDefault: '#12001e', bgPaper: '#1a0030' } },
  { label: 'Sunset',       colors: { primary: '#ff7043', secondary: '#ffca28', bgDefault: '#1a0a00', bgPaper: '#2a1500' } },
  { label: 'Slate',        colors: { primary: '#78909c', secondary: '#546e7a', bgDefault: '#0e1217', bgPaper: '#1c2530' } },
  { label: 'Rose Gold',    colors: { primary: '#f48fb1', secondary: '#f06292', bgDefault: '#1a0a10', bgPaper: '#28101a' } },
];

const LIGHT_PRESETS = [
  { label: 'Classic Blue', colors: { primary: '#1565c0', secondary: '#0277bd', bgDefault: '#f0f4f8', bgPaper: '#ffffff' } },
  { label: 'Forest',       colors: { primary: '#2e7d32', secondary: '#388e3c', bgDefault: '#f1f8e9', bgPaper: '#ffffff' } },
  { label: 'Plum',         colors: { primary: '#6a1b9a', secondary: '#8e24aa', bgDefault: '#f3e5f5', bgPaper: '#ffffff' } },
  { label: 'Coral',        colors: { primary: '#bf360c', secondary: '#e64a19', bgDefault: '#fbe9e7', bgPaper: '#ffffff' } },
  { label: 'Steel',        colors: { primary: '#37474f', secondary: '#455a64', bgDefault: '#eceff1', bgPaper: '#ffffff' } },
  { label: 'Teal',         colors: { primary: '#00695c', secondary: '#00796b', bgDefault: '#e0f2f1', bgPaper: '#ffffff' } },
];

// ── Color fields config ──────────────────────────────────────────────────────
const COLOR_FIELDS = [
  { key: 'primary',   label: 'Primary' },
  { key: 'secondary', label: 'Secondary' },
  { key: 'success',   label: 'Success' },
  { key: 'warning',   label: 'Warning' },
  { key: 'error',     label: 'Error' },
  { key: 'bgDefault', label: 'Background' },
  { key: 'bgPaper',   label: 'Paper / Card' },
];

// ── Swatch button ────────────────────────────────────────────────────────────
const Swatch = ({ color, selected, onClick, size = 32 }) => (
  <Tooltip title={color}>
    <Box
      onClick={onClick}
      sx={{
        width: size, height: size, borderRadius: '50%',
        bgcolor: color, cursor: 'pointer', flexShrink: 0,
        border: selected ? '3px solid' : '2px solid transparent',
        borderColor: selected ? 'primary.main' : 'divider',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'transform 0.15s',
        '&:hover': { transform: 'scale(1.15)' },
        boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
      }}
    >
      {selected && <Check sx={{ fontSize: 14, color: '#fff', filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.8))' }} />}
    </Box>
  </Tooltip>
);

// ── Layout preview card ──────────────────────────────────────────────────────
const LayoutPreview = ({ type, active }) => {
  const theme = useTheme();
  const bg    = theme.palette.background.default;
  const paper = theme.palette.background.paper;
  const pri   = theme.palette.primary.main;
  const div   = theme.palette.divider;

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 1.5, cursor: 'pointer', borderRadius: 2,
        border: '2px solid',
        borderColor: active ? pri : div,
        transition: 'all 0.2s',
        '&:hover': { borderColor: pri },
      }}
    >
      {/* Mini preview drawing */}
      <Box sx={{ width: '100%', aspectRatio: '16/9', bgcolor: bg, borderRadius: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {type === 'horizontal' ? (
          <>
            {/* Top bar */}
            <Box sx={{ height: '16%', bgcolor: paper, borderBottom: `1px solid ${div}`, display: 'flex', alignItems: 'center', px: 1, gap: 0.5 }}>
              <Box sx={{ width: 10, height: 5, bgcolor: pri, borderRadius: 0.5 }} />
              {[...Array(5)].map((_, i) => <Box key={i} sx={{ flex: 1, height: 4, bgcolor: div, borderRadius: 0.5 }} />)}
            </Box>
            {/* Sub bar */}
            <Box sx={{ height: '10%', bgcolor: '#1e3a5f', display: 'flex', alignItems: 'center', px: 1, gap: 0.5 }}>
              {[...Array(6)].map((_, i) => <Box key={i} sx={{ flex: 1, height: 3, bgcolor: 'rgba(255,255,255,0.25)', borderRadius: 0.5 }} />)}
            </Box>
            {/* Content row */}
            <Box sx={{ flex: 1, display: 'flex' }}>
              {/* Mini sidebar */}
              <Box sx={{ width: '8%', bgcolor: '#0d1117', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 0.5, gap: 0.5 }}>
                {[...Array(4)].map((_, i) => <Box key={i} sx={{ width: 6, height: 6, bgcolor: 'rgba(255,255,255,0.3)', borderRadius: '50%' }} />)}
              </Box>
              {/* Page */}
              <Box sx={{ flex: 1, p: 0.5, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                {[...Array(4)].map((_, i) => <Box key={i} sx={{ height: 5, bgcolor: paper, borderRadius: 0.5, opacity: 0.8 - i * 0.15 }} />)}
              </Box>
            </Box>
          </>
        ) : (
          <Box sx={{ flex: 1, display: 'flex' }}>
            {/* Sidebar */}
            <Box sx={{ width: '22%', bgcolor: paper, borderRight: `1px solid ${div}`, p: 0.5, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Box sx={{ height: 6, bgcolor: pri, borderRadius: 0.5, mb: 0.5 }} />
              {[...Array(7)].map((_, i) => <Box key={i} sx={{ height: 4, bgcolor: div, borderRadius: 0.5, opacity: 1 - i * 0.1 }} />)}
            </Box>
            {/* Mini sidebar */}
            <Box sx={{ width: '7%', bgcolor: '#0d1117', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 0.5, gap: 0.5 }}>
              {[...Array(5)].map((_, i) => <Box key={i} sx={{ width: 6, height: 6, bgcolor: 'rgba(255,255,255,0.3)', borderRadius: '50%' }} />)}
            </Box>
            {/* Content */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ height: '14%', bgcolor: paper, borderBottom: `1px solid ${div}` }} />
              <Box sx={{ flex: 1, p: 0.5, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                {[...Array(4)].map((_, i) => <Box key={i} sx={{ height: 5, bgcolor: paper, borderRadius: 0.5, opacity: 0.8 - i * 0.15 }} />)}
              </Box>
            </Box>
          </Box>
        )}
      </Box>
      <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="caption" fontWeight={active ? 700 : 400}>
          {type === 'horizontal' ? 'Horizontal (Top Nav)' : 'Sidebar (Classic)'}
        </Typography>
        {active && <Chip label="Active" size="small" color="primary" sx={{ height: 16, fontSize: '0.65rem' }} />}
      </Box>
    </Paper>
  );
};

// ── Main Settings Page ───────────────────────────────────────────────────────
const AppSettings = () => {
  const { mode, layout, darkColors, lightColors, toggle, setLayout, updateColors, resetColors } = useThemeMode();
  const [toast, setToast] = useState(false);

  const currentColors = mode === 'dark' ? darkColors : lightColors;
  const presets       = mode === 'dark' ? DARK_PRESETS : LIGHT_PRESETS;

  const handleColorChange = (key, val) => updateColors(mode, { [key]: val });

  const applyPreset = (preset) => {
    updateColors(mode, preset.colors);
    setToast(true);
  };

  const handleReset = () => {
    resetColors(mode);
    setToast(true);
  };

  return (
    <Box>
      <PageHeader
        title="App Settings"
        subtitle="Customize your layout, theme, and color palette."
      />

      <Grid container spacing={3}>

        {/* ── Layout ─────────────────────────────────────── */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Box>
                  <Typography variant="subtitle1" fontWeight={700}>Layout Style</Typography>
                  <Typography variant="caption" color="text.secondary">
                    Choose how the navigation is displayed
                  </Typography>
                </Box>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} onClick={() => setLayout('horizontal')}>
                  <LayoutPreview type="horizontal" active={layout === 'horizontal'} />
                </Grid>
                <Grid item xs={12} sm={6} onClick={() => setLayout('sidebar')}>
                  <LayoutPreview type="sidebar" active={layout === 'sidebar'} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* ── Theme mode ─────────────────────────────────── */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight={700} mb={0.5}>Color Mode</Typography>
              <Typography variant="caption" color="text.secondary" display="block" mb={2}>
                Switch between dark and light appearance
              </Typography>
              <ToggleButtonGroup
                value={mode}
                exclusive
                onChange={(_, v) => { if (v && v !== mode) toggle(); }}
                fullWidth
                size="small"
              >
                <ToggleButton value="dark">
                  <DarkMode fontSize="small" sx={{ mr: 1 }} /> Dark
                </ToggleButton>
                <ToggleButton value="light">
                  <LightMode fontSize="small" sx={{ mr: 1 }} /> Light
                </ToggleButton>
              </ToggleButtonGroup>

              <Divider sx={{ my: 2 }} />

              <Typography variant="caption" color="text.secondary" display="block" mb={1.5}>
                Currently editing: <strong>{mode === 'dark' ? 'Dark' : 'Light'} mode colors</strong>
              </Typography>

              <Button
                variant="outlined"
                size="small"
                startIcon={<RestartAlt />}
                onClick={handleReset}
                fullWidth
                color="warning"
              >
                Reset to Defaults
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* ── Color presets ──────────────────────────────── */}
        <Grid item xs={12} md={8}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight={700} mb={0.5}>Color Presets</Typography>
              <Typography variant="caption" color="text.secondary" display="block" mb={2}>
                Quick-apply a curated color scheme for {mode} mode
              </Typography>
              <Grid container spacing={1.5}>
                {presets.map(preset => (
                  <Grid item xs={6} sm={4} key={preset.label}>
                    <Paper
                      variant="outlined"
                      onClick={() => applyPreset(preset)}
                      sx={{
                        p: 1.5, cursor: 'pointer', borderRadius: 2,
                        '&:hover': { borderColor: 'primary.main', bgcolor: 'action.hover' },
                        transition: 'all 0.15s',
                      }}
                    >
                      <Stack direction="row" spacing={0.5} mb={1}>
                        {['primary', 'secondary', 'bgDefault', 'bgPaper'].map(k => (
                          <Box key={k} sx={{ width: 16, height: 16, borderRadius: '50%', bgcolor: preset.colors[k] || currentColors[k], border: '1px solid rgba(128,128,128,0.3)' }} />
                        ))}
                      </Stack>
                      <Typography variant="caption" fontWeight={500}>{preset.label}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* ── Custom color picker ────────────────────────── */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" fontWeight={700} mb={0.5}>Custom Colors</Typography>
              <Typography variant="caption" color="text.secondary" display="block" mb={2.5}>
                Fine-tune individual colors for <strong>{mode}</strong> mode. Click a swatch to pick a custom color.
              </Typography>

              <Grid container spacing={2.5}>
                {COLOR_FIELDS.map(field => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={field.key}>
                    <Box
                      sx={{
                        display: 'flex', alignItems: 'center', gap: 1.5,
                        p: 1.5, borderRadius: 2, border: '1px solid', borderColor: 'divider',
                      }}
                    >
                      {/* Native color input hidden behind swatch */}
                      <Box sx={{ position: 'relative', flexShrink: 0 }}>
                        <Swatch color={currentColors[field.key]} selected={false} size={36} />
                        <Box
                          component="input"
                          type="color"
                          value={currentColors[field.key]}
                          onChange={e => handleColorChange(field.key, e.target.value)}
                          sx={{
                            position: 'absolute', inset: 0,
                            opacity: 0, cursor: 'pointer', width: '100%', height: '100%',
                          }}
                        />
                      </Box>
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography variant="caption" fontWeight={600} display="block">
                          {field.label}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', fontSize: '0.7rem' }}>
                          {currentColors[field.key]}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Divider sx={{ my: 2.5 }} />

              {/* Live preview bar */}
              <Typography variant="caption" color="text.secondary" display="block" mb={1.5}>
                Live Color Preview
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {COLOR_FIELDS.map(f => (
                  <Box key={f.key} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
                    <Box sx={{ width: 40, height: 40, borderRadius: 1, bgcolor: currentColors[f.key], border: '1px solid rgba(128,128,128,0.3)', boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }} />
                    <Typography variant="caption" sx={{ fontSize: '0.65rem', color: 'text.secondary' }}>{f.label}</Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

      <Snackbar
        open={toast}
        autoHideDuration={2500}
        onClose={() => setToast(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" onClose={() => setToast(false)} sx={{ width: '100%' }}>
          Theme settings applied!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AppSettings;
