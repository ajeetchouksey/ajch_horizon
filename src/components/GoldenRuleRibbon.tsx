// The Golden Rule — must appear in the hero AND the footer, everywhere,
// per the Spark master plan. Fixed copy, not a prop: this line is not
// meant to vary by call site.
export function GoldenRuleRibbon({ className = '' }: { className?: string }) {
  return (
    <div
      className={`rounded-xl px-5 py-3.5 flex items-center gap-3 ${className}`}
      style={{
        background: 'rgba(8,15,30,0.75)',
        border: '1px solid rgba(251,191,36,0.22)',
      }}
    >
      <span
        className="shrink-0 text-sm font-semibold"
        style={{ color: 'var(--aarya-accent)', fontFamily: 'var(--font-mono-accent)' }}
      >
        $ &gt;
      </span>
      <p className="text-sm text-slate-300 leading-snug">
        <span className="font-semibold text-white">AI is a helper, not the boss.</span>{' '}
        You are the thinker — always check, always question.
      </p>
    </div>
  );
}
