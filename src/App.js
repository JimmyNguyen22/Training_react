import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          Cybersoft
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { borderRadius: "10px" } : {}
                }
                className={({ isActive }) =>
                  isActive ? "nav-link bg-light text-dark" : "nav-link"
                }
                to="/"
              >
                Home <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link bg-light text-dark" : "nav-link"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link bg-light text-dark" : "nav-link"
                }
                to="/contact"
              >
                contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link bg-light text-dark" : "nav-link"
                }
                to="/reactform"
              >
                React form
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link bg-light text-dark" : "nav-link"
                }
                to="/lifecycle"
              >
                Lifecycle
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link bg-light text-dark" : "nav-link"
                }
                to="/state"
              >
                State
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link bg-light text-dark" : "nav-link"
                }
                to="/props"
              >
                Props
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                B??i t???p
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link bg-light dropdown-item text-dark"
                      : "nav-link dropdown-item text-dark"
                  }
                  to="/baitaplayout"
                >
                  B??i t???p layout
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link bg-light dropdown-item text-dark"
                      : "nav-link dropdown-item text-dark"
                  }
                  to="/baitapglasses"
                >
                  B??i t???p glasses
                </NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Redux
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link bg-light dropdown-item text-dark"
                      : "nav-link dropdown-item text-dark"
                  }
                  to="/demonumber"
                >
                  Demo number
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link bg-light dropdown-item text-dark"
                      : "nav-link dropdown-item text-dark"
                  }
                  to="/demochonxe"
                >
                  DemoChonXe
                </NavLink>{" "}
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link bg-light dropdown-item text-dark"
                      : "nav-link dropdown-item text-dark"
                  }
                  to="/demoformredux"
                >
                  demoformredux
                </NavLink>{" "}
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link bg-light dropdown-item text-dark"
                      : "nav-link dropdown-item text-dark"
                  }
                  to="/demoburger"
                >
                  Demo Burger
                </NavLink>
              </div>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>

      {/* V??? tr??? component s??? ??c load ??? link con */}
      <Outlet />
    </div>
  );
}

export default App;
