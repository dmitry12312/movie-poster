import axios from "axios";

const actions = {
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