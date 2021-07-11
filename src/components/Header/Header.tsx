import React from "react";
import { Link, NavLink } from "react-router-dom";

import LOGO_URL from "assets/images/logo.png";
import { ROUTES } from "consts";

import "./Header.css";

const Header = () => {
  return (
    <header className="rqe-header">
      <Link to={ROUTES.root} className="rqe-header__logo">
        <img
          src={LOGO_URL}
          alt="Movie DB logo"
          className="rqe-header__logo-image"
        />
      </Link>
      <ul>
        <li>
          <NavLink
            to={ROUTES.movies}
            className="rqe-header__link"
            activeClassName="rqe-header__link--active"
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            to={ROUTES.about}
            className="rqe-header__link"
            activeClassName="rqe-header__link--active"
          >
            About
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
