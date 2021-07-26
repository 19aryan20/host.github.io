import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";

const img = "https://image.tmdb.org/t/p/original/";

function Banner(props) {
  const [banner, setbanner] = useState([]);

  useEffect(() => {
    async function getusers() {
      const requests = await axios.get(props.type);
      setbanner(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );
      return requests;
    }

    getusers();
  }, [props.type]);
  console.log(banner);

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `url(
            https://image.tmdb.org/t/p/original${banner.backdrop_path}
          )`,
        }}
      >
        <div className="info">
          <h1>{banner.original_title}</h1>
          <button>Play</button>
          <button>Like</button>
          <h3>{banner.overview}</h3>
        </div>
      </div>
    </>
  );
}

export default Banner;
