import { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useThemeMode } from '@theme/ThemeContext';
import { NAV_CONFIG } from '@components/layout/navConfig';

// Layout modes
import TopNav    from '@components/layout/TopNav';
import SubNav    from '@components/layout/SubNav';
import Sidebar   from '@components/layout/Sidebar';
import Topbar    from '@components/layout/Topbar';
import MiniSidebar from '@components/layout/MiniSidebar';

const findActiveModule = (pathname) => {
  for (const mod of NAV_CONFIG) {
    if (mod.children?.some(c => pathname.startsWith(c.path))) return mod.id;
    if (pathname.startsWith(mod.defaultPath))                  return mod.id;
  }
  return NAV_CONFIG[0].id;
};

const AppShell = () => {
  const location          = useLocation();
  const navigate          = useNavigate();
  const { layout }        = useThemeMode();
  const isHorizontal      = layout === 'horizontal';

  const [activeModule, setActiveModule] = useState(() => findActiveModule(location.pathname));
  const [sideCollapsed, setSideCollapsed] = useState(false);

  useEffect(() => {
    setActiveModule(findActiveModule(location.pathname));
  }, [location.pathname]);

  const handleModuleClick = (mod) => {
    setActiveModule(mod.id);
    navigate(mod.children?.length ? mod.children[0].path : mod.defaultPath);
  };

  const activeMod  = NAV_CONFIG.find(m => m.id === activeModule);
  const hasSubNav  = (activeMod?.children?.length ?? 0) > 0;

  // ── HORIZONTAL layout ───────────────────────────────────────────────────
  if (isHorizontal) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row', minHeight: '100vh' }}>
        {/* Mini sidebar — always visible */}
        <MiniSidebar />

        {/* Main area */}
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
          <TopNav activeModule={activeModule} onModuleClick={handleModuleClick} />
          {hasSubNav && <SubNav items={activeMod.children} />}
          <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    );
  }

  // ── SIDEBAR layout ──────────────────────────────────────────────────────
  const DRAWER_W    = sideCollapsed ? 60 : 240;
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Full sidebar */}
      <Sidebar collapsed={sideCollapsed} onToggleCollapse={() => setSideCollapsed(p => !p)} />

      {/* Mini sidebar for quick access */}
      <MiniSidebar />

      {/* Main area */}
      <Box
        sx={{
          display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0,
          ml: `${DRAWER_W}px`,
          transition: 'margin 0.2s ease',
        }}
      >
        <Topbar drawerWidth={DRAWER_W + 48} />
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, mt: '56px' }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AppShell;
