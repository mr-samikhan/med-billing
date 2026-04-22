import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Divider, useTheme } from '@mui/material';

const SubNav = ({ items }) => {
  const location = useLocation();
  const navigate  = useNavigate();
  const theme     = useTheme();

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 52,
        zIndex: theme.zIndex.appBar - 1,
        bgcolor: theme.palette.mode === 'dark' ? '#1a2332' : '#1e3a5f',
        borderBottom: '1px solid',
        borderColor: theme.palette.mode === 'dark'
          ? 'rgba(255,255,255,0.08)'
          : 'rgba(0,0,0,0.15)',
        display: 'flex',
        alignItems: 'center',
        px: 1.5,
        py: 0,
        minHeight: 40,
        overflowX: 'auto',
        '&::-webkit-scrollbar': { height: 0 },
        scrollbarWidth: 'none',
        gap: 0,
      }}
    >
      {items.map((item, idx) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path ||
          (item.path !== '/' && location.pathname.startsWith(item.path));

        return (
          <Box key={item.path} sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            {idx > 0 && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: 'rgba(255,255,255,0.15)', mx: 0 }}
              />
            )}
            <Button
              size="small"
              startIcon={<Icon sx={{ fontSize: '13px !important', color: isActive ? '#fff' : 'rgba(255,255,255,0.6)' }} />}
              onClick={() => navigate(item.path)}
              sx={{
                fontSize: '0.72rem',
                fontWeight: isActive ? 700 : 400,
                px: 1.5,
                py: 0,
                minHeight: 40,
                minWidth: 'unset',
                whiteSpace: 'nowrap',
                borderRadius: 0,
                color: isActive ? '#ffffff' : 'rgba(255,255,255,0.65)',
                bgcolor: isActive
                  ? 'rgba(255,255,255,0.15)'
                  : 'transparent',
                borderBottom: isActive ? '2px solid #fff' : '2px solid transparent',
                textDecoration: item.underline ? 'underline' : 'none',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                },
                transition: 'all 0.15s ease',
              }}
            >
              {item.label}
            </Button>
          </Box>
        );
      })}
    </Box>
  );
};

export default SubNav;
