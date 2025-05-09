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
import SandEditor from '../editor';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import EditorFileTree from '@/components/editor-file-tree';

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
          {/* <SandpackCodeEditor style={{ height: '100%' }} closableTabs showTabs /> */}

          <ResizablePanelGroup direction="horizontal" className="flex">
            <ResizablePanel defaultSize={10} minSize={2}>
              <EditorFileTree className="flex bg-background pl-1 pt-2" />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50} minSize={30}>
              <SandEditor styles={{ height: '100%' }} />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={40} minSize={25}>
              <SandpackPreview
                showOpenInCodeSandbox={true}
                showRefreshButton
                showRestartButton
                style={{ height: '100%' }}
              />
            </ResizablePanel>
          </ResizablePanelGroup>
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}
