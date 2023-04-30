"use client";
import React, { useState, useEffect } from "react";

export default function Comment(props) {
  const [comment, setComment] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/comment/list")
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  }, []);
  return (
    <div>
      <div>댓글 목록</div>
      <hr></hr>
      {data.length > 0
        ? data.map((el, idx) => {
            return <p key={idx}>{el.content}</p>;
          })
        : "댓글 없음"}
      <br />
      <input
        style={{ display: "inline-block" }}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(comment);
          fetch("/api/comment/new", {
            method: "POST",
            // headers: {
            //   "Content-Type": "application/json"
            // },
            body: JSON.stringify({ comment: comment, _id: props._id }),
          })
          .then((r) => r.json())
          .then((result) => {
            console.log(result); // 응답 데이터 확인
            setComment("");
            fetch("/api/comment/list")
              .then((r) => r.json())
              .then((data) => {
                setData(data);
              });
          })
          .catch((error) => {
            console.error(error);
          });
        }}
      >
        댓글 전송
      </button>
    </div>
  );
}
