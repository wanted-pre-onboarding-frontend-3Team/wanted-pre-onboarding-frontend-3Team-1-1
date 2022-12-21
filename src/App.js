import { Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import GlobalStyle from './style/globalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
    </>
  );
};

export default App;
