<template>
<v-container>
  <v-row>
    <v-col cols="12" md="8">
      <DataTable :bikes="Bikes" />
    </v-col>
    <v-col cols="12" md="4">
      <AddBike/>
    </v-col>
  </v-row>
</v-container>  
</template>

<script>
import AddBike from '@/components/AddBike'
import DataTable from '@/components/DataTable'
import { mapGetters } from 'vuex';

export default {
  name: 'PageBikes',

  components: {
    AddBike,
    DataTable
  },
  
    // Using  vuex function dispatch to trigger the actions to fetch all the bikes
  created: function() {
    this.$store.dispatch('bike/fetchAllBikes')
    this.$store.dispatch('category/fetchAllCategories')
  },

  computed: {

    // Using mapGetter to pull to get all bikes from the store bike module
    ...mapGetters({
      Bikes: 'bike/allBikes'
    })
  }
}
</script>
