import React from "react";
import { useField } from "formik";
import { TextField } from "@material-ui/core";

const Input = (props) => {
  const { name, type, className, rows, ...rest } = props;
  const [field, mata] = useField(name);
  let config;
  if (type === "date") {
    config = {
      ...field,
      ...rest,
      type,
      fullWidth: true,
      variant: "filled",
      InputLabelProps: {
        shrink: true,
      },
    };
  } else if (type === "description") {
    config = {
      ...field,
      ...rest,
      fullWidth: true,
      variant: "filled",
      multiline: true,
      rows: rows,
    };
  } else {
    config = {
      ...field,
      ...rest,
      type,
      fullWidth: true,
      variant: "filled",
    };
  }

  if (mata.touched && mata.error) {
    config.error = true;
    config.helperText = mata.error;
  }

  return (
    <div className={`${className}`}>
      <TextField {...config} className="input" />
    </div>
  );
};

export default Input;
