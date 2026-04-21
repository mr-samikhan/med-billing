import { Box, Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow, Chip, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '@components/common/PageHeader';

const PAYMENTS = [
  { id: 'PMT001', claim: 'C10022', patient: 'Robert Davis',  amount: '$890.50',   date: '04/20/2026', method: 'ERA',   status: 'Posted' },
  { id: 'PMT002', claim: 'C10024', patient: 'James Martinez',amount: '$560.00',   date: '04/19/2026', method: 'Check', status: 'Posted' },
  { id: 'PMT003', claim: 'C10026', patient: 'Linda Garcia',  amount: '$1,450.00', date: '04/18/2026', method: 'EFT',   status: 'Pending' },
];
const S = { Posted: 'success', Pending: 'warning' };

const Payment = () => (
  <Box>
    <PageHeader title="Payment" breadcrumbs={[{ label: 'Payment' }]}
      actions={<Button variant="contained" size="small" startIcon={<Add />}>Post Payment</Button>} />
    <Card>
      <CardContent sx={{ p: 0 }}>
        <Table size="small">
          <TableHead>
            <TableRow>{['Payment ID','Claim','Patient','Amount','Date','Method','Status'].map(h => <TableCell key={h}>{h}</TableCell>)}</TableRow>
          </TableHead>
          <TableBody>
            {PAYMENTS.map(p => (
              <TableRow key={p.id} hover>
                <TableCell>{p.id}</TableCell>
                <TableCell>{p.claim}</TableCell>
                <TableCell>{p.patient}</TableCell>
                <TableCell>{p.amount}</TableCell>
                <TableCell>{p.date}</TableCell>
                <TableCell>{p.method}</TableCell>
                <TableCell><Chip label={p.status} size="small" color={S[p.status]} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </Box>
);

export default Payment;
