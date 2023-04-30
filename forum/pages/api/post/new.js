import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler2(req, res) {
  if (req.method == "POST") {
    let session = await getServerSession(req, res, authOptions);
    //DB 이메일 꺼내오기
    if (session) {
      req.body.author = session.user.email;
    }
    if (req.body.title == "") {
      return res.status(500).json("너 왜 제목 왜 안씀");
    }
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").insertOne(req.body);
    return res.redirect(302, "/list");
  }
}
