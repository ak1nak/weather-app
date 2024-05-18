import React from 'react';
import AppRouter from './router';
import GlobalStyle from './styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
};

export default App;
