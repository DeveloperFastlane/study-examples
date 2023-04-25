import Head from 'next/head';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function About() {
  return (
    <div>
      <Head>
        <title>About | Developer Career Developments</title>
        <meta name="description" content="About Developer Career Developments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AboutSection />
        <TestimonialsSection />
      </main>
    </div>
  );
}