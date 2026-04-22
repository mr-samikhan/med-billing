import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const AppointmentControl = () => (
  <Box>
    <PageHeader
      title="Appointment Control"
      subtitle="Configure appointment rules and controls."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Appointment Control module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default AppointmentControl;
