/**
 * 根据文件后缀获取对应的编程语言
 * @param fileName 文件名，例如 "App.tsx"
 * @returns 对应的编程语言名称
 */
export function getLanguageFromFileName(fileName: string): string {
  const extension = fileName.split('.').pop()?.toLowerCase() || '';

  const extensionToLanguage: Record<string, string> = {
    js: 'javascript',
    jsx: 'javascript',

    // TODO 待完善
    ts: 'javascript',
    tsx: 'javascript',

    html: 'html',
    css: 'css',
    scss: 'scss',
    less: 'less',

    mdx: 'markdown',

    // 配置文件
    json: 'json',
  };

  return extensionToLanguage[extension] || 'javascript';
}
