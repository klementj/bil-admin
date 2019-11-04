<template>
  <v-navigation-drawer v-model="drawer" fixed app>

    <UserDisplay />
    <v-divider></v-divider>

    <v-list class="pt-0">
      <v-list-item :to="{ name: 'home'}">
        <v-list-item-action>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item :to="{ name: 'bookings'}">
        <v-list-item-action>
          <v-icon>mdi-calendar</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Bookings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item :to="{ name: 'bikes'}">
        <v-list-item-action>
          <v-icon>mdi-bike</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Bikes</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item :to="{ name: 'users'}">
        <v-list-item-action>
          <v-icon>mdi-account-group</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Users</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item :to="{ name: 'projects'}">
        <v-list-item-action>
          <v-icon>mdi-sunglasses</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Projects</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <ToggleTheme class="pa-2"/>

      <div class="pa-2">
        <v-btn block outlined color="primary" :to="{ name: 'logout'}">Logout</v-btn>
      </div>
    </template>
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
    },
    
    makeTheme(){
      return JSON.parse(localStorage.getItem('darkTheme'))
    }
  }
}
</script>
