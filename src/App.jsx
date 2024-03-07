import "../src/assets/style/App.scss";
import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Вы нажали ${count} раз`;
  });

  return (
    <div className="wrapper">
      <button className="btn" onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <p className="text">Вы нажали {count} раз :</p>
    </div>
  );
}
