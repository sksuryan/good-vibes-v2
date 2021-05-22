import Head from "next/head";
import Contribution from "../components/Contributions";
import Nav from "../components/Nav";

const Contribute = () => {
  return (
    <>
      <Head>
        <title>💕 Good Vibes | Contribute</title>
      </Head>
      <>
        <Nav />
        <Contribution />
      </>
    </>
  );
};

export default Contribute;
