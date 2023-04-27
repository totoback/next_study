import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(req.body._id) });
    if (result.deletedCount === 1) {
      res.status(200).json({ message: "삭제 완료" });
    } else {
      res.status(500).json({ message: "삭제 실패" });
    }
  }
}
