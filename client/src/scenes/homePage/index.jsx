import { Box } from "@mui/material";
import Advert from "scenes/widgets/Advert";
import FriendList from "scenes/widgets/FriendList";
import MyPost from "scenes/widgets/MyPost";
import Posts from "scenes/widgets/Posts";
import User from "scenes/widgets/User";
import { Outlet } from "react-router-dom";

const HomePage = ({ isLargeScreen }) => {
  return (
    <Box
      overflowX={"hidden"}
      display={"flex"}
      flexDirection={isLargeScreen ? "row" : "column"}
      gap="1rem"
      px={"1rem"}
    >
      <User />
      <Box display={"flex"} flexDirection={"column"} gap="2rem">
        <MyPost />
        <Posts />
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap="1rem">
        <Advert />
        <FriendList />
      </Box>
      <Outlet />
    </Box>
  );
};

export default HomePage;
