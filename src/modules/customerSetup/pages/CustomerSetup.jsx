import { Box, Card, CardContent, TextField, Button, Grid, Typography, Divider } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const CustomerSetup = () => (
  <Box>
    <PageHeader title="Customer Setup" breadcrumbs={[{ label: 'Customer Setup' }]} />
    <Card>
      <CardContent>
        <Typography variant="subtitle2" mb={2}>Practice Information</Typography>
        <Grid container spacing={2}>
          {['Practice Name','Tax ID (EIN)','NPI Number','Address Line 1','City','State','ZIP Code','Phone','Fax','Contact Email'].map(f => (
            <Grid item xs={12} sm={6} key={f}>
              <TextField label={f} size="small" fullWidth />
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 3 }} />
        <Typography variant="subtitle2" mb={2}>Billing Configuration</Typography>
        <Grid container spacing={2}>
          {['Default Place of Service','Taxonomy Code','Billing Provider NPI','Rendering Provider NPI'].map(f => (
            <Grid item xs={12} sm={6} key={f}>
              <TextField label={f} size="small" fullWidth />
            </Grid>
          ))}
        </Grid>
        <Box mt={3}><Button variant="contained">Save Configuration</Button></Box>
      </CardContent>
    </Card>
  </Box>
);

export default CustomerSetup;
