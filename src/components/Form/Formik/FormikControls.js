import React from "react";
import Input from "../FormInputs/Input";

function FormikControls(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    default:
      return null;
  }
}

export default FormikControls;
