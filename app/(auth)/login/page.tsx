"use client";

import React, { useState } from "react";
import style from "./style.module.css";

import { IoEyeOffSharp } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { BASE_URL } from "../../../lib/constants";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
type ValueTypes = {
  email: string;
  password1: string;
  password2: string;
  first_name: string;
  last_name: string;
};

const initialValues: ValueTypes = {
  email: "",
  password1: "",
  password2: "",
  first_name: "",
  last_name: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password1: Yup.string()
    .min(8, "Password is too short, At lease 8 characters")
    .required("Required"),
  password2: Yup.string()
    .oneOf([Yup.ref("password1")], "Passwords must match")
    .required("Required"),
  first_name: Yup.string().required("Required"),
  last_name: Yup.string().required("Required"),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    // Toggle password visibility
  };

  //  handle submit
  const handleSubmit = (values: ValueTypes) => {
    setLoading(true);
    fetch(`${BASE_URL}/api/user/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className={`${style.container}`}>
        <h1 className="text-6xl text-center">Loading...</h1>
      </div>
    );
  }

  return (
    <main className={`${style.container}`}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values);
        }}
      >
        <Form className="bg-gray-100 p-4 rounded-lg w-96">
          <h1 className={`${style.title}`}>Login</h1>
          {/* Email */}
          <div className="mb-5">
            <label className={`${style.label}`} htmlFor="email">
              Email
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className={`${style.input}`}
            />
            <ErrorMessage
              name="email"
              component="section"
              className={`${style.error}`}
            />
          </div>

          {/* First Name */}
          <div className="mb-5">
            <label className={`${style.label}`} htmlFor="first_name">
              First Name
            </label>
            <Field
              type="text"
              name="first_name"
              id="first_name"
              className={`${style.input}`}
            />
            <ErrorMessage
              name="first_name"
              component="section"
              className={`${style.error}`}
            />
          </div>

          {/* Last Name */}
          <div className="mb-5">
            <label className={`${style.label}`} htmlFor="last_name">
              Last Name
            </label>
            <Field
              type="text"
              name="last_name"
              id="last_name"
              className={`${style.input}`}
            />
            <ErrorMessage
              name="last_name"
              component="section"
              className={`${style.error}`}
            />
          </div>

          {/* Password1 */}
          <div className="mb-5">
            <label className={`${style.label}`} htmlFor="password1">
              Password
            </label>
            <div className="relative">
              <Field
                type={showPassword ? "text" : "password"}
                name="password1"
                id="password1"
                className={`${style.input}`}
              />
              {!showPassword ? (
                <IoEyeOffSharp
                  onClick={() => handleShowPassword()}
                  className="cursor-pointer absolute right-2 top-4"
                />
              ) : (
                <IoEyeSharp
                  onClick={() => handleShowPassword()}
                  className="cursor-pointer absolute right-2 top-4"
                />
              )}
            </div>
            <ErrorMessage
              name="password1"
              component="section"
              className={`${style.error}`}
            />
          </div>

          {/* Password2 */}
          <div className="mb-5">
            <label className={`${style.label}`} htmlFor="password2">
              Password
            </label>
            <div className="relative">
              <Field
                type={showPassword ? "text" : "password"}
                name="password2"
                id="password2"
                className={`${style.input}`}
              />
              {!showPassword ? (
                <IoEyeOffSharp
                  onClick={() => handleShowPassword()}
                  className="cursor-pointer absolute right-2 top-4"
                />
              ) : (
                <IoEyeSharp
                  onClick={() => handleShowPassword()}
                  className="cursor-pointer absolute right-2 top-4"
                />
              )}
            </div>
            <ErrorMessage
              name="password2"
              component="section"
              className={`${style.error}`}
            />
          </div>

          {/* button submit */}
          <button type="submit" className={`${style.button}`}>
            Submit
          </button>
        </Form>
      </Formik>
    </main>
  );
}
