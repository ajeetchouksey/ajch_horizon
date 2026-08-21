import type { ReactNode, ElementType, HTMLAttributes } from 'react';
import { isValidElement, Children } from 'react';
import { Sparkles, Wand2, AlertTriangle, HelpCircle } from 'lucide-react';

// Recognized callout labels a content writer can use inside a plain
// markdown blockquote (`> **Fun fact:** ...`) — no new markdown syntax,
// just a label ReactMarkdown's blockquote renderer below detects and
// upgrades into a colorful, icon-led box. Keeps content authoring dead
// simple (any editor, any markdown previewer) while giving the rendered
// page real visual rhythm instead of identical gray blockquotes.
const CALLOUT_STYLES: Record<string, { icon: ElementType; border: string; bg: string; color: string }> = {
  'fun fact': { icon: Sparkles, border: 'rgba(52,211,153,0.35)', bg: 'rgba(52,211,153,0.08)', color: '#34d399' },
  'try it': { icon: Wand2, border: 'rgba(251,191,36,0.35)', bg: 'rgba(251,191,36,0.08)', color: '#fbbf24' },
  'heads up': { icon: AlertTriangle, border: 'rgba(248,113,113,0.35)', bg: 'rgba(248,113,113,0.08)', color: '#f87171' },
  'quick check': { icon: HelpCircle, border: 'rgba(96,165,250,0.35)', bg: 'rgba(96,165,250,0.08)', color: '#60a5fa' },
};

function flattenText(node: ReactNode): string {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(flattenText).join('');
  if (isValidElement(node)) {
    const props = node.props as { children?: ReactNode };
    return flattenText(Children.toArray(props.children));
  }
  return '';
}

// ReactMarkdown `components.blockquote` override.
export function LessonBlockquote({ children, ...rest }: HTMLAttributes<HTMLQuoteElement>) {
  const text = flattenText(children).trim();
  const match = text.match(/^(Fun fact|Try it|Heads up|Quick check)\s*:/i);
  const style = match ? CALLOUT_STYLES[match[1].toLowerCase()] : undefined;

  if (!style) {
    return <blockquote {...rest}>{children}</blockquote>;
  }

  const Icon = style.icon;
  return (
    <div
      className="not-prose my-6 rounded-xl p-4 flex items-start gap-3"
      style={{ background: style.bg, border: `1px solid ${style.border}` }}
    >
      <Icon size={18} style={{ color: style.color }} className="shrink-0 mt-0.5" />
      <div className="text-sm text-slate-300 leading-relaxed [&_p]:m-0 [&_strong]:text-white">
        {children}
      </div>
    </div>
  );
}
