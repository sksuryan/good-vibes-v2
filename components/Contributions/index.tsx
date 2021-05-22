import styles from "../../styles/ProfilePage.module.scss";
import Twemoji from "../Twemoji";

const Contribution = () => {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <label>
            <Twemoji emoji="🔗" />
            Image URL:
          </label>
          <input type="text" placeholder="Image URL" />
        </div>
        <div>
          <label>
            <Twemoji emoji="💖" />
            Your message:
          </label>
          <textarea maxLength={140} />
        </div>
        <div className={styles.buttonContainer}>
          <button>
            <Twemoji emoji="💞" />
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contribution;
