import Title from '../components/common/Title';
import SignForm from '../components/auth/SignForm';
import Container from '../components/common/Container';

const Auth = () => {
  return (
    <Container>
      <Title text="로그인 / 회원가입" />
      <SignForm />
    </Container>
  );
};

export default Auth;
