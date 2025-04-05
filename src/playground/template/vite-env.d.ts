/// <reference types="vite/client" />

declare module '*.mdx' {
  import type { ComponentProps, ComponentType } from 'react';
  const MDXComponent: ComponentType<ComponentProps<'div'>>;
  export default MDXComponent;
}
