import Cookie from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const code = req.query.code;

  res.setHeader(
    "Set-Cookie",
    Cookie.serialize("token", "tutu", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      path: "/",
      sameSite: "strict",
      maxAge: 60 * 60,
    })
  );

  res.redirect("/authsuccess?status=true&newUser=false");
};
