import axios from "axios";

const actions = {
    async fetchFata({commit}) {
        let response = await fetch('/mock/mock.json');
        let person = await response.json();
        commit('PERSON_UPDATE', person);
    },
    async btcCur({commit}){
        let response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        commit('BTC_CURRENCY', await response.data);
    },
    async ethCur({commit}){
        let response = await axios.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR,GBP',);
        commit('ETH_CURRENCY', await response.data);
    },
    async getMovieList({commit},params){
        let response = await axios.get(`http://react-cdp-api.herokuapp.com/movies`, {
            params: params
        });
        commit('MOVIE_UPDATE', await response.data.data);
        commit('TOTAL_MOVIE',await response.data.total);
    },
    async MovieListById({commit}, id){
        let response = await axios.get(`http://react-cdp-api.herokuapp.com/movies/${id}`);
        commit('SET_MOVIE_BY_ID', await response.data);
    }

}
export default actions;