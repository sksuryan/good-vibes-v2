import Head from "next/head";
import Cookie from "cookie";
import { GetServerSideProps } from "next";

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
  }
  return { props: {} };
};

export default Posts;
