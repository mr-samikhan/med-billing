import { Box, Card, CardContent, Typography, Chip, List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import { CheckCircle, RadioButtonUnchecked, FiberManualRecord } from '@mui/icons-material';
import PageHeader from '@components/common/PageHeader';

const MOCK_TASKS = [
  { id: 1, title: 'Review pending claims batch #2847', priority: 'high',   done: false },
  { id: 2, title: 'Follow up on denied claim #1032',  priority: 'high',   done: false },
  { id: 3, title: 'Update patient insurance for J. Smith', priority: 'medium', done: false },
  { id: 4, title: 'Submit ERA reconciliation report', priority: 'low',    done: true  },
  { id: 5, title: 'Schedule monthly billing review',  priority: 'medium', done: true  },
];

const PRIORITY_COLOR = { high: 'error', medium: 'warning', low: 'success' };

const Tasks = () => (
  <Box>
    <PageHeader title="Tasks" subtitle="Your pending action items." />
    <Card>
      <CardContent sx={{ p: 0 }}>
        <List disablePadding>
          {MOCK_TASKS.map((task, i) => (
            <Box key={task.id}>
              {i > 0 && <Divider />}
              <ListItem sx={{ opacity: task.done ? 0.5 : 1 }}>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  {task.done
                    ? <CheckCircle color="success" fontSize="small" />
                    : <RadioButtonUnchecked fontSize="small" />}
                </ListItemIcon>
                <ListItemText
                  primary={task.title}
                  primaryTypographyProps={{
                    fontSize: '0.875rem',
                    textDecoration: task.done ? 'line-through' : 'none',
                  }}
                />
                <Chip label={task.priority} size="small"
                  color={PRIORITY_COLOR[task.priority]}
                  sx={{ fontSize: '0.7rem', height: 20 }} />
              </ListItem>
            </Box>
          ))}
        </List>
      </CardContent>
    </Card>
  </Box>
);

export default Tasks;
