import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const Payers = () => (
  <Box>
    <PageHeader
      title="Payers"
      subtitle="Manage insurance payer profiles."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Payers module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default Payers;
