import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import Navbar from "scenes/navbar";
import useMediaQuery from "@mui/material/useMediaQuery";

function Router() {
  const isLargeScreen = useMediaQuery("(min-width: 700px)");

  return (
    <BrowserRouter>
      <Navbar isLargeScreen={isLargeScreen} />
      <Routes>
        <Route
          path="/home"
          element={<HomePage isLargeScreen={isLargeScreen} />}
        />
        <Route path="/" element={<LoginPage isLargeScreen={isLargeScreen} />} />
        <Route
          path="/profilePage/:userId"
          element={<ProfilePage isLargeScreen={isLargeScreen} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
