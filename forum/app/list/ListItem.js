"use client";

import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
      <Link href={"/write"}>
        <button
          style={{
            marginBottom: "15px",
            backgroundColor: "skyblue",
          }}
        >
          글 작성 🖍
        </button>
      </Link>
      {result.map((el, index) => {
        return (
          <div className="list-item" key={index}>
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
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data);
                    // 성공시 실행할 코드
                  })
                  .catch((error) => {
                    console.error(error);
                    // 에러 처리 코드
                  });
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
