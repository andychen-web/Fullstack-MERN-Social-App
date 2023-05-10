import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import Navbar from "scenes/navbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

function Router() {
  const isLargeScreen = useMediaQuery("(min-width: 420px)");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage isLargeScreen={isLargeScreen} />} />
        <Route
          path="/home"
          element={
            <>
              <Navbar isLargeScreen={isLargeScreen} />
              <HomePage isLargeScreen={isLargeScreen} />
            </>
          }
        />
        <Route
          path="/profilePage/:userId"
          element={
            <>
              <Navbar isLargeScreen={isLargeScreen} />
              <ProfilePage isLargeScreen={isLargeScreen} />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
