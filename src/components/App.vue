<template>
        <div id="app">
            <cheader></cheader>
            <!--<header><router-view class="view two" name="headerView"></router-view></header>-->
            <div class="main" >
                <router-view ></router-view>
            </div>
            <footer><cfooter></cfooter></footer>
            <!--<footer><router-view class="view two" name="footerView"></router-view></footer>-->

        </div>
</template>

<script>
    import cfooter from '../components/footer.vue'
    import cheader from '../components/header.vue'
    export default {
        components : {cheader:cheader,cfooter:cfooter}
    }
</script>

<!--
<script>
    export default {
        name: 'App',
        data: function () {
            return {
                section: 'Head',
                version: '0.10.0',
                callingAPI: false,
                serverURI: 'http://localhost:8080',
                caller: this.$http
            }
        },
        methods: {
            callAPI: function (method, url, data) {
                this.callingAPI = true
                url = url || this.serverURI // if no url is passed then inheret local server URI
                return this.caller({
                    url: url,
                    method: method,
                    data: data
                })
            },
            logout: function () {
                this.$store.commit('SET_USER', null)
                this.$store.commit('SET_TOKEN', null)
                if (window.localStorage) {
                    window.localStorage.setItem('user', null)
                    window.localStorage.setItem('token', null)
                }
                this.$router.push('/Login')
            }
        }
    }
</script>-->
