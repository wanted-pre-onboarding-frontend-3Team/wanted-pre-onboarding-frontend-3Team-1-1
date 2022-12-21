import { forwardRef } from 'react';
import styled from 'styled-components';

const AuthInput = forwardRef(({ id, label, type, onChange, placeholder }, ref) => {
  return (
    <>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputUI id={id} type={type} onChange={onChange} placeholder={placeholder} ref={ref} />
    </>
  );
});

AuthInput.displayName = 'Input';

const InputLabel = styled.label`
  display: block;
  font-weight: 400;
  line-height: 18px;
  color: #585757;
  margin-bottom: 10px;
`;

const InputUI = styled.input`
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  width: 100%;
  font-weight: 400;
  height: 40px;
  line-height: 18px;
  padding: 0 14px;
  margin-bottom: 10px;
`;

export default AuthInput;
