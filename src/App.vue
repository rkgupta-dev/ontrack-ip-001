<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <FormApp /> -->
    <!-- <ModelList /> -->
    <!-- <JsonArray /> -->
    <DataBind />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import FormApp from './components/FormApp.vue'
// import ModelList from './components/ModelList.vue'
// import JsonArray from './components/JsonArray.vue'
import DataBind from "./components/DataBind.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // FormApp,
    // ModelList,
    // JsonArray,
    DataBind,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
