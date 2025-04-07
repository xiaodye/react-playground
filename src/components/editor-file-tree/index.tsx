import { File, Folder, Tree } from '@/components/magicui/file-tree';
import { cn } from '@/lib/utils';
import { DeleteOutlined, FileAddOutlined, FolderAddOutlined } from '@ant-design/icons';
import { SandpackFiles, useSandpack } from '@codesandbox/sandpack-react';
import { Button, Popconfirm, Space } from 'antd';
import { CSSProperties, ReactNode, useState } from 'react';
import FileItem from './FileItem';

interface Props {
  className?: string;
  styles?: CSSProperties;
}

export default function EditorFileTree({ className, styles }: Props) {
  const { sandpack } = useSandpack();
  const [currentNodeId, setCurrentNodeId] = useState(sandpack.activeFile);

  // console.log('sandpack', sandpack);

  /**
   * 渲染文件树
   * @param files
   * @returns
   */
  const renderFileTree = (files: SandpackFiles): ReactNode[] => {
    const fileList: ReactNode[] = [];

    const genFileTree = (parts: string[], filePath: string, prefix: string) => {
      if (parts.length === 0) {
        return;
      }

      if (parts.length === 1) {
        const NodeId = filePath;

        return (
          <File
            key={NodeId}
            value={NodeId}
            isSelect={currentNodeId === NodeId}
            handleSelect={() => {
              sandpack.setActiveFile(filePath);

              if (!sandpack.visibleFiles.includes(filePath)) {
                sandpack.visibleFiles.push(filePath);
              }

              setCurrentNodeId(NodeId);
            }}
          >
            <FileItem value={parts[0]} />
          </File>
        );
      } else {
        const folder = parts.shift()!;
        const NodeId = prefix + folder + '/';

        return (
          <Folder
            key={NodeId}
            value={NodeId}
            element={folder}
            isSelect={currentNodeId === NodeId}
            handleSelect={() => {
              setCurrentNodeId(NodeId);
            }}
          >
            {genFileTree(parts, filePath, NodeId)}
          </Folder>
        );
      }
    };

    Object.keys(files)
      .sort((a, b) => b.split('/').length - a.split('/').length)
      .forEach((filePath, index) => {
        const parts = filePath.split('/').filter(Boolean);

        // 使用索引，避免顺序混乱
        fileList[index] = genFileTree(parts, filePath, '/');
      });

    return fileList;
  };

  return (
    <div className={cn('flex flex-col', className)}>
      <Space size={2} className="flex h-10 justify-end border-b-[0.5px] px-2">
        <Button type="text" size="small" icon={<FileAddOutlined />} />
        <Button type="text" size="small" icon={<FolderAddOutlined />} />
        <Popconfirm
          title="删除"
          description="确认删除选中的文件/文件夹吗？"
          okText="确认"
          cancelText="取消"
          okButtonProps={{ danger: true }}
        >
          <Button type="text" size="small" icon={<DeleteOutlined />} />
        </Popconfirm>
      </Space>
      <Tree
        className="flex-1 pt-2"
        style={styles}
        initialSelectedId="package.json"
        initialExpandedItems={['public', 'components']}
      >
        {renderFileTree(sandpack.files)}
      </Tree>
    </div>
  );
}
