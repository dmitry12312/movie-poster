const actions = {
    async fetchFata({commit}){
        let response = await fetch('/mock/mock.json');
        let person = await response.json();
        commit('PERSON_UPDATE', person);
    }
}
export default actions;