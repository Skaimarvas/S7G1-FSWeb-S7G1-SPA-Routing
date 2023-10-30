import React from "react";
import { Link } from "react-router-dom";

export default function KaydedilenlerListesi(props) {
  return (
    <Link to="/kaydedilenler/" className="link-no-underline">
      {" "}
      <div className="saved-list">
        <h3>Kaydedilen Filmler:</h3>
        {props.list?.map((movie) => (
          <span className="saved-movie">{movie.title}</span>
        ))}

        <div className="home-button">
          {" "}
          <Link to="/" exact className="link-no-underline">
            Anasayfa
          </Link>{" "}
        </div>
      </div>
    </Link>
  );
}
