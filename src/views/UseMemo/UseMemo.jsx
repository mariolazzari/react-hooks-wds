import { useState, useMemo, useEffect } from "react";
import Section from "../../components/Section";
import Button from "../../components/Buttons";

const slowFunction = number => {
  console.log("slowFunction");
  for (let i = 0; i < 1000000000; i++) {}

  return number * 2;
};

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  // reference equality
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  const onNumberChange = e => {
    setNumber(+e.target.value);
  };

  const onThemeClick = () => {
    setDark(!dark);
  };

  useEffect(() => {
    console.log("useEffect");
  }, [themeStyles]);

  return (
    <Section title="useMemo">
      <input type="number" onChange={onNumberChange} value={number} />
      <Button label="Change theme" onClick={onThemeClick} />
      <div style={themeStyles}>{doubleNumber}</div>
    </Section>
  );
};

export default UseMemo;
