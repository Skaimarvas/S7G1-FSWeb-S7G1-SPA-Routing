import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
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

  const KaydedilenlerListesineEkle = (id, title) => {
    const varolanfilm = saved.find((movie) => movie.id === id);

    if (varolanfilm) {
      const guncellist = saved.filter((movie) => movie.id !== id);
      setSaved(guncellist);
    } else {
      setSaved([...saved, { id, title }]);
    }
  };

  return (
    <div>
      <KaydedilenlerListesi list={saved} movielist={movieList} />
      {console.log("saved", saved)}
      <Switch>
        <Route path="/" exact>
          <FilmListesi movies={movieList} />
        </Route>
        <Route path="/filmler/:productId" exact>
          <Film function={KaydedilenlerListesineEkle} />
        </Route>
      </Switch>
    </div>
  );
}
