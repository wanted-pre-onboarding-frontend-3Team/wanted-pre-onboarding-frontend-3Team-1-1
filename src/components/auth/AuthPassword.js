import useValid from '../../hooks/useValid';
import AuthInput from '../UI/AuthInput';

const AuthPassword = ({ inputRef, validHandler }) => {
  const { changeHandler } = useValid('password', validHandler);

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
