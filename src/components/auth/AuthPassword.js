import AuthInput from '../UI/AuthInput';

const AuthPassword = ({ inputRef }) => {
  return <AuthInput label="비밀번호" type="password" ref={inputRef} />;
};

export default AuthPassword;
