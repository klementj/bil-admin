<template>
    <v-container>
      <v-layout>
        <v-flex :shrink="true">
          <v-avatar :tile="tile" color="grey lighten-4">
            <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
          </v-avatar>
        </v-flex>
        <v-flex>   
          <p>{{this.getName()}}</p>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {           
    data() {
        return{
        name: this.$store.state,
        lastName: ""
        }
    },
  methods: {
    getName(){
      if(!this.name || !this.lastName || this.name === "" || this.lastName === ""){
        return "Placeholder Holdersen Place"
      }
      else{
        return this.name + " " +  this.lastName
      }
    }
  } 
}
</script>

<style>

</style>
