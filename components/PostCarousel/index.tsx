import { useRef } from "react";
import styles from "../../styles/PostCarousel.module.scss";
import Post from "../Post";
import Twemoji from "../Twemoji";

const PostCarousel = () => {
  const containerRef = useRef(null);

  const scroll = (dir) => {
    const carousel = containerRef.current;
    const width = carousel.clientWidth * 0.6;

    const left = carousel.scrollLeft;
    carousel.scrollLeft = dir ? left + width : left - width;
  };

  return (
    <div className={styles.contain}>
      <div className={styles.container} ref={containerRef}>
        <Post />
        <Post />
        <Post />
      </div>
      <button onClick={(e) => scroll(0)}>
        <i className="arrow left"></i>
      </button>
      <button onClick={(e) => scroll(1)}>
        <i className="arrow right"></i>
      </button>
    </div>
  );
};

export default PostCarousel;
