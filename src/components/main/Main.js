import React from "react";
import { NavLink as Link } from "react-router-dom";
import Routes from "../../routes/Routes";
import "./Main.css"

export const Main = () => {
  return (
    <div className="body">
      <nav className="nav nav-pills flex-column flex-sm-row">
        <Link className="flex-sm-fill text-sm-center nav-link " exact to="/posts">
          Latest Posts
        </Link>
        <Link
          className="flex-sm-fill text-sm-center nav-link "
          to="/archival"
        >
          Archival
        </Link>
      </nav>
      
      <Routes />
    </div>
  );
};
