import styled from 'styled-components';

const Button = ({ text, handleClick, disabled }) => {
  return (
    <CommonButton
      type="submit"
      onClick={handleClick}
      className={`bg-slate-300 ${disabled || 'hover:bg-slate-400'}`}
      disabled={disabled || false}
    >
      {text}
    </CommonButton>
  );
};

const CommonButton = styled.button`
  border-radius: 4px;
  width: 100%;
  height: fit-content;
  margin: 4px 0;
  padding: 8px;
  white-space: pre;
  border: none;
  background-color: #cbd5e1;
  :enabled {
    :hover {
      cursor: pointer;
      background-color: #94a3b8;
    }
  }
  :disabled {
    cursor: not-allowed;
  }
`;

export default Button;
