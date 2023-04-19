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
      <Box display="flex" justifyContent="center" width="100vw" pt="50px">
        <Box
          textAlign="center"
          alignItems="center"
          bgcolor="white"
          borderRadius="10px"
          fontSize=".8rem"
        >
          <Typography
            variant={isLargeScreen ? "h6" : "body2"}
            fontWeight="500"
            pt=".8rem"
            textAlign="start"
            px={"2rem"}
          >
            Welcome to FriendSphere!
          </Typography>
          {toggleSignup ? (
            <>
              <SignupForm
                isLargeScreen={isLargeScreen}
                handleToggleSignup={handleToggleSignup}
              />
              <Button sx={{ fontSize: ".7rem" }} onClick={handleToggleSignup}>
                Already have an account? Login here
              </Button>
            </>
          ) : (
            <>
              <LoginForm
                isLargeScreen={isLargeScreen}
              />
              <Button sx={{ fontSize: ".7rem" }} onClick={handleToggleSignup}>
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
