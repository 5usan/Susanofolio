import React from "react";
import { Formik } from "formik";
import "./FormikContainer.scss";
const FormikContainer = (props) => {
  return (
    <div className="w-100">
      <Formik
        initialValues={props.initialValues}
        validationSchema={props.validationSchema}
        onSubmit={props.onSubmit}
      >
        {props.children}
      </Formik>
    </div>
  );
};

export default FormikContainer;
