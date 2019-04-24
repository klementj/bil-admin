<template>
  <b-table responsive hover :items="users" :fields="fields"></b-table>
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
  }
}
</script>

<style lang="scss" scoped>

</style>
