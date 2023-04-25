import Link from "next/link";
import { connectDB } from "../database";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return (
    <div className="list-bg">
      {result.map((el, index) => {
        return (
          <div className="list-item" key={index}>
            <Link href={'/detail/'+result[index]._id.toString()}>
              <h4>{result[index].title}</h4>
              <p>{result[index].content}</p>
            </Link>
            <DetailLink/>
          </div>
        );
      })}
    </div>
  );
}
