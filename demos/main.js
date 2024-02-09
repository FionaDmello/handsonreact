const rootElement = document.getElementById("root");

const person = { first: "Joe", last: "Doe" };

const logo = {
  name: "React Logo",
  title: "React Logo",
  path: "/assets/react-logo.png",
};

const element = (
  <>
    <div className="container">
      Hello {person.first} {person.last}
    </div>
    <img src={logo.path} alt={logo.name} title={logo.title} />
    <div className="alert alert-danger">error message</div>
  </>
);

ReactDOM.createRoot(rootElement).render(element);
