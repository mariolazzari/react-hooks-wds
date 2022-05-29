import { useState, useEffect } from "react";
import Button from "../../components/Buttons";

const UseEffect = () => {
  // state
  const [resourceType, setResourceType] = useState("Posts");

  const setUsers = () => {
    setResourceType("Users");
  };

  const setPosts = () => {
    setResourceType("Posts");
  };

  const setComments = () => {
    setResourceType("Comments");
  };

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
      .then(data => console.log(data));
  }, [resourceType]);

  return (
    <div className="section">
      <h2 className="title">useEffect</h2>
      <h3>{resourceType}</h3>

      <div className="item">
        <Button label="Posts" onClick={setPosts} />
        <Button label="Users" onClick={setUsers} />
        <Button label="Comments" onClick={setComments} />
      </div>
    </div>
  );
};

export default UseEffect;
