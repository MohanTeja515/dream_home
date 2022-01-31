import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { connect } from "react-redux";
import { login } from "../redux/actions/auth";

const LoginPage = ({ login }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const isLogged = localStorage.getItem('access')

  if (isLogged) {
    return <Navigate replace to="/" />;
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="auth">
        <h1 className="auth__title">Sign In</h1>
        <p className="auth__lead">Sign into your Account</p>
        <form className="auth__form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth__form__group">
            <input
              className="auth__form__input"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="auth__form__group">
            <input
              className="auth__form__input"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="6"
              required
            />
          </div>
          <button className="auth__form__button">Login</button>
        </form>
        <p className="auth__authtext">
          Don't have an account?{" "}
          <Link className="auth__authtext__link" to="/signup">
            Sign Up
          </Link>
        </p>
        <p className="auth__authtext">
          Forgot your Password? <Link to="/reset-password">Reset Password</Link>
        </p>
      </div>
    </HelmetProvider>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginPage);
