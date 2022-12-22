import useValid from '../../hooks/useValid';
import AuthInput from '../UI/AuthInput';

const AuthPassword = ({ inputRef, validHandler }) => {
  const value = inputRef.current?.value;
  const { changeHandler, isValid, isTouched } = useValid('password', validHandler, value);

  return (
    <AuthInput
      id={inputRef.current?.type}
      label="비밀번호"
      type="password"
      onChange={changeHandler}
      ref={inputRef}
      isValid={isTouched && !isValid}
      placeholder="비밀번호는 8자리 이상입니다."
    />
  );
};

export default AuthPassword;
