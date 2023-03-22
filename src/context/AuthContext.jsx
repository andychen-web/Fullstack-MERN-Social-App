import React, { createContext, useState, useEffect } from "react";
const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getIsLoggedIn = () => {
    fetch("/api/loginForm", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoggedIn(data);
      });
  };

  // useEffect(() => {
  //   getIsLoggedIn();
  // }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, getIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthContextProvider };
