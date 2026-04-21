import { Box, CircularProgress, Typography } from '@mui/material';

const LoadingSpinner = ({ message = 'Loading…', fullPage = false }) => (
  <Box sx={{
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center', gap: 2,
    ...(fullPage ? { minHeight: '60vh' } : { py: 6 }),
  }}>
    <CircularProgress size={36} />
    {message && <Typography variant="body2" color="text.secondary">{message}</Typography>}
  </Box>
);

export default LoadingSpinner;
