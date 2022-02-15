import axios from "axios";

const actions = {
    async fetchFata({commit}) {
        let response = await fetch('/mock/mock.json');
        let person = await response.json();
        commit('PERSON_UPDATE', person);
    },
    async btcCur({commit}){
        let response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        let btc = await response.data;
        commit('BTC_CURRENCY', btc);
    },
    async ethCur({commit}){
        let response = await axios.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR,GBP',);
        let eth = await response.data;
        commit('ETH_CURRENCY', eth);
    },
    async getMovieList({commit},{offset, limit, searchBy, search}){
        let response = await axios.get(`http://react-cdp-api.herokuapp.com/movies`, { params:
            {
            offset: offset,
            limit: limit,
            searchBy: searchBy,
            search: search,
            }
        });
        let movieList = await response.data.data;
        let totalMovies = await response.data.total;
        commit('MOVIE_UPDATE', movieList);
        commit('TOTAL_MOVIE',totalMovies)
    },

}
export default actions;