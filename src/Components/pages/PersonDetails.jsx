import axios from "axios";
import MovieCart from '../MovieCart'
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import "../../styles/PersonDetails.scss";
import PersonIcon from '@mui/icons-material/Person';
import { fetchPersonDetails,fetchFilmsByPerson } from "../../redux/actions";
import LoadingSpinner from "../layout/LoadingSpinner";
import PersonImages from "../PersonImages";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { LazyLoadImage } from "react-lazy-load-image-component";
function PersonDetails({query}) {
  const style = `body{
    height: 100%;
    overflow: hidden;

  }
  `
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
    const [openPersonImg,setOpenPersonImage] = useState(false)
  const [imgPath,setImgPath] = useState('')
  const PersonDetails = useSelector((state) => state.PersonDetails);
  const FilmsByPerson = useSelector((state) => state.FilmsByPerson);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if(query=='') return
    navigate('/')
  },[query])
  useEffect(() => {
    window.scroll(0,0)
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_REACT_APP_TMDB_KEY}&language=en-US`
      )
      .then((res) => {
        dispatch(fetchPersonDetails(res.data));
      })
    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${import.meta.env.VITE_REACT_APP_TMDB_KEY}&language=en-US`
      )
      .then((res) => {
        dispatch(fetchFilmsByPerson(res.data));
      })
      .then((res) => {
        setLoading(false);
      });
  }, []);
  
  return (
    <motion.div  
    initial={{ y: 22, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="persons-details-container">
      {!loading ? (
        <>
          {PersonDetails.map((e) => {
            return (
              <div className="person-container-1">
                <div className="img-container">
                 {e.profile_path ? <img
                  className="img"
                    src={`https://image.tmdb.org/t/p/w400/${e.profile_path}`}
                    alt=""
                  /> : <div  className="img"><PersonIcon/></div>}
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
                  <div>
                   <PersonImages id={id} setImgPath={setImgPath} setOpenPersonImage={setOpenPersonImage}/> 
                  </div>
                  
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
        <div 
        style={{display: 'flex',
        justifyContent:'center',
        minHeight:'100vh',
        background:'#141414',
        color: 'white'}}
        ><LoadingSpinner /></div>
      )}
         {openPersonImg &&
         <div className="big-img-container">
        <div className="big-img">
          <button onClick={() => setOpenPersonImage(false)}><CloseRoundedIcon/></button>
         <LazyLoadImage src={`https://image.tmdb.org/t/p/original///${imgPath}`} alt="" />
        </div></div>
        }
       {openPersonImg && <style>
          {style}
        </style>}
    </motion.div>
  );
}

export default PersonDetails;
