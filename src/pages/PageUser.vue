<template>
  <div>
    <CreateUser />
    <DataTableUser :users="allUsers" ></DataTableUser>
    <!-- <UserEdit /> -->
  </div>
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
