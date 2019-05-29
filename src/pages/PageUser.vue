<template>
  <div>
    <CreateUser />
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
    UsersList, 
    CreateUser
  }
}
</script>
