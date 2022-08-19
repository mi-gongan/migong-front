import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppBar from "../layouts/AppBar";
import TabBar from "../layouts/TabBar";
import styled from "styled-components";
import { Provider } from "react-redux";
import { store } from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppBar></AppBar>
      <TabBar></TabBar>
      <Wrap>
        <Component {...pageProps} />
      </Wrap>
    </Provider>
  );
}

export default MyApp;

const Wrap = styled.div`
  min-height: calc(100vh - 108px);
`;
