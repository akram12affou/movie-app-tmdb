import React, { useEffect } from "react";
import "../../styles/WatchedList.scss";
import MovieCart from "../MovieCart";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
function WatchedList({ query }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (query == "") return;
    navigate("/");
  }, [query]);
  const watchedList = useSelector((state) => state.WatchedListFilms);
  return (
    <>
      {watchedList.length == 0 && (
        <center>  
        <button  className="button" onClick={() => navigate("/")}> <ArrowBackRoundedIcon/> home page</button>
        <h2 style={{ color: "white" }}>
                 
                 your watchlist is empty
           </h2></center>
      
      )}
      {watchedList.length !== 0 && (
        <>
        <center><button className="button" onClick={() => navigate("/")}> <ArrowBackRoundedIcon/> home page</button></center>
         
         <h2 className="watched-list-title">your watchlist</h2>
        </>

      )}
      <div className="movies">
        {watchedList.map((movie) => {
          return <MovieCart movie={movie} watched={"watched"} />;
        })}
      </div>
    </>
  );
}

export default WatchedList;
