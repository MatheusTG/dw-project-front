import Navigation from '@/components/navigation/navigation';
import { CSSProperties } from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const style: CSSProperties = {
    marginLeft: '6rem',
  };

  return (
    <main style={style}>
      <Navigation />
      {children}
    </main>
  );
}
