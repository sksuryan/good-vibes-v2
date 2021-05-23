import Cookie from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const access_token = JSON.parse(req.body)["access_token"];

    const URL = process.env.LOGIN_URL;

    try {
      const headers = new Headers();
      headers.append("access_token", access_token);
      const response = await fetch(URL, {
        method: "POST",
        headers,
      });

      const data = await response.json();

      res.setHeader(
        "Set-Cookie",
        Cookie.serialize("token", data.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          path: "/",
          sameSite: "strict",
          maxAge: 60 * 60,
        })
      );

      res.send({ user: data.user });
    } catch (err) {
      console.log(err);
      res.send({ err });
    }
  } else {
    res.send({ messgae: "error" });
  }
};
