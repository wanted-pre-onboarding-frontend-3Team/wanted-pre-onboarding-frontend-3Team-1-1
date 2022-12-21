const validateEmail = (email) => {
  const emailRegex =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  return emailRegex.test(email);
};

const validatePassword = (password) => {
  return password.length > 7;
};

export { validateEmail, validatePassword };
