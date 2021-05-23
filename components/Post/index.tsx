import Image from "next/image";
import styles from "../../styles/Post.module.scss";

const Post = ({ url, text }) => {
  return (
    <div className={styles.container}>
      <div>
        {url && (
          <div className={styles.image}>
            <img src={url}></img>
          </div>
        )}
        <p>{text}</p>
        <p>a kinderd soul</p>
      </div>
    </div>
  );
};

export default Post;
