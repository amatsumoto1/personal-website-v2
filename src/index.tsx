import React from 'react';
import { createRoot } from 'react-dom/client';
import { StyleSheetManager } from 'styled-components';
import App from './App';

const container = document.getElementById('app-root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <StyleSheetManager disableVendorPrefixes>
      <App />
    </StyleSheetManager>
  </React.StrictMode>
);