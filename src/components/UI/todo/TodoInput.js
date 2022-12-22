import { forwardRef, useMemo } from 'react';
import styled from 'styled-components';

const TodoInput = forwardRef((props, ref) => {
  const updatedProps = useMemo(() => {
    const tmp = { ...props };

    ['label'].forEach((key) => {
      delete tmp[key];
    });

    return tmp;
  }, [props]);

  return (
    <>
      <label className="sr-only" htmlFor={props.id}>
        {props.label}
      </label>
      <InputUI {...updatedProps} ref={ref} />
    </>
  );
});

TodoInput.displayName = 'Input';

const InputUI = styled.input`
  width: 330px;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  height: 40px;
  line-height: 18px;
  padding: 0 14px;
`;

export default TodoInput;
