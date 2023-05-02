import { connectDB } from "@/util/database";
import { MongoClient } from "mongodb";
import ListItem from "./ListItem";

export default async function Page() {
  const db = (await connectDB).db("post");
  let result = await db.collection("table").find().toArray();
  return (
    <>
      <div className="list-bg">
        {/* props */}
        <ListItem result={result} />
      </div>
    </>
  );
}
