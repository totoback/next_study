"use client";
import React, { useState, useEffect } from "react";

export default function Comment(props) {
  const [comment, setComment] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/comment/list?id=" + props._id)
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
          if (!comment) return;
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({ comment: comment, _id: props._id }),
          })
            .then((r) => r.json())
            .then(() => {
              setComment("");
              // 새로운 댓글을 추가합니다.
              setData((prevData) => [
                ...prevData,
                { content: comment, _id: props._id },
              ]);
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
