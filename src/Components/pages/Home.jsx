import React ,{ useEffect }  from 'react'
import {fetchPopularMovies} from '../../redux/actions'
import { useDispatch } from 'react-redux';
function Home() {
  const REACT_APP_TMDB_KEY = "4a16a312cc25534aac7bab9f0901fa3b";

  useEffect(() => {
    useDispatch(fetchPopularMovies('https://api.themoviedb.org/3/movie/popular?api_key=4a16a312cc25534aac7bab9f0901fa3b&language=en-US&page=1'))
  },[])
  return (
    <div>
      
    </div>
  )
}

export default Home