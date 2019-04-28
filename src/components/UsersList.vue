<template>
<div>

  <!-- <b-table responsive hover :items="allUsers" :fields="fields"></b-table> -->
  <b-card class="mt-3" header="Current User">
    <pre class="m-0">{{ user }}</pre>
  </b-card>
  <!-- <b-card class="mt-3" header="All Users">
    <pre class="m-0">{{ allUsers }}</pre>
  </b-card> -->
</div>
</template>

<script>
export default {
  name: 'UsersList',
  data() {
    return{
      // Order of table columns
      fields: ['first_name', 'last_name', 'email', 'phone', 'role'], 
      users: [
        { first_name: 'Jacob', last_name: 'Green Johansen', email: 'abekatten90omvendtlang@gmail.dk', phone: '30883920', role: 'admin'},
        { first_name: 'John', last_name: 'Doe', email: 'John@doe.com', phone: '12345678', role: 'user'},
        { first_name: 'Jane', last_name: 'Doe', email: 'Jane@doe.com', phone: '39872738', role: 'manager'}
      ]
    }
  },
  created: function() {
    this.$store.dispatch('user/fetchCurrentUser')
    this.$store.dispatch('user/fetchAllUsers')
    // users = user()
  },
  computed: {
    user() {
      return this.$store.getters['user/currentUser']
    },
    allUsers() {
      return this.$store.getters['user/allUsers']
    }
  }
}
</script>
