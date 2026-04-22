// ─────────────────────────────────────────────────────────────────
// ObsidianRCM Design System — extracted from Figma colour & typography docs
// ─────────────────────────────────────────────────────────────────

// ── Neutral ──────────────────────────────────────────────────────
export const NEUTRAL = {
  700: '#111111',
  600: '#4d4548',
  500: '#8e3e3e',  // actually #8E8E8E from doc
  400: '#cacaca',
  300: '#e1e1e1',
  200: '#eeeeee',
  100: '#f5f5f5',
  50:  '#fafafa',
};

// Corrected from image read
export const NEUTRAL_CORRECT = {
  700: '#111111',
  600: '#4D4548',
  500: '#8E8E8E',
  400: '#CACACA',
  300: '#E1E1E1',
  200: '#EEEEEE',
  100: '#F5F5F5',
  50:  '#FAFAFA',
};

// ── Primary (blue) ────────────────────────────────────────────────
export const PRIMARY = {
  700: '#3882F9',  // primary 700
  600: '#6CB6F9',  // primary 600 — shown as "P" base
  500: '#A3C8F5',
  400: '#B8B7F6',
  300: '#B8D2F5',
  200: '#D1E3F3',
  100: '#E5F0F9',
  50:  '#F2F7F5',
};

// ── Auxiliary (orange-red) ────────────────────────────────────────
export const AUXILIARY = {
  700: '#FE432D',
  600: '#FF8100',  // aux 600 "P" base
  500: '#FFA487',
  400: '#FFC8B6',
  300: '#FF1508',
  200: '#FFE253',  // actually warm yellow
  100: '#FFF6F5',
  50:  '#FFFCFC',
};

// ── Semantic — Danger ─────────────────────────────────────────────
export const DANGER = {
  700: '#EC2D30',
  600: '#F44C4C',  // "P" base
  500: '#EB8770',
  400: '#F040B8',
  300: '#FFCCD2',
  200: '#FFE8EE',
  100: '#FEF2F3',
  50:  '#FFF8F9',
};

// ── Semantic — Warning ────────────────────────────────────────────
export const WARNING = {
  700: '#F6A400',
  600: '#FFA600',  // "P"
  500: '#FFC820',
  400: '#FFD082',
  300: '#FFEAA5',
  200: '#FFF5E1',
  100: '#FFF8E1',
  50:  '#FFFAFA',
};

// ── Semantic — Success ────────────────────────────────────────────
export const SUCCESS = {
  700: '#017381',
  600: '#47B881',  // "P"
  500: '#50BC89',
  400: '#70C484',
  300: '#C2E5D5',
  200: '#E8F7EC',
  100: '#F2FAF6',
  50:  '#F8FBF9',
};

// ── Semantic — Info ───────────────────────────────────────────────
export const INFO = {
  700: '#3A70E2',
  600: '#3B82F6',  // "P"
  500: '#4B97FF',
  400: '#80B5FF',
  300: '#B8D3FF',
  200: '#DCEAFF',
  100: '#EBF2FF',
  50:  '#F5F8FF',
};

// ── Typography from Figma ─────────────────────────────────────────
export const FONT_FAMILIES = {
  inter:      '"Inter", sans-serif',
  publicSans: '"Public Sans", sans-serif',
  krub:       '"Krub", sans-serif',
  poppins:    '"Poppins", sans-serif',
  geist:      '"Geist", sans-serif',
  proxima:    '"Proxima Nova", "Inter", sans-serif',
  hind:       '"Hind", sans-serif',
  raleway:    '"Raleway", sans-serif',
};

// ── Font presets matching Figma typography page ───────────────────
export const FONT_PRESETS = [
  { id: 'inter',       label: 'Inter',       family: FONT_FAMILIES.inter,      googleUrl: 'Inter:wght@300;400;500;600;700' },
  { id: 'publicSans',  label: 'Public Sans', family: FONT_FAMILIES.publicSans, googleUrl: 'Public+Sans:wght@300;400;500;600;700' },
  { id: 'krub',        label: 'Krub',        family: FONT_FAMILIES.krub,       googleUrl: 'Krub:wght@300;400;500;600;700' },
  { id: 'poppins',     label: 'Poppins',     family: FONT_FAMILIES.poppins,    googleUrl: 'Poppins:wght@300;400;500;600;700' },
  { id: 'raleway',     label: 'Raleway',     family: FONT_FAMILIES.raleway,    googleUrl: 'Raleway:wght@300;400;500;600;700' },
  { id: 'hind',        label: 'Hind',        family: FONT_FAMILIES.hind,       googleUrl: 'Hind:wght@300;400;500;600;700' },
];

