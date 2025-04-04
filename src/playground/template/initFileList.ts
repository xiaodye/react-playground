import AppCss from './App.css?raw';
import App from './App.tsx?raw';
import Index from './index.tsx?raw';
import ButtonGroup from './components/ButtonGroup.tsx?raw';
import packageJson from './package.json?raw';
import { SandpackFiles } from '@codesandbox/sandpack-react';

export const initFileList: SandpackFiles = {
  '/App.css': {
    code: AppCss,
  },
  '/App.tsx': {
    code: App,
    active: true,
  },
  '/index.tsx': {
    code: Index,
  },
  'components/ButtonGroup.tsx': {
    code: ButtonGroup,
  },
  '/package.json': {
    code: packageJson,
    hidden: true,
    readOnly: true,
  },
};
