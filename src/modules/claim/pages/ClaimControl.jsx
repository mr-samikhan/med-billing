import { Box, Card, CardContent, Typography, Switch, FormControlLabel, Divider, Button } from '@mui/material';
import PageHeader from '@components/common/PageHeader';
import { ROUTES } from '@constants/routes';

const CONTROLS = [
  'Auto-submit claims on approval',
  'Enable duplicate claim check',
  'Require pre-authorization flag',
  'Send remittance notifications',
  'Auto-post ERA payments',
];

const ClaimControl = () => (
  <Box>
    <PageHeader title="Claim Control"
      breadcrumbs={[{ label: 'Claim', path: ROUTES.CLAIM }, { label: 'Claim Control' }]} />
    <Card>
      <CardContent>
        {CONTROLS.map((ctrl, i) => (
          <Box key={ctrl}>
            {i > 0 && <Divider sx={{ my: 1 }} />}
            <FormControlLabel control={<Switch defaultChecked={i % 2 === 0} />}
              label={<Typography variant="body2">{ctrl}</Typography>} />
          </Box>
        ))}
        <Box mt={2}><Button variant="contained" size="small">Save Settings</Button></Box>
      </CardContent>
    </Card>
  </Box>
);

export default ClaimControl;
