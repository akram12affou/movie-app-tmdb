const initialState = {
  popularMovies: [],
  topRated: [],
  SearchMovies: [],
  upComing: [],
  Favorites: [],
  MovieDetails: [],
  MovieDetailsCast: [],
  PersonDetails: [],
  FilmsByPerson: [],
  imagesForFilm: [],
  imagesForPerson: [],
  RecomnedationFilm: [],
  WatchedListFilms:[]

};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FetchPopularMovies":
      return { ...state, popularMovies: [...payload.results] };
    case "FetchTopRatedMovies":
      return { ...state, topRated: [...payload.results] };
    case "FetchUpComingMovies":
      return { ...state, upComing: [...payload.results] };
    case "FetchSearchMovies":
      return { ...state, SearchMovies: [...payload.results] };
    case "FetchMovieDetails":
      return { ...state, MovieDetails: [payload] };
    case "FetchMovieDetailsCast":
      return { ...state, MovieDetailsCast: [payload] };
    case "FetchPersonDetails":
      return { ...state, PersonDetails: [payload] };
    case "FetchFilmsByPerson":
      return { ...state, FilmsByPerson: [payload] };
    case "FetchFilmImages":
      return { ...state, imagesForFilm: payload };
    case "FetchPersonImages":
      return { ...state, imagesForPerson: payload };
    case 'FetchRecomnedationFilm':
      return {...state, RecomnedationFilm: payload }
    case 'AddMovieToWatchedList':
      return {...state, WatchedListFilms:[...state.WatchedListFilms ,payload] }
    case 'RemoveMovieToWatchedList':
      return {...state, WatchedListFilms:state.WatchedListFilms.filter((e) => e.id!==payload.id)}
    default:
      return state;
  }
};
