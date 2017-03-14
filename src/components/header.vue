<template>
    <div id="headerView">
        <md-toolbar  md-theme="blue" class="customToolbar">
            <img src="../../assets/img/nest_icon.png" alt="logo" style="padding-right: 10px">
            <h2 class="md-title" style="flex: 1">NEST finder</h2>
        </md-toolbar>
    </div>

</template>
<script>
    export default {
        name: 'Header',
        data: function (router) {
            return {
                showChallengesHeader : false,
                showExpiredHeader : false,
                showDashboardHeader : false,
                showResetPasswordHeader : false,
                showAboutHeader : false,
                logoutHeader : false
            }
        }
    }
</script>

<style>
    .customToolbar {
        width: 100%;
        background-color: #078eca !important;
        color: white;
    }
</style>