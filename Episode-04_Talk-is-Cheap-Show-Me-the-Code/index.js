import React from "react";
import reactDOM from "react-dom/client";
import Header from "./src/components/Header.js";
import Body from "./src/components/Body.js";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
