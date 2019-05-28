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
import { promises } from 'fs';
import { Promise } from 'q';

export default {
  name: 'PageUser',

  components: {
    // UserEdit,
    UsersList,
    DataTableUser
  },

  methods: {
    getUsers(){

    }
  },

  computed: {    
    allUsers() {
      const users =  Promise.resolve(this.$store.dispatch('user/fetchAllUsers'))
      return users
    }
  }
}
</script>