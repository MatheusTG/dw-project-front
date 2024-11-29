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

  return (
    <main style={mainStyle}>
      <Navigation />
      <div>
        <Header />
        {children}
      </div>
    </main>
  );
}
