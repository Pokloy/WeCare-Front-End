import "./App.css";
import { useState, useEffect } from "react";
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
  // for getting token this is for global this is helped whit the UserContext.js
  const [user, setUser] = useState({
    // this is just set to null
    id: null,
    userType: null,
  });

  // for clearing token of logout
  const unsetUser = () => {
    localStorage.clear();
  };

  // this is where you generate the details of the user to be put in the global
  useEffect(() => {
    console.log(user);
    // fetch data from db
    fetch(`${process.env.REACT_APP_API_URL}/user-profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // if there is data passed go to if and if there is non else
        if (data.auth !== "Failed") {
          console.log(data);
          // the passed id will be set in the setUser and will be set globally carried in line 21 const [user, setUser] = useState and so on
          setUser({
            id: data.data.userId,
            userType: data.data.userType,
          });
        } else {
          setUser({
            id: null,
            userType: null,
          });
        }
      });
    console.log(localStorage);
  }, []);

  return (
    <>
      <UserProvider value={{ user, setUser, unsetUser }}>
        <Router>
          <AppNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/welcome" element={<Home2 />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard-caregiver"
              element={<DashBoardCareGiver />}
            />
            <Route path="/dashboard-senior" element={<DashBoardSenior />} />
            <Route path="/registration1" element={<Registration1 />} />
            <Route path="/registration2" element={<Registration2 />} />
            <Route path="/registration3" element={<Registration3 />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
