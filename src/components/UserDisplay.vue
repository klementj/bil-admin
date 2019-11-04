<template>
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-item>
          <v-list-item-avatar>
            <v-img v-if=" typeof getImg === 'undefined' || getImg === null" src="@/assets/person.svg" >
            </v-img>
            <v-img v-else :src="getImg">
            </v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ fullName }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
