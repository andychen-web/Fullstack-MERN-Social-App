import React, { createContext, useState, useEffect } from "react";
import LoginForm from "scenes/loginPage/LoginForm";
const AuthContext = createContext();

const AuthContextProvider = () => {
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

  useEffect(() => {
    getIsLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, getIsLoggedIn }}>
      <LoginForm />
    </AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthContextProvider };
