import React from 'react';
import { HashRouter } from 'react-router-dom';
import ThemeContainer from './components/ThemeContainer';
import Layout from './components/Layout';

const App: React.FC = () => (
  <HashRouter>
    <ThemeContainer>
      <Layout>
      </Layout>
    </ThemeContainer>
  </HashRouter>
);

export default App;