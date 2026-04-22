import { useState } from 'react';
import {
  Box, Card, CardContent, Typography, ToggleButton, ToggleButtonGroup,
  Grid, Divider, Button, Paper, Alert, Snackbar, Stack, Chip,
  Tabs, Tab, Tooltip, useTheme, IconButton,
} from '@mui/material';
import {
  ViewSidebar, WebAsset, DarkMode, LightMode, RestartAlt, Check,
  Palette, TextFields, Dashboard, Tune,
} from '@mui/icons-material';
import PageHeader from '@components/common/PageHeader';
import { useThemeMode } from '@theme/ThemeContext';
import {
  COLOR_PRESETS_LIGHT, COLOR_PRESETS_DARK, COLOR_FIELDS,
  FONT_PRESETS, NEUTRAL_CORRECT, PRIMARY, AUXILIARY,
  SUCCESS, WARNING, DANGER, INFO,
} from '@theme/designTokens';

// ── Helpers ──────────────────────────────────────────────────────
const hexToRgb = hex => {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `rgb(${r},${g},${b})`;
};

const luminance = hex => {
  const c = hex.replace('#','');
  const r = parseInt(c.slice(0,2),16)/255;
  const g = parseInt(c.slice(2,4),16)/255;
  const b = parseInt(c.slice(4,6),16)/255;
  return 0.299*r + 0.587*g + 0.114*b;
};
const textOnBg = hex => luminance(hex) > 0.5 ? '#111111' : '#FFFFFF';

// ── Small swatch ─────────────────────────────────────────────────
const Dot = ({ color, size = 22, selected, onClick }) => (
  <Tooltip title={color}>
    <Box onClick={onClick} sx={{
      width: size, height: size, borderRadius: '50%', bgcolor: color,
      flexShrink: 0, cursor: onClick ? 'pointer' : 'default',
      border: selected ? '2.5px solid' : '1.5px solid',
      borderColor: selected ? 'primary.main' : 'transparent',
      boxShadow: selected ? '0 0 0 2px rgba(56,130,249,0.35)' : '0 1px 3px rgba(0,0,0,0.25)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      transition: 'transform 0.12s', '&:hover': onClick ? { transform: 'scale(1.2)' } : {},
    }}>
      {selected && <Check sx={{ fontSize: 11, color: textOnBg(color) }} />}
    </Box>
  </Tooltip>
);

// ── Colour scale row ─────────────────────────────────────────────
const ScaleRow = ({ label, shades }) => (
  <Box sx={{ mb: 1 }}>
    <Typography variant="caption" fontWeight={600} color="text.secondary" sx={{ mb: 0.75, display: 'block' }}>{label}</Typography>
    <Stack direction="row" spacing={0.5}>
      {Object.entries(shades).map(([k, v]) => (
        <Tooltip key={k} title={`${label} ${k} — ${v}`}>
          <Box sx={{
            flex: 1, height: 36, bgcolor: v, borderRadius: 1,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end',
            pb: 0.5, cursor: 'default', border: '1px solid rgba(0,0,0,0.06)',
          }}>
            <Typography sx={{ fontSize: '0.55rem', color: textOnBg(v), lineHeight: 1 }}>{k}</Typography>
          </Box>
        </Tooltip>
      ))}
    </Stack>
  </Box>
);

