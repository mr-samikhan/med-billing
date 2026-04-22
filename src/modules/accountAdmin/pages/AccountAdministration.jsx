import {
  Box,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Chip,
  Avatar,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import PageHeader from "@components/common/PageHeader";

const USERS = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@medbill.com",
    role: "super_admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Mike Williams",
    email: "mike@medbill.com",
    role: "admin",
    status: "Active",
  },
  {
    id: 3,
    name: "Lisa Chen",
    email: "lisa@medbill.com",
    role: "user",
    status: "Active",
  },
  {
    id: 4,
    name: "Tom Harris",
    email: "tom@medbill.com",
    role: "user",
    status: "Inactive",
  },
];
const ROLE_COLOR = { super_admin: "error", admin: "warning", user: "info" };

const AccountAdministration = () => (
  <Box>
    <PageHeader
      title="Account Administration"
      breadcrumbs={[{ label: "Account Administration" }]}
      actions={
        <Button variant="contained" size="small" startIcon={<Add />}>
          Add User
        </Button>
      }
    />
    <Card>
      <CardContent sx={{ p: 0 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              {["User", "Email", "Role", "Status", "Actions"].map((h) => (
                <TableCell key={h}>{h}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {USERS.map((u) => (
              <TableRow key={u.id} hover>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Avatar
                      sx={{
                        width: 28,
                        height: 28,
                        fontSize: "0.75rem",
                        bgcolor: "primary.main",
                      }}
                    >
                      {u.name[0]}
                    </Avatar>
                    {u.name}
                  </Box>
                </TableCell>
                <TableCell>{u.email}</TableCell>
                <TableCell>
                  <Chip
                    label={u.role.replace("_", " ")}
                    size="small"
                    color={ROLE_COLOR[u.role]}
                    sx={{ textTransform: "capitalize" }}
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    label={u.status}
                    size="small"
                    color={u.status === "Active" ? "success" : "default"}
                  />
                </TableCell>
                <TableCell>
                  <Button size="small" sx={{ mr: 0.5 }}>
                    Edit
                  </Button>
                  <Button size="small" color="error">
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </Box>
);

export default AccountAdministration;
