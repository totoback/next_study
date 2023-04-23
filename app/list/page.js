import Image from 'next/image'

export default function List() {
  const item = ["Tomatoes", "Pasta", "Coconut"]; //array 자료형

  return (
    <div>
      <h4 className="title">상품등록</h4>
      {item.map((a, i) => {
        return (
          <div className="food" key={i}>
            <h4>{a} $40</h4>
            <img src={`/food${i}.png`} className="food-img"/>
          </div>
        );
      })}
    </div>
  );
}
