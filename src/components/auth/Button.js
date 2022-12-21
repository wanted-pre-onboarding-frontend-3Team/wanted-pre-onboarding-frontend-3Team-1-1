import styled from 'styled-components';

const Button = ({ name, validForm, setClickBtn }) => {
  const clickBtnHandler = () => {
    setClickBtn(name);
  };

  return (
    <Btn type="submit" disabled={!validForm} onClick={clickBtnHandler}>
      {name}
    </Btn>
  );
};

const Btn = styled.button`
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border: none;
  border-radius: 8px;
  transition: 200ms;
  white-space: nowrap;
  font-size: 16px;
  color: #fff;
  background-color: #0085ff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(0, 0, 0, 0.08);

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    background-color: #339dff;
  }
`;

export default Button;
