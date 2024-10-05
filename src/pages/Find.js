import { useContext, useEffect, useState } from "react";
import UserContext from "../UserContext";
import { Link, Navigate, NavLink } from "react-router-dom";

const Find = () => {
  const { user } = useContext(UserContext);

  return user.id === null ? (
    <Navigate to="/login" />
  ) : (
    <div>
      <div className=" nav-content shifted">HEllo</div>
    </div>
  );
};

export default Find;
