import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FilmListesi from "./Filmler/FilmListesi";
import Film from "./Filmler/Film";
import KaydedilenlerListesi from "./Filmler/KaydedilenlerListesi";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get("http://localhost:5001/api/filmler") // Burayı Postman'le çalışın
        .then((response) => {
          // Bu kısmı log statementlarıyla çalışın
          // ve burdan gelen response'u 'movieList' e aktarın
          console.log(response.data);
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Sunucu Hatası", error);
        });
    };
    FilmleriAl();
  }, []);
  const kaydedilenler = [];
  const KaydedilenlerListesineEkle = (id) => {
    // Burası esnek. Aynı filmin birden fazla kez "saved" e eklenmesini engelleyin
    setSaved();
  };

  return (
    <div>
      <KaydedilenlerListesi list={saved} />

      <Switch>
        <Route path="/" exact>
          <FilmListesi movies={movieList} />
        </Route>
        <Route path="/filmler/:productId" exact>
          <Film />
        </Route>
        <Route path="/kaydedilenler/" exact></Route>
      </Switch>
    </div>
  );
}
