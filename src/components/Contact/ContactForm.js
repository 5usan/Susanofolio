import React, { useState } from "react";
import { Form } from "formik";
import FormikContainer from "../Form/Formik/FormikContainer";
import FormikControls from "../Form/Formik/FormikControls";
import Button from "../Button/Button";

const ContactForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  };

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var nameRegex = /^[ a-zA-Z]+$/;

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [description, setDescription] = useState();

  const validateFirstName = (values) => {
    if (values.firstName.trim() === "") {
      setFirstName("First Name is required!");
    } else if (values.firstName.length < 2) {
      setFirstName("First Name is too short!");
    } else if (values.firstName.length > 11) {
      setFirstName("First Name is too long!");
    } else if (!values.firstName.match(nameRegex)) {
      setFirstName("Invalid First Name");
    } else {
      setFirstName("");
      return true;
    }
  };

  const validateLastName = (values) => {
    if (values.lastName.trim() === "") {
      setLastName("Last Name is required!");
    } else if (values.lastName.length < 2) {
      setLastName("Last Name is too short!");
    } else if (values.lastName.length > 11) {
      setLastName("Last Name is too long!");
    } else if (!values.lastName.match(nameRegex)) {
      setLastName("Invalid Last Name");
    } else {
      setLastName("");
      return true;
    }
  };

  const validateEmail = (values) => {
    if (values.email.trim() === "") {
      setEmail("Email is required!");
    } else if (values.email.match(mailformat)) {
      setEmail("");
      return true;
    } else {
      setEmail("The pattern for email is wrong!");
    }
  };

  const validateDescription = (values) => {
    if (values.description.trim() === "") {
      setDescription("Description is required!");
    } else if (values.description.length < 8) {
      setDescription("Description is too short!");
    } else if (values.description.length > 1000) {
      setDescription("Description is too long!");
    } else {
      setDescription("");
      return true;
    }
  };

  const submitHandler = (values, onSubmitProps) => {
    let firstNameBool = validateFirstName(values);
    let lastNameBool = validateLastName(values);
    let emailBool = validateEmail(values);
    let descBool = validateDescription(values);
    if (firstNameBool && lastNameBool && emailBool && descBool) {
      console.log(console.log(values, "contact form datas"));
    }

    // onSubmitProps.resetForm();
  };
  return (
    <FormikContainer initialValues={initialValues} onSubmit={submitHandler}>
      <Form>
        <div className="row justify-content-center align-items-center">
          <FormikControls
            control="input"
            name="firstName"
            label="First Name"
            className="col-lg-8 mb-2"
            errorMessage={firstName}
          />

          <FormikControls
            control="input"
            name="lastName"
            label="Last Name"
            className="col-lg-8 my-2"
            errorMessage={lastName}
          />
          <FormikControls
            control="input"
            name="email"
            label="E-mail"
            // type="email"
            className="col-lg-8 my-2"
            errorMessage={email}
          />
          <FormikControls
            control="input"
            name="description"
            label="Description"
            type="description"
            rows={4}
            className="col-lg-8 my-2"
            errorMessage={description}
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
