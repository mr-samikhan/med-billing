import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar, Toolbar, Box, Button, Typography, IconButton,
  Tooltip, Avatar, Menu, MenuItem, Divider, Chip,
  TextField, InputAdornment, Popover, List, ListItemButton,
  ListItemIcon, ListItemText,
} from '@mui/material';
import {
  LightMode, DarkMode, Notifications, Logout, AccountCircle,
  LocalHospital, Search, ChevronLeft,
} from '@mui/icons-material';
import { useThemeMode } from '@theme/ThemeContext';
import { useAuth } from '@hooks/useAuth';
import { ROUTES } from '@constants/routes';
import { NAV_CONFIG } from '@components/layout/navConfig';

const ROLE_COLORS = { super_admin: 'error', admin: 'warning', user: 'info' };

const TopNav = ({ activeModule, onModuleClick }) => {
  const { mode, toggle }   = useThemeMode();
  const { user, logout }   = useAuth();
  const navigate            = useNavigate();
  const [userMenu, setUserMenu]   = useState(null);
  const [searchAnchor, setSearchAnchor] = useState(null);
  const [searchQuery, setSearchQuery]   = useState('');

  const handleLogout = () => { logout(); navigate(ROUTES.LOGIN, { replace: true }); };

  const initials = user
    ? `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`.toUpperCase() || 'U'
    : 'U';

  // Flat search across all children
  const searchResults = searchQuery.trim().length > 1
    ? NAV_CONFIG.flatMap(m => m.children.map(c => ({ ...c, moduleLabel: m.label })))
        .filter(c => c.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
        color: 'text.primary',
        zIndex: theme => theme.zIndex.appBar,
      }}
    >
      <Toolbar
        disableGutters
        sx={{ px: 2, minHeight: '52px !important', gap: 0.5, flexWrap: 'nowrap', overflow: 'hidden' }}
      >
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mr: 1.5, flexShrink: 0 }}>
          <LocalHospital color="primary" sx={{ fontSize: 20 }} />
          <Typography variant="subtitle2" fontWeight={800} color="primary" noWrap sx={{ fontSize: '0.85rem' }}>
            MedBill Pro
          </Typography>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />

        {/* Module buttons — horizontal scrollable */}
        <Box sx={{
          display: 'flex', alignItems: 'center', flex: 1,
          overflowX: 'auto', gap: 0.25,
          '&::-webkit-scrollbar': { height: 0 },
          scrollbarWidth: 'none',
        }}>
          {NAV_CONFIG.map(mod => {
            const Icon = mod.icon;
            const isActive = activeModule === mod.id;
            return (
              <Button
                key={mod.id}
                size="small"
                startIcon={<Icon sx={{ fontSize: '14px !important' }} />}
                onClick={() => onModuleClick(mod)}
                sx={{
                  flexShrink: 0,
                  fontSize: '0.72rem',
                  fontWeight: isActive ? 700 : 400,
                  px: 1.2,
                  py: 0.5,
                  minWidth: 'unset',
                  whiteSpace: 'nowrap',
                  borderRadius: 1,
                  color: isActive ? 'primary.main' : 'text.secondary',
                  bgcolor: isActive ? 'primary.main' + '18' : 'transparent',
                  borderBottom: isActive ? '2px solid' : '2px solid transparent',
                  borderColor: isActive ? 'primary.main' : 'transparent',
                  '&:hover': {
                    bgcolor: 'action.hover',
                    color: 'text.primary',
                  },
                  transition: 'all 0.15s ease',
                }}
              >
                {mod.label}
              </Button>
            );
          })}
        </Box>

        {/* Right actions */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexShrink: 0, ml: 1 }}>
          {/* Search */}
          <Tooltip title="Find a Section">
            <IconButton size="small" onClick={e => setSearchAnchor(e.currentTarget)}>
              <Search sx={{ fontSize: 18 }} />
            </IconButton>
          </Tooltip>

          {/* Theme toggle */}
          <Tooltip title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}>
            <IconButton size="small" onClick={toggle}>
              {mode === 'dark' ? <LightMode sx={{ fontSize: 18 }} /> : <DarkMode sx={{ fontSize: 18 }} />}
            </IconButton>
          </Tooltip>

          {/* Notifications */}
          <Tooltip title="Notifications">
            <IconButton size="small">
              <Notifications sx={{ fontSize: 18 }} />
            </IconButton>
          </Tooltip>

          {/* Role chip */}
          {user?.role && (
            <Chip
              label={user.role.replace('_', ' ')}
              size="small"
              color={ROLE_COLORS[user.role] || 'default'}
              sx={{ fontSize: '0.65rem', height: 18, textTransform: 'capitalize' }}
            />
          )}

          {/* Avatar / user menu */}
          <Tooltip title="Account">
            <IconButton size="small" onClick={e => setUserMenu(e.currentTarget)}>
              <Avatar sx={{ width: 26, height: 26, fontSize: '0.7rem', bgcolor: 'primary.main' }}>
                {initials}
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>

      {/* Search Popover */}
      <Popover
        open={Boolean(searchAnchor)}
        anchorEl={searchAnchor}
        onClose={() => { setSearchAnchor(null); setSearchQuery(''); }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{ sx: { width: 300, mt: 0.5 } }}
      >
        <Box sx={{ p: 1.5 }}>
          <TextField
            autoFocus size="small" fullWidth placeholder="Find a Section..."
            value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
            InputProps={{ startAdornment: <InputAdornment position="start"><Search fontSize="small" /></InputAdornment> }}
          />
        </Box>
        {searchResults.length > 0 && (
          <List dense disablePadding sx={{ maxHeight: 300, overflow: 'auto' }}>
            {searchResults.map(item => {
              const Icon = item.icon;
              return (
                <ListItemButton key={item.path} onClick={() => { navigate(item.path); setSearchAnchor(null); setSearchQuery(''); }}>
                  <ListItemIcon sx={{ minWidth: 30 }}><Icon fontSize="small" /></ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    secondary={item.moduleLabel}
                    primaryTypographyProps={{ fontSize: '0.82rem' }}
                    secondaryTypographyProps={{ fontSize: '0.7rem' }}
                  />
                </ListItemButton>
              );
            })}
          </List>
        )}
        {searchQuery.trim().length > 1 && searchResults.length === 0 && (
          <Box sx={{ px: 2, py: 1.5 }}>
            <Typography variant="caption" color="text.secondary">No sections found</Typography>
          </Box>
        )}
      </Popover>

      {/* User menu */}
      <Menu
        anchorEl={userMenu}
        open={Boolean(userMenu)}
        onClose={() => setUserMenu(null)}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{ sx: { minWidth: 180, mt: 0.5 } }}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="body2" fontWeight={600}>{user?.firstName} {user?.lastName}</Typography>
          <Typography variant="caption" color="text.secondary">{user?.email}</Typography>
        </Box>
        <Divider />
        <MenuItem onClick={() => setUserMenu(null)}>
          <AccountCircle fontSize="small" sx={{ mr: 1 }} /> Profile
        </MenuItem>
        <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
          <Logout fontSize="small" sx={{ mr: 1 }} /> Logout
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default TopNav;
