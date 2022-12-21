import AuthInput from '../UI/AuthInput';

const AuthEmail = ({ inputRef }) => {
  return <AuthInput type="email" label="아이디" ref={inputRef} />;
};

export default AuthEmail;
