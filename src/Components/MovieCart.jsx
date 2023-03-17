import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import "../styles/MovieCart.scss";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  addMovieToWatchedList,
  removeMovieToWatchedList,
} from "../redux/actions";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
function MovieCart({ movie, setQuery, search, watched }) {
  const dispatch = useDispatch();
  const ClickOnEmptyHeart = (movie) => {
    dispatch(addMovieToWatchedList(movie));
  };
  const ClickOnColoredHeart = (movie) => {
    dispatch(removeMovieToWatchedList(movie));
  };
  const watchedList = useSelector((state) => state.WatchedListFilms);

  const styleForButton = {
    width: "3vw",
    minWidth: "20px",
  };
  const navigate = useNavigate();
  const toTheDetail = (id) => {
    search && setQuery("");
    navigate(`/moviedetails/${id}`);
  };
  const { id, poster_path, original_title, vote_average } = movie;
  return (
    <>
      <div className="movie-cart-container" key={id}>
        <span
          className="avereage"
          style={{ background: vote_average >= 7 && "#397200" }}
        >
          {vote_average}
        </span>

        {poster_path ? (
          <LazyLoadImage
            className="img"
            onClick={() => toTheDetail(id)}
            src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
            effect="blur"
            alt=""
          />
        ) : (
          <div className="img" onClick={() => toTheDetail(id)}>
            <PlayArrowIcon />
          </div>
        )}
        <div className="cart-footer">
          <p>{original_title.substring(0, 10)}...</p>
          <div className="fav-icon">
            {!watched && (
              <>
                {" "}
                {watchedList.find((e) => e.id == id) ? (
                  <FavoriteIcon
                    style={styleForButton}
                    onClick={() => ClickOnColoredHeart(movie)}
                  />
                ) : (
                  <FavoriteBorderIcon
                    style={styleForButton}
                    onClick={() => ClickOnEmptyHeart(movie)}
                  />
                )}
              </>
            )}

            {watched && (
              <CloseRoundedIcon onClick={() => ClickOnColoredHeart(movie)} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCart;
