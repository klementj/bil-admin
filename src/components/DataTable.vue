<template>
  <v-card>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card-title>
        <span class="headline">{{ formTitle }}</span>
      </v-card-title>
      <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.title" label="Tite"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.price" label="pris"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.description" label="beskrivelse"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.discount" label="tilbud"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.categories" label="kategory"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
        <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
      </v-card-actions>
    </v-dialog>

    <v-card-title>
        <h2> Cykler </h2>
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
    :items="bikes"
    :search="search"
    >

    <template v-slot:items="bikes">
      <td class="text-xs-left">{{bikes.item.title}}</td>
      <td class="text-xs-right" > <MoneyComponent :price="bikes.item.price" /> </td>
      <td class="text-xs-right">{{bikes.item.description}}</td>
      <td class="text-xs-right">{{bikes.item.categories}}</td>
      <td class="text-xs-right">{{bikes.item.discount}}</td>
      <td class="text-xs-right">{{bikes.item.images}}</td>
      <td class="justify-center layout px-0">
        <v-icon
          small
          class="mr-2"
          @click="editItem(bikes.item)"
          >
          Rediger
        </v-icon> 
      </td>
    </template>
    <template v-slot:no-results>
      <v-alert :value="true" color="error" icon="warning">
          Din søgning efter "{{ search }}" gav intet resultat.
        </v-alert>
      </template>
  </v-data-table>
</v-card>
</template>

<script>
import MoneyComponent from '@/components/MoneyComponent'

export default {
    name: "DataTable",

    components: {
      MoneyComponent
    },

    props: {
      bikes: Array
    },

    data() {
      return{
        dialog: false,
        search: '',

        header:[ 
          
          { text: 'Navn', align: 'left', value: 'title' },
          { text: 'Pris', align: 'right' , value: 'price'},
          { text: 'Beskrivelse', align: 'right' , value: 'description'},
          { text: 'Kategorier', align: 'right' , value: 'categories'},
          { text: 'Discount', align: 'right', value: 'discount'},
          { text: 'Billeder', align: 'right', value: 'images'}
        ],
        editedItem: {
          title: '',
          price: 0,
          description: '',
          categories: [],
          discount: '',
          images: []
        }
      }
    },

    methods: {
      editItem (item) {
        this.editedIndex = this.bikes.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      }
    }
}
</script>

<style>

</style>
