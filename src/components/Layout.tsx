import { NavLink, useLocation, Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { Zap, Compass, Gamepad2, Hammer, ShieldCheck, Users, Search, ExternalLink, Lock, Code2 } from 'lucide-react';
import { Breadcrumb } from './ui';
import { Badge } from './ui';
import { GoldenRuleRibbon } from './GoldenRuleRibbon';

const NAV = [
  { to: '/discover', label: 'Discover', icon: Compass, end: false },
  { to: '/play', label: 'Play', icon: Gamepad2, end: false },
  { to: '/build', label: 'Build', icon: Hammer, end: false },
  { to: '/stay-safe', label: 'Stay Safe', icon: ShieldCheck, end: false },
  { to: '/grown-ups', label: 'Grown-Ups', icon: Users, end: false },
] as const;

const footerLinks = [
  { href: '/discover', label: 'Discover', external: false },
  { href: '/play', label: 'Play', external: false },
  { href: '/build', label: 'Build', external: false },
  { href: '/stay-safe', label: 'Stay Safe', external: false },
  { href: '/grown-ups', label: 'Grown-Ups', external: false },
  { href: '/legal/privacy', label: 'Privacy Policy', external: false },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors',
    isActive ? 'bg-[var(--aarya-accent)]/15 text-[var(--aarya-accent)]' : 'text-slate-400 hover:text-white hover:bg-white/[0.04]',
  ].join(' ');

const BREADCRUMB_LABELS: Record<string, string> = {
  discover: 'Discover',
  play: 'Play',
  build: 'Build',
  'stay-safe': 'Stay Safe',
  'grown-ups': 'Grown-Ups',
  legal: 'Legal',
  privacy: 'Privacy Policy',
};

// Auto breadcrumbs from the URL — same pattern as ajch_platform's Layout.tsx.
function Breadcrumbs() {
  const location = useLocation();
  const segments = location.pathname.split('/').filter(Boolean);
  if (segments.length === 0) return null;
  const items = segments.map((seg, i) => ({
    label: BREADCRUMB_LABELS[seg] ?? seg,
    to: i < segments.length - 1 ? `/${segments.slice(0, i + 1).join('/')}` : undefined,
  }));
  return <Breadcrumb items={items} />;
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-slate-800/60 sticky top-0 z-40 backdrop-blur-md bg-[#0e1a2d]/80">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <Zap size={18} className="text-[var(--aarya-accent)]" />
            <span className="font-black text-white tracking-tight">
              Spark
              <span className="hidden sm:inline text-slate-500 font-medium"> by AaryaAI</span>
            </span>
          </NavLink>
          <nav className="flex items-center gap-1 overflow-x-auto hide-scrollbar">
            {NAV.map(({ to, label, icon: Icon, end }) => (
              <NavLink key={to} to={to} end={end} className={navLinkClass}>
                <Icon size={14} />
                <span className="hidden md:inline">{label}</span>
              </NavLink>
            ))}
          </nav>
          <button
            type="button"
            title="Search (coming soon)"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-slate-500 border border-slate-700/50 hover:text-slate-300 hover:border-slate-600 transition-colors shrink-0"
          >
            <Search size={13} />
            Search
            <kbd className="text-[10px] px-1 py-0.5 rounded border border-slate-700 text-slate-500">⌘K</kbd>
          </button>
        </div>
        <div className="max-w-5xl mx-auto px-4">
          <Breadcrumbs />
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
          <GoldenRuleRibbon />

          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav className="flex flex-wrap items-center gap-x-1 gap-y-1">
              {footerLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  to={href}
                  className="px-2 py-1.5 text-xs text-slate-400 hover:text-[var(--aarya-accent)] transition-colors"
                >
                  {label}
                </Link>
              ))}
              <a
                href="https://aaryaai.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1.5 text-xs text-slate-400 hover:text-[var(--aarya-accent)] transition-colors"
              >
                Aarya — My AI Learning Hub <ExternalLink size={10} />
              </a>
              <a
                href="https://compass.aaryaai.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1.5 text-xs text-slate-400 hover:text-[var(--aarya-accent)] transition-colors"
              >
                Compass (for professionals) <ExternalLink size={10} />
              </a>
              <a
                href="https://github.com/ajeetchouksey/ajch_spark"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1.5 text-xs text-slate-400 hover:text-[var(--aarya-accent)] transition-colors"
              >
                GitHub <ExternalLink size={10} />
              </a>
            </nav>

            <p className="text-xs text-slate-500">
              A safe learning space by <span className="text-slate-300">AaryaAI</span> · Privacy-first · Kid-friendly
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/60">
            <div className="flex flex-wrap items-center gap-2">
              <Badge icon={ShieldCheck} label="Safe by design" variant="amber" />
              <Badge icon={Lock} label="No data collection from kids" variant="emerald" />
              <Badge icon={Code2} label="Built by AaryaAI" variant="slate" />
            </div>
            <span className="text-xs text-slate-500">© Spark by AaryaAI</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
