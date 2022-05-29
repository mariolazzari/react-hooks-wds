import UseState from "./views/UseState";
import UseEffect from "./views/UseEffect";
import UseContext from "./views/UseContext";
import { ThemeProvider } from "./context/ThemeContext";

import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="container">
        <h1 className="title">React Hooks</h1>
        <UseState />
        <UseEffect />
        <UseContext />
      </div>
    </ThemeProvider>
  );
}

export default App;
