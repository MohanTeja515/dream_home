import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setAlert } from "../redux/actions/alert";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";

const Contact = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(
        `http://127.0.0.1:8000/contact/`,
        { name, email, subject, message },
        config
      )
      .then((res) => {
        if (res.data.success) {
          dispatch(setAlert(res.data.success, "success"));
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          dispatch(setAlert(res.data.error, "error"));
        }
      })
      .catch((err) => {
        dispatch(
          setAlert("Something went wrong while sending message", "error")
        );
      });
  };

  return (
    <HelmetProvider>
      <div className="contact">
        <Helmet>
          <title>Realest Estate - Contact</title>
          <meta name="description" content="Contact us" />
        </Helmet>
        <form className="contact__form" onSubmit={(e) => onSubmit(e)}>
          <label className="contact__form__label" htmlFor="name">
            Name*
          </label>
          <input
            className="contact__form__input"
            name="name"
            type="text"
            placeholder="Full Name"
            onChange={(e) => onChange(e)}
            value={name}
            required
          />
          <label className="contact__form__label" htmlFor="email">
            Email*
          </label>
          <input
            className="contact__form__input"
            name="email"
            type="email"
            placeholder="example@gmail.com"
            onChange={(e) => onChange(e)}
            value={email}
            required
          />
          <label className="contact__form__label" htmlFor="subject">
            Subject*
          </label>
          <input
            className="contact__form__input"
            name="subject"
            type="text"
            placeholder="Buying Home"
            onChange={(e) => onChange(e)}
            value={subject}
            required
          />
          <label className="contact__form__label" htmlFor="message">
            Message
          </label>
          <textarea
            className="contact__form__textarea"
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
            onChange={(e) => onChange(e)}
            value={message}
          />
          <button className="contact__form__button" htmltype="submit">
            Send
          </button>
        </form>
      </div>
    </HelmetProvider>
  );
};

export default connect(null, { setAlert })(Contact);
