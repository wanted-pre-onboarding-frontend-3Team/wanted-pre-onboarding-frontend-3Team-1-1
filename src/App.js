import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './style/globalStyle';
import Auth from './pages/Auth';
import Todo from './pages/Todo';
import styled from 'styled-components';

const App = () => {
  return (
    <View>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Container>
    </View>
  );
};

const View = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.section`
  width: 440px;
`;

export default App;
