const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "iam h1 tag"),
    React.createElement("h2", {}, "iam h2 tag"),
  ])
);

//const heading = React.createElement(
//"h1",
//{ id: "heading", xyz: "abc" },
//"Hello React!"
//);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);
