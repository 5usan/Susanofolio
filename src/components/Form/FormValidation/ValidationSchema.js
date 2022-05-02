import * as Yup from "yup";

var mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var nameRegex = /^[ a-zA-Z]+$/;

export const ValidationContactFormSchema = Yup.object({
  firstName: Yup.string()
    .matches(nameRegex, "Invalid First Name!")
    .min(2, "First Name is too short!")
    .max(10, "First Name is too long!")
    .required("First Name is required!"),

  lastName: Yup.string()
    .matches(nameRegex, "Invalid Las Name!")
    .min(2, "Last Name is too short!")
    .max(10, "Last Name is too long!")
    .required("Last Name is required!"),

  email: Yup.string()
    .matches(mailRegex, "Invalid email address!")
    .required("Email is required!"),

  description: Yup.string()
    .min(8, "Description is too short!")
    .max(1000, "Description is too long!")
    .required("Description is required!"),
});
