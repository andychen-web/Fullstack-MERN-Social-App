import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const LoginPage = ({ isLargeScreen }) => {
  const beige = "#F3F3F3";
  const [toggleSignup, setToggleSignup] = useState(false);

  const handleToggleSignup = () => {
    setToggleSignup(!toggleSignup);
  };

  return (
    <Box bgcolor={beige}>
      <Box
        display="flex"
        justifyContent="center"
        width="100vw"
        height="100vh"
        pt="100px"
      >
        <Box
          textAlign="center"
          maxWidth="80%"
          bgcolor="white"
          borderRadius="10px"
          width="50vw"
          height="auto"
          fontSize=".8rem"
        >
          <Typography
            variant={isLargeScreen ? "h6" : "body2"}
            fontWeight="500"
            pt=".5rem"
            textAlign="start"
            px="2rem"
          >
            Welcome to FriendSphere!
          </Typography>
          {toggleSignup ? (
            <>
              <SignupForm />
              <Button onClick={handleToggleSignup}>
                Already have an account? Login here
              </Button>
            </>
          ) : (
            <>
              <LoginForm />
              <Button onClick={handleToggleSignup}>
                Don't have an account? Sign up here
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
