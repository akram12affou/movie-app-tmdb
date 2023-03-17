import React, {useEffect} from "react";
import "../styles/MovieDetailsCart.scss";
import Person from "./Person";
import { useDispatch,useSelector } from "react-redux";
import {fetchFilmImages} from '../redux/actions'
import FilmsImages from "./FilmsImages";
import { useState } from "react";
import axios from "axios";
import MovieRecomendations from "./MovieRecomendations";
function MovieDetailsCart({ movie, movieDetailsCast,open,setOpen }) {
  const [showing, setShowing] = useState(6);
  const [loadimages , setLoadImages] = useState(false)
  const imagesForFilm = useSelector((state) => state.imagesForFilm);
  const dispatch = useDispatch()
  const {
    id,
    release_date,
    poster_path,
    original_title,
    overview,
    budget,
    revenue,
    runtime,
    vote_average,
  } = movie;
  const REACT_APP_TMDB_KEY = "4a16a312cc25534aac7bab9f0901fa3b";
   useEffect(()=> {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${REACT_APP_TMDB_KEY}`)
    .then((res) => {
      
      dispatch(fetchFilmImages(res.data.backdrops.slice(0,15)))
    }).then(res => setLoadImages(true))
      
   },[])

  const showfunc = () => {
    if (showing == 6) {
      setShowing(movieDetailsCast[0].cast.length);
    } else {
      setShowing(6);
    }
  };
  return (
    <div >
      <div key={id} className="movie-details" onClick={() => setOpen(false)} 
   
    >
        <div className="img-container" >
          {poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
              alt=""
            />
          ) : (
            <div className="img-null"></div>
          )}
          <span>{vote_average.toFixed(2)}</span>
        </div>
        <div className="details">
          <div>
            <span className="titles">Title:</span>
            <span className="title">{original_title}</span>
          </div>
          <div>
            {" "}
            <span className="titles"> Overview:</span>
            <span className="overview">{overview}</span>
          </div>

          <div>
            <span className="titles">Release date:</span>
            <span>{release_date}</span>
          </div>
          {budget !== 0 && (
            <div>
              <span className="titles"> Budget:</span>
              <span>{budget} $</span>
            </div>
          )}
          {revenue !== 0 && (
            <div>
              <span className="titles">Revenue:</span>
              <span>{revenue} $</span>
            </div>
          )}

          <div>
            {" "}
            <span className="titles">Duration:</span>
            <span>{runtime} min</span>
          </div>

          <main className="genres">
            {" "}
            {movie.genres.map((e) => {
              return <span>{e.name}</span>;
            })}
          </main>
        </div>
      </div>
      <div className="person-all-container">
        <div className="billed-show">
          <h2>Top Billed Cast</h2>
          <button
            onClick={showfunc}
            style={{
              color: movieDetailsCast[0]?.cast.length == showing && "black",
              background:
                movieDetailsCast[0]?.cast.length == showing && "white",
            }}
          >
            Show all
          </button>
        </div>
        <div className="person-container">
          {movieDetailsCast[0]?.cast.slice(0, showing).map((person) => {
            return <Person person={person} />;
          })}
        </div>
        <div className="films-img"   onClick={() => open && setOpen(false)}>
          <div className="films-img-container">
         {imagesForFilm.length!==0 && <h2>Images</h2>}
          <div></div>
          </div>
          
          {loadimages && <FilmsImages open={open} setOpen={setOpen} />}
        </div>
        <MovieRecomendations id={id}/>
      </div>
    </div>
  );
}

export default MovieDetailsCart;
