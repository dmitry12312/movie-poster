const getters = {
    getMovies(state){
        return state.movieList;
    },
    getTotalMovies(state){
        return state.totalMovies;
    },
    getMovieById(state){
        return state.movieById;
    }
}
export default getters;
