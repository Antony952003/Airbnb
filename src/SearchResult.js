import React, { useState } from "react";
import "./SearchResult.css";
import FavouriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavouriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  const [like, setlike] = useState(false);
  const [saved, setSaved] = useState(false);
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      {!like ? (
        <FavouriteBorderIcon
          onClick={() => setlike(!like)}
          style={{
            transition: "transform 200ms ease-in",
            transform: like ? "scale(0.8)" : "scale(1)",
            cursor: "pointer",
          }}
          className="searchResult__heart"
        />
      ) : (
        <FavouriteIcon
          onClick={() => setlike(!like)}
          style={{
            transition: "transform 200ms ease-in",
            transform: like ? "scale(0.8)" : "scale(1)",
            cursor: "pointer",
          }}
          className="searchResult__heart"
        />
      )}
      {!saved ? (
        <BookmarkBorderIcon
          onClick={() => setSaved(!saved)}
          style={{
            transition: "transform 200ms ease-in",
            transform: like ? "scale(0.8)" : "scale(1)",
            cursor: "pointer",
          }}
          className="searchResult__savedicon"
        />
      ) : (
        <BookmarkAddedIcon
          onClick={() => setSaved(!saved)}
          style={{
            transition: "transform 200ms ease-in",
            transform: like ? "scale(0.8)" : "scale(1)",
            cursor: "pointer",
          }}
          className="searchResult__savedicon"
        />
      )}

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p className="line">____</p>
          <p>{description}</p>
        </div>
        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResult__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
