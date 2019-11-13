<template>
<div>
  <AddBike/>
  <DataTable :bikes="allBikes" ></DataTable>
</div>
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
  computed:{
      // Using mapGetter to pull to get all bikes from the store bike module
    ...mapGetters({
      allBikes: 'bike/allBikes',
      allCategories: 'category/allCategories'      
    }),
  }
  
}

</script>
