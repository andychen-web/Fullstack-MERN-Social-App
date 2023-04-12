import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const LoginPage = ({ isLargeScreen }) => {
  const [toggleSignup, setToggleSignup] = useState(false);

  const handleToggleSignup = () => {
    setToggleSignup(!toggleSignup);
  };

  return (
    <Box>
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
          maxHeight={toggleSignup ? "100%" : "55%"}
          minHeight={isLargeScreen ? "80%" : "50%"}
          fontSize=".8rem"
        >
          <Typography
            variant={isLargeScreen ? "h6" : "body2"}
            fontWeight="500"
            pt=".8rem"
            textAlign="start"
            px={isLargeScreen ? "2rem" : "1rem"}
          >
            Welcome to FriendSphere!
          </Typography>
          {toggleSignup ? (
            <>
              <SignupForm isLargeScreen={isLargeScreen} />
              <Button
                sx={{ fontSize: isLargeScreen ? "1rem" : ".7rem" }}
                onClick={handleToggleSignup}
              >
                Already have an account? Login here
              </Button>
            </>
          ) : (
            <>
              <LoginForm isLargeScreen={isLargeScreen} />
              <Button
                sx={{ fontSize: isLargeScreen ? "1rem" : ".7rem" }}
                onClick={handleToggleSignup}
              >
                Don't have an account? <br></br> Sign up here
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
