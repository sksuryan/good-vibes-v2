import Link from "next/link";

import styles from "../../styles/Nav.module.scss";
import Twemoji from "../Twemoji";

const Nav = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <h1>
          <Twemoji emoji="💕" />
          Good Vibes
        </h1>
      </Link>
      <div>
        <Link href="/contribute">
          <button>
            <Twemoji emoji="❤" /> <p>Contribute</p>
          </button>
        </Link>
        <Link href="/profile">
          <button>
            <Twemoji emoji="😇" /> <p>Profile</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
