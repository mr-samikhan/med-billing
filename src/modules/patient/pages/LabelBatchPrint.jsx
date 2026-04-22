import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const LabelBatchPrint = () => (
  <Box>
    <PageHeader
      title="Label Batch Print"
      subtitle="Print mailing labels for patients."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Label Batch Print module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default LabelBatchPrint;
