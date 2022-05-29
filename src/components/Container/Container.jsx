import "./Container.css";

const Container = props => {
  return (
    <div className="container">
      {props.title && <h1 className="title">{props.title}</h1>}

      {props.children}
    </div>
  );
};

Container.defaultProps = {
  title: "",
};

export default Container;
