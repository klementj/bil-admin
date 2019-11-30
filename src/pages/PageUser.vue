<template>
<v-container>
  <v-row>
    <v-col cols="12" md="8">
      <DataTableUser :users="allUsers" />
    </v-col>
    <v-col cols="12" md="4">
      <CreateUser />
    </v-col>
  </v-row>
</v-container>  
</template>

<script>
// import UserEdit from '@/components/UserEdit'
import CreateUser from '@/components/CreateUser.vue'
import DataTableUser from '@/components/DataTableUser'
import { mapGetters } from 'vuex'

export default {
  name: 'PageUser',

  components: {
    // UserEdit,
    CreateUser,
    DataTableUser
  },

  mounted() {
    this.$store.dispatch('user/fetchAllUsers')
  },

  computed: {
    
    ...mapGetters({
      allUsers: 'user/allUsers'
    })
  }
}
</script>
