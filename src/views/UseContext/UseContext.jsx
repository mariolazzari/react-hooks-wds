import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import Section from "../../components/Section";
import Button from "../../components/Buttons";

const UseContext = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Section title="useContext">
      <Button label="Toggle theme" onClick={toggleTheme} />
      <h3>{theme}</h3>
    </Section>
  );
};

export default UseContext;
