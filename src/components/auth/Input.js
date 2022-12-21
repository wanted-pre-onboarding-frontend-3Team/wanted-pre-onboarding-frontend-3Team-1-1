import styled from 'styled-components';

const Input = ({ type, label, placeholder, isValid, setIsValid, enteredInput, setEnteredInput }) => {
  const enteredInputHander = (e) => {
    const { value } = e.target;
    setEnteredInput({ ...enteredInput, [type]: value });

    if (type === 'email') {
      if (value.includes('@')) setIsValid({ ...isValid, email: true });
      else setIsValid({ ...isValid, email: false });
    }

    if (type === 'password') {
      if (value.length >= 8) setIsValid({ ...isValid, password: true });
      else setIsValid({ ...isValid, password: false });
    }
  };

  return (
    <InputWrap>
      <label htmlFor={type}>
        {label}
        <span>*</span>
      </label>
      <input type={type} id={type} placeholder={placeholder} value={enteredInput[type]} onChange={enteredInputHander} />
    </InputWrap>
  );
};

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;

    span {
      color: #e92c2c;
      margin-left: 4px;
    }
  }

  input {
    background-color: #fff;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 400;
    height: 40px;
    line-height: 18px;
    padding: 0 14px;
    transition: 0.2s;

    &::placeholder {
      font-size: 12px;
      color: #999;
    }

    &:hover {
      border: 1px solid #969696;
    }

    &:focus {
      border: 1px solid #0085ff;
      box-shadow: 0px 0px 2px 2px rgba(0, 133, 255, 0.15);
    }
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: #969696;
  }
`;

export default Input;
