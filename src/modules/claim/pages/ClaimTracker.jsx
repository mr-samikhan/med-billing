import { Box, Card, CardContent, Stepper, Step, StepLabel, Typography, Divider } from '@mui/material';
import PageHeader from '@components/common/PageHeader';
import { ROUTES } from '@constants/routes';

const STEPS = ['Submitted', 'Received', 'Under Review', 'Adjudicated', 'Paid'];

const ClaimTracker = () => (
  <Box>
    <PageHeader title="Claim Tracker"
      breadcrumbs={[{ label: 'Claim', path: ROUTES.CLAIM }, { label: 'Claim Tracker' }]} />
    {['C10021','C10022'].map((id, i) => (
      <Card key={id} sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="subtitle2" fontWeight={600} mb={2}>Claim #{id}</Typography>
          <Stepper activeStep={i === 0 ? 1 : 4} alternativeLabel>
            {STEPS.map(s => <Step key={s}><StepLabel>{s}</StepLabel></Step>)}
          </Stepper>
        </CardContent>
      </Card>
    ))}
  </Box>
);

export default ClaimTracker;
