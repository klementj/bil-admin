<template>
  <v-app>
    <Navigation />
      <v-app-bar 
     dark 
     fixed 
     app 
     color="primary">
        <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ $route.meta.title }}</v-toolbar-title>
      </v-app-bar>
    <v-content fill-height>
      <v-container>
          <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'Main',

  components: {
      Navigation
  },

  methods: {
    toggleDrawer: function() {
      this.$store.state.ui.drawer = !this.$store.state.ui.drawer
    }
  }
}
</script>

