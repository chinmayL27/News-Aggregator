import React, { useState, useEffect } from "react";
import logo from "../../Images/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    navigate(`/query/${query}`);
  };
  const logout = () => {
    window.localStorage.removeItem("token");
    navigate("/");
  };
  const profilebtn = () => {
    navigate("/admin");
  };
  return (
    <div>
      <div className="upper-header container-fluid" style={{ display: "flex" }}>
        <a className="navbar-brand" href="/newsfeed">
          <img src={logo} alt="" width="50" height="50" />
        </a>
        <form className="form-inline  my-2 my-lg-0" onSubmit={onSubmit}>
          <div className="search-container">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              className="search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                {/* <a className="nav-link" href="#">
                  HOME
                </a> */}
                <Link to="/newsfeed" className="nav-link active">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/sports" className="nav-link active">
                  SPORTS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/general" className="nav-link active">
                  GENERAL
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/business" className="nav-link active">
                  BUSINESS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/technology" className="nav-link active">
                  TECHNOLOGY
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/entertainment" className="nav-link active">
                  ENTERTAINMENT
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/category/health" className="nav-link active">
                  HEALTH
                </Link>
              </li>
            </ul>
          </div>
          <ul>
            <button
              className="btn btn-outline-white my-2 my-sm-0"
              onClick={logout}
              type="submit"
            >
              LOGOUT
            </button>
            <button
              className="btn btn-outline-white my-2 my-sm-0"
              onClick={profilebtn}
              type="submit"
            >
              PROFILE
            </button>
          </ul>
        </div>
      </nav>

      <div className="box">
        <div className="box-1"></div>
        <div className="box-2"></div>
      </div>
    </div>
  );
};

export default Navbar;
