import { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import TopNav from '@components/layout/TopNav';
import SubNav from '@components/layout/SubNav';
import { NAV_CONFIG } from '@components/layout/navConfig';

const findActiveModule = (pathname) => {
  for (const mod of NAV_CONFIG) {
    if (mod.children.length > 0) {
      if (mod.children.some(c => pathname.startsWith(c.path))) return mod.id;
    }
    if (pathname.startsWith(mod.defaultPath)) return mod.id;
  }
  return NAV_CONFIG[0].id;
};

const AppShell = () => {
  const location = useLocation();
  const navigate  = useNavigate();

  const [activeModule, setActiveModule] = useState(
    () => findActiveModule(location.pathname)
  );

  useEffect(() => {
    setActiveModule(findActiveModule(location.pathname));
  }, [location.pathname]);

  const handleModuleClick = (mod) => {
    setActiveModule(mod.id);
    if (mod.children.length > 0) {
      navigate(mod.children[0].path);
    } else {
      navigate(mod.defaultPath);
    }
  };

  const activeMod = NAV_CONFIG.find(m => m.id === activeModule);
  const hasSubNav = activeMod?.children?.length > 0;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Top Module Bar */}
      <TopNav activeModule={activeModule} onModuleClick={handleModuleClick} />

      {/* Sub-module Bar */}
      {hasSubNav && (
        <SubNav items={activeMod.children} />
      )}

      {/* Page Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          mt: 0,
          minHeight: 0,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppShell;
