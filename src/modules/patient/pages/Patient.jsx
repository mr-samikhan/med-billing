import { Box, Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow, Button, TextField, InputAdornment } from '@mui/material';
import { Add, Search } from '@mui/icons-material';
import { useState } from 'react';
import PageHeader from '@components/common/PageHeader';

const PATIENTS = [
  { id: 'P001', name: 'Alice Brown',    dob: '03/14/1978', insurance: 'BlueCross', phone: '(555) 100-2001' },
  { id: 'P002', name: 'Robert Davis',   dob: '07/22/1965', insurance: 'Aetna',     phone: '(555) 200-3002' },
  { id: 'P003', name: 'Mary Wilson',    dob: '11/05/1990', insurance: 'United',    phone: '(555) 300-4003' },
  { id: 'P004', name: 'James Martinez', dob: '01/30/1982', insurance: 'Cigna',     phone: '(555) 400-5004' },
];

const Patient = () => {
  const [search, setSearch] = useState('');
  const filtered = PATIENTS.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <Box>
      <PageHeader title="Patient" breadcrumbs={[{ label: 'Patient' }]}
        actions={<Button variant="contained" size="small" startIcon={<Add />}>Add Patient</Button>} />
      <Box mb={2}>
        <TextField size="small" placeholder="Search patients…" value={search} onChange={e => setSearch(e.target.value)}
          InputProps={{ startAdornment: <InputAdornment position="start"><Search fontSize="small" /></InputAdornment> }}
        />
      </Box>
      <Card>
        <CardContent sx={{ p: 0 }}>
          <Table size="small">
            <TableHead>
              <TableRow>{['ID','Name','DOB','Insurance','Phone'].map(h => <TableCell key={h}>{h}</TableCell>)}</TableRow>
            </TableHead>
            <TableBody>
              {filtered.map(p => (
                <TableRow key={p.id} hover>
                  <TableCell>{p.id}</TableCell>
                  <TableCell>{p.name}</TableCell>
                  <TableCell>{p.dob}</TableCell>
                  <TableCell>{p.insurance}</TableCell>
                  <TableCell>{p.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Patient;
