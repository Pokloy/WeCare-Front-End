import Banner from "../components/Banner";
import ProfileCard from "../components/ProfileCard";
import SideMenu from "../components/SideMenu";
import UserContext from "../UserContext";
import { Link, Navigate, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

const DashBoardCareGiver = () => {
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

export default DashBoardCareGiver;
