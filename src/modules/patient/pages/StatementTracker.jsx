import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const StatementTracker = () => (
  <Box>
    <PageHeader
      title="Statement Tracker"
      subtitle="Track statement delivery and status."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Statement Tracker module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default StatementTracker;
