import { connectDB } from "@/app/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").findOne({
    _id: new ObjectId(props.params.id),
  });
  // console.log(result._id.toString())
  //아이디와 일치하는 파람스 찾기
  // console.log(result);

  return (
    <div className="p-20">
      <h3>수정 페이지</h3>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <input name="_id" defaultValue={result._id.toString()} style={{display:'none'}}/>
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
