"use client";

import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
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
            {/* ajax 삭제 요청 */}
            {/* <button onClick={()=>{fetch('/api/test').then(()=>{
              console.log('삭제 완료')
            })}}>삭제</button> */}
            {/* /Post 삭제 하는법 */}
            <button
              onClick={() => {
                fetch("/api/post/delete", {
                  method: "DELETE",
                  body: result[index]._id,
                })
                  .then((r) => r.json())
                  .then((result) => {
                    //성공시 실행할코드
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
