import { useState, useEffect } from "react";
import Section from "../../components/Section";
import Item from "../../components/Item";
import Button from "../../components/Buttons";

const UseEffect = () => {
  // state
  const [resourceType, setResourceType] = useState("Posts");
  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const setUsers = () => setResourceType("Users");

  const setPosts = () => {
    setResourceType("Posts");
  };

  const setComments = () => setResourceType("Comments");

  // on window resize
  const onResize = () => setWindowWidth(window.innerWidth);

  // mount / unMount
  useEffect(() => {
    console.log("useEffect - mount");
    return () => {
      console.log("useEffect - cleanup");
    };
  }, []);

  // resourceType
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(res => res.json())
      .then(data => setItems(data));
  }, [resourceType]);

  // window width
  useEffect(() => {
    // subscribe event
    window.addEventListener("resize", onResize);

    // cleanup
    return () => {
      // unsubscribe event
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <Section title="useEffect">
      <Item>
        <Button label="Posts" onClick={setPosts} />
        <Button label="Users" onClick={setUsers} />
        <Button label="Comments" onClick={setComments} />
      </Item>

      <div className="item">
        <h4>{`Total ${resourceType}: ${items.length}`}</h4>
      </div>

      <Item>
        <h4>{`Window width: ${windowWidth}`}</h4>
      </Item>
    </Section>
  );
};

export default UseEffect;
