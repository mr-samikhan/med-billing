import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const Facilities = () => (
  <Box>
    <PageHeader
      title="Facilities"
      subtitle="Manage facility details and settings."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Facilities module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default Facilities;
