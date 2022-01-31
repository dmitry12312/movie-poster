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
     // btcCur({commit}) {
     //    setInterval( async () => {
     //        let response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
     //        let btc = await response.data;
     //        commit('BTC_CURRENCY', btc);
     //    },3000);
    // },
    async ethCur({commit}){
        let response = await axios.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR,GBP');
        let eth = await response.data;
        commit('ETH_CURRENCY', eth);
    },
    //  ethCur({commit}){
    //     setInterval( async () => {
    //         let response = await axios.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR,GBP');
    //         let eth = await response.data;
    //         commit('ETH_CURRENCY', eth);
    //     },3000);
    // },

}
export default actions;