import React from "react";
import { Link } from "react-router-dom";

const PrivateRoute = (props) => {
  return (
    <div className="notfound">
      <h1 className="notfound__heading">You are Not Autherized</h1>
      <p className="notfound__paragraph">
        Please <Link to="/login">LOGIN</Link> to view this page
      </p>
    </div>
  );
};

export default PrivateRoute;
