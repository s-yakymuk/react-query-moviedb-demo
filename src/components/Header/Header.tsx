import classnames from "classnames";
import { Link, NavLink } from "react-router-dom";

import LOGO_URL from "@/assets/logo.png";
import { ROUTES } from "@/consts";

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
            className={({ isActive }) =>
              classnames(
                "rqe-header__link",
                isActive && "rqe-header__link--active"
              )
            }
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            to={ROUTES.about}
            className={({ isActive }) =>
              classnames(
                "rqe-header__link",
                isActive && "rqe-header__link--active"
              )
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
