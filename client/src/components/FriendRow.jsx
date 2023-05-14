import { Box } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UserImg from "./UserImg";
import { setFriends } from "state";

const FriendRow = () => {
  const friends = useSelector((state) => state.friends);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const userId = useSelector((state) => state.user._id);

//   const addRemoveFriend = async (friendID) => {
//     try {
//       const response = await fetch(
//         `https://social-app-backend-3j7e.onrender.com/users/${userId}/${friendID}`,
//         {
//           method: "PATCH",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const data = await response.json();
//       dispatch(setFriends({ friends: data }));
//     } catch (error) {
//       console.error("Error adding friend:", error);
//     }
//   };

//   return friends.map((friend) => (
//     <FlexBetween key={friend._id}>
//       <Box height="2rem" py=".5rem" display="flex" alignItems="center">
//         <UserImg imgURL={friend.picturePath} />
//         <Box pl=".8rem" fontSize={".9rem"}>
//           {`${friend.firstName} ${friend.lastName}`}
//           <Box fontSize={".8rem"} color="grey">
//             {friend.occupation}
//           </Box>
//         </Box>
//       </Box>
//       <PersonRemoveIcon
//         sx={{
//           background: "hsl(200, 53%, 90%)",
//           color: "hsl(210, 80%, 65%)",
//           fontSize: ".8rem",
//           padding: "5px",
//           boxShadow: "5px",
//           borderRadius: "1rem",
//           cursor: "pointer",
//         }}
//         onClick={() => addRemoveFriend(friend._id)}
//       />
//     </FlexBetween>
//   ));
// };

export default FriendRow;
