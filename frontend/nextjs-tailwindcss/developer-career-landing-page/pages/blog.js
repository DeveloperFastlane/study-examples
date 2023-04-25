import Head from 'next/head';
import BlogSection from '../components/BlogSection';

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog | Developer Career Developments</title>
        <meta name="description" content="Blog for Developer Career Developments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BlogSection />
      </main>
    </div>
  );
}