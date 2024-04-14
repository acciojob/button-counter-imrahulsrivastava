import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>Button clicked {count} times</p>
      <button onClick={incrementCount}>Click me</button>
    </>
  );
}

export default Counter;
