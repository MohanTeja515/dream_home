import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/hocf/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Listings from "./pages/Listings";
import ListingDetails from "./pages/ListingDetails";
import NotFound from "./components/NotFound";
import { Provider } from "react-redux";
import store from "./redux/store";
import './sass/main.scss'
import SignupPage from "./pages/SignupPage";
import AccountActivationPage from "./pages/AccountActivationPage";
import ResetPasswordConfirmPage from "./pages/ResetPasswordConfirmPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/filter" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route
              path="/activate/:uid/:token"
              element={<AccountActivationPage />}
            />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route
              path="/password/reset/confirm/:uid/:token"
              element={<ResetPasswordConfirmPage />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Listings />} />
            <Route path="/listings/:id" element={<ListingDetails />} /> 
            <Route path="/private-route" element={<PrivateRoute />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
