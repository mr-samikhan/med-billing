import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
  TextField,
  InputAdornment,
  Divider,
  IconButton,
} from "@mui/material";
import {
  Home,
  BarChart,
  CalendarMonth,
  Person,
  Description,
  Payments,
  Folder,
  SwapHoriz,
  Settings,
  ManageAccounts,
  ExpandMore,
  ExpandLess,
  Search,
  ChevronLeft,
  ChevronRight,
  GpsFixed,
  CheckBox,
  Replay,
  Print,
  Task,
  Message,
  LocalHospital,
} from "@mui/icons-material";
import { ROUTES } from "@constants/routes";
import { usePermissions } from "@hooks/usePermissions";

export const DRAWER_WIDTH = 240;
export const COLLAPSED_WIDTH = 60;

const NAV_CONFIG = [
  {
    label: "Welcome",
    icon: <Home fontSize="small" />,
    children: [
      {
        label: "Dashboard",
        icon: <Home fontSize="small" />,
        path: ROUTES.DASHBOARD,
      },
      { label: "Tasks", icon: <Task fontSize="small" />, path: ROUTES.TASKS },
      {
        label: "Messages",
        icon: <Message fontSize="small" />,
        path: ROUTES.MESSAGES,
      },
    ],
  },
  {
    label: "Reports",
    icon: <BarChart fontSize="small" />,
    path: ROUTES.REPORTS,
  },
  {
    label: "Appointments",
    icon: <CalendarMonth fontSize="small" />,
    path: ROUTES.APPOINTMENTS,
  },
  { label: "Patient", icon: <Person fontSize="small" />, path: ROUTES.PATIENT },
  {
    label: "Claim",
    icon: <Description fontSize="small" />,
    children: [
      {
        label: "Claim",
        icon: <Description fontSize="small" />,
        path: ROUTES.CLAIM,
      },
      {
        label: "Claim Tracker",
        icon: <GpsFixed fontSize="small" />,
        path: ROUTES.CLAIM_TRACKER,
      },
      {
        label: "Claim Control",
        icon: <CheckBox fontSize="small" />,
        path: ROUTES.CLAIM_CONTROL,
      },
      {
        label: "Follow Up Mgmt",
        icon: <Replay fontSize="small" />,
        path: ROUTES.FOLLOW_UP,
      },
      {
        label: "Claim Batch Print",
        icon: <Print fontSize="small" />,
        path: ROUTES.CLAIM_BATCH_PRINT,
      },
      {
        label: "Settings",
        icon: <Settings fontSize="small" />,
        path: ROUTES.CLAIM_SETTINGS,
      },
    ],
  },
  {
    label: "Payment",
    icon: <Payments fontSize="small" />,
    path: ROUTES.PAYMENT,
  },
  {
    label: "Documents",
    icon: <Folder fontSize="small" />,
    path: ROUTES.DOCUMENTS,
  },
  {
    label: "Interface",
    icon: <SwapHoriz fontSize="small" />,
    path: ROUTES.INTERFACE,
  },
  {
    label: "Customer Setup",
    icon: <Settings fontSize="small" />,
    path: ROUTES.CUSTOMER_SETUP,
  },
  {
    label: "Account Admin",
    icon: <ManageAccounts fontSize="small" />,
    path: ROUTES.ACCOUNT_ADMIN,
  },
];

