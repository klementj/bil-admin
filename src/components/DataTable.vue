<template>
  <v-card>
     <v-data-table
    :headers="header"
    :items="bikes"
    :search="search"
    >
      <template v-slot:top>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
          <v-card-title>
            <span class="headline">Bike</span>
          </v-card-title>
          <v-card-text>
              <v-container grid-list-md>
                <v-row wrap>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.title" label="Tite"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model.number="editedItem.price" label="pris" ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.description" label="beskrivelse"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.discount" label="discount"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.category" label="kategori"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="save">Save</v-btn>
          </v-card-actions>
          </v-card>
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
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon
          small 
          class="mr-2"
          @click="editItem(item)"
        >
        rediger
        </v-icon>
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
// import MoneyComponent from '@/components/MoneyComponent'
// import { mapActions } from 'vuex'
// import { mapMutations, mapState } from 'vuex'

export default {
    name: "DataTable",

    components: {
    },

    props: {
      bikes: Array
    },

    data() {
      return{
        search: '',
        dialog: false,

        header:[ 
          
          { text: 'Navn', align: 'left', value: 'title' },
          { text: 'Pris', align: 'right' , value: 'price'},
          { text: 'Discount', align: 'right', value: 'discount'},
          { text: 'Kategori', align: 'right', value: 'category'},
          { text: 'rediger', align: 'right', value: 'action', sortable: false}
        ],
        editedItem: {
          title: '',
          price: 0,
          description: '',
          categories: [],
          images: []
        },
      }
    },

    methods: {
      editItem (item) {
        // item to edit overwrites editeditems default values, to be equal, using an assign to incase more parameters are added, the edited item still consist of the core parameters such as the ID which isn't given to the editedItem at default
        this.editedItem = Object.assign({}, item)
        this.dialog = true
        // this.$store.commit('ui/showModal', this.dialog)
      },

      close() {
        this.dialog = false
        
      //   // this.$store.commit('ui/hideModal', this.dialog)
      },

      // ...mapMutations({
      //   close: 'ui/hideModal',
      //   OpenSesam: 'ui/showModal'
      // }),

      // ...mapState({
      //     dialog: 'ui/modalComponent'
      // }),
      // ...mapActions([
      //   'bike/updateBike'
      // ]),

      // ...mapActions({
      //   save: 'bike/updateBike'
      // })

      save() {
        // Using Vuex function dispatch to trigger action updateBike and putting the information from the editedItem into the parameters needed to update a specifik bike
        this.$store.dispatch('bike/updateBike', this.editedItem).then(this.close())
      }
    },
}
</script>

<style>

</style>
