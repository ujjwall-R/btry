import React, { useEffect } from "react";
import "./Header.css";
import Logo from "../../files/logonew.png";

const Header = () => {
  return (
    <nav>
      <a href="/" className="menu">
        <img src={Logo} id="Magicarnival_menu" />
      </a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="/portfolio" className="menu">
        PORTFOLIO
      </a>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a href="/aboutus" className="menu">
        ABOUT US
      </a>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a href="/faq" className="menu">
        FAQ
      </a>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a href="/blog" className="menu">
        BLOG
      </a>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a href="/getstarted" className="menu" id="getStarted">
        GET STARTED
      </a>
    </nav>
  );
};

export default Header;
