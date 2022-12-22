import { forwardRef, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

const Input = (props, ref) => {
  const { onChange } = props;

  const [isError, setIsError] = useState(false);

  const updatedProps = useMemo(() => {
    const tmp = { ...props };

    ['onChange'].forEach((key) => {
      delete tmp[key];
    });

    return tmp;
  }, [props]);

  const onChangeHandler = useCallback(
    (e) => {
      const {
        value,
        validity: { valid },
      } = e.target;

      setIsError(!valid && value);

      onChange && onChange(e);
    },
    [onChange],
  );

  return (
    <StyledInput
      ref={ref}
      className={isError ? 'isError' : ''}
      onChange={onChangeHandler}
      onInvalid={(e) => {
        e.preventDefault();
      }}
      {...updatedProps}
    />
  );
};

const StyledInput = styled.input`
  height: 40px;
  padding: 0 14px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  background-color: #ffffff;
  transition: 200ms;
  outline: none;
  width: 100%;

  &:hover {
    border-color: #969696;
  }

  &:focus {
    border-color: #0085ff;
    box-shadow: 0px 0px 2px 2px rgba(0, 133, 255, 0.15);
  }

  &.isError {
    border-color: #e92c2c;
    box-shadow: 0px 0px 2px 2px rgba(249, 134, 0, 0.15);
  }
`;

export default forwardRef(Input);
