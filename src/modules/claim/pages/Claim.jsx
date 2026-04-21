import { Box, Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow, Button, Chip } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '@components/common/PageHeader';
import { ROUTES } from '@constants/routes';

const CLAIMS = [
  { id: 'C10021', patient: 'Alice Brown',    date: '04/18/2026', amount: '$1,240.00', status: 'Pending' },
  { id: 'C10022', patient: 'Robert Davis',   date: '04/17/2026', amount: '$890.50',   status: 'Approved' },
  { id: 'C10023', patient: 'Mary Wilson',    date: '04/16/2026', amount: '$3,100.00', status: 'Denied' },
  { id: 'C10024', patient: 'James Martinez', date: '04/15/2026', amount: '$560.00',   status: 'Paid' },
];
const S = { Pending:'warning', Approved:'success', Denied:'error', Paid:'info' };

const Claim = () => (
  <Box>
    <PageHeader title="Claim" breadcrumbs={[{ label: 'Claim' }]}
      actions={<Button variant="contained" size="small" startIcon={<Add />}>New Claim</Button>} />
    <Card>
      <CardContent sx={{ p: 0 }}>
        <Table size="small">
          <TableHead>
            <TableRow>{['Claim ID','Patient','Date','Amount','Status','Actions'].map(h => <TableCell key={h}>{h}</TableCell>)}</TableRow>
          </TableHead>
          <TableBody>
            {CLAIMS.map(c => (
              <TableRow key={c.id} hover>
                <TableCell>{c.id}</TableCell>
                <TableCell>{c.patient}</TableCell>
                <TableCell>{c.date}</TableCell>
                <TableCell>{c.amount}</TableCell>
                <TableCell><Chip label={c.status} size="small" color={S[c.status]} /></TableCell>
                <TableCell><Button size="small">View</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </Box>
);

export default Claim;
