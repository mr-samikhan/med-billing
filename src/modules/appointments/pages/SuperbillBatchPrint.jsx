import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const SuperbillBatchPrint = () => (
  <Box>
    <PageHeader
      title="Superbill Batch Print"
      subtitle="Print superbills in batch for multiple appointments."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Superbill Batch Print module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default SuperbillBatchPrint;
