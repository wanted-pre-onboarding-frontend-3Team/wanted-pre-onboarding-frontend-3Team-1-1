import AuthInput from '../UI/AuthInput';
import useValid from '../../hooks/useValid';

const AuthEmail = ({ inputRef, validHandler }) => {
  const { changeHandler } = useValid('email', validHandler);

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
