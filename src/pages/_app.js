import "bootstrap/dist/css/bootstrap.css";
import "../styles/style.css";
import "../styles/magazines.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient(); // Create a query client instance

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      {" "}
      {/* Wrap everything with the provider */}
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
