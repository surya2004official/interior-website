import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { useSaved } from '../../context/SavedContext';

const primaryLinks = [
  ['/', 'Home'], ['/projects', 'Portfolio'], ['/services', 'Services'], ['/about', 'About'],
];
const menuGroups = [
  { title: 'Explore', links: [...primaryLinks, ['/process', 'Our process'], ['/packages', 'Packages'], ['/gallery', 'Gallery'], ['/testimonials', 'Client stories'], ['/blog', 'Journal'], ['/contact', 'Contact']] },
  { title: 'Design tools', links: [['/ai-designer', 'AI designer'], ['/style-finder', 'Style finder'], ['/calculator', 'Cost calculator'], ['/virtual-studio', 'Virtual studio'], ['/moodboard', 'Mood board'], ['/floor-plan', 'Floor plan'], ['/color-palette', 'Color palette']] },
];

export const Navbar = ({ onOpenSavedDrawer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);
  const { pathname } = useLocation();
  const { totalSavedCount } = useSaved();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const handleOutside = (event) => {
      if (!headerRef.current?.contains(event.target)) setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    document.addEventListener('pointerdown', handleOutside);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('pointerdown', handleOutside);
    };
  }, [menuOpen]);

  const darkHero = pathname === '/' && !isScrolled && !menuOpen;
  const linkClass = (path) => `transition-colors hover:text-gold ${pathname === path || (path !== '/' && pathname.startsWith(`${path}/`)) ? 'text-gold' : ''}`;

  return (
    <header ref={headerRef} className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${darkHero ? 'bg-charcoal-950/30 text-ivory backdrop-blur-sm' : 'border-b border-stone-200 bg-ivory/95 text-charcoal backdrop-blur-md'}`}>
      <div className="flex h-16 w-full items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/" onClick={() => setMenuOpen(false)} aria-label="Aurelia and Stone home" className="shrink-0 whitespace-nowrap font-serif text-lg tracking-[0.04em] sm:text-2xl">
          Aurelia <span className="text-gold">&amp;</span> Stone
        </Link>
        <div className="flex items-center gap-1 sm:gap-5 lg:gap-8">
          <nav aria-label="Main navigation" className="hidden items-center gap-4 text-sm md:flex lg:gap-7">
            {primaryLinks.map(([path, label]) => <Link key={path} to={path} className={linkClass(path)} aria-current={pathname === path ? 'page' : undefined}>{label}</Link>)}
          </nav>
          <Link to="/consultation" className="hidden border border-current/30 px-4 py-2 text-xs transition-colors hover:border-gold hover:text-gold sm:inline-flex">Book a consultation</Link>
          <button onClick={() => { setMenuOpen(false); onOpenSavedDrawer(); }} className="relative flex h-11 w-11 items-center justify-center hover:text-gold" aria-label={`Saved inspirations${totalSavedCount ? ` (${totalSavedCount})` : ''}`}>
            <Heart className="h-[18px] w-[18px]" />
            {totalSavedCount > 0 && <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] text-charcoal">{totalSavedCount}</span>}
          </button>
          <button ref={menuButtonRef} onClick={() => setMenuOpen(open => !open)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="site-menu" className="flex h-11 w-11 items-center justify-center hover:text-gold">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="site-menu" aria-label="All pages" onBlur={event => { if (event.relatedTarget && !headerRef.current?.contains(event.relatedTarget)) setMenuOpen(false); }} className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-stone-200 bg-ivory p-6 text-charcoal shadow-lg sm:left-auto sm:w-[480px]">
          <div className="grid grid-cols-2 gap-6">
            {menuGroups.map(group => (
              <div key={group.title}>
                <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-stone-500">{group.title}</p>
                <div className="flex flex-col items-start gap-1">
                  {group.links.map(([path, label]) => <Link key={path} to={path} onClick={() => setMenuOpen(false)} className={`py-2 text-sm ${linkClass(path)}`} aria-current={pathname === path ? 'page' : undefined}>{label}</Link>)}
                </div>
              </div>
            ))}
          </div>
          <Link to="/consultation" onClick={() => setMenuOpen(false)} className="mt-6 block border-t border-stone-200 pt-5 text-sm text-walnut">Book a consultation &rarr;</Link>
        </nav>
      )}
    </header>
  );
};
