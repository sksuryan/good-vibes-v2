import { useEffect } from "react";

const Auth = () => {
  useEffect(() => {
    const params = window.location.search;
    if (window.opener) window.opener.postMessage(params);
    window.close();
  }, []);

  return <div>Authorization Successful</div>;
};

export default Auth;
