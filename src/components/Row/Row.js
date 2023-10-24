import React, { useEffect, useState } from "react";
import "../Row/Row.css";
import axios from "../../axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movie, setMovie] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>

      {movie.map((movies) => (
        <img
          src={`${base_url}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`}
          alt=""
        />
      ))}
    </div>
  );
}

export default Row;
