import {
  // SandpackCodeEditor,
  // SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  SandpackFiles,
} from '@codesandbox/sandpack-react';
import { initFileList } from './template/initFileList';
import { useState } from 'react';
import SandEditor from './editor';
// import FileTree from './file-tree';

export default function Playground() {
  const [fileList] = useState<SandpackFiles>(initFileList);

  return (
    <div className="flex w-screen flex-1">
      <SandpackProvider
        files={fileList}
        theme="light"
        template="react-ts"
        options={{
          visibleFiles: ['/package.json', '/App.tsx', '/App.css', '/index.mdx'],
          activeFile: '/App.tsx',
        }}
      >
        <SandpackLayout className="flex h-full w-screen flex-1">
          {/* <SandpackFileExplorer style={{ height: '100%' }} /> */}
          {/* <FileTree /> */}
          {/* <SandpackCodeEditor style={{ height: '100%' }} closableTabs showTabs /> */}
          <SandEditor styles={{ height: '100%' }} />
          <SandpackPreview
            showOpenInCodeSandbox={true}
            showRefreshButton
            showRestartButton
            style={{ height: '100%' }}
          />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}
