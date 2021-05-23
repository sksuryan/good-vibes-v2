import { GetServerSideProps } from "next";
import Head from "next/head";
import Nav from "../components/Nav";
import ProfilePage from "../components/Profile";
import Cookie from "cookie";

const Profile = () => {
  return (
    <>
      <Head>
        <title>💕 Good Vibes | Profile</title>
      </Head>
      <>
        <Nav />
        <ProfilePage />
      </>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req.headers.cookie
    ? Cookie.parse(context.req.headers.cookie).token
    : null;

  return {
    redirect: {
      destination: "/posts",
      permanent: true,
    },
  };
};

export default Profile;
