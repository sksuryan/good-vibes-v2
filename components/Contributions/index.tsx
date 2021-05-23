import { useState } from "react";
import styles from "../../styles/ProfilePage.module.scss";
import Twemoji from "../Twemoji";

const Contribution = () => {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  const upload = async (e) => {
    e.preventDefault();

    await fetch("https://good-vibes-okay.herokuapp.com/upload", {
      method: "POST",
      body: JSON.stringify({
        name: "a kindered soul",
        text: message,
        image: url,
      }),
    });

    setUrl("");
    setMessage("");
  };
  return (
    <div className={styles.container}>
      <form onSubmit={upload}>
        <div>
          <label>
            <Twemoji emoji="🔗" />
            Image URL:
          </label>
          <input
            type="text"
            placeholder="Image URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div>
          <label>
            <Twemoji emoji="💖" />
            Your message:
          </label>
          <textarea
            maxLength={140}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button>
            <Twemoji emoji="💞" />
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contribution;
