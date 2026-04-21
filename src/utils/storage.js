const PREFIX = 'medbill_';

export const storage = {
  get: key => {
    try { return JSON.parse(localStorage.getItem(`${PREFIX}${key}`)); }
    catch { return null; }
  },
  set: (key, value) => {
    try { localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(value)); }
    catch { console.warn('Storage set failed:', key); }
  },
  remove: key => localStorage.removeItem(`${PREFIX}${key}`),
  clear: () => {
    Object.keys(localStorage)
      .filter(k => k.startsWith(PREFIX))
      .forEach(k => localStorage.removeItem(k));
  },
};
