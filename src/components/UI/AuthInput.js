import { forwardRef, useMemo } from 'react';
import styled, { css } from 'styled-components';

const AuthInput = forwardRef((props, ref) => {
  const removeInvalid = (e) => e.preventDefault();

  const updatedProps = useMemo(() => {
    const tmp = { ...props };

    ['label'].forEach((key) => {
      delete tmp[key];
    });

    return tmp;
  }, [props]);

  return (
    <>
      <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
      <InputUI {...updatedProps} onInvalid={removeInvalid} ref={ref} />
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

  ${({ isValid }) =>
    isValid &&
    css`
      border: 1px solid red;
    `}
`;

export default AuthInput;
