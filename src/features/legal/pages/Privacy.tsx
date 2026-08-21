import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FileText } from 'lucide-react';
import policyMarkdown from '@/content/spark-privacy-policy.md?raw';

// Renders the already-drafted Spark-Privacy-Policy.md verbatim. The
// Impressum is intentionally not built here — the source document's own
// Open Items list the contact email and data-controller address as
// unresolved, so the "[insert contact email]" placeholders are left as-is
// rather than fabricated.
export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="flex items-center gap-2 mb-8">
        <FileText size={20} className="text-[var(--aarya-accent)]" />
        <h1 className="text-xl font-bold text-white">Privacy Policy</h1>
      </div>
      <article className="prose prose-invert prose-sm sm:prose-base max-w-none prose-headings:font-black prose-a:text-[var(--aarya-accent)]">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{policyMarkdown}</ReactMarkdown>
      </article>
    </div>
  );
}
