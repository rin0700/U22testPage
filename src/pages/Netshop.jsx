import React, { useState } from "react";
import Header from "../components/Header";
import "../style/netShopStyle.css";

const products = [
  {
    id: 1,
    name: "ハムハムバーガー",
    price: 800,
    description: "ハムたっぷりのバーガーです。",
    image: "menu1.jpg",
  },
  {
    id: 2,
    name: "フィッシュ&&チップス",
    price: 500,
    description: "美味しいと思います。",
    image: "menu2.jpg",
  },
];

function Netshop() {
  const [quantities, setQuantities] = useState(products.map(() => 0));

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = parseInt(value, 10);
    setQuantities(newQuantities);
  };

  const totalAmount = quantities.reduce((sum, quantity, index) => {
    return sum + quantity * products[index].price;
  }, 0);

  const handleOrder = () => {
    const totalWithShipping = totalAmount + 500;
    alert(`注文が確定しました。合計金額は ${totalWithShipping} 円です。`);
  };

  return (
    <>
      <Header />
      <div>
        {products.map((product, index) => (
          <div key={product.id} style={{ marginBottom: "20px" }}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <img
              src={product.image}
              alt={product.name}
              style={{ borderRadius:10, width: "400px", height: "400px" }}
            />
            <p>価格: {product.price} 円</p>
            <label>
              数量:
              <select
                value={quantities[index]}
                onChange={(e) => handleQuantityChange(index, e.target.value)}
              >
                {[...Array(11).keys()].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </label>
          </div>
        ))}
        <h3>合計金額: {totalAmount} 円</h3>
        <h3>送料: 500 円</h3>
        <h3>総合計金額: {totalAmount + 500} 円</h3>
        <button onClick={handleOrder}>注文確定</button>
      </div>
    </>
  );
}

export default Netshop;
