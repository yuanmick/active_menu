<template>
  <div class="box2">
    <h1>Box2 Text</h1>
    <router-link to="/box2/child1">Child1</router-link> |
    <router-link to="/box2/child2">Child2</router-link> |
    <router-link to="/box2/child3">Child3</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Box2",
};
</script>
<style scoped>
h1 {
  color: orange;
}
</style>