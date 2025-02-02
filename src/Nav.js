import React from "react";
// import 'bootstrap/js/dist/dropdown'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-white bg-white px-3">
      <i className="navbar-brand bi bi-justify-left fs-4"></i>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="javascript:void(0)"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Yousof
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <a className="dropdown-item" href="javascript:void(0)">
                Profile
              </a>
              <a className="dropdown-item" href="javascript:void(0)">
                Setting
              </a>
              <a className="dropdown-item" href="javascript:void(0)">
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>

  );
};

export default Nav;
 