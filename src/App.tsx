import React from 'react';

import GlobalStyle from './styles/global';
import Routes from './routes/index';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Routes />
    </AuthProvider>
    <GlobalStyle />
  </>
);
export default App;
