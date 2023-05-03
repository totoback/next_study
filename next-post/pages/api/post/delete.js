import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  //삭제
  if (req.method == "POST") {
    const db = (await connectDB).db("post");
    let result = await db
      .collection("table")
      .deleteOne({ _id: new ObjectId(req.body._id) });
      return res.status(200).json("삭제 완료")
  }else{
    return res.status(500).json("삭제 실패")
  }
}
