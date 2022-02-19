const mutations = {
    SET_PONY_COUNT(state, num){
        state.ponyCount = num;
    },
    PERSON_UPDATE(state, person){
        state.person = person;
    },
    BTC_CURRENCY(state, btc){
        state.btc = btc;
    },
    ETH_CURRENCY(state, eth){
        state.eth = eth;
    },
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