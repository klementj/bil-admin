<template>
    <v-card>
        <v-dialog v-model="dialog" max-width="500px">
      <v-card>
      <v-card-title>
        <span class="headline">User</span>
      </v-card-title>
      <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.firstName" label="First name"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.lastName" label="Last name"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.phone" label="phone number"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.role" label="Role"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="close">Cancel</v-btn>
        <v-btn color="primary" flat @click="save">Save</v-btn>
      </v-card-actions>
      </v-card>
    </v-dialog>
        <v-card-title>
          Brugere
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>    
        
        <v-data-table
        :headers="header"
        :items="users"
        :search="search"
        >
          <template v-slot:item.action="{ item }" >
            <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
            title="Edit user"
            >
            mdi-pencil
            </v-icon>
          </template>
          <template v-slot:no-results>
            <v-alert :value="true">
            Your search for "{{ search }}" found no results.
            </v-alert>
          </template>
        </v-data-table>
    </v-card>
</template>

<script>

export default {
    name: "DataTableUser",
    
    props: {
        users: Array
    },

    data() {
        return{
            dialog: false,
            search: '',
            header: [
                { text: 'First name', align: 'left' , value: 'firstName' },
                { text: 'Last name', align: 'left' , value: 'lastName' },
                { text: 'Email', align: 'left' , value:'email' },
                { text: 'Bicycle booked', align: 'left' , value: 'bookings' },
                { text: 'Phone number.', align: 'left' , value: 'phone' },
                { text: 'User role', align: 'left' , value: 'role' },
                { text: 'Edit', align: 'left', value: 'action', sortable: false }
            ],
            editedItem: {
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              role: '' 
            }
        }
    },

    methods: {
        editItem (item) {
        // assigns values from the item seleected to have its values over the editeditem
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      close() {
        this.dialog = false
      },

      save() {
        // using Vuex dispatch function to use action updateUser to update a user with values given from the editeditem
          this.$store.dispatch('user/updateUser', this.editedItem).then(this.close())
      }
    }
}
</script>

<style>

</style>
