const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function HelloWorld() {
  return (
    <div className="container">Hello World! This is a functional component</div>
  );
}

root.render(<HelloWorld />);

/* NOTE: React component are always supposed to be PascalCased */
