import React from 'react';
import { SandpackProvider } from '@codesandbox/sandpack-react';
import { initFileList } from '@/components/playground/template/initFileList';
import AntdFileTree from './index';
import { Space } from 'antd';

/**
 * 文件树演示组件
 */
export default function AntdFileTreeDemo() {
  return (
    <div className="h-[600px] rounded-md border border-gray-200 p-4">
      <h2 className="mb-4 text-lg font-medium">文件树演示</h2>

      <Space direction="vertical" className="w-full">
        <SandpackProvider
          files={initFileList}
          template="react-ts"
          customSetup={{
            dependencies: {
              react: '^18.0.0',
              'react-dom': '^18.0.0',
            },
          }}
        >
          <div className="h-[500px] w-[240px] rounded border border-gray-100 p-2">
            <AntdFileTree />
          </div>
        </SandpackProvider>
      </Space>
    </div>
  );
}
