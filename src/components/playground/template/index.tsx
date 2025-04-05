import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@arco-design/web-react/dist/css/arco.css';
import './styles.css';
import { MDXProvider } from '@mdx-js/react';

import App from './App';

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <MDXProvider>
      <App />
    </MDXProvider>
  </StrictMode>,
);
