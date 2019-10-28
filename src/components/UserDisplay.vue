<template>
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-item>
          <v-list-item-avatar>
            <v-img :src="getimg" v-if="!defaultIcon" >
            </v-img>
            <v-img v-if="defaultIcon">
              <PersonIcon w="36px" h="36px"/>
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
import PersonIcon from 'vue-ionicons/dist/md-person.vue'

export default {
  name: 'UserDisplay',
  
  components: {
    PersonIcon
  },

  data(){
    return{
      defaultIcon: false,
    }
  },

  computed: {

    fullName() {
      const userImg = this.$store.state.user.currentUser.userImg

      if ( userImg === "undefinded" || userImg === false) {
        this.defaultIcon = true
      } else{
        this.defaultIcon = false
      }
      return this.$store.state.user.currentUser.firstName + " " + this.$store.state.user.currentUser.lastName
    },
  }
}
</script>

<style>

</style>
