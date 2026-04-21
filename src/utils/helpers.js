export const buildQueryString = (params = {}) =>
  Object.entries(params)
    .filter(([, v]) => v !== '' && v !== null && v !== undefined)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

export const downloadBlob = (blob, filename) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};

export const groupBy = (arr = [], key) =>
  arr.reduce((acc, item) => {
    const group = item[key] ?? 'unknown';
    (acc[group] = acc[group] || []).push(item);
    return acc;
  }, {});

export const sleep = ms => new Promise(res => setTimeout(res, ms));

export const omit = (obj = {}, keys = []) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