// ── Layout preview ───────────────────────────────────────────────
const LayoutPreview = ({ type, active, onClick }) => {
  const theme = useTheme();
  const bg = theme.palette.background.default;
  const paper = theme.palette.background.paper;
  const pri = theme.palette.primary.main;
  const div = theme.palette.divider;

  return (
    <Paper variant="outlined" onClick={onClick} sx={{
      p: 1.5, cursor: 'pointer', borderRadius: 2, userSelect: 'none',
      border: '2px solid', borderColor: active ? pri : div,
      transition: 'all 0.18s', '&:hover': { borderColor: pri, bgcolor: 'action.hover' },
    }}>
      <Box sx={{ width: '100%', aspectRatio: '16/9', bgcolor: bg, borderRadius: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {type === 'horizontal' ? (
          <>
            <Box sx={{ height: '16%', bgcolor: paper, borderBottom: `1px solid ${div}`, display: 'flex', alignItems: 'center', px: 1, gap: 0.5 }}>
              <Box sx={{ width: 12, height: 6, bgcolor: pri, borderRadius: 0.5 }} />
              {[...Array(6)].map((_,i) => <Box key={i} sx={{ flex:1, height:4, bgcolor:div, borderRadius:0.5 }} />)}
            </Box>
            <Box sx={{ height: '10%', bgcolor:'#1e3a5f', display:'flex', alignItems:'center', px:1, gap:0.5 }}>
              {[...Array(5)].map((_,i) => <Box key={i} sx={{ flex:1, height:3, bgcolor:'rgba(255,255,255,0.25)', borderRadius:0.5 }} />)}
            </Box>
            <Box sx={{ flex:1, display:'flex' }}>
              <Box sx={{ width:'7%', bgcolor:'#0a0e14', display:'flex', flexDirection:'column', alignItems:'center', pt:0.5, gap:0.4 }}>
                {[...Array(5)].map((_,i) => <Box key={i} sx={{ width:5, height:5, bgcolor:'rgba(255,255,255,0.3)', borderRadius:'50%' }} />)}
              </Box>
              <Box sx={{ flex:1, p:0.5, display:'flex', flexDirection:'column', gap:0.4 }}>
                {[...Array(4)].map((_,i) => <Box key={i} sx={{ height:5, bgcolor:paper, borderRadius:0.5, opacity:0.8-i*0.12 }} />)}
              </Box>
            </Box>
          </>
        ) : (
          <Box sx={{ flex:1, display:'flex' }}>
            <Box sx={{ width:'22%', bgcolor:paper, borderRight:`1px solid ${div}`, p:0.5, display:'flex', flexDirection:'column', gap:0.4 }}>
              <Box sx={{ height:7, bgcolor:pri, borderRadius:0.5, mb:0.5 }} />
              {[...Array(8)].map((_,i) => <Box key={i} sx={{ height:4, bgcolor:div, borderRadius:0.5, opacity:1-i*0.1 }} />)}
            </Box>
            <Box sx={{ width:'7%', bgcolor:'#0a0e14', display:'flex', flexDirection:'column', alignItems:'center', pt:0.5, gap:0.4 }}>
              {[...Array(5)].map((_,i) => <Box key={i} sx={{ width:5, height:5, bgcolor:'rgba(255,255,255,0.3)', borderRadius:'50%' }} />)}
            </Box>
            <Box sx={{ flex:1, display:'flex', flexDirection:'column' }}>
              <Box sx={{ height:'14%', bgcolor:paper, borderBottom:`1px solid ${div}` }} />
              <Box sx={{ flex:1, p:0.5, display:'flex', flexDirection:'column', gap:0.4 }}>
                {[...Array(4)].map((_,i) => <Box key={i} sx={{ height:5, bgcolor:paper, borderRadius:0.5, opacity:0.8-i*0.12 }} />)}
              </Box>
            </Box>
          </Box>
        )}
      </Box>
      <Box sx={{ mt:1, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <Typography variant="caption" fontWeight={active?700:400}>
          {type === 'horizontal' ? 'Horizontal (Top Nav)' : 'Sidebar (Classic)'}
        </Typography>
        {active && <Chip label="Active" size="small" color="primary" sx={{ height:16, fontSize:'0.65rem' }} />}
      </Box>
    </Paper>
  );
};

// ── Font Card ────────────────────────────────────────────────────
const FontCard = ({ preset, active, onClick }) => (
  <Paper variant="outlined" onClick={onClick} sx={{
    p: 1.5, cursor: 'pointer', borderRadius: 2,
    border: '2px solid', borderColor: active ? 'primary.main' : 'divider',
    transition: 'all 0.15s', '&:hover': { borderColor: 'primary.main', bgcolor: 'action.hover' },
    position: 'relative',
  }}>
    {active && (
      <Box sx={{
        position: 'absolute', top: 6, right: 6,
        bgcolor: 'primary.main', borderRadius: '50%', width: 18, height: 18,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Check sx={{ fontSize: 11, color: '#fff' }} />
      </Box>
    )}
    <Typography sx={{ fontFamily: preset.family, fontWeight: 700, fontSize: '1.25rem', lineHeight: 1.2, mb: 0.5 }}>
      {preset.label}
    </Typography>
    <Typography sx={{ fontFamily: preset.family, fontSize: '0.7rem', color: 'text.secondary' }}>
      AaBbCc 0123456789
    </Typography>
  </Paper>
);

// ── Preset card ──────────────────────────────────────────────────
const PresetCard = ({ preset, active, onApply }) => (
  <Paper variant="outlined" onClick={onApply} sx={{
    p: 1.5, cursor: 'pointer', borderRadius: 2,
    border: '2px solid', borderColor: active ? 'primary.main' : 'divider',
    transition: 'all 0.15s', '&:hover': { borderColor: 'primary.main', bgcolor: 'action.hover' },
  }}>
    <Stack direction="row" spacing={0.5} mb={1.25} flexWrap="wrap">
      {COLOR_FIELDS.slice(0,6).map(f => (
        preset.colors[f.key] && <Dot key={f.key} color={preset.colors[f.key]} size={18} />
      ))}
    </Stack>
    <Box sx={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
      <Typography variant="caption" fontWeight={600}>{preset.label}</Typography>
      {active && <Chip label="Active" size="small" color="primary" sx={{ height:16, fontSize:'0.6rem' }} />}
    </Box>
  </Paper>
);

// ── Main component ───────────────────────────────────────────────
const AppSettings = () => {
  const { mode, layout, darkColors, lightColors, fontId, toggle, setLayout, setFont, updateColors, resetColors } = useThemeMode();
  const [tab,   setTab]   = useState(0);
  const [toast, setToast] = useState({ open: false, msg: '' });

  const showToast = (msg) => setToast({ open: true, msg });
  const currentColors = mode === 'dark' ? darkColors : lightColors;
  const presets       = mode === 'dark' ? COLOR_PRESETS_DARK : COLOR_PRESETS_LIGHT;

  const handlePreset = (preset) => {
    updateColors(mode, preset.colors);
    showToast(`"${preset.label}" applied!`);
  };
  const handleColorPick = (key, val) => updateColors(mode, { [key]: val });
  const handleReset     = () => { resetColors(mode); showToast('Reset to defaults'); };
  const handleFont      = (id) => { setFont(id); showToast('Font updated'); };

  const isActivePreset = (preset) =>
    Object.entries(preset.colors).every(([k,v]) => (currentColors[k]||'').toLowerCase() === v.toLowerCase());

  return (
    <Box>
      <PageHeader title="App Settings" subtitle="Customize layout, theme, colors, and typography." />

      {/* ── Tab bar ───────────────────────────────────────── */}
      <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 3, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Tab icon={<Dashboard sx={{ fontSize: 16 }} />} iconPosition="start" label="Layout" />
        <Tab icon={<Palette    sx={{ fontSize: 16 }} />} iconPosition="start" label="Colors" />
        <Tab icon={<TextFields sx={{ fontSize: 16 }} />} iconPosition="start" label="Typography" />
      </Tabs>

      {/* ════════════════ TAB 0 — LAYOUT ════════════════════ */}
      {tab === 0 && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={700} mb={0.5}>Layout Style</Typography>
                <Typography variant="body2" color="text.secondary" mb={2.5}>Choose how navigation is displayed across the app</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}><LayoutPreview type="horizontal" active={layout==='horizontal'} onClick={() => { setLayout('horizontal'); showToast('Layout switched to Horizontal'); }} /></Grid>
                  <Grid item xs={12} sm={6}><LayoutPreview type="sidebar"    active={layout==='sidebar'}    onClick={() => { setLayout('sidebar');    showToast('Layout switched to Sidebar');    }} /></Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={700} mb={0.5}>Color Mode</Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>Switch between dark and light appearance</Typography>
                <ToggleButtonGroup value={mode} exclusive onChange={(_,v) => { if (v && v !== mode) toggle(); }} fullWidth size="small">
                  <ToggleButton value="dark">  <DarkMode  fontSize="small" sx={{ mr: 0.75 }} /> Dark  </ToggleButton>
                  <ToggleButton value="light"> <LightMode fontSize="small" sx={{ mr: 0.75 }} /> Light </ToggleButton>
                </ToggleButtonGroup>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {/* ════════════════ TAB 1 — COLORS ════════════════════ */}
      {tab === 1 && (
        <Grid container spacing={3}>

          {/* ── Design System Palette ───────────────── */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Box sx={{ display:'flex', alignItems:'center', justifyContent:'space-between', mb: 2 }}>
                  <Box>
                    <Typography variant="subtitle1" fontWeight={700}>Design System Palette</Typography>
                    <Typography variant="body2" color="text.secondary">ObsidianRCM color tokens — all 7 scales</Typography>
                  </Box>
                  <ToggleButtonGroup value={mode} exclusive onChange={(_,v) => { if (v && v !== mode) toggle(); }} size="small">
                    <ToggleButton value="dark"><DarkMode fontSize="small" /></ToggleButton>
                    <ToggleButton value="light"><LightMode fontSize="small" /></ToggleButton>
                  </ToggleButtonGroup>
                </Box>
                <Grid container spacing={1.5}>
                  {[
                    { label: 'Neutral',   shades: NEUTRAL_CORRECT },
                    { label: 'Primary',   shades: PRIMARY },
                    { label: 'Auxiliary', shades: AUXILIARY },
                    { label: 'Danger',    shades: DANGER },
                    { label: 'Warning',   shades: WARNING },
                    { label: 'Success',   shades: SUCCESS },
                    { label: 'Info',      shades: INFO },
                  ].map(({ label, shades }) => (
                    <Grid item xs={12} key={label}>
                      <ScaleRow label={label} shades={shades} />
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* ── Color Presets ──────────────────────── */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Box sx={{ display:'flex', alignItems:'center', justifyContent:'space-between', mb: 2 }}>
                  <Box>
                    <Typography variant="subtitle1" fontWeight={700}>Color Presets</Typography>
                    <Typography variant="body2" color="text.secondary">Quick-apply a curated palette for <strong>{mode}</strong> mode</Typography>
                  </Box>
                  <Button variant="outlined" size="small" startIcon={<RestartAlt />} onClick={handleReset} color="warning">
                    Reset Defaults
                  </Button>
                </Box>
                <Grid container spacing={1.5}>
                  {presets.map(preset => (
                    <Grid item xs={6} sm={4} md={2} key={preset.id}>
                      <PresetCard preset={preset} active={isActivePreset(preset)} onApply={() => handlePreset(preset)} />
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* ── Color Mixer / Custom Picker ─────────── */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={700} mb={0.5}>Color Mixer</Typography>
                <Typography variant="body2" color="text.secondary" mb={2.5}>
                  Fine-tune individual tokens for <strong>{mode}</strong> mode — click the swatch to open the color picker
                </Typography>

                {/* Grouped fields */}
                {[
                  { group: 'Brand Colors',    fields: COLOR_FIELDS.filter(f => f.group === 'brand') },
                  { group: 'Semantic Colors', fields: COLOR_FIELDS.filter(f => f.group === 'semantic') },
                  { group: 'Surface Colors',  fields: COLOR_FIELDS.filter(f => f.group === 'surface') },
                ].map(({ group, fields }) => (
                  <Box key={group} sx={{ mb: 3 }}>
                    <Typography variant="caption" fontWeight={700} color="text.secondary"
                      sx={{ textTransform: 'uppercase', letterSpacing: 1, mb: 1.5, display: 'block' }}>
                      {group}
                    </Typography>
                    <Grid container spacing={1.5}>
                      {fields.map(field => {
                        const val = currentColors[field.key] || '#888888';
                        return (
                          <Grid item xs={12} sm={6} md={4} key={field.key}>
                            <Box sx={{
                              display: 'flex', alignItems: 'center', gap: 1.5,
                              p: 1.25, borderRadius: 2, border: '1px solid', borderColor: 'divider',
                              bgcolor: 'background.default',
                            }}>
                              {/* Colour swatch + hidden native picker */}
                              <Box sx={{ position: 'relative', flexShrink: 0 }}>
                                <Box sx={{
                                  width: 40, height: 40, borderRadius: 1.5, bgcolor: val,
                                  border: '1px solid rgba(0,0,0,0.15)', boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                                }} />
                                <Box
                                  component="input" type="color" value={val}
                                  onChange={e => handleColorPick(field.key, e.target.value)}
                                  sx={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%' }}
                                />
                              </Box>
                              <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Typography variant="body2" fontWeight={600}>{field.label}</Typography>
                                <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', fontSize: '0.72rem' }}>
                                  {val.toUpperCase()}
                                </Typography>
                              </Box>
                            </Box>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                ))}

                <Divider sx={{ my: 2 }} />

                {/* Live preview strip */}
                <Typography variant="caption" color="text.secondary" fontWeight={600} display="block" mb={1.5}>
                  LIVE PREVIEW
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {COLOR_FIELDS.map(f => {
                    const val = currentColors[f.key] || '#888888';
                    return (
                      <Tooltip key={f.key} title={`${f.label}: ${val}`}>
                        <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center', gap:0.5 }}>
                          <Box sx={{
                            width: 44, height: 44, borderRadius: 1.5, bgcolor: val,
                            border: '1px solid rgba(128,128,128,0.25)',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                            display:'flex', alignItems:'center', justifyContent:'center',
                          }}>
                            <Typography sx={{ fontSize:'0.6rem', color: textOnBg(val), fontWeight:700 }}>
                              {f.label[0]}
                            </Typography>
                          </Box>
                          <Typography variant="caption" sx={{ fontSize:'0.65rem', color:'text.secondary' }}>{f.label}</Typography>
                        </Box>
                      </Tooltip>
                    );
                  })}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {/* ════════════════ TAB 2 — TYPOGRAPHY ════════════════ */}
      {tab === 2 && (
        <Grid container spacing={3}>
          {/* Font selector */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={700} mb={0.5}>Font Family</Typography>
                <Typography variant="body2" color="text.secondary" mb={2.5}>
                  Select from the ObsidianRCM approved typefaces — fonts load from Google Fonts automatically
                </Typography>
                <Grid container spacing={2}>
                  {FONT_PRESETS.map(preset => (
                    <Grid item xs={6} sm={4} md={3} key={preset.id}>
                      <FontCard preset={preset} active={fontId === preset.id} onClick={() => handleFont(preset.id)} />
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Typography scale preview */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={700} mb={0.5}>Typography Scale</Typography>
                <Typography variant="body2" color="text.secondary" mb={2.5}>
                  Desktop type scale matching Figma spec — Inter Bold 18px / Inter Semibold 14px / Krub Semibold 14px
                </Typography>

                <Grid container spacing={2}>
                  {[
                    { variant: 'h1',       spec: 'Text 1 · Bold · 18px · LH 125%',         sample: 'Heading 1 — Bold Display' },
                    { variant: 'h2',       spec: 'Text 1 · Bold · 16px · LH 125%',         sample: 'Heading 2 — Section Title' },
                    { variant: 'subtitle1',spec: 'Text · Semibold · 14px · LH 125% · LS 0', sample: 'Subtitle — Card Label' },
                    { variant: 'body1',    spec: 'Text · Regular · 14px · LH 125% · LS 0',  sample: 'Body text — paragraph and descriptions go here.' },
                    { variant: 'body2',    spec: 'Text · Regular · 13px · LH 125% · LS 0',  sample: 'Body 2 — secondary content, table cells.' },
                    { variant: 'caption',  spec: 'Caption · 12px · LH 125%',                sample: 'CAPTION · Labels · Helper text · Timestamps' },
                  ].map(({ variant, spec, sample }) => (
                    <Grid item xs={12} key={variant}>
                      <Paper variant="outlined" sx={{ px: 2.5, py: 1.5, borderRadius: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, flexWrap: 'wrap' }}>
                          <Typography variant={variant} sx={{ flex: 1, minWidth: 200 }}>{sample}</Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', fontSize: '0.7rem', flexShrink: 0 }}>
                            {spec}
                          </Typography>
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>

                <Divider sx={{ my: 2.5 }} />

                {/* Live alphabet specimen */}
                <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ textTransform:'uppercase', letterSpacing:1, display:'block', mb:1.5 }}>
                  FONT SPECIMEN
                </Typography>
                <Box sx={{ p: 2.5, bgcolor: 'background.default', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                  <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, mb: 0.5 }}>
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  </Typography>
                  <Typography sx={{ fontSize: '1.25rem', fontWeight: 400, mb: 0.5 }}>
                    abcdefghijklmnopqrstuvwxyz
                  </Typography>
                  <Typography sx={{ fontSize: '1rem', fontWeight: 400 }}>
                    1234567890!@#$%^&amp;*()
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      <Snackbar open={toast.open} autoHideDuration={2200} onClose={() => setToast({ open:false, msg:'' })}
        anchorOrigin={{ vertical:'bottom', horizontal:'center' }}>
        <Alert severity="success" onClose={() => setToast({ open:false, msg:'' })} sx={{ width:'100%' }}>
          {toast.msg}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AppSettings;
