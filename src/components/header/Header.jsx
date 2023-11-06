import React from "react";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header-left-profile">
          <img src="assets/img/profile.png" alt="" />
          <div className="header-username">ali ghorbani</div>
        </div>
        <div className="header-right-search">
          <form action="">
            <input type="text" placeholder="Enter The Keyword..."/>
            <input className="search-btn" type="submit" value='Search' />
          </form>
        </div>
      </div>
    </>
  );
}
