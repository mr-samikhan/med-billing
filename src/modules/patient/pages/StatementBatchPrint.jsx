import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const StatementBatchPrint = () => (
  <Box>
    <PageHeader
      title="Statement Batch Print"
      subtitle="Print patient statements in batch."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Statement Batch Print module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default StatementBatchPrint;
