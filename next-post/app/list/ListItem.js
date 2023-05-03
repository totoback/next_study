"use client";
import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
      <Link href={"/write"}>
        <button>글 작성🖍</button>
      </Link>
      {result.map((el, index) => {
        return (
          <div className="list-item">
            <Link href={"/detail/" + result[index]._id.toString()}>
              <h4>{result[index].title}</h4>
              <p>{result[index].content}</p>
            </Link>
            <Link href={"/edit/" + result[index]._id.toString()}>
              <button>수정</button>
            </Link>
            <button
              onClick={() => {
                fetch("/api/post/delete", {
                  method: "POST",
                  body: JSON.stringify({ _id: result[index]._id }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
}
