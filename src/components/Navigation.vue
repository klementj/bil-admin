<template>
  <v-navigation-drawer v-model="drawer" fixed app>
    <v-layout justify-space-between column fill-height>
      <!-- Dispay current users profile picture and name -->
      <UserDisplay />
      <v-list class="pt-0">
        <v-divider></v-divider>

        <v-list-tile :to="{ name: 'home'}">
          <v-list-tile-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{ name: 'bookings'}">
          <v-list-tile-action>
            <v-icon>mdi-calendar</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Bookings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{ name: 'bikes'}">
          <v-list-tile-action>
            <v-icon>mdi-bike</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Bikes</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{ name: 'users'}">
          <v-list-tile-action>
            <v-icon>mdi-account-group</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{ name: 'projects'}">
          <v-list-tile-action>
            <v-icon>mdi-sunglasses</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Projects</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <div class="pa-2 mt-auto">
        <ToggleTheme />
      </div>

      <div class="pa-2">
        <v-btn block outline color="primary" :to="{ name: 'logout'}">Logout</v-btn>
      </div>
    </v-layout>  
  </v-navigation-drawer>
</template>

<script>
import UserDisplay from './UserDisplay'
import ToggleTheme from './ToggleTheme'

export default {
  name: 'Navigation',

  components: {
    UserDisplay,
    ToggleTheme
  },
  
  computed: {
    drawer: {
      get () {
        return this.$store.state.ui.drawer
      },
      set (val) {
        this.$store.commit('ui/SET_DRAWER', val)
      }
    }
  }
}
</script>
