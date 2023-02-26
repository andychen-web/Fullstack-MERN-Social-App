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
