<template>
  <div>
    <h1>PageUser</h1>
    <UsersList />
  </div>
</template>

<script>
import UsersList from '@/components/UsersList'

export default {
  name: 'PageUser',

  components: {
    UsersList
  }
}
</script>