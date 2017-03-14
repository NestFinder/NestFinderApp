<template>
    <div class="row">
        <div class="col-sm-12">
            <h1 class="text-center">Vue js Challenge List!</h1>
            <div  class="text-red text-center"><p>App state {{this.$store.state.user}}</p></div>
            <div class="col-xs-12 text-center">
                <button class="btn btn-primary" v-on:click="getQuote()">Go to login</button>
                <button class="btn btn-primary" v-on:click="changeHeader()">Change</button>
            </div>
            <div class="quote-area text-center" v-if="quote">
                <h2><blockquote>{{ quote }}</blockquote></h2>
            </div>
        </div>
    </div>
</template>



<script>
    import HeaderVue from "../components/header.vue"
    export default {
        name: 'challengeList',
        components : {
          "headerView" : HeaderVue
        },
        data: function (router) {
            return {
                quote: ''
            }
        },
        methods: {
           getQuote : function () {
               this.$store.commit('SET_USER', null);
               this.$store.commit('SET_TOKEN', null);
               if (window.localStorage) {
                   window.localStorage.setItem('user', null);
                   window.localStorage.setItem('token', null)
               }
               this.$router.push('/login')
           },
            changeHeader : function () {
                var store = this.$store;
                store.commit("SET_HEADER_STATE","showChallengesHeader",true)
            }
        }
    }
</script>