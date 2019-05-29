<template>
  <div>
    <CreateUser />
    <UsersList />    
    <DataTableUser :user="allUsers" ></DataTableUser>
    <!-- <UserEdit /> -->
  </div>
</template>

<script>
// import UserEdit from '@/components/UserEdit'
import UsersList from '@/components/UsersList'
import CreateUser from '../components/CreateUser.vue'
import DataTableUser from '@/components/DataTableUser'

export default {
  name: 'PageUser',

  components: {
    // UserEdit,
    UsersList,
    CreateUser,
    DataTableUser
  },

  computed: {    
    allUsers() {            
      return this.$store.getters['user/allUsers']      
    }

  }
}
</script>
