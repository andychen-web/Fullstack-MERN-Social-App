import { Box } from "@mui/material";

const UserImg = ({ imgURL }) => {
  return (
    <Box>
      <img
        src={`http://localhost:3001/assets/${imgURL}`}
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
