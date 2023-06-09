export const fetchPopularMovies = (url) => {
     return{
        type:'FetchPopularMovies',
        payload:url
     }
}
export const fetchTopRatedMovies = (url) => {
     return{
        type:'FetchTopRatedMovies',
        payload:url
     }
}
export const fetchUpComingMovies = (url) => {
     return{
        type:'FetchUpComingMovies',
        payload:url
     }
}
export const fetchSearchMovies = (url) => {
     return{
        type:'FetchSearchMovies',
        payload:url
     }
}
export const fetchMovieDetails = (url) => {
     return{
        type:'FetchMovieDetails',
        payload:url
     }
}
export const fetchMovieDetailsCast = (url) => {
     return{
        type:'FetchMovieDetailsCast',
        payload:url
     }
}
export const fetchPersonDetails = (url) => {
     return{
        type:'FetchPersonDetails',
        payload:url
     }
}
export const fetchFilmsByPerson = (url) => {
     return{
        type:'FetchFilmsByPerson',
        payload:url
     }
}
export const fetchFilmImages = (url) => {
     return{
        type:'FetchFilmImages',
        payload:url
     }
}
export const fetchPersonImages = (url) => {
     return{
        type:'FetchPersonImages',
        payload:url
     }
}
export const fetchRecomnedationFilm = (url) => {
     return{
        type:'FetchRecomnedationFilm',
        payload:url
     }
}
export const addMovieToWatchedList = (item) => {
     return{
        type:'AddMovieToWatchedList',
        payload:item
     }
}
export const removeMovieToWatchedList = (item) => {
     return{
        type:'RemoveMovieToWatchedList',
        payload:item
     }
}
