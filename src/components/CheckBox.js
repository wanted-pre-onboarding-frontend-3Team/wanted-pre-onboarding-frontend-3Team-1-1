import { forwardRef } from 'react';
import styled from 'styled-components';

const Checkbox = (props, ref) => {
  return <StyledCheckBox ref={ref} type="checkbox" {...props} />;
};

const StyledCheckBox = styled.input`
  position: relative;
  border: 1px solid #e8e8e8;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  transition: 200ms;

  &:hover {
    border-color: #969696;
  }

  &:checked {
    border-color: #0085ff;
    background-color: #ffffff;

    &::before {
      content: ' ';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 16px;
      height: 16px;
      border-radius: 3px;
      background-color: #0085ff;
    }
  }
`;

export default forwardRef(Checkbox);
