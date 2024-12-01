import Header from '@/components/header/header';
import Navigation from '@/components/navigation/navigation';
import { CSSProperties } from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mainStyle: CSSProperties = {
    marginLeft: '6rem',
  };

  const childrenStyle: CSSProperties = {
    maxHeight: '100dvh',
    height: '100dvh',
    display: 'grid',
    gridTemplateRows: '3.75rem calc(100% - 3.75rem)',
  };

  return (
    <main style={mainStyle}>
      <Navigation />
      <div style={childrenStyle}>
        <Header />
        {children}
      </div>
    </main>
  );
}
