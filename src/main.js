import Vue from "vue";
import Resource from 'vue-resource'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate';
import VueCordova from 'vue-cordova';
import _ from "lodash";
// import VueGmaps from 'vue-gmaps'
import * as VueGoogleMaps from 'vue2-google-maps';

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
/*import '../assets/fonts/index.css';
 import '../assets/fonts/material-design-icon.css';*/
Vue.use(VueMaterial);
Vue.use(VeeValidate);
Vue.use(_);

import routes from './routes'
import store from './store'

import AppVue from "./components/App.vue"

/*Vue.use(VueGmaps, {
    key: "AIzaSyDLDeKP8jWsqYX5X0uA0kcABV2gXgejXXA"
});*/

Vue.use(VueGoogleMaps, {
    installComponents: true,
    load: {
        key: 'AIzaSyDLDeKP8jWsqYX5X0uA0kcABV2gXgejXXA',
        libraries: 'places'
    }
});

Vue.use(VueCordova);

Vue.use(Resource);

Vue.use(VueRouter);

Vue.material.registerTheme({
    default: {
        primary: 'white',
        accent: 'white'
    }
});

var router = new VueRouter({
    routes: routes,
    base : __dirname,
    mode: 'hash',
    scrollBehavior: function (to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 }
    }
});

// Some middleware to help us ensure the user is authenticated.
router.beforeEach((to, from, next) => {
    console.log("before each");
    console.log(to);
    console.log(from);
    console.log(next);
    console.log(store.state.token);
    // window.console.log('Transition', transition)
    if (store.state.token === null && to.path != "/login") {
        window.console.log('Not authenticated');
        next({
            path: '/login'
        })
    } else {
        console.log("authenticated");
        next()
    }
});


var Utils = require("./utils.js");
Utils.bindCordovaEvents();

var vue = new Vue({
    el: '#root',
    router: router,
    store: store,
    render: h => h(AppVue),
    watch: {
        '$route'(to, from) {
            // Call resizePreserveCenter() on all maps
            Vue.$gmapDefaultResizeBus.$emit('resize')
        }
    }

});

//router.start(AppVue, '#root');

// Check local storage to handle refreshes
if (window.localStorage) {
    if (store.state.user !== window.localStorage.getItem('user')) {
        store.commit('SET_USER', JSON.parse(window.localStorage.getItem('user')));
        store.commit('SET_TOKEN', window.localStorage.getItem('token'))
    }
}