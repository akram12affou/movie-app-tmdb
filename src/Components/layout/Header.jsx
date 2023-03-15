import React from 'react'
import '../../styles/Header.css'
import { useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function Header({query,setQuery}) {
  const navigate = useNavigate()

  return (
    <div className='navBar'>
        <div>
         <h2 onClick={() => navigate('/')}>CINEMAGIC</h2>
        </div>
        <div className='navBar-search'>
            <input type="text" placeholder='search a movie' value={query} onChange={(e) => {setQuery(e.target.value)}} />
            <div className='favorite-icon'><FavoriteBorderIcon/></div>

        </div>
    </div>
  )
}

export default Header