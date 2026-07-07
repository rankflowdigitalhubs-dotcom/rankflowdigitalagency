import { useEffect, useState } from 'react';

// Hash-based router — works on GitHub Pages without server config.
export function useRoute() {
  const get = () => {
    const h = window.location.hash.replace(/^#/, '');
    return h === '' ? '/' : h;
  };
  const [path, setPath] = useState(get);

  useEffect(() => {
    const onChange = () => {
      setPath(get());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return path;
}

export function navigate(path: string) {
  if (path.startsWith('http')) {
    window.open(path, '_blank', 'noopener');
    return;
  }
  window.location.hash = path;
}

// Link component that uses hash routing.
export function Link({
  to,
  children,
  className,
  onClick,
  ...rest
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick'>) {
  const handle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) onClick();
    navigate(to);
  };
  return (
    <a href={`#${to}`} className={className} onClick={handle} {...rest}>
      {children}
    </a>
  );
}

// Scroll to top helper for in-page anchors.
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Scroll reveal is handled in App.tsx on route change for reliability.
