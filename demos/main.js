const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function HelloWorld() {
  return (
    <div className="container">Hello World! This is a functional component</div>
  );
}

function App() {
  return (
    <>
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
    </>
  );
}

root.render(<App />);

/* NOTE: React component are always supposed to be PascalCased. 
  The Babel  compiler uses the PascalCase used to differentiate between 
  React components and regular HTML elements */
