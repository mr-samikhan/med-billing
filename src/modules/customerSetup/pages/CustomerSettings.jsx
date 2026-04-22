import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const CustomerSettings = () => (
  <Box>
    <PageHeader
      title="Settings"
      subtitle="Customer setup global settings."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Settings module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default CustomerSettings;
