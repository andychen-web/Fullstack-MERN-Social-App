import React, { useState, useEffect } from "react";
const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const getIsLoggedIn = async () => {
  //   const res = await fetch(
  //     "https://social-app-backend-3j7e.onrender.com/auth/login",
  //     {
  //       method: "GET",
  //     }
  //   );
  //   const data = await res.json();
  //   setIsLoggedIn(data);
  // };

  // useEffect(() => {
  //   getIsLoggedIn();
  // }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthContextProvider };
