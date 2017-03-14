<template>
    <div class="PropertyDetailsPage t-c">
        <md-layout md-gutter>
            <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" lg-flex-medium="30">
                <md-card class="md-cyan customCardPd">
                    <md-card-header>
                        <div class="md-title">Property Details</div>
                    </md-card-header>
                    <md-card-content>
                        <form novalidate @submit.stop.prevent="submitMoreDetails">
                            <md-input-container>
                                <!--<md-icon class="customColor">person</md-icon>-->
                                <label>Door#</label>
                                <md-input   type="text" v-model = "doorNo" required></md-input>
                                <!--<span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>-->
                                <span class="md-error">Door no is required</span>
                            </md-input-container>

                            <md-input-container  class="customColor">
                                <!--<md-icon class="customColor">lock_outline</md-icon>-->
                                <label>Address Line 1</label>
                                <md-textarea type="text" v-model = "addrOne" required></md-textarea>
                                <!--<span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>-->
                                <span class="md-error">Address Line 1 is required</span>
                            </md-input-container>

                            <md-input-container  class="customColor">
                                <!--<md-icon class="customColor">lock_outline</md-icon>-->
                                <label>Address Line 2</label>
                                <md-textarea type="text" v-model = "addrTwo" required></md-textarea>
                                <!--<span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>-->
                                <span class="md-error">Addres line 2 is required</span>
                            </md-input-container>

                            <md-input-container  class="customColor">
                                <!--<md-icon class="customColor">lock_outline</md-icon>-->
                                <label>State</label>
                                <md-input type="text" v-model = "state" required></md-input>
                                <!--<span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>-->
                                <span class="md-error">State is required</span>
                            </md-input-container>

                            <md-input-container  class="customColor">
                                <!--<md-icon class="customColor">lock_outline</md-icon>-->
                                <label>Area Pin</label>
                                <md-input   type="text" v-model = "areaPin" required></md-input>
                                <!--<span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>-->
                                <span class="md-error">Area pin is required</span>
                            </md-input-container>

                            <md-input-container  class="customColor">
                                <!--<md-icon class="customColor">lock_outline</md-icon>-->
                                <label>City</label>
                                <md-input   type="text" v-model = "city" required></md-input>
                                <!--<span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>-->
                                <span class="md-error">City is required</span>
                            </md-input-container>

                            <md-input-container  class="customColor">
                                <!--<md-icon class="customColor">lock_outline</md-icon>-->
                                <label>Phone No</label>
                                <md-input   type="text" v-model = "phoneNo" required></md-input>
                                <!--<span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>-->
                                <span class="md-error">Phone no is required</span>
                            </md-input-container>

                            <md-button type="submit" class="md-raised md-primary">Generate OTP <!--<md-icon class="md-icon">arrow_forward</md-icon>--></md-button>
                        </form>
                    </md-card-content>
                </md-card>
            </md-layout>
        </md-layout>
    </div>
</template>

<script>
    module.exports = {
        data : function () {
            return {
                "doorNo":"",
                "addrOne":"",
                "addrTwo":"",
                "state":"",
                "areaPin":"",
                "city":"",
                "phoneNo":""
            }
        },

        methods : {
            submitMoreDetails(event){
                console.log("submiting more details");
                this.$router.push('/login');
            }
        }
    }
</script>
<style>
    .t-c{
        text-align: center;
    }
    .customCardPd{
        margin: 10px;
        width: 100%;
        background-color: #078eca !important;
        color:white;
    }
</style>