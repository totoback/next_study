import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if(req.method == "POST"){
    if(req.body.title == ''){
      return res.status(500).json('제목 써라')
    }
    const db = (await connectDB).db("post");
    let result = await db.collection("table").insertOne(req.body);
    return res.redirect(302, "/list");
  }
}
