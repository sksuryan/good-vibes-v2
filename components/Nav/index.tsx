import Image from "next/image";
import styles from "../../styles/Nav.module.scss";
import Twemoji from "../Twemoji";

const Nav = () => (
  <div className={styles.container}>
    <h1>
      <Twemoji emoji="💕" />
      Good Vibes
    </h1>
    <div>
      <a>
        <button>
          <div className="emoji">
            <Image
              src="https://img.icons8.com/bubbles/50/000000/google-logo.png"
              height="50"
              width="50"
            />
          </div>{" "}
          <p>Sign in with Google</p>
        </button>
      </a>
    </div>
  </div>
);

export default Nav;
