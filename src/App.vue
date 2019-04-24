<template>
<div>
  <TabBar />
  <b-container class="mt-5">
    <router-view></router-view>
  </b-container>
</div>
</template>

<script>
import TabBar from './components/TabBar'

export default {
  name: 'app',
  components: {
    TabBar
  }
}
</script>

<style>

#form {
  margin: 5rem auto;
  padding: 2rem;
  max-width: 400px;
  border: 0;
  border-radius: .3rem;
  background-color: white;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
  /* border: 1px solid #ddd; */
  /* box-shadow: 1px 1px 10px #ddd; */
}
</style>
