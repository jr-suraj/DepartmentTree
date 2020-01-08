<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <OrgChart></OrgChart> -->
    <!-- <Vue2OrgTree></Vue2OrgTree> -->
    <div class="container-fluid">
        <emp-tree></emp-tree>
        <!-- <ElTree></ElTree> -->
        <!-- <OrgChart></OrgChart> -->
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ElTree from './components/ElTree'
// import OrgChart from './components/OrgChart'

import EmpTree from './components/EmpTree'
export default {
  name: 'app',
  components: {
    EmpTree,
    // ElTree,
    // OrgChart,
    // Vue2OrgTree
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
