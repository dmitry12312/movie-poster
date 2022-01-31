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
    }
}
export default mutations;