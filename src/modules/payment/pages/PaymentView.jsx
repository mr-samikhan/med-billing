import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const PaymentView = () => (
  <Box>
    <PageHeader
      title="View Payments"
      subtitle="View and search posted payments."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          View Payments module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default PaymentView;
