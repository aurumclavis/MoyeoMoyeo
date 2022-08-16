import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "antd/dist/antd.css";
import ApolloSetting from "../src/components/commons/apollo";
import { RecoilRoot } from "recoil";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <meta property="og:title" content="여기 모여? 모여!" />
        <meta
          property="og:description"
          content="안녕하세요 함께 모여 만드는 모여모여입니다!"
        />
      </Head>
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
