import styles from "../../styles/PostCarousel.module.scss";
import Post from "../Post";

const PostCarousel = () => (
  <div className={styles.container}>
    <Post />
    <Post />
    <Post />
  </div>
);

export default PostCarousel;
