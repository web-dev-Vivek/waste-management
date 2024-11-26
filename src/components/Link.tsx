import { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function Link({ href, children, className = '' }: LinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // In a real app, implement proper routing
    console.log(`Navigating to: ${href}`);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}