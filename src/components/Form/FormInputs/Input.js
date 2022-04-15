import React from "react";
import { useField } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import "./Input.scss";

const useStyles = makeStyles({
  input: {
    color: "white",
  },
});

const Input = (props) => {
  const { name, type, className, rows, errorMessage, ...rest } = props;
  const classes = useStyles();
  console.log(errorMessage, "errorMessage");
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

  // if (mata.touched && mata.error) {
  //   config.error = true;
  //   config.helperText = mata.error;
  // }

  return (
    <div className={`${className}`}>
      <TextField
        {...config}
        className="input rounded text-primary"
        InputLabelProps={{
          className: classes.input,
        }}
        inputProps={{ className: classes.input }}
      />
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
    </div>
  );
};

export default Input;
