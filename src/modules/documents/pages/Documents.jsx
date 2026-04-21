import { Box, Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow, Button, Chip } from '@mui/material';
import { Upload, Download } from '@mui/icons-material';
import PageHeader from '@components/common/PageHeader';

const DOCS = [
  { id: 1, name: 'EOB_BlueCross_Apr2026.pdf',    type: 'EOB',      size: '1.2 MB', date: '04/20/2026', status: 'Processed' },
  { id: 2, name: 'ERA_Aetna_20260419.835',       type: 'ERA',      size: '340 KB', date: '04/19/2026', status: 'Processed' },
  { id: 3, name: 'Insurance_Card_AliceBrown.jpg',type: 'Insurance',size: '820 KB', date: '04/18/2026', status: 'Stored'    },
];

const Documents = () => (
  <Box>
    <PageHeader title="Documents" breadcrumbs={[{ label: 'Documents' }]}
      actions={<Button variant="contained" size="small" startIcon={<Upload />}>Upload</Button>} />
    <Card>
      <CardContent sx={{ p: 0 }}>
        <Table size="small">
          <TableHead>
            <TableRow>{['Name','Type','Size','Uploaded','Status','Actions'].map(h => <TableCell key={h}>{h}</TableCell>)}</TableRow>
          </TableHead>
          <TableBody>
            {DOCS.map(d => (
              <TableRow key={d.id} hover>
                <TableCell>{d.name}</TableCell>
                <TableCell>{d.type}</TableCell>
                <TableCell>{d.size}</TableCell>
                <TableCell>{d.date}</TableCell>
                <TableCell><Chip label={d.status} size="small" color="success" /></TableCell>
                <TableCell><Button size="small" startIcon={<Download />}>Download</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </Box>
);

export default Documents;
