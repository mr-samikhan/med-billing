import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const PaymentTracker = () => (
  <Box>
    <PageHeader
      title="Payment Tracker"
      subtitle="Track payment status and history."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Payment Tracker module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default PaymentTracker;
