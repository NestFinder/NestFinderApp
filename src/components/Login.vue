<template>
    <div id="LoginView">
        <div class="main-content">
            <md-layout md-gutter>
                <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" lg-flex-medium="30">
                    <md-card class="md-cyan customCard">
                        <md-card-header>
                            <div class="md-title">LOGIN</div>
                        </md-card-header>
                        <md-card-content>
                            <form novalidate @submit.stop.prevent="submitLogin">
                                <md-input-container>
                                    <md-icon class="customColor">person</md-icon>
                                    <label>username</label>
                                    <md-input  v-validate:name.initial="'required'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" v-model = "username"></md-input>
                                    <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
                                </md-input-container>

                                <md-input-container md-has-password class="customColor">
                                    <md-icon class="customColor">lock_outline</md-icon>
                                    <label>Password</label>
                                    <md-input v-validate:password.initial="'required'" :class="{'input': true, 'is-danger': errors.has('password') }"  type="password" v-model = "password"></md-input>
                                    <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
                                </md-input-container>

                                <md-button type="submit" class="md-raised md-primary">LOGIN <md-icon class="md-icon">arrow_forward</md-icon></md-button>
                            </form>
                        </md-card-content>
                        <md-card-actions style="border-top: 1px solid #dedede;">
                            <span>
                                New User ?
                            </span>
                            <md-button type="button"  style="background-color:#078eca;color: white;text-decoration: underline;">SIGN UP FOR NEST</md-button>
                        </md-card-actions>
                    </md-card>
                </md-layout>
            </md-layout>
        </div>
        <md-layout md-gutter md-align-xsmall="center" md-align-small="center" md-align-medium="center" >
            <md-layout md-flex="50">
                <img src="../../assets/img/copy_right.png" alt="CR">
            </md-layout>
        </md-layout>
    </div>
</template>

<script>
    module.exports = {
        name: 'Login',
        data: function (router) {
            return {
                section: 'Login',
                loading: '',
                username: '',
                password: '',
                response: '',
                showPassword: false,
                isRememberMeChecked: true
            }
        },
        methods: {
            submitLogin: function () {
              /*  this.$validator.validateAll().then(success => {
                    if (! success) {
                        console.log("validation false");
                        return;
                    }
                    //  Change submit button
                    var self = this;
                    var store = this.$store;
                    this.toggleLoading();
                    this.resetResponse();
                    store.commit('TOGGLE_LOADING');
                    //  Login
                    store.commit('SET_USER', "manjunath");
                    var token = 'Bearer ' + "1234";
                    store.commit('SET_TOKEN', token);
                    // Save to local storage as well
                    if (window.localStorage) {
                        window.localStorage.setItem('user', JSON.stringify("manjunath"));
                        window.localStorage.setItem('token', token)
                    }
                    this.$router.push('/firstpage');
                    this.toggleLoading();
                });*/
                var self = this;
                var store = this.$store;
                this.toggleLoading();
                this.resetResponse();
                store.commit('TOGGLE_LOADING');
                //  Login
                store.commit('SET_USER', "manjunath");
                var token = 'Bearer ' + "1234";
                store.commit('SET_TOKEN', token);
                // Save to local storage as well
                if (window.localStorage) {
                    window.localStorage.setItem('user', JSON.stringify("manjunath"));
                    window.localStorage.setItem('token', token)
                }
                this.$router.push('/firstpage');

            },
            toggleLoading: function () {
                this.loading = (this.loading === '') ? 'loading' : ''
            },
            resetResponse: function () {
                this.response = ''
            },
            rememberMe : function (message) {
                if(message){
                    window.localStorage.setItem('username', this.username);
                    window.localStorage.setItem('password', this.password);
                }
            }
        }
    }
</script>

<style>

    .main-content {
        padding: 16px;
        background-color: #e2e2e2 !important;
        text-align: center;
    }
    .customCard {
        width: 100%;
        background-color: #078eca !important;
        color:white;
    }
    .md-theme-default.md-input-container .md-icon:not(.md-icon-delete):after{
        background-color: #078eca !important;
    }
    .customColor {
        color: white !important;
    }

    /*  html, body, .container-table {
          height: 100%;
      }
      .container-table {
          display: table;
          color: white;
      }
      .vertical-center-row {
          display: table-cell;
          vertical-align: middle;
      }
      .vertical-20p {
          padding-top: 20%;
      }
      .vertical-10p {
          padding-top: 10%;
      }
      .logo {
          width: 15em;
          padding: 3em;
      }
      .loginForm .input-group {
          padding-bottom: 1em;
          height: 4em;
      }
      .input-group input {
          height: 4em;
      }*/
</style>