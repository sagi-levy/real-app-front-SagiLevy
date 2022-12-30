import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import { getUser } from "./services/userApiServices";

const Navbar = () => {
  const { user } = useAuth();
  // console.log(useAuth());
  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-dark bg-dark"
        aria-label="Sixth navbar example"
      >
        <div className="container-fluid">
          <Link to="/"> Expand at xl</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample06"
            aria-controls="navbarsExample06"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-xl-0">
              {user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="About" className="nav-link" href="#">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="sign-out" className="nav-link" href="#">
                      Sign Out
                    </NavLink>
                  </li>{" "}
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink to="sign-up-biz" className="nav-link" href="#">
                      sign up biz
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="sign-in" className="nav-link" href="#">
                      sign in
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="sign-up" className="nav-link" href="#">
                      sign up
                    </NavLink>
                  </li>{" "}
                </>
              )}
              {user && user.biz && (
                <li className="nav-item">
                  <NavLink to="my-cards" className="nav-link" href="#">
                    My Cards
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
