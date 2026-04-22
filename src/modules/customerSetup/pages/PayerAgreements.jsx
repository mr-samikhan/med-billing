import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const PayerAgreements = () => (
  <Box>
    <PageHeader
      title="Payer Agreements"
      subtitle="Manage payer fee schedules and agreements."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Payer Agreements module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default PayerAgreements;
