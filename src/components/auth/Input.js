const Input = ({ type, label, func, placeholder, val }) => {
  return (
    <>
      <label htmlFor={type}>{label}</label>
      <input type={type} placeholder={placeholder} value={val} name={type} onChange={func} />
    </>
  );
};
export default Input;
