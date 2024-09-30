import Banner from "../components/Banner";
import ProfileCard from "../components/ProfileCard";
import SideMenu from "../components/SideMenu";
import { useContext, useEffect, useState } from "react";
import UserContext from "../UserContext";
import { Link, Navigate, NavLink } from "react-router-dom";

const DashBoardSenior = () => {
  const { user } = useContext(UserContext);

  return user.id === null ? (
    <Navigate to="/login" />
  ) : (
    <div>
      <div>
        <SideMenu />
      </div>
      <Banner />
      <ProfileCard />
    </div>
  );
};

export default DashBoardSenior;
