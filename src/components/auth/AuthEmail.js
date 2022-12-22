import AuthInput from '../UI/AuthInput';
import useValid from '../../hooks/useValid';

const AuthEmail = ({ inputRef, validHandler }) => {
  const { changeHandler, isValid, isTouched } = useValid('email', validHandler, inputRef.current?.value);

  return (
    <AuthInput
      id={inputRef.current?.type}
      type="email"
      label="아이디"
      onChange={changeHandler}
      ref={inputRef}
      placeholder="이메일 형식을 지켜주세요."
      isValid={isTouched && !isValid}
    />
  );
};

export default AuthEmail;
