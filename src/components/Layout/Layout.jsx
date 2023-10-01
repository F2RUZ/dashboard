import React from "react";
import Router from "../../routes/Router";
import Sidebar from "../Sidebar/SideBar";
import TopNav from "../TopNav/TopNav";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-layout">
        <TopNav />
        <div className="content">
          <Router />
        </div>
      </div>
    </div>
  );
};

export default Layout;
