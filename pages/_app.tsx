import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components";
import { AppProvider } from "../contexts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
