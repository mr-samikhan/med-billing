import dayjs from 'dayjs';

export const formatDate = (date, format = 'MM/DD/YYYY') =>
  date ? dayjs(date).format(format) : '—';

export const formatDateTime = (date) =>
  date ? dayjs(date).format('MM/DD/YYYY hh:mm A') : '—';

export const formatCurrency = (amount, currency = 'USD') =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount ?? 0);

export const formatPhone = (phone = '') =>
  phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

export const formatSSN = (ssn = '') =>
  ssn.replace(/(\d{3})(\d{2})(\d{4})/, '***-**-$3');

export const truncate = (str = '', maxLen = 40) =>
  str.length > maxLen ? `${str.slice(0, maxLen)}…` : str;

export const capitalize = (str = '') =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
