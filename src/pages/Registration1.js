import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getRegisteredData } from "../store/registration_action";
import { useState } from "react";

export default function Registration1() {

  const dispatch = useDispatch();

  const [initialData,setInitialData] = useState({
    email:"",
    password:""
  })

  function collectData(e){  
    setInitialData({...initialData,[e.target.name]:e.target.value });

    dispatch(getRegisteredData(initialData));
  }

  return (
    <div className="background1">
      <div className="login-container">
        <div class="login-box">
          <span class="material-symbols-outlined">arrow_back</span>
          <h3 className="pb-3">Let's create your account</h3>
          <form>
            <div className="form-group">
              <label for="email" className="pb-3">
                Step 1: Account Details
              </label>
              <label for="email" className="pb-3">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email Address"
                name="email"
                value={initialData.email}
                onChange={collectData}
              />
            </div>
            <div className="form-group">
              <label for="password" className="pb-3">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Password"
                name="password"
                value={initialData.password}
                onChange={collectData}
              />
            </div>
            <div className="form-group">
              <label for="password" className="pb-3">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Re Enter Password"
              />
            </div>
            <Link as={NavLink} to="/registration2" className="btn btn-login">
              Next
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
