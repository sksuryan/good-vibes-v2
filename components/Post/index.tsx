import Image from "next/image";
import styles from "../../styles/Post.module.scss";

const Post = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.image}>
          <Image
            src="https://i.imgflip.com/2ybaqz.jpg"
            width="800"
            height="800"
          />
        </div>
        <p>
          Life maybe hard, but we can get through this. It's okay if it's not
          okay.
        </p>
        <p>@rvers</p>
      </div>
    </div>
  );
};

export default Post;
