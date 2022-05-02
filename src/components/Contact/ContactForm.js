import React, { useState } from "react";
import { Form } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormikContainer from "../Form/Formik/FormikContainer";
import FormikControls from "../Form/Formik/FormikControls";
import Button from "../Button/Button";
import { ValidationContactFormSchema } from "../Form/FormValidation/ValidationSchema";

const ContactForm = () => {
  const contactLink = "https://susanofolio-backend.herokuapp.com/api/contact/";
  const [notification, setNotification] = useState(false);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  };
  const submitHandler = (values, onSubmitProps) => {
    setNotification(true);
    const sentContactInfo = async () => {
      try {
        await axios.post(contactLink, values);
        toast.success("Message Sent", { autoClose: 2500 });
        setNotification(false);
      } catch (err) {
        toast.error(err.message, { autoClose: 2500 });
        console.log(err, "error");
        setNotification(false);
      }
    };

    sentContactInfo();
    onSubmitProps.resetForm();
  };
  return (
    <>
      <ToastContainer />
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
              <Button
                type="reset"
                className="mx-2 border border-success bg-dark"
              >
                CLEAR
              </Button>
            </div>
            <div className="d-flex justify-content-start mt-3 col-lg-8">
              {notification && <p>Sending...</p>}
            </div>
          </div>
        </Form>
      </FormikContainer>
    </>
  );
};

export default ContactForm;
