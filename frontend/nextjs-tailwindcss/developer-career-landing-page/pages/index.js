import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import CTASection from '../components/CTASection';
import BlogSection from '../components/BlogSection';
import NewsletterSection from '../components/NewsletterSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Developer Career Developments</title>
        <meta name="description" content="Developer Career Developments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <FeaturesSection />
        <CTASection />
        <BlogSection />
        <NewsletterSection />
      </main>
    </div>
  );
}