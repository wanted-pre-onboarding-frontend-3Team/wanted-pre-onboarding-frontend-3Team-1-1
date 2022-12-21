export const validateEmail = (email) => {
  return /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/.test(email);
};

export const validatePwd = (pwd) => {
  return pwd.length > 7;
};
