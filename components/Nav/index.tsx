import styles from "../../styles/Nav.module.scss";
import Twemoji from "../Twemoji";

const Nav = () => (
  <div className={styles.container}>
    <h1>
      <Twemoji emoji="💕" />
      Good Vibes
    </h1>
    <div>
      <a href="#">
        <button>
          <Twemoji emoji="👋" />
          login
        </button>
      </a>
      <a href="#">
        <button>
          <Twemoji emoji="❤" />
          register
        </button>
      </a>
    </div>
  </div>
);

export default Nav;
