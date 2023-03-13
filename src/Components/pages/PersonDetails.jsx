import axios from "axios";
import MovieCart from '../MovieCart'
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "../../styles/PersonDetails.css";
import { fetchPersonDetails,fetchFilmsByPerson } from "../../redux/actions";
import LoadingSpinner from "../layout/LoadingSpinner";
function PersonDetails() {
  const [loading, setLoading] = useState(false);
  const REACT_APP_TMDB_KEY = "4a16a312cc25534aac7bab9f0901fa3b";
  const PersonDetails = useSelector((state) => state.PersonDetails);
  const FilmsByPerson = useSelector((state) => state.FilmsByPerson);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scroll(0,0)
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${REACT_APP_TMDB_KEY}&language=en-US`
      )
      .then((res) => {
        dispatch(fetchFilmsByPerson(res.data));
      })
    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}?api_key=${REACT_APP_TMDB_KEY}&language=en-US`
      )
      .then((res) => {
        dispatch(fetchPersonDetails(res.data));
      })
      .then((res) => {
        setLoading(false);
      });
  }, []);
 console.log(FilmsByPerson[0]?.cast)
  return (
    <div className="persons-details-container">
      {!loading ? (
        <>
          {PersonDetails.map((e) => {
            return (
              <div className="person-container-1">
                <div className="img-container">
                  <img
                  className="img"
                    src={`https://image.tmdb.org/t/p/w400/${e.profile_path}`}
                    alt=""
                  />
                </div>
                <div className="details-container">
                  <h3>{e.name}</h3>
                 {e.birthday &&
                  <div>
                    <span className="title">Birthday:</span>
                    <span>{e.birthday}</span>
                  </div>}
                  <br />
                 {e.place_of_birth &&  <div>
                    <span className="title">Place of birth:</span>
                    <span>{e.place_of_birth}</span>
                  </div>}
                  <br />
                 {e.biography && <div>
                    <span className="title">Biography:</span>
                    <span className="bio">{e.biography}</span>
                  </div>}
                </div>
              </div>
            );
          })}
          <h1>KNOWN BY</h1>
          <div className="movies">
          {FilmsByPerson[0]?.cast?.map((movie) => {
            return(
            
            <MovieCart movie={movie}/>
            )
          })}
          </div>
        </>
      ) : (
        <div className="loading"><LoadingSpinner /></div>
        
      )}
    </div>
  );
}

export default PersonDetails;