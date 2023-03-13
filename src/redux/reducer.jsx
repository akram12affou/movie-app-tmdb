const initialState = {
  popularMovies : [],
  topRated : [],
  SearchMovies : [],
  upComing : [] ,
  Favorites : [],
  MovieDetails :[],
  MovieDetailsCast: [],
  PersonDetails:[]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case 'FetchPopularMovies':
    return { ...state , popularMovies : [...payload.results] }
  case 'FetchTopRatedMovies':
    return { ...state , topRated : [...payload.results] }
  case 'FetchUpComingMovies':
    return { ...state , upComing : [...payload.results] }
    case 'FetchSearchMovies':
      return { ...state , SearchMovies : [...payload.results] }
    case 'FetchMovieDetails':
      return { ...state , MovieDetails : [payload] }
    case 'FetchMovieDetailsCast':
      return { ...state , MovieDetailsCast : [payload] }
      
      case 'FetchPersonDetails':
        return { ...state , PersonDetails : [payload] }
  default:
    return state
  }
}
