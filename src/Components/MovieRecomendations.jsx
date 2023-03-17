import React, { useEffect , useState } from 'react'
import {fetchRecomnedationFilm} from '../redux/actions'
import { useDispatch,useSelector } from 'react-redux'
import axios from 'axios'
import "../styles/MovieRecomendation.scss";
import Pagination from '@mui/material/Pagination';
import MovieCart from './MovieCart';
function MovieRecomendations({id}) {
    const REACT_APP_TMDB_KEY = "4a16a312cc25534aac7bab9f0901fa3b";
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
      window.scrollTo({top:1500,
      behavior:'smooth'} );
      setPage(value);
    };
     const dispatch = useDispatch()
     const Recomendation = useSelector(state => state.RecomnedationFilm)
      useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${REACT_APP_TMDB_KEY}&language=en-US&page=${page}`)
        .then((res)=> {
            dispatch(fetchRecomnedationFilm(res.data.results))
        })
      },[page])
      console.log(Recomendation)
    return (
    <div>
       {Recomendation.length!==0 && <h2 className='recomendation-title-h2'>RECOMMENDATIONS</h2> }
       <div className='movies'>
                {Recomendation.slice(0,20).map((movie) =>{
                    return(
                        <>
                        <MovieCart movie={movie}/>
                        </>
                    )
                })}
       </div>
       <br />
       <div className="paginations-2">
          <Pagination
            count={3}
            onChange={handleChange}
            color="primary"
          />
          
        </div>
        <br />
    </div>
  )
}

export default MovieRecomendations