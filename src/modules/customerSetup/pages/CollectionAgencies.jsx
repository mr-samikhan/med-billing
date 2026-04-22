import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const CollectionAgencies = () => (
  <Box>
    <PageHeader
      title="Collection Agencies"
      subtitle="Manage collection agency information."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Collection Agencies module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default CollectionAgencies;
