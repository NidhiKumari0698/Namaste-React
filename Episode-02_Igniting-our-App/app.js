import React from "react";
import ReactDOM from "react-dom/client";
// <div id="parent">
//     <div id="child">
//         <h1>I am h1 tag</h1>
//         <h2>I am h2 tag</h2>
//     </div>
//     <div id="child2">
//         <h1>I am h1 tag</h1>
//         <h2>I am h2 tag</h2>
//     </div>
// </div>

const parent = React.createElement(
    "div",
    {
      id: "parent",
      style: { backgroundColor: "green", height: "200px", width: "200px" },
    },
    [
      React.createElement(
          "div",
          {
            id: "child",
            style: { backgroundColor: "orange", height: "170px", width: "170px" },
          },
          [
            React.createElement(
              "h1",
              { style: { backgroundColor: "blue", height: "100px", width: "100px" } },
              "I am h1 tag"
            ),
            React.createElement(
              "h2",
              { style: { backgroundColor: "blue", height: "100px", width: "100px" } },
              "I am h2 tag"
            ),
          ]
        ),
        React.createElement(
          "div",
          {
            id: "child2",
            style: { backgroundColor: "orange", height: "170px", width: "170px" },
          },
          [
            React.createElement(
              "h1",
              { style: { backgroundColor: "blue", height: "100px", width: "100px" } },
              "I am h1 tag"
            ),
            React.createElement(
              "h2",
              { style: { backgroundColor: "blue", height: "100px", width: "100px" } },
              "I am h2 tag"
            ),
          ]
        )
    ]
  );
  console.log("parent::", parent);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  console.log("root::", root);
  
  root.render(parent);
  