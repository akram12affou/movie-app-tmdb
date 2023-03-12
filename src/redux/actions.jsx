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
