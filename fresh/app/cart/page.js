// 'use client'
import { age, name } from "./data.js";

export default function Cart() {
  const cart = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem item={cart[0]} />
      <CartItem item={cart[1]} />
      <Banner content="롯데카드"/>
      <Btn color="yellow"/>
    </div>
  );
}
function Banner(props) {
  return <h5>{props.content} 결제 행사중</h5>;
}

function Btn(props){
  return <button style={{ background : props.color }}>버튼임</button>
}
function CartItem(props) {
  return (
    <div>
      <div className="cart-item">
        <p>{props.item}</p>
        <p>$40</p>
        <p>1개</p>
      </div>
    </div>
  );
}
