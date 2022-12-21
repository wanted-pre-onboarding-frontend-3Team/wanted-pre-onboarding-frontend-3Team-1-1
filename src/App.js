import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './style/globalStyle';

import Auth from './pages/Auth';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route>
          <Route path="/" element={<Auth />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
