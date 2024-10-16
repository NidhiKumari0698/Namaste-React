import React, { useState } from "react";
import createContext, { age, setAge } from "../utils/createContextPolyfill";

// Create a custom context with the polyfill
const MyContext = createContext("default value");

function MyComponent() {
  const [newAge, setNewAge] = useState(age);
  return (
    <>
      <MyContext.Consumer>
        {(value) => <div>Context Value: {value}</div>}
      </MyContext.Consumer>
      <p>Age: {age}</p>
      <button
        onClick={(event) => {
          console.log("button clicked!");
          setAge(30);
          setNewAge(30);
        }}
        className="w-2 h-2 background-gray"
      >
        Click Me
      </button>
    </>
  );
}

function TestCreateContextPolyfill() {
  return (
    <MyContext.Provider value="Hello from Provider!">
      <MyComponent />
    </MyContext.Provider>
  );
}

export default TestCreateContextPolyfill;
