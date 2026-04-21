import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar, { DRAWER_WIDTH, COLLAPSED_WIDTH } from '@components/layout/Sidebar';
import Topbar from '@components/layout/Topbar';

const AppShell = () => {
  const [collapsed, setCollapsed] = useState(false);
  const drawerWidth = collapsed ? COLLAPSED_WIDTH : DRAWER_WIDTH;

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} onToggleCollapse={() => setCollapsed(p => !p)} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: `${drawerWidth}px`,
          transition: 'margin 0.2s ease',
          bgcolor: 'background.default',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Topbar drawerWidth={drawerWidth} />
        <Box sx={{ mt: '56px', p: 3, flexGrow: 1 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AppShell;
