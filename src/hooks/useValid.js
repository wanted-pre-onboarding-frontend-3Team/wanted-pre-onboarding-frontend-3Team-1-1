import { useEffect, useState } from 'react';
import { validateEmail, validatePassword } from '../utils/validateInput';

const useValid = (field, validHandler) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    validHandler(isValid);
  }, [isValid, validHandler]);

  const changeHandler = (e) => {
    let valid;

    if (field === 'email') valid = validateEmail(e.target.value);
    if (field === 'password') valid = validatePassword(e.target.value);

    if (valid) setIsValid(true);
    else setIsValid(false);
  };

  return { changeHandler };
};

export default useValid;
