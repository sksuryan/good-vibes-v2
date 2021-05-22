import Head from "next/head";
import Image from "next/image";
import Twemoji from "../components/Twemoji";

import styles from "../styles/Home.module.scss";

const App = () => (
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
        <a>
          <button>
            <div className="emoji">
              <Image
                src="https://img.icons8.com/bubbles/50/000000/google-logo.png"
                height="50"
                width="50"
              />
            </div>{" "}
            Continue with Google
          </button>
        </a>
      </div>
    </div>
  </>
);

export default App;
