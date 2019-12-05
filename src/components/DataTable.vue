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
          <v-card-title>Edit {{ editedItem.title }}</v-card-title>

          <v-card-text>
            <v-row wrap>
              <v-col cols="12">
                <v-text-field v-model="editedItem.title" label="Bike name"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea v-model="editedItem.description" label="Description"></v-textarea>
              </v-col>
              <v-col cols="10">
                <v-text-field type="currency" v-model.number="editedItem.price" label="Price (DKK)"></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-text-field suffix="%" v-model="editedItem.discount" label="Discount"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="editedItem.category" label="category"></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="close">Cancel</v-btn>
            <v-btn color="primary" outlined @click="save">Save</v-btn>
          </v-card-actions>
          </v-card>
        </v-dialog>

        <v-card-title>
          All Bikes
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            label="Search"
            single-line
            hide-details
            ></v-text-field>
        </v-card-title>    
      </template>

      <template v-slot:item.price="{ item }">
        <span v-if="item.discount !== 0">
          <del>{{ item.price }}</del> 
          {{ item.price - item.price * (item.discount / 100)}}
        </span>
        <span v-else>
          {{ item.price }} 
        </span>
      </template>

      <template v-slot:item.discount="{ item }">
        {{ item.discount }} <span v-if="item.discount !== 0">%</span>
      </template>
      
      <template v-slot:item.categories="{ item }">
        <v-chip outlined small v-for="category in item.categories" :key="category">
          {{ humanCategoryName(category).title }}
        </v-chip>
      </template>

      <template v-slot:item.action="{ item }">
        <v-icon small @click="editItem(item)" title="Edit bike"> mdi-pencil </v-icon>
      </template>

      <template v-slot:no-results>
        <v-alert :value="true">
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
import { mapGetters } from 'vuex'

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
          { text: 'Name', align: 'left', value: 'title' },
          { text: 'Categories', align: 'left', value: 'categories'},
          { text: 'Discount (%)', align: 'right', value: 'discount'},
          { text: 'Price (DKK)', align: 'right' , value: 'price'},
          { text: 'Edit', align: 'right', value: 'action', sortable: false}
        ],

        editedItem: {
          title: '',
          description: '',
          price: undefined,
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
      },

     async humanCategoryName(id){
        const humanCategory = await this.allCategories.find( category => category.id === id )       
        if (humanCategory !== undefined) {
          console.log(humanCategory);
          
          return humanCategory
        }
          return humanCategory
      }
    },

    computed: {
      ...mapGetters({
        allCategories: 'category/allCategories'
      })
    }
}
</script>

<style>

</style>
