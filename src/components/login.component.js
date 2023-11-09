import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [formData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...formData, [name]: value });
  };

  async function fetchLoginStatus() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "http://localhost:3001/login",
        formData
      );
      if (response.status === "ok") {
        localStorage.setItem("token", response.token);
        toast.success("Successful login!");
        navigate("/home");
      } else {
        setError("Invalid username/password");
        return toast.error(error);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      return toast.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    await fetchLoginStatus();
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Login"}
        </button>
        <br />
        <div>
          <NavLink to="/register">Register</NavLink>
        </div>
        {/* {error && <p>{error}</p>} */}
      </form>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Login;
