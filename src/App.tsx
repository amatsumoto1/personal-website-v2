import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));

const App: React.FC = () => (
  <HashRouter>
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
      </Suspense>
    </Layout>
  </HashRouter>
);

export default App;