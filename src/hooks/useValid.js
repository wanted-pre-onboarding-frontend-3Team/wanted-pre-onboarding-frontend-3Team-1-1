import { useEffect, useState } from 'react';
import { validateEmail, validatePassword } from '../utils/validateInput';

const useValid = (field, validHandler, value) => {
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    validHandler(field, isValid);
  }, [isValid, validHandler, field, value]);

  const changeHandler = (e) => {
    setIsTouched(true);

    let valid = false;

    if (field === 'email') valid = validateEmail(e.target.value);
    if (field === 'password') valid = validatePassword(e.target.value);

    setIsValid(valid);
  };

  return { changeHandler, isValid, isTouched };
};

export default useValid;
