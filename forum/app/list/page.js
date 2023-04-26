import { connectDB } from "../database";
import ListItem from "./ListItem";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  // console.log(result);

  return (
    <div className="list-bg">
      <ListItem result={result}/>
    </div>
  );
}
