function validateId(id) {
  return /[0-9a-zA-Z]+@[0-9a-zA-Z]+.[a-zA-Z]+/.test(id);
}

const validatePassword = (password) => {
  return password.length > 7;
};

export { validateId, validatePassword };
