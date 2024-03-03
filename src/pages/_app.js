import "bootstrap/dist/css/bootstrap.css";
import "../styles/style.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient(); // Create a query client instance

function MyApp({ Component, pageProps }) {
  return (
    
    <QueryClientProvider client={queryClient}> {/* Wrap everything with the provider */}      
      <Component {...pageProps} />
    </QueryClientProvider>

  );
}

export default MyApp;
