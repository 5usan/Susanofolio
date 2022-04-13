import { Button } from "@material-ui/core";
import { Form } from "formik";
import React from "react";
import FormikContainer from "../../utils/Form/Formik/FormikContainer";
import FormikControls from "../../utils/Form/Formik/FormikControls";

const ContactForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  };

  const submitHandler = (values, onSubmitProps) => {
    console.log(console.log(values, "contact form datas"));
    onSubmitProps.reserForm();
  };
  return (
    <FormikContainer initialValues={initialValues} onSubmit={submitHandler}>
      <Form>
        <div className="row justify-content-center align-items-center">
          <FormikControls
            control="input"
            name="firstName"
            label="First Name"
            className="col-lg-8 my-2"
          />
          <FormikControls
            control="input"
            name="lastName"
            label="Last Name"
            className="col-lg-8 my-2"
          />
          <FormikControls
            control="input"
            name="email"
            label="E-mail"
            type="email"
            className="col-lg-8 my-2"
          />
          <FormikControls
            control="input"
            name="description"
            label="Description"
            type="description"
            rows={4}
            className="col-lg-8 my-2"
          />
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Button variant="contained" type="submit" className="mx-2">
            Submit
          </Button>
          <Button variant="outlined" type="reset">
            Clear
          </Button>
        </div>
      </Form>
    </FormikContainer>
  );
};

export default ContactForm;
