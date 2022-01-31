import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from '../redux/actions/auth'
// import axios from "axios";

const SignupPage = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { username, email, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === re_password) {
      signup(username, email, password, re_password);
      setAccountCreated(true);
    }
  };

  if (isAuthenticated) {
      return <Navigate replace to='/' />
  }
  if (accountCreated) {
      return <Navigate replace to='/login' />
  }

  return (
    <div className="auth">
      <h1 className="auth__title">Sign Up</h1>
        <p className="auth__lead">Create your Account</p>
      <form className="auth__form" onSubmit={(e) => onSubmit(e)}>
        <div className="auth__form__group">
          <input
            className="auth__form__input"
            type="text"
            placeholder="User Name*"
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="auth__form__group">
          <input
            className="auth__form__input"
            type="email"
            placeholder="Email*"
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
            placeholder="Password*"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          />
        </div>
        <div className="auth__form__group">
          <input
            className="auth__form__input"
            type="password"
            placeholder="Confirm Password*"
            name="re_password"
            value={re_password}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          />
        </div>
        <button className="auth__form__button" type="submit">
          Register
        </button>
      </form>
      {/* <button className="btn btn-danger mt-3" onClick={continueWithGoogle}>
        Continue With Google
      </button>
      <br />
      <button className="btn btn-primary mt-3" onClick={continueWithFacebook}>
        Continue With Facebook
      </button> */}
      <p className="auth__authtext">
        Already have an account? <Link className="auth__authtext__link" to="/login">Sign In</Link>
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(SignupPage);
