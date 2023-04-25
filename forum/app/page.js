import { MongoClient } from "mongodb";
import { connectDB } from "./database";
import List from "./list/page";


export default async function Home() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return <div>메인</div>;
}
