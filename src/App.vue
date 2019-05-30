<template>
  <v-app :dark="isDark">
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

  beforeCreate() {
    // Check if dark theme and set in store
    const dark = JSON.parse(localStorage.getItem('darkTheme'))    
    if (dark) {
      this.$store.commit('ui/SET_COLOR_THEME', dark)
    }
  },
  
  computed: {
    isAuthenticated(){
      return this.$store.state.auth.signedIn
    },
    isDark(){
      return this.$store.state.ui.isDark
    }
  }
}
</script>
