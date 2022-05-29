import { useState, useContext } from "react";
import Button from "../../components/Buttons";
import ThemeContext from "../../context/ThemeContext";

// () => run only once!
const initCount = () => {
  console.log("initCount");
  return 0;
};

const UseState = () => {
  // state
  const [count, setCount] = useState(initCount);
  //const [theme, setTheme] = useState("light");
  // context
  const { theme, toggleTheme } = useContext(ThemeContext);

  // on - click
  const increment = () => {
    setCount(prevCount => prevCount - 1);
  };

  // on + click
  const decrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="section">
      <h2 className="title">useState</h2>

      <div className="item">
        <Button label="-" onClick={decrement} />
        <h4>{count}</h4>
        <Button label="+" onClick={increment} />
      </div>

      <div className="item">
        <Button label={theme} onClick={toggleTheme} />
      </div>
    </div>
  );
};

export default UseState;
