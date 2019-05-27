<template>
  <div>
    <CreateUser />
      <h1 class="ml-1">Users</h1>
      <UsersList />
      <!-- <UserEdit /> -->
  </div>
</template>

<script>
// import UserEdit from '@/components/UserEdit'
import UsersList from '@/components/UsersList'
import CreateUser from '../components/CreateUser.vue'

export default {
  name: 'PageUser',

  components: {
    // UserEdit,
    UsersList, CreateUser
  }
}
</script>