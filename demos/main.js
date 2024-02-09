const rootElement = document.getElementById("root");

// const element = document.createElement("div");
// element.textContent = "Hello World";
// element.className = "container";
// rootElement.appendChild(element);
/*
const element = React.createElement(
  "div",
  {
    className: "container",
  }
  // "Hello World"
);*/

const element = <div className="container">Hello World</div>;
console.log(element);
ReactDOM.createRoot(rootElement).render(element);
