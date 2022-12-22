import styled, { css } from 'styled-components';

const TodoButton = ({ title, disabled, children }) => {
  return (
    <ButtonUI title={title} disabled={disabled}>
      {children}
    </ButtonUI>
  );
};

const ButtonUI = styled.button`
  appearance: none;
  border: none;
  width: 60px;
  height: 40px;
  font-size: 16px;
  border-radius: 8px;
  font-weight: 400px;
  line-height: 24px;
  padding: 0 12px;
  background: #0085ff;
  color: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 1px rgb(0 0 0 / 6%), 0 1px 1px rgb(0 0 0 / 8%);
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${({ title }) => {
    if (title === '수정')
      return css`
        background: #fff;
        color: #000;
      `;

    if (title === '삭제')
      return css`
        background: #e92c2c;
      `;

    return css;
  }}
`;

export default TodoButton;
