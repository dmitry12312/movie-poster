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
    async getMovieList({commit},{offset, limit}){
        let response = await axios.get(`http://react-cdp-api.herokuapp.com/movies?offset=${offset}&limit=${limit}`);
        let movieList = await response.data.data;
        commit('MOVIE_UPDATE', movieList);
        console.log(movieList);
    },

}
export default actions;