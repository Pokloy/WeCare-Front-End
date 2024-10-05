import Banner from "../components/Banner";
import ProfileCard from "../components/ProfileCard";
import SideMenu from "../components/SideMenu";
import { useContext, useEffect, useState } from "react";
import UserContext from "../UserContext";
import { Link, Navigate, NavLink } from "react-router-dom";

const DashBoardSenior = () => {
  const { user } = useContext(UserContext);
  const [activeNavHome, setActiveNavHome] = useState(true);

  return user.id === null ? (
    <Navigate to="/login" />
  ) : (
    <div>
      <SideMenu />
      <div className=" nav-content shifted">
        <Banner />
        <ProfileCard />
      </div>
    </div>
  );
};

export default DashBoardSenior;
