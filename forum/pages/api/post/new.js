import { connectDB } from "@/util/database";


export default async function handler2(req, res) {
  if (req.method == "POST") {
    if (req.body.title == "") {
      return res.status(500).json("너 왜 제목 왜 안씀");
    }
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").insertOne(req.body);
    return res.redirect(302, "/list");
  }
}
