import PropTypes from "prop-types";
import "./Button.css";

const Button = props => {
  const onClick = e => {
    props.onClick?.(e);
  };

  return (
    <div className="button">
      <button className="button" onClick={onClick}>
        {props.label}
      </button>
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
