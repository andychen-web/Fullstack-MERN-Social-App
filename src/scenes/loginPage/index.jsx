import useState from "react";
import { useMediaQuery, Box, Button, Form } from "@mui/material";

const LoginPage = () => {
  const beige = "#F3F3F3";

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
          width="50vw"
          height="50vh"
          fontSize=".8rem"
        >
          <span>
            Welcome to FriendSphere, where making friends is so easy!{" "}
          </span>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <Button variant="standard"> Login</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
