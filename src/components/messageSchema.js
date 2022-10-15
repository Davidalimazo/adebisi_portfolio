import * as yup from "yup";

//const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
// min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const messageSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  name: yup.string().min(3,"Please enter a valid name name").max(30, "maximum character exceeded").required("Required"),
  message: yup.string().min(5,"Please enter a valid message").max(150, "maximum character exceeded").required("Required"),
});
