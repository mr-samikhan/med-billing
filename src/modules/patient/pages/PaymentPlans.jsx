import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const PaymentPlans = () => (
  <Box>
    <PageHeader
      title="Payment Plans"
      subtitle="Set up and manage patient payment plans."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Payment Plans module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default PaymentPlans;
