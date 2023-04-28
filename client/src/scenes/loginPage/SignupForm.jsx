import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";

// 建立一個schema物件，用來定義輸入資料的結構和驗證規則
const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  location: yup.string().required("required"),
  occupation: yup.string().required("required"),
  picture: yup.string().required("required"),
});

// 建立init form data object 以免表單內容出現undefined or null而無法提交
const initFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  location: "",
  occupation: "",
  picture: "",
};

const SignupForm = ({ isLargeScreen, handleToggleSignup }) => {
  const [pictureError, setPictureError] = useState("(not selected yet)");

  const handleFormSubmit = async (values, onSubmitProps) => {
    await register(values, onSubmitProps);
  };

  const register = async (values, onSubmitProps) => {
    // 將表單中所有值迭代，用append方法將每個key & value添加到 formData 物件中
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);

    const savedUserResponse = await fetch(
      "https://social-app-backend-3j7e.onrender.com/auth/register",
      {
        method: "POST",
        body: formData,
      }
    );
    onSubmitProps.resetForm();
    const savedUser = await savedUserResponse.json();
    if (savedUser) {
      //redirect to login page
      handleToggleSignup();
    }
  };

  return (
    // 表單驗證錯誤時 使用Formik顯示錯誤訊息
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initFormData}
      validationSchema={registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
              "& input": { py: ".8rem", fontSize: ".8rem" },
              "&:rb:-helper-text": { outline: "none" },
            }}
          >
            <>
              <TextField
                label="First Name"
                onChange={handleChange}
                value={values.firstName}
                // name attribute is like the key in the form object
                name="firstName"
                error={touched.firstName && errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{
                  borderRadius: "5px",
                  width: "70%",
                  mt: ".3rem",
                }}
              />
              <TextField
                label="Last Name"
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={touched.lastName && errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{
                  width: "70%",
                  borderRadius: "5px",
                  mt: ".3rem",
                }}
              />
              <TextField
                label="Location"
                onChange={handleChange}
                value={values.location}
                name="location"
                error={touched.location && errors.location}
                helperText={touched.location && errors.location}
                sx={{
                  borderRadius: "5px",
                  width: "70%",
                  mt: ".3rem",
                }}
              />
              <TextField
                label="Occupation"
                onChange={handleChange}
                value={values.occupation}
                name="occupation"
                error={touched.occupation && errors.occupation}
                helperText={touched.occupation && errors.occupation}
                sx={{
                  borderRadius: "5px",
                  width: "70%",
                  mt: ".3rem",
                }}
              />
              <Box borderRadius="5px" mt=".3rem">
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    px: isLargeScreen ? "3.5rem" : "2rem",
                  }}
                >
                  Upload Image
                  <input
                    type="file"
                    hidden
                    accept=".jpg,.jpeg,.png"
                    onChange={(e) => {
                      // similar to setState but with a key named picture
                      setFieldValue("picture", e.target.files[0]);

                      const file = e.target.files[0];
                      if (file) {
                        setPictureError(null);
                      }
                    }}
                  />
                </Button>
                <Box color="grey">{pictureError}</Box>
              </Box>
            </>

            <TextField
              label="Email"
              onChange={handleChange}
              value={values.email}
              name="email"
              error={touched.email && errors.email}
              helperText={touched.email && errors.email}
              sx={{
                borderRadius: "5px",
                width: "70%",
                mt: ".3rem",
              }}
            />
            <TextField
              label="Password"
              type="password"
              onChange={handleChange}
              value={values.password}
              name="password"
              error={touched.password && errors.password}
              helperText={touched.password && errors.password}
              sx={{
                borderRadius: "5px",
                width: "70%",
                mt: ".3rem",
              }}
            />
          </Box>
          {/* BUTTON */}
          <Box>
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{ mt: ".3rem" }}
            >
              Sign up
            </Button>
            <Typography
              onClick={() => {
                resetForm();
              }}
              sx={{
                textDecoration: "underline",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            ></Typography>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default SignupForm;
