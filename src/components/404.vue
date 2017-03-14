<template>
    <div class="container container-table">
        <div class="row vertical-10p">
            <div class="container">
                <h1 class="text-center">404 page</h1>
                <div class="text-center col-sm-6 col-sm-offset-3">
                    <h1>You are lost.</h1>
                    <h4>This page doesn't exist.</h4>
                    <router-link to="/login">Take me to login page.</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'NotFound'
    }
</script>

<style>
</style>