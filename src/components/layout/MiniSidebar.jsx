import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Tooltip, IconButton, Divider, Badge } from '@mui/material';
import {
  Message, Campaign, Task, Dashboard,
  Notifications, CalendarToday, Assignment, Settings,
} from '@mui/icons-material';
import { ROUTES } from '@constants/routes';
import { useThemeMode } from '@theme/ThemeContext';

const MINI_ITEMS = [
  { icon: Dashboard,     label: 'Dashboard',             path: ROUTES.DASHBOARD,             badge: null },
  { icon: Message,       label: 'Messages',              path: ROUTES.MESSAGES,              badge: 3 },
  { icon: Campaign,      label: 'Company Announcements', path: ROUTES.COMPANY_ANNOUNCEMENTS, badge: 1 },
  { icon: Task,          label: 'Tasks',                 path: ROUTES.TASKS,                 badge: 5 },
  { icon: CalendarToday, label: 'Scheduler',             path: ROUTES.APPOINTMENT_SCHEDULER, badge: null },
  { icon: Assignment,    label: 'Claims',                path: ROUTES.CLAIM_MAIN,            badge: 2 },
];

const MiniSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { mode } = useThemeMode();

  const isActive = (path) => location.pathname === path;

  const bgColor   = mode === 'dark' ? '#0a0e14' : '#152a47';
  const divColor  = mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.15)';

  const Item = ({ icon: Icon, label, path, badge }) => {
    const active = isActive(path);
    return (
      <Tooltip title={label} placement="right">
        <IconButton
          size="small"
          onClick={() => navigate(path)}
          sx={{
            color: active ? '#fff' : 'rgba(255,255,255,0.5)',
            bgcolor: active ? 'rgba(255,255,255,0.14)' : 'transparent',
            borderLeft: `2px solid ${active ? '#42a5f5' : 'transparent'}`,
            borderRadius: '0 6px 6px 0',
            width: 40, height: 36,
            '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.08)' },
            transition: 'all 0.15s ease',
          }}
        >
          {badge ? (
            <Badge badgeContent={badge} color="error"
              sx={{ '& .MuiBadge-badge': { fontSize: '0.55rem', minWidth: 13, height: 13 } }}>
              <Icon sx={{ fontSize: 17 }} />
            </Badge>
          ) : (
            <Icon sx={{ fontSize: 17 }} />
          )}
        </IconButton>
      </Tooltip>
    );
  };

  return (
    <Box sx={{
      width: 48, flexShrink: 0,
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      py: 1, gap: 0.5,
      bgcolor: bgColor,
      borderRight: `1px solid ${divColor}`,
      position: 'sticky', top: 0,
      height: '100vh',
      overflowY: 'auto', overflowX: 'hidden',
      '&::-webkit-scrollbar': { width: 0 },
      zIndex: 1200,
    }}>
      {/* Notifications */}
      <Tooltip title="Notifications" placement="right">
        <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.55)', '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.08)' } }}>
          <Badge badgeContent={4} color="error"
            sx={{ '& .MuiBadge-badge': { fontSize: '0.6rem', minWidth: 14, height: 14 } }}>
            <Notifications sx={{ fontSize: 18 }} />
          </Badge>
        </IconButton>
      </Tooltip>

      <Divider sx={{ width: '70%', borderColor: divColor, my: 0.5 }} />

      {MINI_ITEMS.map(item => (
        <Item key={item.path} {...item} />
      ))}

      {/* Settings pinned to bottom */}
      <Box sx={{ flex: 1 }} />
      <Divider sx={{ width: '70%', borderColor: divColor, my: 0.5 }} />
      <Item icon={Settings} label="App Settings" path={ROUTES.APP_SETTINGS} badge={null} />
    </Box>
  );
};

export default MiniSidebar;
