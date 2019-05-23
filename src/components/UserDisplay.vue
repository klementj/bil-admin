<template>
  <v-toolbar flat class="transparent">
    <v-list class="pa-0">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img :src="getPicture()" alt="avatar">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{getName()}}</v-list-tile-title>
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
        user: {}
        }
    },
  methods: {     
    
    
     //getting the name from the user and making sure there is something in it
    getName() {
          this.user = this.$store.state.user.currentUser
          
          if(!this.user.firstName || !this.user.lastName || this.user.firstName === "" || this.user.lastName === "" || !this.user || this.user == {} ){
            return "Placeholder Holdersen Place"
          }
          else{
            return this.user.firstName + " " +  this.user.lastName
       }
    },

    //getting picture for the avatar
    getPicture() {
      this.user = this.$store.state.user.currentUser
      
      if(!this.user.image || this.user.image === "" || !this.user || this.user == {} ){
            return "https://imgplaceholder.com/420x320/3a47c6/f7f7f7/glyphicon-user"
          }
          else{
            return this.user.image      
      }  
    }
  }
}
</script>

<style>

</style>
