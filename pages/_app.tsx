import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "antd/dist/antd.css";
import ApolloSetting from "../src/components/commons/apollo";
import { RecoilRoot } from "recoil";
import Head from "next/head";
<Head>
  <meta property="og:title" content="내사이트" />
  <meta property="og:description" content="환영합니다." />
</Head>;
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
