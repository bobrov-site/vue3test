<template>
<div class="app">
  <Navbar/>
  <router-view></router-view>
</div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: {Navbar},
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>