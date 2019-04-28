<template>
<div>
  <TabBar/>
  <b-container id="app-container" class="pb-5">
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
#app-container{
  /* margin-top: 2rem; */
  /* border: 0; */
  /* border-radius: .3rem; */
  background-color: white;
  margin-top: 2rem;
  padding: 3rem 2rem 2rem;
}

.navbar, .container{
  box-shadow: 0 0.1rem 4px 0 rgba(0, 0, 0, 0.1);
  
}

#form {
  margin: 0 auto;
  max-width: 350px;
}
</style>
