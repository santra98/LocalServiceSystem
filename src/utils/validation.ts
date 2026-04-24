export const isRequired = (value: string) => {
  return value.trim().length > 0;
};

export const isValidEmail = (value: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
};

export const hasMinLength = (value: string, minLength: number) => {
  return value.trim().length >= minLength;
};

export const doValuesMatch = (first: string, second: string) => {
  return first === second;
};
