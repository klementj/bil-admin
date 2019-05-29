<template>
  <v-app>
    <Navigation />

    <v-toolbar color="primary" dark fixed app>
      <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ $route.meta.title }}</v-toolbar-title>
    </v-toolbar>

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

