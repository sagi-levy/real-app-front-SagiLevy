import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "./common/pageHeader";
import Input from "./input";
import { logIn } from "./services/userApiServices";
import { useAuth } from "../context/auth.context";
const SignIn = () => {
  const [errorApiRequest, setErrorApiRequest] = useState("");
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const form = useFormik({
    initialValues: { email: "", password: "" },
    validate(values) {
      const errors = {};
      if (values.email === "") {
        errors.email = "email cant be empty";
      } else if (!values.email.endsWith(".com") && values.email.length > 4) {
        errors.email = `"email must end with ".com"`;
      } else if (values.email.length < 3) {
        errors.email = "email cant less then 2 chars";
      }
      if (values.password === "") {
        errors.password = "dani";
      }
      return errors;
    },
    async onSubmit(values) {
      console.log("this is values:", values);
      try {
        console.log("login");
        await logIn(values);
        navigate("/");
      } catch ({ response }) {
        if (response && response.status === 400) {
          setErrorApiRequest(response.data);
        }
      }
    },
  });
  // console.log(Object.keys(form.errors));
  // console.log(form.errors);

  return (
    <>
      <PageHeader title={<h1>Sign in page</h1>} />
      <p>sign in to enter</p>
      <form onSubmit={form.handleSubmit}>
        {errorApiRequest && (
          <div className="alert alert-danger">{errorApiRequest}</div>
        )}
        <Input
          {...form.getFieldProps("email")}
          error={form.errors.email}
          name="email"
          type="email"
          id="email"
        />
        <Input
          {...form.getFieldProps("password")}
          name="password"
          type="password"
          id="password"
        />
        <button
          type="submit"
          className="btn btn-primary"
          // disabled={Object.keys(form.errors).length}
        >
          submit
        </button>
      </form>
    </>
  );
};
export default SignIn;
