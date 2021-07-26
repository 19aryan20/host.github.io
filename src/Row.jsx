import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
import Youtube from "react-youtube";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const img_url = "https://image.tmdb.org/t/p/original/";

function Row(props) {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    async function getusers() {
      const requests = await axios.get(props.type);
      setmovies(requests.data.results);
      return requests;
    }

    getusers();
  }, [props.type]);

  return (
    <>
      <div className="row">
        <h2>{props.name}</h2>
        <div className="posters">
          {movies.map((val) => {
            return (
              <img
                key={val.id}
                className="poster"
                src={`${img_url}${val.poster_path}`}
                alt={val.name}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Row;
