import { useState } from "react";

const User = (props) => {
  const [count1] = useState(0);
  const [count2] = useState(1);
  const { name } = props;
  function increment() {
    console.log("Increment Count.", this);
  }

  function decrement() {
    console.log("decrement Count.");
  }
  return (
    <div className="user-card">
      <h2>count1: {count1}</h2>
      <h2>count2: {count2}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h2>Name: {name}</h2>
      <h3>Location: Dehradun</h3>
      <h4>Contact: nidhi.kumari@gmail.com</h4>
    </div>
  );
};

export default User;
