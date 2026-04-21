import { Box, Card, CardContent, TextField, Button, Grid, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';
import { ROUTES } from '@constants/routes';

const ClaimSettings = () => (
  <Box>
    <PageHeader title="Claim Settings"
      breadcrumbs={[{ label: 'Claim', path: ROUTES.CLAIM }, { label: 'Settings' }]} />
    <Card>
      <CardContent>
        <Typography variant="subtitle2" mb={2}>Default Claim Configuration</Typography>
        <Grid container spacing={2}>
          {['Default Payer ID','Taxonomy Code','Place of Service','Rendering Provider NPI','Billing NPI','Claim Frequency'].map(f => (
            <Grid item xs={12} sm={6} key={f}>
              <TextField label={f} size="small" fullWidth />
            </Grid>
          ))}
        </Grid>
        <Box mt={2}><Button variant="contained" size="small">Save Settings</Button></Box>
      </CardContent>
    </Card>
  </Box>
);

export default ClaimSettings;
