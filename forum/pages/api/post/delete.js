import { connectDB } from "@/app/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "DELETE") {
    // console.log(req.body);
    const db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(req.body._id) });
    console.log(result);
    if (result.deletedCount === 1) {
      res.status(200).json({ message: "삭제 완료" });
    } else {
      res.status(500).json({ message: "삭제 실패" });
    }
  }
}
