import Cookie from "cookie";
import { GetServerSideProps } from "next";
import { NextRouter, useRouter } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";
import Twemoji from "../components/Twemoji";
import { useUserDetails } from "../components/UserContext";

import styles from "../styles/Home.module.scss";

const onClick = (router: NextRouter) => {
  const options =
    "toolbar=no, menubar=no, width=600, height=700, top=100, left=100";

  const redirectURL: String = `${window.location.origin}${process.env.NEXT_PUBLIC_REDIRECT_ENDPOINT}`;
  const clientID: String = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  const OAUTH_URL = `${
    process.env.NEXT_PUBLIC_OAUTH_URL + redirectURL
  }&client_id=${clientID}`;

  window.open(OAUTH_URL, "Continue with Google", options);

  const logData = (e) => {
    const urlParams = new URLSearchParams(e.data);
    const code = urlParams.get("status");

    if (Boolean(code)) {
      router.push("/posts");
    }

    window.removeEventListener("message", logData);
  };

  window.addEventListener("message", logData);
};

const App = () => {
  const router = useRouter();
  const user = useUserDetails();

  return (
    <>
      <Head>
        <title>💕 Good Vibes | Home</title>
      </Head>
      <div className={styles.container}>
        <h1>
          <Twemoji emoji="💕" />
          Good Vibes
          <Twemoji emoji="💕" />
        </h1>
        <p>Spreading positivity 10 posts at a time</p>
        <div className={styles.buttonContainer}>
          {user ? (
            <button onClick={() => onClick(router)}>
              <Twemoji emoji={"✨"} />
              Continue
            </button>
          ) : (
            <button onClick={() => onClick(router)}>
              <div className="emoji">
                <Image
                  src="https://img.icons8.com/bubbles/50/000000/google-logo.png"
                  height="50"
                  width="50"
                />
              </div>{" "}
              Continue with Google
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req.headers.cookie
    ? Cookie.parse(context.req.headers.cookie).token
    : null;

  if (token) {
    return {
      redirect: {
        destination: "/posts",
        permanent: true,
      },
    };
  }

  return {
    props: {
      user: true,
    },
  };
};

export default App;
