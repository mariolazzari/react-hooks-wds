import "./Item.css";

const Item = props => {
  return <div className="item">{props.children}</div>;
};

export default Item;
