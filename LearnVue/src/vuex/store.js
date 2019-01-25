/*jshint esversion:6 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

var state = {
    count: 1
};

var mutations = {
    incCount() {
        ++state.count;
    }
};

const storage = new Vuex.Store({state,mutations});
export default storage;