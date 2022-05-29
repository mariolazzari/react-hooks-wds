import { useState, useEffect, useRef } from "react";
import Section from "../../components/Section";
import Item from "../../components/Item";
import Button from "../../components/Buttons";

const UseRef = () => {
  const [name, setName] = useState("");
  const countRef = useRef(0);
  const inputRef = useRef();
  const prevName = useRef("");

  // on name change event handler
  const onNameChange = e => {
    setName(e.target.value);
  };

  // on focus click
  const onFocusClick = () => {
    inputRef.current.focus();
  };

  // on default click
  const onDefaultClick = () => {
    inputRef.current.value = "Mario Lazzari";
  };

  useEffect(() => {
    countRef.current++;
  });

  // prev
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <Section title="useRef">
      <div className="item">
        <input
          ref={inputRef}
          name="name"
          type="text"
          value={name}
          onChange={onNameChange}
        />
      </div>

      <h4>{`My name is ${name}`}</h4>
      <h4>{`Rendered ${countRef.current} times`}</h4>

      <Item>
        <Button label="Focus" onClick={onFocusClick} />
        <Button label="Default" onClick={onDefaultClick} />
      </Item>

      <h4>{`Previous name: ${prevName.current}`}</h4>
    </Section>
  );
};

export default UseRef;
