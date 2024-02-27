import "bootstrap/dist/css/bootstrap.css";
import "../styles/style.css";
import Script from 'next/script';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient(); // Create a query client instance

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}> {/* Wrap everything with the provider */}
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-E448GXQHG8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-E448GXQHG8');
        `}
      </Script>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
