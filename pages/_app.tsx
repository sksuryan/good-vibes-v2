import type { AppProps } from "next/app";

import "../styles/globals.scss";
import Particles from "../components/Particles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Particles />
      <div id="root">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
