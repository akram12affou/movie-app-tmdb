const fetchPopularMovies = (url) => {
     return{
        type:'FetchPopularMovies',
        payload:url
     }
}
const fetchTopRatedMovies = (url) => {
     return{
        type:'FetchTopRatedMovies',
        payload:url
     }
}
const fetchUpComingMovies = (url) => {
     return{
        type:'FetchUpComingMovies',
        payload:url
     }
}