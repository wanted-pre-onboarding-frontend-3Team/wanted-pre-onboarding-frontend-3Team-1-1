import AuthInput from '../UI/AuthInput';
import { validateEmail } from '../../utils/validateInput';
import { useEffect, useState } from 'react';

const AuthEmail = ({ inputRef, validHandler }) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    validHandler(isValid);
  }, [isValid]);

  const changeHandler = (e) => {
    const valid = validateEmail(e.target.value);

    if (valid) setIsValid(true);
    else setIsValid(false);
  };

  return (
    <AuthInput
      type="email"
      label="아이디"
      onChange={changeHandler}
      ref={inputRef}
      placeholder="이메일 형식을 지켜주세요."
    />
  );
};

export default AuthEmail;
