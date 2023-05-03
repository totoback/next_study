import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const db = (await connectDB).db("post");
  let result = await db.collection("table").findOne({
    _id: new ObjectId(props.params.id),
  });

  return (
    <div className="p-20">
      <h4>글 수정</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title}></input>
        <input name="content" defaultValue={result.content}></input>
        <input name="_id" defaultValue={result._id.toString()} style={{display:'none'}}/>
        <button type="submit">수정 완료</button>
      </form>
    </div>
  )
}
