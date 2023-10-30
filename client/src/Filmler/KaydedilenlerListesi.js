import React from "react";
import { Link } from "react-router-dom";

export default function KaydedilenlerListesi(props) {
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {console.log("Movie", props.list)}
      {props.list.map((movie) => (
        <span className="saved-movie">
          <Link to={`/filmler/${movie.id}`}>{movie.title}</Link>
        </span>
      ))}

      <div className="home-button">
        {" "}
        <Link to="/" exact className="link-no-underline">
          Anasayfa
        </Link>{" "}
      </div>
    </div>
  );
}
