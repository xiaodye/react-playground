import Editor, { OnMount } from '@monaco-editor/react';
import { useActiveCode, SandpackStack, FileTabs, useSandpack } from '@codesandbox/sandpack-react';
import { CSSProperties } from 'react';
import { getLanguageFromFileName } from '@/utils/utils';

type Props = {
  className?: string;
  styles?: CSSProperties;
};

export default function SandEditor({ styles, className }: Props) {
  const { code, updateCode } = useActiveCode();
  const { sandpack } = useSandpack();

  // console.log('sandpack', sandpack);

  const handleEditorMount: OnMount = (editor, monaco) => {
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyJ, () => {
      editor.getAction('editor.action.formatDocument')?.run();
      // let actions = editor.getSupportedActions().map((a) => a.id);
      // console.log(actions);
    });

    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.Preserve,
      esModuleInterop: true,
    });
  };

  return (
    <SandpackStack className={className} style={styles}>
      <FileTabs closableTabs style={{ border: 0 }} />
      <Editor
        width="100%"
        height="100%"
        language={getLanguageFromFileName(sandpack.activeFile)}
        theme="vs-light"
        key={sandpack.activeFile}
        path={sandpack.activeFile}
        value={code}
        onChange={(value) => updateCode(value || '')}
        onMount={handleEditorMount}
        options={{
          fontSize: 14,
          scrollBeyondLastLine: false,
          minimap: {
            enabled: false,
          },
          scrollbar: {
            verticalScrollbarSize: 6,
            horizontalScrollbarSize: 6,
          },
        }}
      />
    </SandpackStack>
  );
}
