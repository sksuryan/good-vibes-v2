import Head from "next/head";
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
            <Twemoji emoji="👋" /> login
          </button>
        </a>
        <a>
          <button>
            <Twemoji emoji="❤" /> register
          </button>
        </a>
      </div>
    </div>
  </>
);

export default App;
