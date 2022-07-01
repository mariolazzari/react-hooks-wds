import { useState, useMemo } from "react";
import Section from "../../components/Section";

const UseDeferredValue = () => {
  const [name, setName] = useState("");

  /*
  const computedValue = useMemo(() => {
    return getComputedValue(name);
  }, [name]);
  */

  const onChange = e => setName(e.target.value);

  return (
    <Section title="useDeferredValue">
      <input type="text" value={name} onChange={onChange} />
    </Section>
  );
};

export default UseDeferredValue;
