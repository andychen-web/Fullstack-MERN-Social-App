import { Box } from "@mui/material";
import Advert from "scenes/widgets/Advert";
import FriendList from "scenes/widgets/FriendList";
import MyPost from "scenes/widgets/MyPost";
import Posts from "scenes/widgets/Posts";
import User from "scenes/widgets/User";
import { useSelector } from "react-redux";

const HomePage = ({ isLargeScreen }) => {

  const { _id, picturePath } = useSelector((state) => state.user.user);
  return (
    <Box
      overflowX={"hidden"}
      display={"flex"}
      flexDirection={isLargeScreen ? "row" : "column"}
      gap="1rem"
      px={"1rem"}
    >
      <User userID={_id} picturePath={picturePath} />
      <Box display={"flex"} flexDirection={"column"} gap="2rem">
        <MyPost picturePath={picturePath} />
        <Posts />
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap="1rem">
        <Advert />
        <FriendList />
      </Box>
    </Box>
  );
};

export default HomePage;
