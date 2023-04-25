import Layout from '../components/Layout';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout title="홈">
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;