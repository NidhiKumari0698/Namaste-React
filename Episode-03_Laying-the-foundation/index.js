import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const p1Tag = <p>I am p1 tag.</p>;

const Title = () => (
  <h1 id="heading" tabIndex={1}>
    hello world using jsx
  </h1>
);

// const HeadingComponent = () => {
//     return <h1>Namaste React Functional Component.</h1>
// }
const p2Tag = (
    <div>
      {p1Tag}
      <p>I am p2 tag.</p>
      <Title/>
      <Title></Title>
      {Title()}
    </div>
  );
const fullName = "Nidhi Kumari";
const HeadingComponent = () => (
  <div id="container">
    <Title />
     {p1Tag}
    <h1 className="heading">Namaste React Functional Component.</h1>
    <h2>{fullName}</h2>
  </div>
);


//console.log("jsxHeading::", jsxHeading);

root.render(p2Tag); //how we render normal react element
//root.render(<HeadingComponent></HeadingComponent>); //how we render functional react component
