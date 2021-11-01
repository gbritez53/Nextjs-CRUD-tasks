import { AppLayout } from 'components/AppLayout';
import 'styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
