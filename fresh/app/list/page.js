"use client";
import Image from "next/image";
import { useState } from "react";

export default function List() {
  const item = ["Tomatoes", "Pasta", "Coconut"]; //array 자료형
  let [count, setCount] = useState([0, 0, 0]);
  return (
    <div>
      <h4 className="title">상품등록</h4>
      {item.map((a, index) => {
        return (
          <div className="food" key={index}>
            <h4>{a} $40</h4>
            <img src={`/food${index}.png`} className="food-img" />
            <div key={index}>
              <button
                onClick={() => {
                  let copy = [...count];
                  copy[index]--;
                  setCount(copy);
                }}
              >
                -
              </button>
              <span>{count[index]}</span>
              <button
                onClick={() => {
                  let copy = [...count];
                  copy[index]++;
                  setCount(copy);
                }}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
