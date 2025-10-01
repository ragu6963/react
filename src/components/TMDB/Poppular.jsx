import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";

const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];
const BASE_URL = `https://api.themoviedb.org/3`;

export default function Container() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getPopularMovie() {
      const config = {
        method: "GET",
        url: `${BASE_URL}/movie/popular`, // API 요청 URL
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          page: 1,
          language: "ko-KR",
        },
      };

      const res = await axios(config); // API 요청
      const data = res["data"]; // 응답 객체에서 데이터 속성 추출

      setMovies(data.results);
    }

    getPopularMovie();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
