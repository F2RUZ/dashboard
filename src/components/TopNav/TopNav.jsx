import "./topnav.scss";
import { Link } from "react-router-dom";
import profile from "../../assets/images/human.jpg";

const TopNav = () => {
 
  return (
    <div className="top__nav">
      <div className="top__nav-wrapper">
        <div className="search__box">
          <input type="text" placeholder="Search or Type" />
          <span>
            <i className="ri-search-eye-line search__icon"></i>
          </span>
        </div>
        <div className="top__nav-right">
          <span className="notifikation">
            <i className="ri-notification-3-line search__icon"></i>
            <span className="badge"></span>
          </span>
          <div className="profile">
            <Link to="/settings">
              <img className="topNav__img" src={profile} alt="" />
            </Link>
          </div>

          {/* <div className="burger__btn">
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
