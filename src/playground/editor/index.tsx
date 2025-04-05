import Editor, { OnMount } from '@monaco-editor/react';
import { useActiveCode, SandpackStack, FileTabs, useSandpack } from '@codesandbox/sandpack-react';
import { CSSProperties, useEffect, useRef } from 'react';
import { getLanguageFromFileName } from '@/utils/utils';
import { createATA } from './ata';

type Props = {
  className?: string;
  styles?: CSSProperties;
};

export default function SandEditor({ styles, className }: Props) {
  const { code, updateCode } = useActiveCode();
  const { sandpack } = useSandpack();

  const ataRef = useRef<any>(null);

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

    ataRef.current = createATA((code, path) => {
      monaco.languages.typescript.typescriptDefaults.addExtraLib(code, `file://${path}`);
    });

    // editor.onDidChangeModelContent(() => {
    //   ataRef.current(editor.getValue());
    // });

    // ataRef.current(editor.getValue());
  };

  useEffect(() => {
    if (sandpack.activeFile !== '/package.json') {
      return;
    }

    // console.log('code', code);

    ataRef.current(code);
  }, [sandpack.activeFile, code]);

  return (
    <SandpackStack className={className} style={styles}>
      <FileTabs />
      <Editor
        width="100%"
        height="100%"
        language={getLanguageFromFileName(sandpack.activeFile)}
        theme="vs-light"
        key={sandpack.activeFile}
        path={sandpack.activeFile.split('/').pop()}
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
