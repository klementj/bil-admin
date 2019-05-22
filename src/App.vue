<template>
  <v-app>
    <Navigation />
    <v-toolbar color="primary" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Bicycle Library</v-toolbar-title>
    </v-toolbar>

    <v-content fill-height>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation'
// import LoginForm from '@/components/LoginForm'

export default {
  name: 'app',
  components: {
    Navigation
  },
  data() {
    return {
      drawer: null
    }
  }
}
</script>

<style>

</style>
