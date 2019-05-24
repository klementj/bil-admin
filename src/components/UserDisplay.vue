<template>
  <v-toolbar flat class="transparent">
    <v-list class="pa-0">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img :src="getImg !== null ? 'https://imgplaceholder.com/420x320/3a47c6/f7f7f7/glyphicon-user' : getimg " alt="avatar">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{ fullName }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-toolbar>
</template>

<script>
export default {
  name: 'UserDisplay',

  computed: {

    fullName() {
      return this.$store.state.user.currentUser.firstName + " " + this.$store.state.user.currentUser.lastName
    },

    getImg(){
      return this.$store.state.user.currentUser.img
    }
  }
}
</script>

<style>

</style>
