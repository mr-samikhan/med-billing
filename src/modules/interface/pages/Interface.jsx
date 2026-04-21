import { Box, Card, CardContent, Typography, Switch, FormControlLabel, Divider, Button } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const INTERFACES = [
  { name: 'HL7 FHIR Integration',    enabled: true  },
  { name: 'EDI 837 Transmission',    enabled: true  },
  { name: 'ERA 835 Auto-posting',    enabled: true  },
  { name: 'Practice Management Sync',enabled: false },
  { name: 'Lab Results Interface',   enabled: false },
];

const Interface = () => (
  <Box>
    <PageHeader title="Interface" breadcrumbs={[{ label: 'Interface' }]} />
    <Card>
      <CardContent>
        <Typography variant="subtitle2" mb={2}>Active Integrations</Typography>
        {INTERFACES.map((item, i) => (
          <Box key={item.name}>
            {i > 0 && <Divider sx={{ my: 1 }} />}
            <FormControlLabel control={<Switch defaultChecked={item.enabled} />}
              label={<Typography variant="body2">{item.name}</Typography>} />
          </Box>
        ))}
        <Box mt={2}><Button variant="contained" size="small">Save</Button></Box>
      </CardContent>
    </Card>
  </Box>
);

export default Interface;
