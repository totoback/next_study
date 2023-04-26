import { connectDB } from "@/app/database";
import { ObjectId } from "mongodb";
import Link from "next/link";

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").findOne({
    _id: new ObjectId(props.params.id),
  });
  // console.log(result);
  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <Link href={"/list"}>
        <button style={{ cursor: "pointer" }}>목록으로</button>
      </Link>
    </div>
  );
}
