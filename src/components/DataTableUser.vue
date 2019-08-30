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
                <v-text-field v-model="editedItem.firstName" label="Fornavn"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.lastName" label="Efternavn"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.phone" label="tlf:"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.role" label="Rolle"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
        <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
      </v-card-actions>
      </v-card>
    </v-dialog>
        <v-card-title>
            <h2> Brugere </h2>
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
            <template v-slot:items="users">
                <td class="text-xs-left">{{users.item.firstName}}</td>
                <td class="text-xs-right">{{users.item.lastName}}</td>
                <td class="text-xs-right">{{users.item.email}}</td>
                <td class="text-xs-right">{{users.item.bookings}}</td>
                <td class="text-xs-right">{{users.item.phone}}</td>
                <td class="text-xs-right">{{users.item.role}}</td>
                <td class="justify-center layout px-0">
                    <v-icon
                    small
                    class="mr-2"
                    @click="editItem(users.item)"
                    >
                    Rediger
                    </v-icon> 
                </td>
            </template>
            <template v-slot:no-results>
                <v-alert :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
            </v-alert>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
import { setTimeout } from 'timers'

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
                { text: 'Navn', align: 'left' , value: 'firstName' },
                { text: 'Efternavn', align: 'right' , value: 'lastName' },
                { text: 'Email', align: 'right' , value:'email' },
                { text: 'Cykel lån', align: 'right' , value: 'bookings' },
                { text: 'tlf.', align: 'right' , value: 'phone' },
                { text: 'bruger rolle', align: 'right' , value: 'role' }
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
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      close() {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
        }, 300)
      },

      save() {
          this.close()
      }
    }
}
</script>

<style>

</style>
