import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@mui/material";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          onClick={() => setShowSearch(!showSearch)}
          variant="outlined"
          className="banner__searchButton"
        >
          {!showSearch ? "Search Dates" : "Hide"}
        </Button>
        {showSearch && <Search />}
      </div>
      <div className="banner__info">
        <h1>"Make Memories, Not Just Reservations"</h1>
        <h5>
        Stay, Explore, Embrace the Journey with Airbnb.
        </h5>
        <Button onClick={() => navigate("/search")} variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
