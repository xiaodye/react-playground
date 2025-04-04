import {
  // SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  SandpackFiles,
} from '@codesandbox/sandpack-react';
import { initFileList } from './template/initFileList';
import { useState } from 'react';
import SandEditor from './editor';
import FileTree from './file-tree';

export default function Playground() {
  const [fileList] = useState<SandpackFiles>(initFileList);

  return (
    <div className="flex w-screen flex-1">
      <SandpackProvider
        files={fileList}
        theme="light"
        template="react-ts"
        customSetup={{
          dependencies: {
            antd: '^5.24.6',
            '@arco-design/web-react': '^2.66.0',
          },
        }}
      >
        <SandpackLayout className="flex h-full w-screen flex-1">
          <SandpackFileExplorer style={{ height: '100%' }} />
          {/* <FileTree /> */}
          {/* <SandpackCodeEditor style={{ height: '100%' }} closableTabs showTabs /> */}
          <SandEditor styles={{ height: '100%' }} />
          <SandpackPreview showOpenInCodeSandbox={false} style={{ height: '100%' }} />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}
