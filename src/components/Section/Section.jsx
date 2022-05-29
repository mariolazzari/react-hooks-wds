import "./Section.css";

const Section = props => {
  return (
    <div className="section">
      {props.title && <h1 className="title">{props.title}</h1>}
      {props.children}
    </div>
  );
};

Section.defaultProps = {
  title: "",
};

export default Section;
