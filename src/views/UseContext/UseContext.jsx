import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import Button from "../../components/Buttons";

const UseContext = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="section">
      <h2 className="title">useContext</h2>
      <Button label="Toggle theme" onClick={toggleTheme} />
      <h3>{theme}</h3>
    </div>
  );
};

export default UseContext;
