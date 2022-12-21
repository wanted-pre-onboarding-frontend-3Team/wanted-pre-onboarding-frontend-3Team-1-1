import { useEffect, useState } from 'react';
import { validatePassword } from '../../utils/validateInput';
import AuthInput from '../UI/AuthInput';

const AuthPassword = ({ inputRef, validHandler }) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    validHandler(isValid);
  }, [isValid]);

  const changeHandler = (e) => {
    const valid = validatePassword(e.target.value);

    if (valid) setIsValid(true);
    else setIsValid(false);
  };

  return (
    <AuthInput
      id="email"
      label="비밀번호"
      type="password"
      onChange={changeHandler}
      ref={inputRef}
      placeholder="비밀번호는 8자리 이상입니다."
    />
  );
};

export default AuthPassword;
