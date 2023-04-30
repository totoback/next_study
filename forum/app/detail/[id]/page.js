import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Link from "next/link";
import Comment from "./Comment";
import NotFound from "@/app/not-found";

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
    if (result === null) {
    //404페이지
    return NotFound();
  }
  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <Comment _id={result._id.toString()} />
      {/* <Link href={"/list"}>
        <button style={{ cursor: "pointer" }}>목록으로</button>
      </Link> */}
    </div>
  );
}
