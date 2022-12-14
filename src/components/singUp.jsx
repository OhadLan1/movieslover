import Input from "./common/input";
import PageHeader from "./common/pageHeader";
import formikValidateUsingJoi from "./utils/formikValidateUsingJoi";
import { createUser } from "./services/userService";
import Joi from "joi";
import { useState } from "react";
import { useFormik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";

// npm install formik
function SingUp() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validate: formikValidateUsingJoi({
      name: Joi.string().min(2).max(255).required(),
      email: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email({ tlds: { allow: false } }),
      password: Joi.string().min(6).max(1024).required(),
    }),

    async onSubmit(values) {
      try {
        await createUser({ ...values, biz: false });
        navigate("/signin");
      } catch ({ response }) {
        setError(response.data);
        console.log(response, values);
      }
    },
  });

  return (
    <>
      <PageHeader title={"sing up"} description={"you lucky  its free"} />

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

        <Input
          type="name"
          label="name"
          required
          {...form.getFieldProps("name")}
          error={form.touched.name && form.errors.name}
        />

        <button
          type="submit"
          disabled={!form.isValid}
          className=" mt-3 singBtn"
        >
          Sign Up
        </button>
      </form>
    </>
  );
}

export default SingUp;
