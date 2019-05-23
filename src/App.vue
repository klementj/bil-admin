<template>
  <v-app>
    <NotificationSnackbar />
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
import NotificationSnackbar from '@/components/notification/NotificationSnackbar'

export default {
  name: 'app',
  components: {
    NotificationSnackbar,
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
