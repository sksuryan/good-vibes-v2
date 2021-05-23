import Head from "next/head";
import Cookie from "cookie";
import { GetServerSideProps } from "next";

import Nav from "../components/Nav";
import PostCarousel from "../components/PostCarousel";

const Posts = ({ props }) => {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req.headers.cookie
    ? Cookie.parse(context.req.headers.cookie).token
    : null;

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  } else {
    const res = await fetch("https://good-vibes-okay.herokuapp.com/posts");
    const data = await res.json();
    return { props: { posts: data?.posts || null } };
  }
};

export default Posts;
