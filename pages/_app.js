import React from "react";
import { Toaster } from "react-hot-toast";

import Layout from "../components/Layout";
import "../styles/globals.css";
import { StateContext } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        {/* Toaster pops up notifications on screen */}
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

console.log(Layout);

export default MyApp;
