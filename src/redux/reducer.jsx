const initialState = {
  popularMovies : [],
  topRated : [],
  SearchMovies : [],
  upComing : [] ,
  Favorites : []
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
      console.log(payload)
      return { ...state , SearchMovies : [...payload.results] }
  default:
    return state
  }
}
