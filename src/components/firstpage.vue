<template>
    <div id="FirstPageView" class="customStyleFormFirstPage">
        <md-layout md-gutter class="height_100">
            <md-layout md-column md-gutter>
                <md-layout class="itemAlignCenter">
                    <md-button v-on:click.native="showListAProperty" type="button" class="firstPageBtn">List a property</md-button>
                </md-layout>
                <md-layout v-on:click="showRateAProperty" class="itemAlignCenter" md-align="end">
                    <md-button type="button" class="firstPageBtn">Rate a property</md-button>
                </md-layout>
                <md-layout v-on:click="showFindAProperty" class="itemAlignCenter">
                    <md-button type="button" class="firstPageBtn">Find a property</md-button>
                </md-layout>
            </md-layout>
        </md-layout>
    </div>
</template>
<script>
    module.exports = {
        name: 'FirstPage',
        data: function (router) {
            return {
                msg:"1234567",
                showChallengesHeader : false,
                showExpiredHeader : false,
                showDashboardHeader : false,
                showResetPasswordHeader : false,
                showAboutHeader : false,
                logoutHeader : false
            };
        },
        methods: {
            showListAProperty : function() {
                console.log("list a property");
                this.$router.push('/listaproperty');
            },
            showRateAProperty : function() {
               // this.$router.push('/rateaproperty');
            },
            showFindAProperty : function() {
               // this.$router.push('/findaproperty');
            }
        }
    }
</script>

<style>

    html,body,body>div,#headerView>div{
        min-height: 100%;
        height:100%;
    }
    #headerView {
        height: 12%;
    }
    .main{
        height:88%;
    }
    .height_100 { height: 100%}

    .customStyleFormFirstPage {

        height: 100%;
        background: url(../../assets/img/map_image.png) no-repeat center center fixed;
        -webkit-background-size: cover;
        background-repeat: no-repeat;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-position: top center;

    }

    .firstPageBtn{
        background-color: #595959;
        color: #e37b34;
        border-radius: 10px;
        font-size: 20px;
        padding: 10px 30px 10px 30px;
    }

    .itemAlignCenter  {
        align-items: center !important;
    }


</style>