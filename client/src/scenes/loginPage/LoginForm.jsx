import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import * as yup from "yup";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { setLogin } from "state";

// 建立一個schema物件，用來定義輸入資料的結構和驗證規則
const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

// 建立init formData 以免內容出現undefined或null導致表單無法送出
const initialLoginValues = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const [loginFailMessage, setloginFailMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch(
      "https://social-app-backend-3j7e.onrender.com/auth/login",
      {
        method: "POST",
        // specify format is json for the server to correctly parse the request body
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    );
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();
    const failMessage = loggedIn.msg;
    if (!failMessage) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      navigate("/home");
    } else if (failMessage) {
      setloginFailMessage(failMessage);
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    await login(values, onSubmitProps);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialLoginValues}
      validationSchema={loginSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form>
          <Box display="flex" flexDirection="column" mx="2rem">
            <TextField
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={touched.email && errors.email}
              helperText={touched.email && errors.email}
              sx={{ mt: ".5rem" }}
            />
            <TextField
              label="Password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={touched.password && errors.password}
              helperText={touched.password && errors.password}
              sx={{ mt: ".5rem" }}
            />
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{ mt: "1rem", bgcolor: "#42a5f5" }}
            >
              Login
            </Button>
            <Box color="#dc3545">{loginFailMessage}</Box>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
