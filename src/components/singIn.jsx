import Input from "./common/input";
import PageHeader from "./common/pageHeader";
import formikValidateUsingJoi from "./utils/formikValidateUsingJoi";
import { loginUser } from "./services/userService";
import Joi from "joi";
import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

// npm install formik
function SingIn() {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    validate: formikValidateUsingJoi({
      email: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email({ tlds: { allow: false } }),
      password: Joi.string().min(6).max(1024).required(),
    }),

    async onSubmit(values) {
      try {
        await loginUser({ ...values });
        navigate("/");
      } catch ({ response }) {}
    },
  });

  return (
    <>
      <PageHeader title={"sing in"} description={"welcome back!"} />

      <form onSubmit={form.handleSubmit} noValidate autoComplete="off">
        {error && <div className="alert alert-danger">{error}</div>}
        <Input
          type="email"
          label="Email"
          required
          {...form.getFieldProps("email")}
          error={form.touched.email && form.errors.email}
        />

        <Input
          type="password"
          label="password"
          required
          {...form.getFieldProps("password")}
          error={form.touched.password && form.errors.password}
        />

        <button type="submit" disabled={!form.isValid} className="mt-3 singBtn">
          Sign In
        </button>
      </form>
    </>
  );
}

export default SingIn;
