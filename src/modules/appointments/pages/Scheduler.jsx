import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const Scheduler = () => (
  <Box>
    <PageHeader
      title="Scheduler"
      subtitle="Schedule and manage patient appointments."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Scheduler module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default Scheduler;
