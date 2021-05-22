import styles from "../../styles/ProfilePage.module.scss";
import Twemoji from "../Twemoji";

const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <label>
            <Twemoji emoji="👑" />
            Username:
          </label>
          <input type="text" value="@rvers" disabled />
        </div>
        <div>
          <label>
            <Twemoji emoji="✉" />
            E-Mail:
          </label>
          <input type="text" value="sk.suryan03@gmail.com" disabled />
        </div>
        <div>
          <label>
            <Twemoji emoji="💖" />
            About:
          </label>
          <textarea maxLength={140} />
        </div>
        <div className={styles.buttonContainer}>
          <button>
            <Twemoji emoji="💾" />
            Save
          </button>
          <button>
            <Twemoji emoji="❌" />
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
