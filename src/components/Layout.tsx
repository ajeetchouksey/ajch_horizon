import { NavLink, useLocation, Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { Zap, Sparkles, ExternalLink } from 'lucide-react';
import { Breadcrumb } from './ui';

const NAV = [
  { to: '/kids', label: 'For Kids', icon: Sparkles, end: false },
] as const;

const footerLinks = [
  { href: '/', label: 'Home', external: false },
  { href: '/kids', label: 'For Kids', external: false },
  { href: 'https://aaryaai.dev', label: 'Aarya — My AI Learning Hub', external: true },
  { href: 'https://compass.aaryaai.dev', label: 'Compass (for professionals)', external: true },
  { href: 'https://github.com/ajeetchouksey/ajch_spark', label: 'GitHub', external: true },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors',
    isActive ? 'bg-[var(--aarya-accent)]/15 text-[var(--aarya-accent)]' : 'text-slate-400 hover:text-white hover:bg-white/[0.04]',
  ].join(' ');

// Auto breadcrumbs from the URL — same pattern as ajch_platform's Layout.tsx.
function Breadcrumbs() {
  const location = useLocation();
  const segments = location.pathname.split('/').filter(Boolean);
  if (segments.length === 0) return null;
  if (segments[0] === 'kids') {
    return <Breadcrumb items={[{ label: 'For Kids' }]} />;
  }
  return null;
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-slate-800/60 sticky top-0 z-40 backdrop-blur-md bg-[#0e1a2d]/80">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            <Zap size={18} className="text-[var(--aarya-accent)]" />
            <span className="font-black text-white tracking-tight">Spark</span>
          </NavLink>
          <nav className="flex items-center gap-1">
            {NAV.map(({ to, label, icon: Icon, end }) => (
              <NavLink key={to} to={to} end={end} className={navLinkClass}>
                <Icon size={14} />
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="max-w-4xl mx-auto px-4">
          <Breadcrumbs />
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-slate-800/60">
        <div className="max-w-4xl mx-auto px-4 py-6 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-500">Part of the Aarya family</span>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {footerLinks.map(({ href, label, external }) =>
              external ? (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-[var(--aarya-accent)] transition-colors"
                >
                  {label} <ExternalLink size={10} />
                </a>
              ) : (
                <Link
                  key={href}
                  to={href}
                  className="text-xs text-slate-500 hover:text-[var(--aarya-accent)] transition-colors"
                >
                  {label}
                </Link>
              ),
            )}
          </nav>
        </div>
      </footer>
    </div>
  );
}
