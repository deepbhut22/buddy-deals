import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Optional: Clear stored product on mount to avoid stale data
    return () => {
      localStorage.removeItem("pendingProduct");
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post("http://localhost:5000/api/v1/user-auth/login", formData, {
        withCredentials: true
      });

      console.log(res);

      // Retrieve the redirect path from URL params
      const params = new URLSearchParams(location.search);
      const redirectPath = params.get("redirect") || "/";

      // Check if there's a pending product and restore it
      // const pendingProduct = localStorage.getItem("pendingProduct");
      // if (pendingProduct) {
      //   navigate(redirectPath, { state: { product: JSON.parse(pendingProduct) } });
      //   localStorage.removeItem("pendingProduct"); // Clear stored product after use
      // } else {
      //   navigate(redirectPath); // Redirect normally if no product state is stored
      // }

      navigate("/")
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Please sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Sign in
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-muted mb-0">
            Don't have an account?{" "}
            <Link to="/register" className="text-decoration-none" style={{ color: "#22c55e" }}>
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
