import React from 'react';
import { createRoot } from 'react-dom/client';
import { StyleSheetManager } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

const container = document.getElementById('app-root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <StyleSheetManager disableVendorPrefixes>
      <Provider store={store}>
        <App />
      </Provider>
    </StyleSheetManager>
  </React.StrictMode>
);