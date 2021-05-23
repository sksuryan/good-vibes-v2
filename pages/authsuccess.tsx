import { useEffect } from "react";

const Auth = () => {
  useEffect(() => {
    if (window.opener) {
      const params = window.location.hash;
      const urlParams = new URLSearchParams(params);
      const access_token = urlParams.get("access_token");

      fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ access_token }),
      })
        .then((res) => res.json())
        .then((data) => {
          window.opener.location.reload();
          window.close();
        })
        .catch((err) => {
          window.close();
        });
    }
  }, []);

  return <div>Authorization Successful</div>;
};

export default Auth;
