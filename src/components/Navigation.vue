<template>
  <v-navigation-drawer v-model="drawer" fixed app>
      <v-list >
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


        <v-list-tile :to="{ name: 'home'}">
          <v-list-tile-action>
            <v-icon>mdi-sunglasses</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Projects</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{ name: 'logout'}">
          <v-list-tile-action>
            <v-icon>mdi-emoticon-poop</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>

<script>

export default {
  name: 'Navigation',

  data() {
    return {
      drawer: null
    }
  }

}
</script>
