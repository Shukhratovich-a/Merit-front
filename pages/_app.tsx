import React from "react";
import Head from "next/head";

import { AppProps } from "next/app";

import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>MyTop - наш лучший топ</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
