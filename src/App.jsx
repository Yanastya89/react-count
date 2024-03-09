import "../src/assets/style/App.scss";
import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Вы нажали ${count} ${declentionOfCount(count)}`;
  });

  function declentionOfCount(count) {
    const lastNumber = count % 10;
    const lastTwoNumbers = count % 100;

    if (lastTwoNumbers >= 11 && lastTwoNumbers <= 14) {
      return "раз";
    } else if (lastNumber === 1) {
      return "раз";
    } else if (lastNumber >= 2 && lastNumber <= 4) {
      return "раза";
    } else {
      return "раз";
    }
  }

  return (
    <div className="wrapper">
      <button className="btn" onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <p className="text">
        Вы нажали {count} {declentionOfCount(count)} !
      </p>
    </div>
  );
}
