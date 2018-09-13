<template>
    <div id="app">
        <TestComponent v-model ='mes' @input='handle' :maxlength='10' :point='2'></TestComponent>
    </div>
</template>

<script>
export default {
    name: 'App',
    data(){
        return {
            mes:'12312312312',
        }
    },
    methods:{
        handle(){
            console.log(this.mes);
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
