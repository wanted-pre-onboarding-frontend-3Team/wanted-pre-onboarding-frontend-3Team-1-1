export const isValidEmail = (email) => {
  const regExp = /\S+@\S+\.\S{2,3}$/;
  const isValid = regExp.test(email);
  return isValid;
};

export const isValidPassword = (password) => {
  if (password.length >= 8) return true;
  return false;
};

// export const isValidPasswordCheck = (password, passwordCheck) => {
//   if (password === passwordCheck) return true;
//   return false;
// };
