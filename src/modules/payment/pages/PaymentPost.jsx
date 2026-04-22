import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const PaymentPost = () => (
  <Box>
    <PageHeader
      title="Post Payment"
      subtitle="Post insurance and patient payments."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Post Payment module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default PaymentPost;
