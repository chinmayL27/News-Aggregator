import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

import axios from "axios";

let style2 = { marginRight: "30px" };

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = JSON.stringify({
        email: email,
        password: password,
      });

      const response = await axios.post("http://localhost:8000/signup", data, {
        headers: { "Content-Type": "application/json" },
      });

      const message = response.data;
      console.log(message);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="outer">
        <div className="center register">
          <h1>Sign-Up</h1>
          <form id="signupForm" onSubmit={onSubmit}>
            <div className="txt_field" style={style2}>
              <input
                type="email"
                id="signup-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span></span>
              <label>Email</label>
            </div>
            <div className="txt_field">
              <input
                type="password"
                id="signup-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span></span>
              <label>Password</label>
            </div>
            <button
              type="submit"
              className="click-button registerbutton"
              id="register-button"
            >
              Register
            </button>
            <div className="signup_link">
              Already a member?{" "}
              <Link className="nav-link" to={"/login"}>
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
