<template>
  <v-app>
    <NotificationSnackbar />
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
import Navigation from '@/components/Navigation'
import NotificationSnackbar from '@/components/notification/NotificationSnackbar'

export default {
  name: 'app',
  components: {
    Navigation,
    NotificationSnackbar
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
