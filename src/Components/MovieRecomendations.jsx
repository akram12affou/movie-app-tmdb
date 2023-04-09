import React, { useEffect, useState } from "react";
import { fetchRecomnedationFilm } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "../styles/MovieRecomendation.scss";
import Pagination from "@mui/material/Pagination";
import MovieCart from "./MovieCart";
function MovieRecomendations({ id }) {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    document
      .querySelector(".recomendation-title-h2")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setPage(value);
  };
  const dispatch = useDispatch();
  const Recomendation = useSelector((state) => state.RecomnedationFilm);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${import.meta.env.VITE_REACT_APP_TMDB_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        res.data.results.length !== 0 &&
          dispatch(fetchRecomnedationFilm(res.data.results));
      });
  }, [page,id]);
  return (
    <div>
      {Recomendation.length !== 0 && (
        <h2 className="recomendation-title-h2">RECOMMENDATIONS</h2>
      )}
      <div className="movies">
        {Recomendation.slice(0, 20).map((movie) => {
          return (
            <>
              <MovieCart movie={movie} />
            </>
          );
        })}
      </div>
      <br />
      {Recomendation.length !== 0 && (
        <div className="paginations-2">
          <Pagination count={2} onChange={handleChange} color="primary" />
        </div>
      )}
      <br />
    </div>
  );
}

export default MovieRecomendations;
