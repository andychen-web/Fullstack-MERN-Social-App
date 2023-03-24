import React, { useState, useEffect } from "react";
const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getIsLoggedIn = async () => {
    const res = await fetch("/api/loginForm", {
      method: "GET",
    });
    const data = await res.json();
    setIsLoggedIn(data);
  };

  useEffect(() => {
    getIsLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, getIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthContextProvider };
