import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profile page";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={LoginPage} />
          <Route path="/home" element={HomePage} />
          <Route path="/profilePage/:userId" element={ProfilePage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
