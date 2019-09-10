<template>
  <v-card>
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-item avatar>
          <v-list-item-avatar>
            <v-img :src="getImg !== null ? 'https://imgplaceholder.com/420x320/3a47c6/f7f7f7/glyphicon-user' : getimg " alt="avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-tile-title>{{ fullName }}</v-list-tile-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-toolbar>
  </v-card>
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
