const getters = {
    ponyCount(state){
        return state.ponyCount;
    },
    personInfo(state){
        return state.person;
    },
    btcCurrency(state){
        return state.btc.bpi.USD.rate;
    }
}
export default getters;