import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './style/globalStyle';
import routes from './routes';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        {routes.map(({ path, component }) => {
          return <Route key={path} path={path} element={component} />;
        })}
      </Routes>
    </>
  );
};

export default App;
