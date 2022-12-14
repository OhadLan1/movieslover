//npm i react-router-dom
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to={"home"} className="a">
            <div>
              movies lover{" "}
              <i className="bi bi-film" style={{ margin: "10px" }}></i>
            </div>{" "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link activeStyle" : "nav-link notActive"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    isActive ? "nav-link activeStyle" : "nav-link notActive"
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="search"
                  className={({ isActive }) =>
                    isActive ? "nav-link activeStyle" : "nav-link notActive"
                  }
                >
                  search
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="favourit"
                  className={({ isActive }) =>
                    isActive ? "nav-link activeStyle" : "nav-link notActive"
                  }
                >
                  favourit
                </NavLink>
              </li>
            </ul>

            <div>
              <ul className="d-flex navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="signin"
                    className={({ isActive }) =>
                      isActive ? "nav-link activeStyle" : "nav-link notActive"
                    }
                  >
                    sing in
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="signup"
                    className={({ isActive }) =>
                      isActive ? "nav-link activeStyle" : "nav-link notActive"
                    }
                  >
                    sing up
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
