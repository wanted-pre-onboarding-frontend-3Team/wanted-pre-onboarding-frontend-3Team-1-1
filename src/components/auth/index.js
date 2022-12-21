const Auth = () => {
  return (
    <div className="auth">
      <h2>로그인</h2>
      <form>
        <label htmlFor="email">ID</label>
        <input type="email" name="email" placeholder="example@email.com" />
        <label htmlFor="password">PW</label>
        <input type="password" name="password" placeholder="8자 이상" />
        <div className="alert">dd</div>
        <button className="login__btn" type="submit">
          로그인
        </button>
      </form>
    </div>
  );
};
export default Auth;
