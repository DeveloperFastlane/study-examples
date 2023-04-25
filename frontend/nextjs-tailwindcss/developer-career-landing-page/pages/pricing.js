import Head from 'next/head';
import PricingSection from '../components/PricingSection';

export default function Pricing() {
  return (
    <div>
      <Head>
        <title>Pricing | Developer Career Developments</title>
        <meta name="description" content="Pricing for Developer Career Developments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PricingSection />
      </main>
    </div>
  );
}