import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const Communications = () => (
  <Box>
    <PageHeader
      title="Communications"
      subtitle="Patient communications and messaging."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Communications module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default Communications;
