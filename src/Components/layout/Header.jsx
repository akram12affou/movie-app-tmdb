import React from 'react'
import '../../styles/Header.scss'
import { useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarksRoundedIcon from '@mui/icons-material/BookmarksRounded';
function Header({query,setQuery}) {
  const navigate = useNavigate()
  const toTheHome =() => {
    navigate('/')
    setQuery('')
  } 
  const totheWatched = () => {
    navigate('/watchedlist')
    setQuery('')
  }
  return (
    <div className='navBar'>
        <div>
         <h2 onClick={() => toTheHome()}>CINEMAGIC</h2>
        </div>
        <div className='navBar-search'>
            
            
            <input type="text" placeholder='search a movie' value={query} onChange={(e) => {setQuery(e.target.value)}} />
            
            <div className='favorite-icon' onClick={totheWatched}><BookmarksRoundedIcon/></div>

        </div>
    </div>
  )
}

export default Header