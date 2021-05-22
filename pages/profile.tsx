import Head from "next/head";
import Nav from "../components/Nav";
import ProfilePage from "../components/Profile";

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

export default Profile;
