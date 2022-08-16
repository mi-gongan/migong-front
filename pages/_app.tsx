import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppBar from "../utils/AppBar";
import TabBar from "../utils/TabBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppBar></AppBar>
      <TabBar></TabBar>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
