import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppBar from "../utils/AppBar";
import TabBar from "../utils/TabBar";
import styled from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppBar></AppBar>
      <TabBar></TabBar>
      <Wrap>
        <Component {...pageProps} />
      </Wrap>
    </>
  );
}

export default MyApp;

const Wrap = styled.div`
  min-height: calc(100vh - 108px);
`;
