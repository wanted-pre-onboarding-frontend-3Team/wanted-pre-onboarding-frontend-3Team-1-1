import styled from 'styled-components';

const TodoCompleteBtn = (prop) => {
  const { isCompleted } = prop;

  return (
    <form>
      <CheckBtn type="checkbox" name="isCompleteed" defaultChecked={isCompleted} />
    </form>
  );
};

const CheckBtn = styled.input`
  display: inline-block;
  content: '';
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 10px;

  /*체크했을 때*/
  &:checked {
    background: blue;
  }
`;
export default TodoCompleteBtn;
