<template>
  <div>
      <h1 class="ml-1">Users</h1>
      <UsersList />
      <!-- <UserEdit /> -->
  </div>
</template>

<script>
// import UserEdit from '@/components/UserEdit'
import UsersList from '@/components/UsersList'

export default {
  name: 'PageUser',

  components: {
    // UserEdit,
    UsersList
  }
}
</script>