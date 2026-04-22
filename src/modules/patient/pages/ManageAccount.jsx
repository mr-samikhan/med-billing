import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const ManageAccount = () => (
  <Box>
    <PageHeader
      title="Manage Account"
      subtitle="View and update patient account details."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Manage Account module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default ManageAccount;
