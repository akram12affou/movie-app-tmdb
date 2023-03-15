import React from 'react'
import { useSelector } from 'react-redux'
function FilmsImages() {
  const imagesForFilm = useSelector(state => state.imagesForFilm)
  console.log(imagesForFilm)
  return (
    <div>
      {imagesForFilm.map((e)=> {
  return(
    <> 
    
       <img src={`https://image.tmdb.org/t/p/w400/${e.file_path}`} alt="" />
    </>

  )
      })}
    </div>
  )
}

export default FilmsImages