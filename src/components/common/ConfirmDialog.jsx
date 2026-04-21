import {
  Dialog, DialogTitle, DialogContent, DialogContentText,
  DialogActions, Button,
} from '@mui/material';

const ConfirmDialog = ({
  open, title = 'Confirm', message,
  confirmLabel = 'Confirm', cancelLabel = 'Cancel',
  onConfirm, onCancel, severity = 'error',
}) => (
  <Dialog open={open} onClose={onCancel} maxWidth="xs" fullWidth>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{message}</DialogContentText>
    </DialogContent>
    <DialogActions sx={{ px: 3, pb: 2 }}>
      <Button onClick={onCancel} variant="outlined" size="small">{cancelLabel}</Button>
      <Button onClick={onConfirm} variant="contained" color={severity} size="small">
        {confirmLabel}
      </Button>
    </DialogActions>
  </Dialog>
);

export default ConfirmDialog;
