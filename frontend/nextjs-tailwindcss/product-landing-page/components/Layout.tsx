import React from 'react';
import Head from 'next/head';
import Menu from './Menu';

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | 친환경 에코백` : '친환경 에코백'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Menu />
      <main>
        <div className="container mx-auto px-4 max-w-5xl">{children}</div>
      </main>
    </>
  );
};

export default Layout;
