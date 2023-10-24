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

      <div className="row_posters">
        {movie.map((movies) => (
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            key={movies.id}
            src={`${base_url}${
              isLargeRow ? movies.poster_path : movies.backdrop_path
            }`}
            alt={movies.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
