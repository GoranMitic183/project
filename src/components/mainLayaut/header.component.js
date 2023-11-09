import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./header.module.css";
import loginQuery from "../../query/loginQuery";

const Header = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [isToken, setIsToken] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsToken(true);
    }
  }, [isToken]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleLogin = async (userData) => {
    await loginQuery({ userData });
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  };

  const handleSchedule = () => {
    navigate("/schedule");
  };

  return (
    <div className={`container ${classes.body}`}>
      <nav className={`navbar bg-dark ${classes.header}`} data-bs-theme="dark">
        <div className="container-fluid" style={{ justifyContent: "inherit" }}>
          <h3 className={classes.logo}>GORAN MITIC</h3>
          {!isToken ? (
            <div style={{ display: "flex" }}>
              <div className="form-group mx-sm-3 mb-2">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className="form-group mx-sm-3 mb-2">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  onChange={handleInputChange}
                ></input>
              </div>
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          ) : (
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={handleSchedule}
            >
              Schedule
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
