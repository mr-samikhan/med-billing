import { Grid, Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { TrendingUp, Assignment, People, AttachMoney } from '@mui/icons-material';
import PageHeader from '@components/common/PageHeader';

const STATS = [
  { label: 'Total Claims',    value: '1,284', icon: <Assignment />, color: '#1976d2', change: '+12%' },
  { label: 'Revenue (MTD)',   value: '$84,320', icon: <AttachMoney />, color: '#2e7d32', change: '+8%' },
  { label: 'Active Patients', value: '342',   icon: <People />,     color: '#ed6c02', change: '+3%' },
  { label: 'Pending Claims',  value: '47',    icon: <TrendingUp />, color: '#9c27b0', change: '-5%' },
];

const Dashboard = () => (
  <Box>
    <PageHeader title="Dashboard" subtitle="Welcome back! Here's your practice overview." />
    <Grid container spacing={2.5}>
      {STATS.map(stat => (
        <Grid item xs={12} sm={6} md={3} key={stat.label}>
          <Card>
            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ bgcolor: stat.color + '1a', p: 1.5, borderRadius: 2, color: stat.color }}>
                {stat.icon}
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h5" fontWeight={700}>{stat.value}</Typography>
                <Typography variant="caption" color="text.secondary">{stat.label}</Typography>
                <Box mt={0.5}>
                  <Chip label={stat.change} size="small"
                    color={stat.change.startsWith('+') ? 'success' : 'error'}
                    sx={{ height: 18, fontSize: '0.68rem' }} />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Dashboard;
