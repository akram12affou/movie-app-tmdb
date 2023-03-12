import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/MovieCart.css'
function MovieCart({movie}) {
  const navigate = useNavigate()
  const toTheDetail = (id) => {
    navigate(`/moviedetails/${id}`)
  }
  const {id , poster_path , original_title,vote_average} = movie
  return (
    <div className='movie-cart-container' key={id} onClick={() => toTheDetail(movie.id)}>
        <span className='avereage' style={{background : vote_average>7 && '#397200'}}>{vote_average}</span>
        {<img src={`https://image.tmdb.org/t/p/w400/${poster_path}`} alt=''/> }
        <p>{original_title.substring(0,15)}...</p>
    </div>
  )
}

export default MovieCart