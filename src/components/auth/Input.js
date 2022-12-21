import styled from 'styled-components';

const Input = ({ type, label, func, placeholder, val }) => {
  return (
    <>
      <AuthLabel htmlFor={type}>{label}</AuthLabel>
      <AuthInput type={type} placeholder={placeholder} value={val} name={type} onChange={func} />
    </>
  );
};
const AuthLabel = styled.label`
  margin: 10px 0;
  font-weight: 700;
  width: 100%;
`;
const AuthInput = styled.input`
  padding: 15px;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%;
  &:focus {
    outline: 2px solid gray;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
export default Input;
