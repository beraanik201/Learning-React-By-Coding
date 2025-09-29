//If we have to do multiple nesting for creating element structures, it is is difficult to maintain,
// That is why we use jsx for creating tags
//But this is core-react
import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", {id: "parent"},
//     React.createElement("div", {id: "child"}, [
//     React.createElement("h1", {}, "Hello World from Child"),
//     React.createElement("h2", {}, "Hello World from Child"),
//     React.createElement("h2", {}, "Hello World from Child")
//     ]));

//     console.log(parent);//This is an object

const heading = React.createElement("h1", { id: "heading" }, "Hello World");

const number = 1000;

//using jsx

//JSX- (transpiled before it reaches the JS) - PARCEL - Babel
const JsxHeading = () => (
  <div id="container">
    <h2>{number}</h2>
    <h1 className="heading">Hello World from jsx</h1>
  </div>
); //if we write jsx in multiple lines, we have to wrap it in brackets

// console.log(JsxHeading); //This is also an object

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);

root.render(<JsxHeading />);
