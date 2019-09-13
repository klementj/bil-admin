<template>
<div>
  <AddBike/>
  <DataTable :bikes="Bikes" ></DataTable>
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

  created: function() {
    this.$store.dispatch('bike/fetchAllBikes')
  },

  computed: {


    ...mapGetters({
      Bikes: 'bike/allBikes'
    })
  }
}
</script>
