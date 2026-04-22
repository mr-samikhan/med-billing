import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const BatchEligibility = () => (
  <Box>
    <PageHeader
      title="Batch Eligibility"
      subtitle="Run eligibility checks for multiple patients."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Batch Eligibility module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default BatchEligibility;
