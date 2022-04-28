import React, { useState } from "react";
import { Form } from "formik";
import FormikContainer from "../Form/Formik/FormikContainer";
import FormikControls from "../Form/Formik/FormikControls";
import Button from "../Button/Button";
import { ValidationContactFormSchema } from "../Form/FormValidation/ValidationSchema";
import axios from "axios";

const ContactForm = () => {
  const contactLink = "http://localhost:5000/api/contact/";
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  };
  const submitHandler = (values, onSubmitProps) => {
    console.log(console.log(values, "contact form datas"));
    const sentContactInfo = async () => {
      try {
        const resp = await axios.post(contactLink, values);
        console.log(resp);
      } catch (err) {
        console.log(err, "error");
      }
    };
    sentContactInfo();
    // onSubmitProps.resetForm();
  };
  return (
    <FormikContainer
      initialValues={initialValues}
      validationSchema={ValidationContactFormSchema}
      onSubmit={submitHandler}
    >
      <Form>
        <div className="row justify-content-center align-items-center">
          <FormikControls
            control="input"
            name="firstName"
            label="First Name"
            className="col-lg-8 mb-2"
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
            // type="email"
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
          <div className="d-flex justify-content-start mt-3 col-lg-8">
            <Button className="bg-success">SEND</Button>
            <Button type="reset" className="mx-2 border border-success bg-dark">
              CLEAR
            </Button>
          </div>
          <div className="d-flex justify-content-start mt-3 col-lg-8"></div>
        </div>
      </Form>
    </FormikContainer>
  );
};

export default ContactForm;