const Sidebar = ({ collapsed, onToggleCollapse }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { can } = usePermissions();
  const [search, setSearch] = useState("");
  const [openMap, setOpenMap] = useState({ Welcome: true, Claim: true });

  const toggleGroup = (label) =>
    setOpenMap((p) => ({ ...p, [label]: !p[label] }));

  const isActive = (path) => location.pathname === path;
  const isGroupActive = (children) =>
    children?.some((c) => location.pathname.startsWith(c.path));

  const filtered = search.trim()
    ? NAV_CONFIG.flatMap((item) =>
        item.children
          ? item.children.filter((c) =>
              c.label.toLowerCase().includes(search.toLowerCase()),
            )
          : item.label.toLowerCase().includes(search.toLowerCase())
            ? [item]
            : [],
      )
    : null;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? COLLAPSED_WIDTH : DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: collapsed ? COLLAPSED_WIDTH : DRAWER_WIDTH,
          boxSizing: "border-box",
          bgcolor: "background.paper",
          borderRight: "1px solid",
          borderColor: "divider",
          overflowX: "hidden",
          transition: "width 0.2s ease",
        },
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "space-between",
          px: collapsed ? 1 : 2,
          py: 1.5,
          borderBottom: "1px solid",
          borderColor: "divider",
          minHeight: 56,
        }}
      >
        {!collapsed && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocalHospital color="primary" sx={{ fontSize: 22 }} />
            <Typography
              variant="subtitle1"
              fontWeight={700}
              color="primary"
              noWrap
            >
              MedBill Pro
            </Typography>
          </Box>
        )}
        <IconButton size="small" onClick={onToggleCollapse}>
          {collapsed ? (
            <ChevronRight fontSize="small" />
          ) : (
            <ChevronLeft fontSize="small" />
          )}
        </IconButton>
      </Box>

      {/* Search */}
      {!collapsed && (
        <Box sx={{ px: 1.5, py: 1 }}>
          <TextField
            size="small"
            fullWidth
            placeholder="Find a Section"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ fontSize: 16 }} />
                </InputAdornment>
              ),
            }}
            sx={{ "& .MuiInputBase-root": { fontSize: "0.8rem" } }}
          />
        </Box>
      )}

      <Divider />

      {/* Nav Items */}
      <List
        dense
        sx={{ flex: 1, overflowY: "auto", overflowX: "hidden", py: 0.5 }}
      >
        {/* Flat search results */}
        {filtered
          ? filtered.map((item) => (
              <ListItemButton
                key={item.path}
                selected={isActive(item.path)}
                onClick={() => {
                  navigate(item.path);
                  setSearch("");
                }}
                sx={{ pl: 2 }}
              >
                <ListItemIcon sx={{ minWidth: 32 }}>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontSize: "0.83rem" }}
                />
              </ListItemButton>
            ))
          : NAV_CONFIG.map((item) => {
              if (item.children) {
                const groupActive = isGroupActive(item.children);
                return (
                  <Box key={item.label}>
                    <ListItemButton
                      onClick={() => !collapsed && toggleGroup(item.label)}
                      selected={groupActive && collapsed}
                      sx={{
                        pl: collapsed ? 1.5 : 2,
                        fontWeight: groupActive ? 700 : 400,
                        bgcolor: groupActive
                          ? "action.selected"
                          : "transparent",
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: collapsed ? "unset" : 32 }}>
                        {item.icon}
                      </ListItemIcon>
                      {!collapsed && (
                        <>
                          <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                              fontSize: "0.83rem",
                              fontWeight: groupActive ? 600 : 400,
                            }}
                          />
                          {openMap[item.label] ? (
                            <ExpandLess sx={{ fontSize: 16 }} />
                          ) : (
                            <ExpandMore sx={{ fontSize: 16 }} />
                          )}
                        </>
                      )}
                    </ListItemButton>

                    {!collapsed && (
                      <Collapse in={!!openMap[item.label]} timeout="auto">
                        <List dense disablePadding>
                          {item.children.map((child) => (
                            <ListItemButton
                              key={child.path}
                              selected={isActive(child.path)}
                              onClick={() => navigate(child.path)}
                              sx={{
                                pl: 4,
                                bgcolor: isActive(child.path)
                                  ? "primary.main"
                                  : "transparent",
                                color: isActive(child.path)
                                  ? "primary.contrastText"
                                  : "inherit",
                                "&:hover": {
                                  bgcolor: isActive(child.path)
                                    ? "primary.dark"
                                    : "action.hover",
                                },
                              }}
                            >
                              <ListItemIcon
                                sx={{ minWidth: 28, color: "inherit" }}
                              >
                                {child.icon}
                              </ListItemIcon>
                              <ListItemText
                                primary={child.label}
                                primaryTypographyProps={{ fontSize: "0.8rem" }}
                              />
                            </ListItemButton>
                          ))}
                        </List>
                      </Collapse>
                    )}
                  </Box>
                );
              }

              return (
                <ListItemButton
                  key={item.path}
                  selected={isActive(item.path)}
                  onClick={() => navigate(item.path)}
                  sx={{
                    pl: collapsed ? 1.5 : 2,
                    bgcolor: isActive(item.path)
                      ? "primary.main"
                      : "transparent",
                    color: isActive(item.path)
                      ? "primary.contrastText"
                      : "inherit",
                    "&:hover": {
                      bgcolor: isActive(item.path)
                        ? "primary.dark"
                        : "action.hover",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: collapsed ? "unset" : 32,
                      color: "inherit",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {!collapsed && (
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: "0.83rem" }}
                    />
                  )}
                </ListItemButton>
              );
            })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
