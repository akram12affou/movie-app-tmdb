import React from 'react'
import '../styles/MovieDetailsCart.css'
function MovieDetailsCart({movie ,movieDetailsCast}) {
  
    const {id , release_date, poster_path,original_title, overview , budget,revenue,runtime,vote_average } = movie
  return (
    <div key={id} className='movie-details'>
       <div className='img-container'>
         <img src={`https://image.tmdb.org/t/p/w400/${poster_path}`}  alt="" />
         <span>{vote_average}</span>
       </div>
       <div className='details'>
        <div>          
        <span className='titles'>Title:</span>
        <span className='title'>{original_title}</span>
        </div>
 <div> <span className='titles'> Overview:</span>
        <span className='overview'>{overview}</span></div>
       
       
        <div><span className='titles'>Release date:</span>
        <span>{release_date}</span></div>
        <div><span className='titles'> Budget:</span>
        <span>{budget} $</span></div>
       
        
        <div>   <span className='titles'>Revenue:</span>
        <span>{revenue} $</span></div>
     
        <div>     <span className='titles'>Duration:</span>
        <span>{runtime}</span></div>
   
        <main className='genres'> {
            movie.genres.map((e) => {
                return(
                    <span>{e.name}</span>
                )
            })
        }</main>
        <h2>Top Billed Cast</h2>
       {movieDetailsCast[0].cast.slice(0,6).map((e) => {
     return(
           <>{e.name}</> 
    )
       })}
       </div>
    </div>
  )
}

export default MovieDetailsCart