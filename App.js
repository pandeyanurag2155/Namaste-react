/* <div id="parent">
<div id="child">
<h1> I'm h1 tag </h1>
<h2> I'm h2 tag </h2>
</div>
</div> */

// React Element(object)=> HTML(Browser Understand)

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),

  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);


//JSX

 
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React!"
// );
// console.log(heading);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
