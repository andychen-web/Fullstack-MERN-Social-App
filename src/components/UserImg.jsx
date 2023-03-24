import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const UserImg = () => {
  const [imgURL, setImgURL] = useState("");
  const getUserImg = async () => {
    try {
      const res = await fetch("/api/asset/userImg");
      const imgURL = await res.text();
      setImgURL(imgURL);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserImg();
  }, []);

  return (
    <Box>
      <img src={imgURL} alt="user" style={{ width: "60px", height: "auto" }} />
    </Box>
  );
};

export default UserImg;
