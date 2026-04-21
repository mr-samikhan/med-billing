import {
  AppBar, Toolbar, Typography, IconButton, Avatar,
  Box, Tooltip, Menu, MenuItem, Chip, Divider,
} from '@mui/material';
import { LightMode, DarkMode, Notifications, Logout, AccountCircle } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useThemeMode } from '@theme/ThemeContext';
import { useAuth } from '@hooks/useAuth';
import { ROUTES } from '@constants/routes';

const ROLE_COLORS = {
  super_admin: 'error',
  admin:       'warning',
  user:        'info',
};

const Topbar = ({ drawerWidth }) => {
  const { mode, toggle } = useThemeMode();
  const { user, logout } = useAuth();
  const navigate         = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogout = () => {
    logout();
    navigate(ROUTES.LOGIN, { replace: true });
  };

  const initials = user
    ? `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`.toUpperCase() || 'U'
    : 'U';

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width:    `calc(100% - ${drawerWidth}px)`,
        ml:       `${drawerWidth}px`,
        bgcolor:  'background.paper',
        borderBottom: '1px solid',
        borderColor:  'divider',
        color:    'text.primary',
        transition: 'width 0.2s ease, margin 0.2s ease',
      }}
    >
      <Toolbar variant="dense" sx={{ minHeight: 56 }}>
        <Typography variant="subtitle1" fontWeight={600} sx={{ flexGrow: 1 }}>
          {user?.practiceName || 'MedBill Pro'}
        </Typography>

        {/* Dark/Light toggle */}
        <Tooltip title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}>
          <IconButton size="small" onClick={toggle} sx={{ mr: 0.5 }}>
            {mode === 'dark'
              ? <LightMode fontSize="small" />
              : <DarkMode fontSize="small" />}
          </IconButton>
        </Tooltip>

        {/* Notifications */}
        <Tooltip title="Notifications">
          <IconButton size="small" sx={{ mr: 1 }}>
            <Notifications fontSize="small" />
          </IconButton>
        </Tooltip>

        {/* User menu */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {user?.role && (
            <Chip
              label={user.role.replace('_', ' ')}
              size="small"
              color={ROLE_COLORS[user.role] || 'default'}
              sx={{ fontSize: '0.7rem', height: 20, textTransform: 'capitalize' }}
            />
          )}
          <Tooltip title="Account">
            <IconButton size="small" onClick={e => setAnchorEl(e.currentTarget)}>
              <Avatar sx={{ width: 28, height: 28, fontSize: '0.75rem', bgcolor: 'primary.main' }}>
                {initials}
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          PaperProps={{ sx: { minWidth: 180, mt: 0.5 } }}
        >
          <Box sx={{ px: 2, py: 1 }}>
            <Typography variant="body2" fontWeight={600}>
              {user?.firstName} {user?.lastName}
            </Typography>
            <Typography variant="caption" color="text.secondary">{user?.email}</Typography>
          </Box>
          <Divider />
          <MenuItem onClick={() => setAnchorEl(null)}>
            <AccountCircle fontSize="small" sx={{ mr: 1 }} /> Profile
          </MenuItem>
          <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
            <Logout fontSize="small" sx={{ mr: 1 }} /> Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
