import AppCss from './App.css?raw';
import App from './App.tsx?raw';
import Index from './index.tsx?raw';
import ButtonGroup from './components/ButtonGroup.tsx?raw';
import packageJson from './package.json?raw';
import MDX from './index.mdx?raw';
import { SandpackFiles } from '@codesandbox/sandpack-react';
import ViteConfig from './vite.config.ts?raw';
import ViteEnv from './vite-env.d.ts?raw';

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
  '/index.mdx': {
    code: MDX,
  },
  '/vite.config.ts': {
    code: ViteConfig,
  },
  '/vite-env.d.ts': {
    code: ViteEnv,
  },
  'components/ButtonGroup.tsx': {
    code: ButtonGroup,
  },
  '/package.json': {
    code: packageJson,
  },
};
