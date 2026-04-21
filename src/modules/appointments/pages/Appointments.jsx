import { Box, Card, CardContent, Typography, Button, Table, TableBody, TableCell, TableHead, TableRow, Chip } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '@components/common/PageHeader';

const ROWS = [
  { id: 1, patient: 'Alice Brown',   date: '04/22/2026', time: '9:00 AM',  provider: 'Dr. Smith',   status: 'Scheduled' },
  { id: 2, patient: 'Robert Davis',  date: '04/22/2026', time: '10:30 AM', provider: 'Dr. Johnson', status: 'Confirmed' },
  { id: 3, patient: 'Mary Wilson',   date: '04/23/2026', time: '2:00 PM',  provider: 'Dr. Smith',   status: 'Pending'   },
  { id: 4, patient: 'James Martinez',date: '04/21/2026', time: '11:00 AM', provider: 'Dr. Lee',     status: 'Completed' },
];

const STATUS_COLOR = { Scheduled:'info', Confirmed:'success', Pending:'warning', Completed:'default' };

const Appointments = () => (
  <Box>
    <PageHeader title="Appointments" breadcrumbs={[{ label: 'Appointments' }]}
      actions={<Button variant="contained" size="small" startIcon={<Add />}>New Appointment</Button>} />
    <Card>
      <CardContent sx={{ p: 0 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              {['Patient','Date','Time','Provider','Status'].map(h => (
                <TableCell key={h}>{h}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {ROWS.map(row => (
              <TableRow key={row.id} hover>
                <TableCell>{row.patient}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.provider}</TableCell>
                <TableCell><Chip label={row.status} size="small" color={STATUS_COLOR[row.status]} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </Box>
);

export default Appointments;
