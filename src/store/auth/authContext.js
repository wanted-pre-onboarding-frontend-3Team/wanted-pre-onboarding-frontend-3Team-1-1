import React from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  setLogin: (dataToken) => {},
});

export default AuthContext;
