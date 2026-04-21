import { Box, Card, CardContent, Typography, Checkbox, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import { Print } from '@mui/icons-material';
import { useState } from 'react';
import PageHeader from '@components/common/PageHeader';
import { ROUTES } from '@constants/routes';

const CLAIMS = [
  { id: 'C10021', patient: 'Alice Brown',    payer: 'BlueCross', amount: '$1,240.00' },
  { id: 'C10022', patient: 'Robert Davis',   payer: 'Aetna',     amount: '$890.50'   },
  { id: 'C10025', patient: 'Susan Taylor',   payer: 'United',    amount: '$2,100.00' },
];

const ClaimBatchPrint = () => {
  const [selected, setSelected] = useState([]);
  const toggle = id => setSelected(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);
  return (
    <Box>
      <PageHeader title="Claim Batch Print"
        breadcrumbs={[{ label: 'Claim', path: ROUTES.CLAIM }, { label: 'Claim Batch Print' }]}
        actions={
          <Button variant="contained" size="small" startIcon={<Print />} disabled={!selected.length}>
            Print Selected ({selected.length})
          </Button>
        } />
      <Card>
        <CardContent sx={{ p: 0 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox"><Checkbox indeterminate={selected.length > 0 && selected.length < CLAIMS.length}
                  checked={selected.length === CLAIMS.length} onChange={() => setSelected(selected.length === CLAIMS.length ? [] : CLAIMS.map(c => c.id))} /></TableCell>
                {['Claim ID','Patient','Payer','Amount'].map(h => <TableCell key={h}>{h}</TableCell>)}
              </TableRow>
            </TableHead>
            <TableBody>
              {CLAIMS.map(c => (
                <TableRow key={c.id} hover selected={selected.includes(c.id)}>
                  <TableCell padding="checkbox"><Checkbox checked={selected.includes(c.id)} onChange={() => toggle(c.id)} /></TableCell>
                  <TableCell>{c.id}</TableCell>
                  <TableCell>{c.patient}</TableCell>
                  <TableCell>{c.payer}</TableCell>
                  <TableCell>{c.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ClaimBatchPrint;
