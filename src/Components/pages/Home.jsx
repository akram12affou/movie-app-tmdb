import React ,{ useEffect , useState}  from 'react'
import MovieCart from '../MovieCart';
import LoadingSpinner from '../layout/LoadingSpinner';
import Pagination from '@mui/material/Pagination';
import {fetchPopularMovies , fetchTopRatedMovies ,fetchUpComingMovies,fetchSearchMovies } from '../../redux/actions'
import { useDispatch , useSelector } from 'react-redux';
import axios from 'axios';
import '../../styles/Home.css'
function Home({query}) {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [page,setPage] = useState(1)
  const [movieBranch , setMovieBranch] = useState('popular')
  const PopularMovies = useSelector(state => state.popularMovies)
  const topRated = useSelector(state => state.topRated)
  const upComing = useSelector(state => state.upComing)
  const searchMovies = useSelector(state => state.SearchMovies)
  const REACT_APP_TMDB_KEY = "4a16a312cc25534aac7bab9f0901fa3b";
  useEffect(() => {
    setLoading(true)
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=4a16a312cc25534aac7bab9f0901fa3b&language=en-US}`)
    .then((res) => dispatch(fetchPopularMovies(res.data)))
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=4a16a312cc25534aac7bab9f0901fa3b&language=en-US}`)
    .then((res) => dispatch(fetchTopRatedMovies(res.data)))
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=4a16a312cc25534aac7bab9f0901fa3b&language=en-US}`)
    .then((res) => dispatch(fetchUpComingMovies(res.data))).then((res) => {
      setLoading(false)
    })
  },[])
  useEffect(() => {
    if(query=='') return;
    setLoading(true)
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_TMDB_KEY}&language=en-US&page=${page}&include_adult=${true}&query=${query}`)
    .then((res) => dispatch(fetchSearchMovies(res.data))).then((res) => {
      setLoading(false)
    })
  },[query,page])
  const handleChange = ( event,value) => {
    window.scroll(0,0)
    setPage(value);
  };
  return (
    <div className='home'>
    { query=='' && 
     <div className='movie-filter'>
        <span className='Popular' onClick={() => {setMovieBranch('popular')}} style={{background :(movieBranch=='popular') ? 'white':'', color : (movieBranch=='popular') ? 'black':''}}>Popular</span>
        <span onClick={() => {setMovieBranch('Toprated')}} style={{background : (movieBranch=='Toprated') ? 'white':'' ,color:(movieBranch=='Toprated') ? 'black':''}}>Top rated</span>
        <span className='upComing' onClick={() => {setMovieBranch('Upcoming')}} style={{background : (movieBranch=='Upcoming') ? 'white':'',color:(movieBranch=='Upcoming') ? 'black':''}}>Up coming</span>
      </div>}
      <div className="movies">
     { query=='' &&
     <>  {loading ? <LoadingSpinner/>: <>{movieBranch=='popular'
      && <>{PopularMovies.map((movie) => {
        return(
          <MovieCart movie={movie} />
        )
       })}</>}
       
      {movieBranch=='Toprated'
      && <>{topRated.map((movie) => {
        return(
          <MovieCart movie={movie} />
        )
       })}</>}
      {movieBranch=='Upcoming'
      && <>{upComing.map((movie) => {
        return(
          <MovieCart movie={movie} />
        )
       })}</>}</>
      }</>}
     {!loading  ? <div className="movies">{
        searchMovies.map((movie) => {
          return(
            <MovieCart movie={movie} />
          )
        })
      }</div> :  (query!=='') && <LoadingSpinner/>}
      
      </div>
      {query!=='' && 
      <div className='pagination'>
      <Pagination count={10} page={page} onChange={handleChange} color="primary"/>
      </div>
      }
      
    </div>
  )
}

export default Home