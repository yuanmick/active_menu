<template>
  <div id="app">
    <!-- 這裡沒有加上 active-class="active" 是因為 沒有加的話就會默認 active-class -->
    <!-- 也就是自己加上去，但 exact就要自己加了 -->
    <router-link to="/box1">Box1</router-link> |
    <router-link to="/box2">Box2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 50px;
  margin-top: 60px;
}
a {
  text-decoration: none;
}
.active,
.exact-active {
  color: red;
}
</style>
