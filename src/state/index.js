// initialState, with light/dark mode, user info, authentication token, array of posts
const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};
// actions
const setMode = () => {
  return {
    type: "SET_MODE",
  };
};
const setLogin = (user, token) => {
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
    payload: { friends },
  };
};

const setPOST = (post) => {
  return {
    type: "SET_POST",
    payload: { post },
  };
};

const setPOSTS = (posts) => {
  return {
    type: "SET_POSTS",
    payload: { posts },
  };
};

// reducers
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
    case "SET_FRIENDS":
      if (state.user) {
        return {
          ...state,
          friends: action.payload.friends,
        };
      } else {
        console.log("user friends do not exist");
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
export { setMode, setFriends, setLogin, setLogout, setPOST, setPOSTS };
