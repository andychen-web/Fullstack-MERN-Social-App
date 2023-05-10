import { Box } from "@mui/material";

const UserImg = ({ imgURL }) => {
  return (
    <Box>
      <img
        src={`https://social-app-backend-3j7e.onrender.com/assets/${imgURL}`}
        alt="user"
        style={{
          width: "60px",
          objectFit: "cover",
          borderRadius: "50%",
          height: "60px",
        }}
      />
    </Box>
  );
};

export default UserImg;
