import { Box, Card, CardContent, Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText, Divider, Chip } from '@mui/material';
import PageHeader from '@components/common/PageHeader';

const MOCK_MSGS = [
  { id: 1, from: 'Dr. Amanda Collins', text: 'Please review the EOB for patient #4421.', time: '10:24 AM', unread: true },
  { id: 2, from: 'Billing Team',       text: 'Monthly report is ready for your review.',  time: '9:05 AM',  unread: true },
  { id: 3, from: 'John Payer Inc.',    text: 'Claim #9821 has been approved.',             time: 'Yesterday', unread: false },
  { id: 4, from: 'System',            text: 'Scheduled maintenance on Sunday 2–4 AM.',    time: 'Mon',      unread: false },
];

const Messages = () => (
  <Box>
    <PageHeader title="Messages" subtitle="Internal communications and notifications." />
    <Card>
      <CardContent sx={{ p: 0 }}>
        <List disablePadding>
          {MOCK_MSGS.map((msg, i) => (
            <Box key={msg.id}>
              {i > 0 && <Divider />}
              <ListItem alignItems="flex-start"
                sx={{ bgcolor: msg.unread ? 'action.hover' : 'transparent' }}>
                <ListItemAvatar>
                  <Avatar sx={{ width: 36, height: 36, fontSize: '0.8rem', bgcolor: 'primary.main' }}>
                    {msg.from[0]}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="body2" fontWeight={msg.unread ? 600 : 400}>{msg.from}</Typography>
                      {msg.unread && <Chip label="New" size="small" color="primary" sx={{ height: 16, fontSize: '0.65rem' }} />}
                    </Box>
                  }
                  secondary={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="caption" color="text.secondary">{msg.text}</Typography>
                      <Typography variant="caption" color="text.disabled" ml={2}>{msg.time}</Typography>
                    </Box>
                  }
                />
              </ListItem>
            </Box>
          ))}
        </List>
      </CardContent>
    </Card>
  </Box>
);

export default Messages;
