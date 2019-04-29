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
#app-container, .custom-card{
  /* margin-top: 2rem; */
  /* border: 0; */
  /* border-radius: .3rem; */
  margin-top: 2rem;
}

.navbar, .custom-card{
  padding: 2rem;
  /* background-color: linear-gradient(top left, #3a4251, #202942); */
  background-color: #1e2938;
  box-shadow: 0 0.1rem 5px 0 rgba(0, 0, 0, 0.1); 
}

#form {
  margin: 0 auto;
  max-width: 350px;
}
</style>
