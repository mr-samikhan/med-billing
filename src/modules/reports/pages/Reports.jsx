import { Box, Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { Download, BarChart } from '@mui/icons-material';
import PageHeader from '@components/common/PageHeader';
import { ROUTES } from '@constants/routes';

const REPORT_TYPES = [
  'Claim Summary Report', 'Payment Reconciliation', 'Denial Analysis',
  'Aging Report (A/R)', 'Provider Productivity', 'Insurance Mix Report',
];

const Reports = () => (
  <Box>
    <PageHeader
      title="Reports"
      subtitle="Generate and export billing reports."
      breadcrumbs={[{ label: 'Reports' }]}
      actions={<Button variant="contained" size="small" startIcon={<BarChart />}>Generate Report</Button>}
    />
    <Grid container spacing={2}>
      {REPORT_TYPES.map(r => (
        <Grid item xs={12} sm={6} md={4} key={r}>
          <Card sx={{ cursor: 'pointer', '&:hover': { boxShadow: 4 } }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant="body2" fontWeight={500}>{r}</Typography>
              <Button size="small" startIcon={<Download />}>Export</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Reports;
