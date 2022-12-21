import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Todo from './pages/Todo';
import GlobalStyle from './style/globalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
};

export default App;
