# Antd 文件树组件

这是一个使用 Antd Tree 组件实现的文件树组件，用于在编辑器中展示文件结构。

## 特性

- 支持文件和文件夹的显示
- 自动转换 SandpackFiles 格式为 Antd Tree 组件所需的数据结构
- 支持文件点击打开
- 支持文件树展开/折叠

## 使用方法

```tsx
import { SandpackProvider } from '@codesandbox/sandpack-react';
import AntdFileTree from '@/components/antd-file-tree';

// 文件列表
const files = {
  '/App.tsx': {
    code: '// 示例代码',
    active: true,
  },
  '/index.tsx': {
    code: '// 示例代码',
  },
  '/components/Button.tsx': {
    code: '// 示例代码',
  },
};

function MyEditor() {
  return (
    <SandpackProvider files={files} template="react-ts">
      <div className="h-[500px] w-[240px]">
        <AntdFileTree />
      </div>
    </SandpackProvider>
  );
}
```

## 属性

| 属性名    | 类型                | 默认值 | 说明     |
| --------- | ------------------- | ------ | -------- |
| className | string              | -      | 组件类名 |
| style     | React.CSSProperties | -      | 组件样式 |

## 注意事项

- 需要在 SandpackProvider 内部使用
- 文件路径中的斜杠会被解析为文件夹层级
