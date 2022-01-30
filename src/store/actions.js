const actions = {
    async fetchFata({commit}){
        let response = await fetch('/mock/mock.json');
        let person = await response.json();
        commit('PERSON_UPDATE', person);
    },
    async btcCur({commit}){
        let response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        let btc = await response.json();
        commit('BTC_CURRENCY', btc);
    }
}
export default actions;