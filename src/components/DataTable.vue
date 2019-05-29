<template>
  <v-card>
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
      <td class="text-xs-right">{{bikes.item.price}}</td>
      <td class="text-xs-right">{{bikes.item.description}}</td>
      <td class="text-xs-right">{{bikes.item.categories}}</td>
      <td class="text-xs-right">{{bikes.item.discount}}</td>
      <td class="text-xs-right">{{bikes.item.images}}</td>
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
export default {
    name: "DataTable",

    props: {
      bikes: Array
    },

    data() {
      return{
        search: '',
        header:[ 
          
          
          { text: 'Navn', align: 'left', value: 'title' },
          { text: 'Pris', align: 'right' , value: 'price'},
          { text: 'Beskrivelse', align: 'right' , value: 'description'},
          { text: 'Kategorier', align: 'right' , value: 'categories'},
          { text: 'Discount', align: 'right', value: 'discount'},
          { text: 'Billeder', align: 'right', value: 'images'}
        ]
      }
    }
}
</script>

<style>

</style>
