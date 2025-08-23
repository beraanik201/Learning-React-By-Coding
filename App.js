//If we have to do multiple nesting for creating element structures, it is is difficult to maintain,
// That is why we use jsx for creating tags
//But this is core-react


const parent = React.createElement("div", {id: "parent"},
    React.createElement("div", {id: "child"}, [
    React.createElement("h1", {}, "Hello World from Child"),
    React.createElement("h2", {}, "Hello World from Child")
    ]));

    console.log(parent);//This is an object

// const heading = React.createElement("h1", { id: "heading" }, "Hello World");

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

root.render(parent);
