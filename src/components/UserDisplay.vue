<template>
  <v-toolbar flat class="transparent">
    <v-list class="pa-0">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{this.getName()}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-toolbar>
</template>

<script>
export default {
  name: 'UserDisplay',          
    data() {
        return{
        user: this.$store.state.user.currentUser,
        }
    },
  methods: {
    getName(){
      console.log(this.user)
      if(!this.user.firstName || !this.user.lastName || this.user.firstName === "" || this.user.lastName === ""){
        return "Placeholder Holdersen Place"
      }
      else{
        return this.user.firstName + " " +  this.user.lastName
      }
    }
  } 
}
</script>

<style>

</style>
