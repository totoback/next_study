import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(req, res) {
  if (req.method == "POST") {
    let session = await getServerSession(req, res, authOptions);
    const db = (await connectDB).db("forum");
    let userInfo = await db.collection('post').findOne({ _id : new ObjectId(req.body._id) })
    if (userInfo.author === session.user.email) {
      let result = await db.collection('post').deleteOne({ _id : new ObjectId(req.body._id) })
      return res.status(200).json('삭제완료')
    } else {
      return res.status(500).json('현재유저와 작성자 불일치')
    }
  }
}
