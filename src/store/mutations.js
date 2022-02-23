const mutations = {
    MOVIE_UPDATE(state, movieList ){
            state.movieList = movieList;
    },
    TOTAL_MOVIE(state, totalMovies){
        state.totalMovies = totalMovies;
    },
    SET_MOVIE_BY_ID(state, movieById){
        state.movieById = movieById;
    }
}
export default mutations;