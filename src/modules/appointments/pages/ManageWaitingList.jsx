import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const ManageWaitingList = () => (
  <Box>
    <PageHeader
      title="Manage Waiting List"
      subtitle="View and manage the appointment waiting list."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Manage Waiting List module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default ManageWaitingList;
