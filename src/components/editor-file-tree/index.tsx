import { File, Folder, Tree } from '@/components/magicui/file-tree';
import { SandpackFiles, useSandpack } from '@codesandbox/sandpack-react';
import { CSSProperties, ReactNode } from 'react';

interface Props {
  className?: string;
  styles?: CSSProperties;
}

export default function EditorFileTree({ className, styles }: Props) {
  const { sandpack } = useSandpack();

  // console.log('sandpack', sandpack.files);

  /**
   * 渲染文件树
   * @param files
   * @returns
   */
  const renderFileTree = (files: SandpackFiles): ReactNode[] => {
    const fileList: ReactNode[] = [];

    const genFileTree = (parts: string[]) => {
      if (parts.length === 0) {
        return;
      }

      if (parts.length === 1) {
        return (
          <File key={parts[0]} value={parts[0]}>
            {parts[0]}
          </File>
        );
      } else {
        const folder = parts.shift()!;

        return (
          <Folder key={folder} value={folder} element={folder}>
            {genFileTree(parts)}
          </Folder>
        );
      }
    };

    Object.keys(files)
      .sort((a, b) => b.split('/').length - a.split('/').length)
      .forEach((filePath, index) => {
        const parts = filePath.split('/').filter(Boolean);

        // 使用索引，避免顺序混乱
        fileList[index] = genFileTree(parts);
      });

    return fileList;
  };

  return (
    <Tree
      className={className}
      style={styles}
      initialSelectedId="package.json"
      initialExpandedItems={['public', 'components']}
    >
      {/* <Folder value="2" element="app">
        <File value="3">layout.tsx</File>
        <File value="4">page.tsx</File>
      </Folder>
      <Folder value="5" element="components">
        <Folder value="6" element="ui">
          <File value="7">button.tsx</File>
        </Folder>
        <File value="8">header.tsx</File>
        <File value="9">footer.tsx</File>
      </Folder>
      <File value="12">package.json</File>
      <File value="13">index.html</File>
      <File value="14">tsconfig.json</File> */}

      {renderFileTree(sandpack.files)}
    </Tree>
  );
}
