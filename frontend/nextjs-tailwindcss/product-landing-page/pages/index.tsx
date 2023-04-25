import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import CTASection from '../components/CTASection';
import BlogSection from '../components/BlogSection';
import NewsletterSection from '../components/NewsletterSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <CTASection />
      <BlogSection />
      <NewsletterSection />
    </div>
  );
}
