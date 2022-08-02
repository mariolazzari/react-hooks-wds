import { useId, useEffect, useRef } from "react";

const Input = () => {
  const id = useId();
  const inputRef = useRef(null);

  useEffect(() => {
    const input = document.getElementById(id);
    console.log(input);
  }, [id]);

  return (
    <>
      <label htmlFor="Posts">Input</label>
      <input id={id} ref={inputRef} type="text" />
    </>
  );
};

export default Input;
