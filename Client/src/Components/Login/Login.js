import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = JSON.stringify({
        email: email,
        password: password,
      });

      const response = await axios.post("http://localhost:8000/login", data, {
        headers: { "Content-Type": "application/json" },
      });

      const token = response.data.token;

      window.localStorage.setItem("token", token);

      navigate("/newsfeed", { replace: true });

      console.log(response.data.body);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="outer">
        {/* <div className="img-wave"><img src={image} alt=""/></div> */}
        <div className="center">
          <h1>Login</h1>
          <form id="login-form" onSubmit={onSubmit}>
            <div className="txt_field">
              <input
                type="text"
                id="login-email"
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
                id="login-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span></span>
              <label>Password</label>
            </div>
            <div className="pass">Forgot Password?</div>
            <button
              type="submit"
              id="login-button"
              className="click-button"
              value="Login"
            >
              Login
            </button>
            <div className="signup_link">
              Not a member?{" "}
              <Link className="nav-link" to={"/signup"}>
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