// ── Color Presets (from color_mixer doc) ─────────────────────────
export const COLOR_PRESETS_LIGHT = [
  {
    id: 'obsidian',
    label: 'Obsidian Blue',
    colors: { primary: PRIMARY[700], secondary: PRIMARY[600], auxiliary: AUXILIARY[600],
              success: SUCCESS[600], warning: WARNING[600], danger: DANGER[600],
              info: INFO[600], bgDefault: '#F4F6F8', bgPaper: '#FFFFFF' },
  },
  {
    id: 'emerald',
    label: 'Emerald Health',
    colors: { primary: '#00695C', secondary: '#26A69A', auxiliary: '#FF8100',
              success: SUCCESS[600], warning: WARNING[600], danger: DANGER[600],
              info: INFO[600], bgDefault: '#F0F4F3', bgPaper: '#FFFFFF' },
  },
  {
    id: 'coral',
    label: 'Coral Warm',
    colors: { primary: '#BF360C', secondary: '#E64A19', auxiliary: '#FFA600',
              success: SUCCESS[600], warning: WARNING[600], danger: DANGER[600],
              info: INFO[600], bgDefault: '#FBE9E7', bgPaper: '#FFFFFF' },
  },
  {
    id: 'plum',
    label: 'Plum Pro',
    colors: { primary: '#6A1B9A', secondary: '#8E24AA', auxiliary: '#FF8100',
              success: SUCCESS[600], warning: WARNING[600], danger: DANGER[600],
              info: INFO[600], bgDefault: '#F3E5F5', bgPaper: '#FFFFFF' },
  },
  {
    id: 'navy',
    label: 'Navy Steel',
    colors: { primary: '#1A237E', secondary: '#283593', auxiliary: '#FF8100',
              success: SUCCESS[600], warning: WARNING[600], danger: DANGER[600],
              info: INFO[600], bgDefault: '#ECEFF1', bgPaper: '#FFFFFF' },
  },
  {
    id: 'teal',
    label: 'Teal Clinic',
    colors: { primary: '#00838F', secondary: '#00ACC1', auxiliary: AUXILIARY[600],
              success: SUCCESS[600], warning: WARNING[600], danger: DANGER[600],
              info: INFO[600], bgDefault: '#E0F7FA', bgPaper: '#FFFFFF' },
  },
];

export const COLOR_PRESETS_DARK = [
  {
    id: 'obsidian_dark',
    label: 'Obsidian Dark',
    colors: { primary: PRIMARY[600], secondary: PRIMARY[500], auxiliary: AUXILIARY[500],
              success: SUCCESS[500], warning: WARNING[500], danger: DANGER[500],
              info: INFO[500], bgDefault: '#0D1117', bgPaper: '#161B22' },
  },
  {
    id: 'midnight',
    label: 'Midnight Blue',
    colors: { primary: '#5C8BFF', secondary: '#3B82F6', auxiliary: '#FF8100',
              success: SUCCESS[500], warning: WARNING[500], danger: DANGER[500],
              info: INFO[500], bgDefault: '#050A18', bgPaper: '#0C1428' },
  },
  {
    id: 'emerald_dark',
    label: 'Emerald Night',
    colors: { primary: '#4CAF50', secondary: '#26A69A', auxiliary: '#FFA726',
              success: SUCCESS[500], warning: WARNING[500], danger: DANGER[500],
              info: INFO[500], bgDefault: '#0A1628', bgPaper: '#0F2240' },
  },
  {
    id: 'violet_dark',
    label: 'Violet Storm',
    colors: { primary: '#CE93D8', secondary: '#9575CD', auxiliary: '#FF8A65',
              success: SUCCESS[500], warning: WARNING[500], danger: DANGER[500],
              info: INFO[500], bgDefault: '#12001E', bgPaper: '#1A0030' },
  },
  {
    id: 'slate',
    label: 'Slate Professional',
    colors: { primary: '#90A4AE', secondary: '#78909C', auxiliary: '#FFA726',
              success: SUCCESS[500], warning: WARNING[500], danger: DANGER[500],
              info: INFO[500], bgDefault: '#0E1217', bgPaper: '#1C2530' },
  },
  {
    id: 'sunset_dark',
    label: 'Sunset Dark',
    colors: { primary: '#FF7043', secondary: '#FFCA28', auxiliary: '#FF80AB',
              success: SUCCESS[500], warning: WARNING[500], danger: DANGER[500],
              info: INFO[500], bgDefault: '#1A0A00', bgPaper: '#2A1500' },
  },
];

// ── Color fields shown in the picker UI ──────────────────────────
export const COLOR_FIELDS = [
  { key: 'primary',   label: 'Primary',    group: 'brand' },
  { key: 'secondary', label: 'Secondary',  group: 'brand' },
  { key: 'auxiliary', label: 'Auxiliary',  group: 'brand' },
  { key: 'success',   label: 'Success',    group: 'semantic' },
  { key: 'warning',   label: 'Warning',    group: 'semantic' },
  { key: 'danger',    label: 'Danger',     group: 'semantic' },
  { key: 'info',      label: 'Info',       group: 'semantic' },
  { key: 'bgDefault', label: 'Background', group: 'surface' },
  { key: 'bgPaper',   label: 'Paper',      group: 'surface' },
];
