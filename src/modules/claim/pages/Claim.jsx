import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Chip,
  Grid,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  Divider,
  Avatar,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Tooltip,
  Tabs,
  Tab,
} from "@mui/material";
import {
  Save,
  Close,
  Print,
  Delete,
  Star,
  ElectricBolt,
  History,
  MoreHoriz,
  Search,
  Clear,
  Edit,
  Add,
  SwapVert,
  ChevronRight,
  ChevronLeft,
  Verified,
  Message,
  Assignment,
  Campaign,
  Task,
  Description,
} from "@mui/icons-material";
import { useThemeMode } from "@theme/ThemeContext";
import { useSelector } from "react-redux";

// ── ICD field component ───────────────────────────────────────────────────
const IcdField = ({ label }) => (
  <Box>
    <Typography
      variant="caption"
      color="text.secondary"
      sx={{ mb: 0.5, display: "block" }}
    >
      {label}
    </Typography>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 1.5,
        overflow: "hidden",
        height: 34,
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ flex: 1, px: 1.5, fontSize: "0.8125rem" }}
      >
        {label}
      </Typography>
      <Divider orientation="vertical" flexItem />
      <IconButton
        size="small"
        sx={{ borderRadius: 0, color: "error.main", px: 0.75 }}
      >
        <Clear sx={{ fontSize: 14 }} />
      </IconButton>
      <Divider orientation="vertical" flexItem />
      <IconButton
        size="small"
        sx={{ borderRadius: 0, color: "primary.main", px: 0.75 }}
      >
        <Search sx={{ fontSize: 14 }} />
      </IconButton>
    </Box>
  </Box>
);

// ── Section header ────────────────────────────────────────────────────────
const SectionHeader = ({ icon: Icon, title, color = "primary.main" }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
      px: 2,
      py: 1,
      bgcolor: "action.hover",
      borderRadius: 1,
      mb: 2,
    }}
  >
    <Box sx={{ color, display: "flex" }}>
      <Icon sx={{ fontSize: 16 }} />
    </Box>
    <Typography variant="subtitle2" fontWeight={700}>
      {title}
    </Typography>
  </Box>
);

// ── Main Claim Page ───────────────────────────────────────────────────────
const CHARGE_ROWS = [
  {
    status: "Balance Due Patient",
    from: "12/06/26",
    to: "12/06/26",
    proc: "1234",
    pos: "1234",
    tos: "1234",
    toDate: "12/06/26",
    mod: "25",
  },
  {
    status: "Balance Due Patient",
    from: "12/06/26",
    to: "12/06/26",
    proc: "6545",
    pos: "6545",
    tos: "6545",
    toDate: "12/06/26",
    mod: "14",
  },
];

const LEFT_TABS = [
  { label: "Claim" },
  { label: "Charges" },
  { label: "Additional Info" },
  { label: "Ambulance Info" },
];

const LEFT_LINKS = [
  { label: "Patient Notes" },
  { label: "Follow-up Activity" },
  { label: "Alerts" },
  { label: "Tasks" },
  { label: "Documents" },
];

