import React from "react";
import navLinks from "../../assets/fetch-data/navLinks";
import "./sidebar.scss";
import { NavLink } from "react-router-dom";
const SideBar = () => {

 
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2 className="sidebar__title">
          <span className="sidebar__span">
            <i className="ri-taxi-line sidebar__icon"></i>
          </span>
          UberX
        </h2>
      </div>
      <div className="sidebar__content">
        <div className="sidebar__menu">
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li key={index} className="nav__item">
                <NavLink
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }
                  to={item.path}
                >
                  <i className={item.icon}></i>

                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar__bottom">
          <span className="sidebar__bottom-span">
            <i className="ri-logout-circle-line  sidebar__icon-log "></i> Log
            Out
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
