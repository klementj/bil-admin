<template>
  <div>
      <h1 class="ml-1">Users</h1>
      <UsersList />
      <DataTableUser :user="allUsers" ></DataTableUser>
      <!-- <UserEdit /> -->
  </div>
</template>

<script>
// import UserEdit from '@/components/UserEdit'
import UsersList from '@/components/UsersList'
import DataTableUser from '@/components/DataTableUser'

export default {
  name: 'PageUser',

  components: {
    // UserEdit,
    UsersList,
    DataTableUser
  },

  computed: {    
    allUsers() {            
      return this.$store.getters['user/allUsers']      
    }
  }
}
</script>