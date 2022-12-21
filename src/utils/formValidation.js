export const emailValidation = (text) => {
  return /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(text);
};
export const passwordValidation = (pw) => {
  return pw.length >= 8;
};
