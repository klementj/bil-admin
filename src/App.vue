<template>
<!-- <div id="app-container"> -->
  <b-container id="app-container" class="pb-5">
    <TabBar class="pt-3"/>
    <router-view class="my-5"></router-view>
  </b-container>
<!-- </div> -->
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
#app-container{
  margin-top: 2rem;
  /* padding: 2rem; */
  /* height: 80vh; */
  border: 0;
  border-radius: .3rem;
  background-color: white;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

#form {
  margin: 0 auto;
  max-width: 350px;
}
</style>
