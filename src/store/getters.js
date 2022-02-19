const getters = {
    ponyCount(state){
        return state.ponyCount;
    },
    personInfo(state){
        return state.person;
    },
    getBtcCurrency: (state) => (currency) => {
        return state.btc?.bpi[currency].rate;
    },
    getEthCurrency: (state) => (currency) => {
        return state.eth?.[currency];
    },
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
