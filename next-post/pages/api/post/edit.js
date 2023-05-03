import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  console.log(req.body);
  if (req.method == "POST") {
    const change = { title: req.body.title, content: req.body.content };
    const db = (await connectDB).db("post");
    let result = await db
      .collection("table")
      .updateOne({ _id: new ObjectId(req.body._id) }, { $set: change });
    return res.redirect(302, "/list");
  }
}
