import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const CompanyAnnouncements = () => (
  <Box>
    <PageHeader
      title="Company Announcements"
      subtitle="Company-wide announcements and notices."
    />
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Company Announcements module — content coming soon.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default CompanyAnnouncements;
