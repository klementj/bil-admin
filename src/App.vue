<template>
  <v-app>
    <template v-if="!authenticated">
        <Login />
    </template>
    <template v-if="authenticated">
      <Main />
    </template>
  </v-app>
</template>

<script>
import Main from '@/pages/PageMain.vue'
import Login from '@/pages/PageLogin.vue'

export default {
  name: 'app',
  components: {
    Login,
    Main
  },
  data() {
    return {
      drawer: null
    }
  },
  computed: {
    authenticated(){
      return this.$store.state.auth.signedIn
    }
  }
}
</script>

<style>

</style>
