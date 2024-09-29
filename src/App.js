import "./App.css";
import { useState } from "react";
import AppNavbar from "./components/AppNavbar";
import SideMenu from "./components/SideMenu";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Registration1 from "./pages/Registration1";
import Registration2 from "./pages/Registration2";
import Registration3 from "./pages/Registration3";
import DashBoardSenior from "./pages/DashBoardSenior";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import DashBoardCareGiver from "./pages/DashBoardCareGiver";
import { UserProvider } from "./UserContext";




function App() {
  const [user, setUser] = useState({
    isSuccess:false
  }) 

  const unsetUser = () => {
    localStorage.clear();
  }

  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Control sidebar open state
  const [isLoggedIn, setIsLoggedIn] = useState(user.isSuccess); // Temporary authentication state


  return (
    <>
      {/* Non-authenticated routes */}
     <UserProvider value={{user, setUser, unsetUser}}> 
      {!user.isSuccess ? (
        <Router>
          <AppNavbar isSidebarOpen={isSidebarOpen} isLoggedIn={isLoggedIn} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/welcome" element={<Home2 />} />
            <Route
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="/registration1" element={<Registration1 />} />
            <Route path="/registration2" element={<Registration2 />} />
            <Route path="/registration3" element={<Registration3 />} />
          </Routes>
        </Router>
      ) : (
        // Authenticated routes
        <Router>
          <div className="d-flex">
            {/* Conditionally display SideMenu when authenticated */}
            {isLoggedIn && (
              <SideMenu isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            )}

            <div className={`nav-content ${isSidebarOpen ? "shifted" : ""} `}>
              <AppNavbar isLoggedIn={isLoggedIn} />
              <div className="mx-4 mt-5">
                <Routes>
                  <Route
                    path="/dashboard-senior"
                    element={<DashBoardSenior />}
                  />
                  <Route
                    path="/dashboard-caregiver"
                    element={<DashBoardCareGiver />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      )}
      </UserProvider>
    </>
  );
}

export default App;
