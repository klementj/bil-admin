<template>
  <v-app>
    <Snackbar />
    <template v-if="!isAuthenticated">
      <Login />
    </template>
    <template v-if="isAuthenticated">
      <Main />
    </template>
  </v-app>
</template>

<script>
import Snackbar from '@/components/notification/Snackbar'
import Login from '@/pages/PageLogin.vue'
import Main from '@/pages/PageMain.vue'

export default {
  name: 'app',

  components: {
    Snackbar,
    Login,
    Main
  },
  
  computed: {
    isAuthenticated(){
      return this.$store.state.auth.signedIn
    }
  }
}
</script>
