import React from "react";
import "./Button.scss";

const Button = (props) => {
  const { type, className } = props;
  return (
    <button type={type ? type : "submit"} className={`generalBtn ${className}`}>
      {props.children}
    </button>
  );
};

export default Button;
