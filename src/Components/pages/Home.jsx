import React, { useEffect, useState } from "react";
import MovieCart from "../MovieCart";
import LoadingSpinner from "../layout/LoadingSpinner";
import Checkbox from "@mui/material/Checkbox";
import Pagination from "@mui/material/Pagination";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpComingMovies,
  fetchSearchMovies,
} from "../../redux/actions";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "../../styles/Home.scss";
function Home({ query, setQuery }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [adult, setAdult] = useState(false);
  const [movieBranch, setMovieBranch] = useState("popular");
  const PopularMovies = useSelector((state) => state.popularMovies);
  const topRated = useSelector((state) => state.topRated);
  const upComing = useSelector((state) => state.upComing);
  const searchMovies = useSelector((state) => state.SearchMovies);  
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=4a16a312cc25534aac7bab9f0901fa3b&language=en-US}`
      )
      .then((res) => dispatch(fetchPopularMovies(res.data)));
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=4a16a312cc25534aac7bab9f0901fa3b&language=en-US}`
      )
      .then((res) => dispatch(fetchTopRatedMovies(res.data)));
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=4a16a312cc25534aac7bab9f0901fa3b&language=en-US}`
      )
      .then((res) => dispatch(fetchUpComingMovies(res.data)))
      .then((res) => {
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    if (query == "") return;
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_REACT_APP_TMDB_KEY}&language=en-US&page=${page}&include_adult=${adult}&query=${query}`
      )
      .then((res) => dispatch(fetchSearchMovies(res.data)))
      .then((res) => {
        setLoading(false);
      });
  }, [query, page, adult]);
  const handleChange = (event, value) => {
    window.scroll(0, 0);
    setPage(value);
  };
  return (
    <motion.div className="home" initial={{ y: 22, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}>
      {query == "" && (
        <div className="movie-filter">
          <span
            className="Popular"
            onClick={() => {
              setMovieBranch("popular");
            }}
            style={{
              background: movieBranch == "popular" ? "white" : "",
              color: movieBranch == "popular" ? "black" : "",
            }}
          >
            Popular
          </span>
          <span
            onClick={() => {
              setMovieBranch("Toprated");
            }}
            style={{
              background: movieBranch == "Toprated" ? "white" : "",
              color: movieBranch == "Toprated" ? "black" : "",
            }}
          >
            Top rated
          </span>
          <span
            className="upComing"
            onClick={() => {
              setMovieBranch("Upcoming");
            }}
            style={{
              background: movieBranch == "Upcoming" ? "white" : "",
              color: movieBranch == "Upcoming" ? "black" : "",
            }}
          >
            Up coming
          </span>
        </div>
      )}
      <div className="movies">
        {query == "" && (
          <>
            {" "}
            {loading ? (
              <>
                {" "}
                <LoadingSpinner />
              </>
            ) : (
              <>
                {movieBranch == "popular" && (
                  <>
                    {PopularMovies.map((movie) => {
                      return <MovieCart movie={movie} />;
                    })}
                  </>
                )}

                {movieBranch == "Toprated" && (
                  <>
                    {topRated.map((movie) => {
                      return <MovieCart movie={movie} />;
                    })}
                  </>
                )}
                {movieBranch == "Upcoming" && (
                  <>
                    {upComing.map((movie) => {
                      return <MovieCart movie={movie} />;
                    })}
                  </>
                )}
              </>
            )}
          </>
        )}
        {query.length !== 0 && (
          <div className="search">
            {!loading ? (
              <>
                <div
                  style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <Checkbox
                    color="secondary"
                    onChange={() => {
                      adult ? setAdult(false) : setAdult(true);
                    }}
                    checked={adult}
                  />{" "}
                  18+{" "}
                </div>

                <div className="movies">
                  {searchMovies.map((movie) => {
                    return (
                      <>
                        <MovieCart
                          setQuery={setQuery}
                          search={"search"}
                          movie={movie}
                        />
                      </>
                    );
                  })}
                </div>
              </>
            ) : (
              query !== "" && (
                <>
                  <LoadingSpinner />
                </>
              )
            )}
          </div>
        )}
      </div>
      {query !== "" && (
        <div className="pagination">
          <Pagination
            count={10}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </div>
      )}
    </motion.div>
  );
}

export default Home;
