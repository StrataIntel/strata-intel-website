import type { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type OrderedListProps = ComponentPropsWithoutRef<"ol">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
type HrProps = ComponentPropsWithoutRef<"hr">;
type StrongProps = ComponentPropsWithoutRef<"strong">;

const defaultComponents = {
  h1: ({ className = "", ...props }: HeadingProps) => (
    <h1
      className={`text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 ${className}`.trim()}
      {...props}
    />
  ),
  h2: ({ className = "", ...props }: HeadingProps) => (
    <h2
      className={`mt-16 text-2xl md:text-3xl font-bold tracking-tight text-zinc-100 ${className}`.trim()}
      {...props}
    />
  ),
  h3: ({ className = "", ...props }: HeadingProps) => (
    <h3
      className={`mt-12 text-xl md:text-2xl font-semibold tracking-tight text-zinc-100 ${className}`.trim()}
      {...props}
    />
  ),
  p: ({ className = "", ...props }: ParagraphProps) => (
    <p
      className={`mt-6 text-base leading-8 text-zinc-300 ${className}`.trim()}
      {...props}
    />
  ),
  ul: ({ className = "", ...props }: ListProps) => (
    <ul
      className={`mt-6 space-y-3 text-zinc-300 ${className}`.trim()}
      {...props}
    />
  ),
  ol: ({ className = "", ...props }: OrderedListProps) => (
    <ol
      className={`mt-6 space-y-3 text-zinc-300 list-decimal pl-6 ${className}`.trim()}
      {...props}
    />
  ),
  li: ({ className = "", ...props }: ListItemProps) => (
    <li className={`pl-1 leading-7 ${className}`.trim()} {...props} />
  ),
  a: ({ className = "", ...props }: AnchorProps) => (
    <a
      className={`font-medium text-amber-400 underline decoration-amber-400/40 underline-offset-4 transition-colors duration-200 hover:text-amber-300 ${className}`.trim()}
      {...props}
    />
  ),
  strong: ({ className = "", ...props }: StrongProps) => (
    <strong className={`font-semibold text-zinc-100 ${className}`.trim()} {...props} />
  ),
  blockquote: ({ className = "", ...props }: BlockquoteProps) => (
    <blockquote
      className={`mt-8 border-l-2 border-amber-400/60 pl-6 text-lg leading-8 text-zinc-200 ${className}`.trim()}
      {...props}
    />
  ),
  hr: ({ className = "", ...props }: HrProps) => (
    <hr className={`mt-12 border-zinc-800 ${className}`.trim()} {...props} />
  ),
} satisfies MDXComponents;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
  };
}