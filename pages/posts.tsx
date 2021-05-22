import Head from "next/head";
import Nav from "../components/Nav";
import PostCarousel from "../components/PostCarousel";

const Posts = () => {
  return (
    <>
      <Head>
        <title>💕 Good Vibes | Posts</title>
      </Head>
      <>
        <Nav />
        <PostCarousel />
      </>
    </>
  );
};

export default Posts;
