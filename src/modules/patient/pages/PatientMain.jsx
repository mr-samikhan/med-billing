import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const PatientMain = () => (
  <Box>
    <PageHeader
      title="Patient"
      subtitle="Search and manage patient records."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Patient module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default PatientMain;
