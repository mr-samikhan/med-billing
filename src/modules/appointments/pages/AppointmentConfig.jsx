import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const AppointmentConfig = () => (
  <Box>
    <PageHeader
      title="Configuration"
      subtitle="Appointment module configuration and settings."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Configuration module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default AppointmentConfig;
