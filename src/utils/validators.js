export const isRequired = value => !!value && String(value).trim() !== '';

export const isEmail = email =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isPhone = phone =>
  /^\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone);

export const isNPI = npi =>
  /^\d{10}$/.test(npi);

export const isZip = zip =>
  /^\d{5}(-\d{4})?$/.test(zip);

export const minLength = (min) => value =>
  String(value || '').length >= min;

export const maxLength = (max) => value =>
  String(value || '').length <= max;

export const validate = (rules, value) =>
  rules.reduce((err, rule) => err || rule(value), null);
