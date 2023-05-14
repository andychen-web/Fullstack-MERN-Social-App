import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  user: {
    firstName: "",
    lastName: "",
    picturePath: "",
  },
  token: null,
  friends: null,
};

// actions
const setMode = () => {
  return {
    type: "SET_MODE",
  };
};
const setLogin = ({ user, token }) => {
  return {
    type: "SET_LOGIN",
    payload: { user, token },
  };
};
const setLogout = () => {
  return {
    type: "SET_LOGOUT",
  };
};
const setFriends = (friends) => {
  return {
    type: "SET_FRIENDS",
    payload: friends,
  };
};

const setPost = (post) => {
  return {
    type: "SET_POST",
    payload: { post },
  };
};

const setPosts = (posts) => {
  return {
    type: "SET_POSTS",
    payload: { posts },
  };
};

// reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MODE":
      return {
        ...state,
        mode: state.mode === "light" ? "dark" : "light",
      };
    case "SET_LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "SET_LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
      };
    case "SET_FRIENDS":
      if (state.user.friends) {
        return {
          ...state,
          friends: action.payload.friends,
        };
      } else {
        console.error("user friends do not exist");
        return state;
      }
    case "SET_POSTS":
      return {
        ...state,
        posts: action.payload.posts,
      };
    case "SET_POST":
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) {
          return action.payload.post;
        }
        return post;
      });
      return {
        ...state,
        posts: updatedPosts,
      };
    default:
      return state;
  }
};

export default authReducer;
export { setMode, setFriends, setLogin, setLogout, setPost, setPosts };
export const store = configureStore({
  reducer: authReducer,
});
