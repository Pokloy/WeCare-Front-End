import { Link, NavLink } from "react-router-dom";

export default function Registration2() {
  return (
    <div className="background1">
      <div className="login-container">
        <div class="login-box">
          <Link
            as={NavLink}
            to="/registration1"
            exact
            class="material-symbols-outlined"
          >
            arrow_back
          </Link>
          <h3 className="pb-3">A few more steps</h3>
          <form>
            <div className="form-group">
              <label for="email" className="pb-3">
                Step 2: Profile Setup
              </label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
              />
            </div>
            <div className="form-group">
              <label for="password" className="pb-3">
                Display Name
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Display Name"
              />
            </div>
            <div className="form-group">
              <label for="password" className="pb-3">
                Contact No.
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Re Enter Password"
              />
            </div>
            <div className="form-group">
              <label for="password" className="pb-3">
                Birthday.
              </label>
              <input type="date" id="start" name="trip-start" />
            </div>
            <Link as={NavLink} to="/registration3" className="btn btn-login">
              Next
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
