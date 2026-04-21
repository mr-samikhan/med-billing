import { Box, Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow, Chip, Button } from '@mui/material';
import PageHeader from '@components/common/PageHeader';
import { ROUTES } from '@constants/routes';

const FOLLOWUPS = [
  { id: 1, claimId: 'C10021', patient: 'Alice Brown',  dueDate: '04/25/2026', reason: 'No Response',    status: 'Open'     },
  { id: 2, claimId: 'C10023', patient: 'Mary Wilson',  dueDate: '04/24/2026', reason: 'Denial Appeal',  status: 'In Progress' },
  { id: 3, claimId: 'C10019', patient: 'Tom Harris',   dueDate: '04/23/2026', reason: 'Missing Info',   status: 'Closed'   },
];
const S = { Open:'warning', 'In Progress':'info', Closed:'success' };

const FollowUpManagement = () => (
  <Box>
    <PageHeader title="Follow Up Management"
      breadcrumbs={[{ label: 'Claim', path: ROUTES.CLAIM }, { label: 'Follow Up Management' }]}
      actions={<Button variant="contained" size="small">Add Follow Up</Button>} />
    <Card>
      <CardContent sx={{ p: 0 }}>
        <Table size="small">
          <TableHead>
            <TableRow>{['Claim ID','Patient','Due Date','Reason','Status','Action'].map(h => <TableCell key={h}>{h}</TableCell>)}</TableRow>
          </TableHead>
          <TableBody>
            {FOLLOWUPS.map(f => (
              <TableRow key={f.id} hover>
                <TableCell>{f.claimId}</TableCell>
                <TableCell>{f.patient}</TableCell>
                <TableCell>{f.dueDate}</TableCell>
                <TableCell>{f.reason}</TableCell>
                <TableCell><Chip label={f.status} size="small" color={S[f.status]} /></TableCell>
                <TableCell><Button size="small">Update</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </Box>
);

export default FollowUpManagement;
