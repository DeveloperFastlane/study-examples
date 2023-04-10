import Head from 'next/head';
import TabBar from '../components/TabBar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instagram Clone</title>
        <meta name="description" content="Simple Instagram Clone using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Your main content goes here */}
      </main>

      <TabBar />
    </div>
  );
}