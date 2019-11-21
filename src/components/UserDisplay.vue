<template v-slot:prepend>
  <v-list-item two-line>
    <v-list-item-avatar>
      <v-img v-if=" typeof getImg === 'undefined' || getImg === null" >
        <template v-slot:placeholder>
          <svg>
            <use xlink:href="@/assets/person.svg#lighttheme"></use>
          </svg>
        </template>
      </v-img>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>{{ fullName }}</v-list-item-title>
      <v-list-item-subtitle>Logged In</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
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
