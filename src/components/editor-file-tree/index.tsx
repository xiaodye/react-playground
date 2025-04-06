import { File, Folder, Tree } from '@/components/magicui/file-tree';
import { CSSProperties } from 'react';

interface Props {
  className?: string;
  styles?: CSSProperties;
}

export default function EditorFileTree({ className, styles }: Props) {
  return (
    <Tree
      className={className}
      style={styles}
      initialSelectedId="7"
      initialExpandedItems={['2', '3', '4', '5', '6', '7', '8', '9', '10', '11']}
      elements={ELEMENTS}
    >
      <Folder value="2" element="app">
        <File value="3">
          <p>layout.tsx</p>
        </File>
        <File value="4">
          <p>page.tsx</p>
        </File>
      </Folder>
      <Folder value="5" element="components">
        <Folder value="6" element="ui">
          <File value="7">
            <p>button.tsx</p>
          </File>
        </Folder>
        <File value="8">
          <p>header.tsx</p>
        </File>
        <File value="9">
          <p>footer.tsx</p>
        </File>
      </Folder>
      <File value="12">
        <p>package.json</p>
      </File>
      <File value="13">
        <p>index.html</p>
      </File>
      <File value="14">
        <p>tsconfig.json</p>
      </File>
    </Tree>
  );
}

const ELEMENTS = [
  {
    id: '2',
    isSelectable: true,
    name: 'app',
    children: [
      {
        id: '3',
        isSelectable: true,
        name: 'layout.tsx',
      },
      {
        id: '4',
        isSelectable: true,
        name: 'page.tsx',
      },
    ],
  },
  {
    id: '5',
    isSelectable: true,
    name: 'components',
    children: [
      {
        id: '6',
        isSelectable: true,
        name: 'header.tsx',
      },
      {
        id: '7',
        isSelectable: true,
        name: 'footer.tsx',
      },
    ],
  },
  {
    id: '8',
    isSelectable: true,
    name: 'lib',
    children: [
      {
        id: '9',
        isSelectable: true,
        name: 'utils.ts',
      },
    ],
  },
];
