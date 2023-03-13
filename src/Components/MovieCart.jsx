import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/MovieCart.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function MovieCart({movie}) {
  const styleForButton  = {
    width: '2.7vw',
    minwidth : '50px',
 
    
  };
 
  const navigate = useNavigate()
  const toTheDetail = (id) => {
    navigate(`/moviedetails/${id}`)
  }
  const {id , poster_path , original_title,vote_average} = movie
  return (
    <div className='movie-cart-container' key={id} >
        <span className='avereage' style={{background : vote_average>7 && '#397200'}}>{vote_average}</span>
        {<img onClick={() => toTheDetail(id)} src={`https://image.tmdb.org/t/p/w400/${poster_path}`} alt=''/> }
        <div className='cart-footer'>
          <p>{original_title.substring(0,10)}...</p>
        <div className='fav-icon'><FavoriteBorderIcon   style={styleForButton}/></div>
        </div>
        
    </div>
  )
}

export default MovieCart