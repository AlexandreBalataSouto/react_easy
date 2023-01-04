import React, { useState } from "react";

function SimpleCounter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter:{count}</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </>
  );
}

export default SimpleCounter;
