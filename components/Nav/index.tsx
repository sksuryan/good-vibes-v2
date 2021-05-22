import Image from "next/image";
import styles from "../../styles/Nav.module.scss";
import Twemoji from "../Twemoji";

const Nav = () => {
  return (
    <div className={styles.container}>
      <h1>
        <Twemoji emoji="💕" />
        Good Vibes
      </h1>
      <div>
        <button>
          <Twemoji emoji="❤" /> <p>Contribute</p>
        </button>
        <button>
          <Twemoji emoji="⚙" /> <p>Settings</p>
        </button>
      </div>
    </div>
  );
};

export default Nav;
