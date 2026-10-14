import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

/**
 * Render del cuerpo de una nota del vault. Sin plugin de tipografía de Tailwind
 * (no está instalado y añadirlo solo para esto es más peso del necesario) — los
 * estilos van a mano, siguiendo los tokens de app/globals.css.
 */
export function MarkdownBody({ content }: { content: string }) {
  return (
    <div className="max-w-none text-base leading-relaxed text-foreground/85">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: (props) => (
            <h1 className="mt-10 text-3xl font-bold text-foreground first:mt-0" {...props} />
          ),
          h2: (props) => (
            <h2 className="mt-9 text-2xl font-semibold text-foreground" {...props} />
          ),
          h3: (props) => (
            <h3 className="mt-7 text-xl font-semibold text-foreground" {...props} />
          ),
          p: (props) => <p className="mt-4 leading-relaxed" {...props} />,
          ul: (props) => <ul className="mt-4 list-disc space-y-1.5 pl-6" {...props} />,
          ol: (props) => <ol className="mt-4 list-decimal space-y-1.5 pl-6" {...props} />,
          li: (props) => <li className="leading-relaxed" {...props} />,
          blockquote: (props) => (
            <blockquote
              className="mt-5 border-l-2 border-primary/50 pl-4 italic text-foreground/70"
              {...props}
            />
          ),
          hr: () => <hr className="my-8 border-border/60" />,
          strong: (props) => <strong className="font-semibold text-foreground" {...props} />,
          code: ({ className, ...props }) =>
            className ? (
              <code
                className="block overflow-x-auto rounded-lg bg-secondary/60 px-4 py-3 font-mono text-sm text-foreground/90"
                {...props}
              />
            ) : (
              <code
                className="rounded bg-secondary/70 px-1.5 py-0.5 font-mono text-[0.85em] text-foreground/90"
                {...props}
              />
            ),
          pre: (props) => <pre className="mt-4" {...props} />,
          a: ({ href = "", ...props }) =>
            href.startsWith("/") ? (
              <Link href={href} className="text-primary underline-offset-4 hover:underline" {...props} />
            ) : (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-primary underline-offset-4 hover:underline"
                {...props}
              />
            ),
          table: (props) => (
            <div className="mt-5 overflow-x-auto rounded-lg border border-border/60">
              <table className="w-full text-left text-sm" {...props} />
            </div>
          ),
          thead: (props) => <thead className="bg-secondary/50" {...props} />,
          th: (props) => (
            <th className="px-3 py-2 font-semibold text-foreground" {...props} />
          ),
          td: (props) => (
            <td className="border-t border-border/50 px-3 py-2 text-foreground/80" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
