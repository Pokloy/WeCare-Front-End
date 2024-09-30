import { Link, Navigate, NavLink } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import UserContext from "../UserContext";

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  function authenticate(e) {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/login-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.isSuccess === true) {
          localStorage.setItem("token", data.data.token);

          retrieveUserDetails(data.data.token);

          setUser({
            token: localStorage.getItem("token"),
          });

          console.log("log-in successfully");
        } else {
          console.log("log-in failed");
        }
      });
  }

  const retrieveUserDetails = (token) => {
    fetch(`${process.env.REACT_APP_API_URL}/user-profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.data.userId);

        setUser({
          id: data.data.userId,
          userType: data.data.userType,
        });
      });
  };

  return user.userType === "senior" && user.id !== null ? (
    <Navigate to="/dashboard-senior" />
  ) : user.userType === "caretaker" && user.id !== null ? (
    <Navigate to="/dashboard-caregiver" />
  ) : (
    <>
      <div className="background1">
        <div className="login-container">
          <div class="login-box">
            <h3 className="pt-4 pb-4">Login to your account</h3>
            <form onSubmit={(e) => authenticate(e)}>
              <div className="form-group">
                <label for="email" className="pb-3">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email Address"
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-text mb-4 mt-4">
                {/* <a href="#">Forgot Password?</a> */}
              </div>

              <button
                type="submit"
                className="btn btn-login"
                // onClick={handleLoginClick}
                // as={NavLink} to="/dashboard"
              >
                Login
              </button>

              <div className="signup-text">
                <small>
                  Don't have an account?{" "}
                  <Link as={NavLink} to="/registration1" exact>
                    Sign up
                  </Link>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
