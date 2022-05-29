import { useState, useEffect, useRef } from "react";
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
    <div className="section">
      <h2 className="title">useRef</h2>

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

      <Button label="Focus" onClick={onFocusClick} />
      <Button label="Default" onClick={onDefaultClick} />
      <h4>{`Previous name: ${prevName.current}`}</h4>
    </div>
  );
};

export default UseRef;
