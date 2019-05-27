<template>
    <v-data-table
    :headers="header"
    :items="bikes"
    class="elevation-1"
  >
    <template v-slot:items="bikes">
      <td>{{bikes.item.title}}</td>
      <td class="text-xs-right">{{bikes.item.price}}</td>
      <td class="text-xs-right">{{bikes.item.description}}</td>
      <td class="text-xs-right">{{bikes.item.categories}}</td>
      <td class="text-xs-right">{{bikes.item.discount}}</td>
      <td class="text-xs-right">{{bikes.item.images}}</td>
    </template>
  </v-data-table>
</template>

<script>
export default {
    name: "DataTable",

    props: {
      bikes: Array
    },

    data() {
      return{
        header:[ 
          {
            text: 'Cykler',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          
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
