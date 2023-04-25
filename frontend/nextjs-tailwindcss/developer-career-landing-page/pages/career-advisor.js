import Head from 'next/head';
import ChatbotSection from '../components/ChatbotSection';

export default function CareerAdvisor() {
  return (
    <div>
      <Head>
        <title>Career Advisor Chatbot - Developer Career Developments</title>
        <meta name="description" content="Get personalized career advice from our Career Advisor Chatbot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ChatbotSection />
      </main>
    </div>
  );
}