import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    callingAPI: false,
    searching: '',
    serverURI: 'http://localhost:8080',
    user: null,
    token: null,
    userInfo: {
        messages: [{1: 'test', 2: 'test'}],
        notifications: [],
        tasks: []
    },
    headerLink : {
        showChallengesHeader : false,
        showExpiredHeader : false,
        showDashboardHeader: false,
        showResetPasswordHeader: false,
        showAboutHeader: false
    }
};

const mutations = {
    TOGGLE_LOADING (state) {
        state.callingAPI = !state.callingAPI
    },
    TOGGLE_SEARCHING (state) {
        state.searching = (state.searching === '') ? 'loading' : ''
    },
    SET_USER (state, user) {
        state.user = user
    },
    SET_TOKEN (state, token) {
        state.token = token
    },
    SET_HEADER_STATE (state, link,action) {
        state.headerLink[link] = action
    }
};

export default new Vuex.Store({
    state,
    mutations
})