const Claim = () => {
  const { mode } = useThemeMode();
  const [activeLeft, setActiveLeft] = useState(1); // 'Charges' active
  const [chargeSearch, setChargeSearch] = useState("");

  const isDark = mode === "dark";
  const borderClr = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.09)";

  const value = useSelector((state) => state);
  console.log("value", value);

  return (
    <Box
      sx={{ display: "flex", height: "calc(100vh - 96px)", overflow: "hidden" }}
    >
      {/* ── Left Sidebar Panel ──────────────────────────────────── */}
      <Box
        sx={{
          width: 200,
          flexShrink: 0,
          borderRight: "1px solid",
          borderColor: "divider",
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.paper",
          overflow: "hidden",
        }}
      >
        {/* Patient card */}
        <Box sx={{ p: 2, borderBottom: "1px solid", borderColor: "divider" }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
            <IconButton size="small">
              <Edit sx={{ fontSize: 14 }} />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Avatar
                sx={{ width: 64, height: 64, bgcolor: "grey.400" }}
                src="/patient-avatar.jpg"
              />
              <Verified
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  fontSize: 18,
                  color: "primary.main",
                  bgcolor: "background.paper",
                  borderRadius: "50%",
                }}
              />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="subtitle2" fontWeight={700}>
                Demi Wilkinson
              </Typography>
              <Typography variant="caption" color="text.secondary">
                71 Years, Male
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
              >
                Acc# 234676543
              </Typography>
            </Box>
          </Box>

          {/* Quick action icons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 0.5,
              mt: 1.5,
            }}
          >
            {[Message, Assignment, Campaign].map((Icon, i) => (
              <IconButton
                key={i}
                size="small"
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 1.5,
                  width: 32,
                  height: 32,
                }}
              >
                <Icon sx={{ fontSize: 14 }} />
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* Navigation tabs */}
        <Box
          sx={{
            px: 1,
            py: 0.5,
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          {LEFT_TABS.map((tab, i) => (
            <ListItemButton
              key={tab.label}
              selected={activeLeft === i}
              onClick={() => setActiveLeft(i)}
              sx={{
                borderRadius: 1,
                mb: 0.25,
                fontSize: "0.8125rem",
                px: 1.5,
                py: 0.75,
                "&.Mui-selected": {
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                  "&:hover": { bgcolor: "primary.dark" },
                },
              }}
            >
              <ListItemText
                primary={tab.label}
                primaryTypographyProps={{
                  fontSize: "0.8125rem",
                  fontWeight: activeLeft === i ? 600 : 400,
                }}
              />
            </ListItemButton>
          ))}
        </Box>

        {/* Links section */}
        <Box sx={{ px: 1, py: 0.5, flex: 1, overflow: "auto" }}>
          {LEFT_LINKS.map((link) => (
            <ListItemButton
              key={link.label}
              sx={{ borderRadius: 1, mb: 0.25, px: 1.5, py: 0.5 }}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  fontSize: "0.8125rem",
                  color: "text.secondary",
                }}
              />
            </ListItemButton>
          ))}
        </Box>
      </Box>

      {/* ── Main Content Area ────────────────────────────────────── */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          bgcolor: "background.default",
        }}
      >
        {/* Claim form header */}
        <Box
          sx={{
            px: 3,
            py: 1.5,
            bgcolor: "background.paper",
            borderBottom: "1px solid",
            borderColor: "divider",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <Box>
            <Typography variant="h6" fontWeight={700}>
              Claim Form
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Professional Claim: Add, review, &amp; maintain patient records
            </Typography>
          </Box>

          {/* Action buttons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
            {[
              { icon: Save, label: "Save", color: "default" },
              { icon: Close, label: "Close", color: "default" },
              { icon: Print, label: "Print", color: "default" },
              { icon: Delete, label: "Delete", color: "default" },
            ].map(({ icon: Icon, label }) => (
              <Button
                key={label}
                size="small"
                variant="outlined"
                startIcon={<Icon sx={{ fontSize: 14 }} />}
                sx={{ fontSize: "0.8rem", px: 1.5, borderColor: borderClr }}
              >
                {label}
              </Button>
            ))}
            <Button
              size="small"
              variant="outlined"
              startIcon={<Star sx={{ fontSize: 14 }} />}
              endIcon={<ChevronRight sx={{ fontSize: 14 }} />}
              sx={{ fontSize: "0.8rem", px: 1.5, borderColor: borderClr }}
            >
              Review
            </Button>
            <Button
              size="small"
              variant="outlined"
              startIcon={<ElectricBolt sx={{ fontSize: 14 }} />}
              sx={{ fontSize: "0.8rem", px: 1.5, borderColor: borderClr }}
            >
              Activity
            </Button>
            <Button
              size="small"
              variant="outlined"
              startIcon={<History sx={{ fontSize: 14 }} />}
              sx={{ fontSize: "0.8rem", px: 1.5, borderColor: borderClr }}
            >
              Show History
            </Button>
            <IconButton size="small">
              <MoreHoriz sx={{ fontSize: 18 }} />
            </IconButton>
          </Box>
        </Box>

        {/* Scrollable content */}
        <Box sx={{ flex: 1, overflow: "auto", p: 2.5 }}>
          {/* ── Diagnosis section ───────────────────────────────── */}
          <Paper variant="outlined" sx={{ p: 2, mb: 2.5, borderRadius: 2 }}>
            <SectionHeader icon={Description} title="Diagnosis" />
            <Grid container spacing={2}>
              {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"].map(
                (letter) => (
                  <Grid item xs={6} sm={3} key={letter}>
                    <IcdField label={`ICD ${letter}`} />
                  </Grid>
                ),
              )}
            </Grid>
          </Paper>

          {/* ── Charges section ─────────────────────────────────── */}
          <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
            <SectionHeader icon={Description} title="Charges" />

            {/* Charges toolbar */}
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}
            >
              <Typography variant="body2" color="text.secondary" noWrap>
                Set all charges to
              </Typography>
              <Select
                size="small"
                value="NO CHANGE"
                sx={{ minWidth: 130, fontSize: "0.8125rem" }}
              >
                <MenuItem value="NO CHANGE">NO CHANGE</MenuItem>
              </Select>
              <Box sx={{ flex: 1 }} />
              <TextField
                size="small"
                placeholder="Search here"
                value={chargeSearch}
                onChange={(e) => setChargeSearch(e.target.value)}
                InputProps={{
                  startAdornment: null,
                  endAdornment: (
                    <InputAdornment position="end">
                      <Search sx={{ fontSize: 16, color: "text.disabled" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: 200 }}
              />
              <IconButton
                size="small"
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 1,
                }}
              >
                <SwapVert sx={{ fontSize: 16 }} />
              </IconButton>
              <Button
                variant="contained"
                size="small"
                startIcon={<Add />}
                sx={{ whiteSpace: "nowrap" }}
              >
                + Add Charge
              </Button>
            </Box>

            {/* Charges table */}
            <Box
              sx={{
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 1.5,
                overflow: "hidden",
              }}
            >
              <Table size="small">
                <TableHead>
                  <TableRow
                    sx={{
                      bgcolor: isDark
                        ? "rgba(255,255,255,0.04)"
                        : "rgba(0,0,0,0.03)",
                    }}
                  >
                    {[
                      "Status",
                      "From",
                      "To",
                      "Procedure",
                      "POS",
                      "TOS",
                      "To",
                      "Mod",
                    ].map((h) => (
                      <TableCell
                        key={h}
                        sx={{ fontWeight: 600, fontSize: "0.8125rem", py: 1 }}
                      >
                        {h}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {CHARGE_ROWS.map((row, i) => (
                    <TableRow
                      key={i}
                      hover
                      sx={{ "&:last-child td": { border: 0 } }}
                    >
                      <TableCell>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{ fontSize: "0.8125rem" }}
                          >
                            {row.status}
                          </Typography>
                          <IconButton size="small" sx={{ p: 0.25 }}>
                            <ChevronRight sx={{ fontSize: 14 }} />
                          </IconButton>
                        </Box>
                      </TableCell>
                      {[row.from, row.to].map((d, j) => (
                        <TableCell key={j}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                            }}
                          >
                            <Box
                              component="span"
                              sx={{ fontSize: 12, color: "text.secondary" }}
                            >
                              📅
                            </Box>
                            <Typography
                              variant="body2"
                              sx={{ fontSize: "0.8125rem" }}
                            >
                              {d}
                            </Typography>
                          </Box>
                        </TableCell>
                      ))}
                      {[row.proc, row.pos, row.tos].map((val, j) => (
                        <TableCell key={j}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{ fontSize: "0.8125rem" }}
                            >
                              {val}
                            </Typography>
                            <IconButton size="small" sx={{ p: 0.25 }}>
                              <Search sx={{ fontSize: 13 }} />
                            </IconButton>
                          </Box>
                        </TableCell>
                      ))}
                      <TableCell>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <Box
                            component="span"
                            sx={{ fontSize: 12, color: "text.secondary" }}
                          >
                            📅
                          </Box>
                          <Typography
                            variant="body2"
                            sx={{ fontSize: "0.8125rem" }}
                          >
                            {row.toDate}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="body2"
                          sx={{ fontSize: "0.8125rem" }}
                        >
                          {row.mod}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>

            {/* Progress bar at bottom */}
            <Box
              sx={{
                mt: 2,
                height: 4,
                bgcolor: "divider",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  width: "30%",
                  height: "100%",
                  bgcolor: "primary.main",
                  borderRadius: 2,
                }}
              />
            </Box>
          </Paper>
        </Box>
      </Box>

      {/* ── Far-right collapse handle ────────────────────────────── */}
      <Box
        sx={{
          width: 20,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.paper",
          borderLeft: "1px solid",
          borderColor: "divider",
          cursor: "pointer",
          "&:hover": { bgcolor: "action.hover" },
        }}
      >
        <ChevronLeft sx={{ fontSize: 14, color: "text.disabled" }} />
      </Box>
    </Box>
  );
};

export default Claim;
