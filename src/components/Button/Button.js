import React from "react";
import "./Button.scss";

const Button = (props) => {
  const { type, className, onClick } = props;
  return (
    <button
      type={type ? type : "submit"}
      className={`generalBtn ${className}`}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
