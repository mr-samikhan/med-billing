import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const PatientSettings = () => (
  <Box>
    <PageHeader
      title="Settings"
      subtitle="Patient module settings and configuration."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Settings module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default PatientSettings;
