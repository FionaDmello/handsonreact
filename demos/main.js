const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const renderElement = () => {
  const element = (
    <div className="post">
      <h1>My First Blog Post</h1>
      <div>Author: Mark Twain</div>
      <div>Published: {new Date().toLocaleTimeString()}</div>
      <p>
        I am new to blogging and this is my first post. You should expect a lot
        of great things from me.
      </p>
    </div>
  );

  root.render(element);
};

setInterval(renderElement, 1000);

/*
NOTE: React Virtual DOM takes its current version and compares it to its new version every second
It finds the diff and creates a patch stream based on it to be applied on the real DOM
This patch is then applied on the real DOM to take it from its current version to the new version
A current version of the virtual DOM is then created for the next update.
*/
