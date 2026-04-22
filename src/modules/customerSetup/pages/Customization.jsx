import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const Customization = () => (
  <Box>
    <PageHeader
      title="Customization"
      subtitle="Customize system appearance and behavior."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Customization module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default Customization;
