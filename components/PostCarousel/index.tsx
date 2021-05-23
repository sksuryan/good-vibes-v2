import { useRef } from "react";
import styles from "../../styles/PostCarousel.module.scss";
import Post from "../Post";

const PostCarousel = () => {
  const containerRef = useRef(null);

  const scroll = (dir) => {
    const carousel = containerRef.current;
    const width = carousel.clientWidth * 0.6;

    const left = carousel.scrollLeft;
    carousel.scrollLeft = dir ? left + width : left - width;
  };

  const message = (
    <>
      A message from the developer:
      <br />
      <br /> We hope that we made you smile. Life could be hard and
      overwhelming, and if you're going though something just know you can get
      through this. Take it day by day & step by step. This may also be the time
      to react out to your friends and talk about how you feel. Please seek
      medical advice if necessary.
      <br />
      <br />
      Consider contributing towards the platform, your one post can have an
      impact on someone's whole day.
      <br />
      <br />
      PS: More good vibes coming tomorrow by some really kindered spirits like
      you. Sending love and positivity towards you. Take care!
      <br />
      <br /> ~ Team Good Vibes💕
    </>
  );

  return (
    <div className={styles.contain}>
      <div className={styles.container} ref={containerRef}>
        <Post
          url="https://pbs.twimg.com/media/DuPqffuXgAkFAd8?format=jpg&name=large"
          text="Coz you're the best💖"
        />
        <Post url="https://i.imgflip.com/2ybaqz.jpg" text="just trust me✨" />
        <Post
          url="https://i.pinimg.com/originals/2a/4f/e4/2a4fe4979b84a7009320a775a8a4c7a2.jpg"
          text="I'll be there for you, coz you were there for me too🥺"
        />
        <Post url={null} text={message} />
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
