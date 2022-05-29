import { useState } from "react";

// () => run only once!
const initCount = () => {
  console.log("initCount");
  return 0;
};

function App() {
  const [count, setCount] = useState(initCount);
  const [theme, setTheme] = useState("light");

  const inrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <button onClick={decrement}> - </button>
      <span> {count} </span>
      <button onClick={inrement}> + </button>
      <br />
      <button onClick={toggleTheme}>{theme}</button>
    </>
  );
}

export default App;
