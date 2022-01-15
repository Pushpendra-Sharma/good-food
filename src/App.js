import React from "react";
import { useState } from "react";
import "./styles.css";

const foodDB = {
  "North Indian": [
    { name: "Kadhai Paneer", rating: "5/5" },
    { name: "Shahi Paneer", rating: "4.8/5" },
    { name: "Dal Makhani", rating: "4.5/5" }
  ],
  Chinese: [
    { name: "Noodles", rating: "4.9/5" },
    { name: "Momos", rating: "4.9/5" },
    { name: "Spring roll", rating: "4/5" }
  ],
  Beverages: [
    { name: "Coca-cola", rating: "5/5" },
    { name: "Mint mojito", rating: "5/5" },
    { name: "Cold coffee", rating: "4/5" }
  ],
  "South Indian": [
    { name: "Dosa", rating: "5/5" },
    { name: "Vada-pav", rating: "5/5" },
    { name: "Idli", rating: "4/5" }
  ]
};

export default function App() {
  const [foodList, setfoodList] = useState(foodDB["North Indian"]);

  function buttonClickHandler(foodType) {
    var list = foodDB[foodType];

    setfoodList(list);
  }
  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="Hungry">
          😋
        </span>
        goodFood
      </h1>
      <p>Checkout some popular food-items. Select a genre to get started.</p>
      <div className="food-types">
        {Object.keys(foodDB).map((item, key) => (
          <button
            className="btn-food"
            key={item}
            onClick={() => buttonClickHandler(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <hr />

      <ul type="none">
        {foodList.map((item, key) => (
          <li key={item.name}>
            {" "}
            {item.name}
            <br />
            <small>{item.rating}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
