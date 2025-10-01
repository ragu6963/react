import { useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];
const BASE_URL = `https://api.themoviedb.org/3`;

export default function MovieSearch() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  async function fetchData() {
    const config = {
      method: "GET",
      url: `${BASE_URL}/search/movie`,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "ko-KR",
        query: query,
      },
    };

    const res = await axios(config);

    setMovies(res["data"]["results"]);
  }

  function handleChange(event) {
    setQuery(event["target"]["value"]);
  }

  return (
    <div>
      <h1>영화 검색</h1>
      <input
        type="text"
        placeholder="영화 검색"
        value={query}
        onChange={(event) => {
          handleChange(event);
        }}
      />
      <button
        onClick={() => {
          fetchData();
        }}
      >
        검색
      </button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
