import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";

import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo.png"
        />
      </Link>
      <div className="header__center">
        <input type="text" />
        <SearchIcon className="searchicon" />
      </div>

      <div className="header__right">
        <p>Airbnb your home</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar className="avatar">
          <img src="https://www.corporatephotographerslondon.com/wp-content/uploads/2016/06/business-portraits-Mayfair.jpg" alt=""/>
        </Avatar>
      </div>
    </div>
  );
}

export default Header;
