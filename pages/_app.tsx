import type { AppProps } from "next/app";

import "../styles/globals.scss";
import Particles from "../components/Particles";
import { UserProvider } from "../components/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Particles />
      <UserProvider>
        <div id="root">
          <Component {...pageProps} />
        </div>
      </UserProvider>
    </>
  );
}

export default MyApp;
