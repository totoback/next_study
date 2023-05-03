import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  const db = (await connectDB).db("post");
  let result = await db
    .collection("table")
    .findOne({ _id: new ObjectId(props.params.id) })
  return (
    <div>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}
