import React from 'react'
import '../../styles/Header.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function Header() {
  
    
  return (
    <div className='navBar'>
        <div>
         <h2>CINEMAGIC</h2>
        </div>
        <div className='navBar-search'>
            <input type="text" placeholder='search a movie' />
            <div className='favorite-icon'><FavoriteBorderIcon/></div>
           
        </div>
    </div>
  )
}

export default Header