import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import routes from './routes';
import GlobalStyle from './style/globalStyle';

const App = () => {
<<<<<<< HEAD
  return <GlobalStyle />;
=======
  return (
    <Container>
      <GlobalStyle />
      <Routes>
        {routes.map(({ path, component }) => {
          return <Route key={path} path={path} element={component} />;
        })}
      </Routes>
    </Container>
  );
>>>>>>> main
};

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  margin-top: 60px;
`;

export default App;
