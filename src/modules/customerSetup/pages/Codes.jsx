import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const Codes = () => (
  <Box>
    <PageHeader
      title="Codes"
      subtitle="Manage ICD, CPT, and custom codes."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Codes module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default Codes;
