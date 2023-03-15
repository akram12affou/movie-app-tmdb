import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../layout/LoadingSpinner";
import MovieDetailsCart from "../MovieDetailsCart";
import { fetchMovieDetails, fetchMovieDetailsCast } from "../../redux/actions";
function MovieDetails({query}) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const movieDetails = useSelector((state) => state.MovieDetails);
  const movieDetailsCast = useSelector((state) => state.MovieDetailsCast);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if(query=='') return
    navigate('/')
  },[query])
  const REACT_APP_TMDB_KEY = "4a16a312cc25534aac7bab9f0901fa3b";
  useEffect(() => {
    window.scroll(0,0)
    setLoading(false);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${REACT_APP_TMDB_KEY}&language=en-US`
      )
      .then((res) => {
        dispatch(fetchMovieDetailsCast(res.data));
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${REACT_APP_TMDB_KEY}&language=en-US`
      )
      .then((res) => {
        dispatch(fetchMovieDetails(res.data));
      })
      .then((res) => {
        setLoading(true);
      });
  }, [id]);
  
  return (
    <>
      {loading ? (
        <>
          {movieDetails.map((movie) => {
            return <MovieDetailsCart movie={movie} movieDetailsCast={movieDetailsCast}/>;
          })}
        </>
      ) : (
        <div style={{
          display: 'flex',
          justifyContent:'center',
          minHeight:'100vh',
          background:'#141414',
          color: 'white'

        }}><LoadingSpinner /></div> 
      )}
    </>
  );
}

export default MovieDetails;
