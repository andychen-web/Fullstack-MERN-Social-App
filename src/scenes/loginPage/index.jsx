import useState from "react";
import { useMediaQuery, Box, Button, Typography } from "@mui/material";
import Form from "./Form";

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
          <Typography variant="h6">Welcome to FriendSphere!</Typography>
          <Form>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <Button variant="standard"> Login</Button>
          </Form>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
