import React from "react";

export default function ListItem({ result }) {
  console.log(result);
  return (
    <div>
      <button>글 작성🖍</button>
      {result.map((el, index) => {
        return (
          <div className="list-item">
            <h4>{result[index].title}</h4>
            <p>{result[index].content}</p>
            <button>수정</button>
          </div>
        );
      })}
    </div>
  );
}
