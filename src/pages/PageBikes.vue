<template>
<div>
  <AddBike/>
  <DataTable :bikes="allBikes" ></DataTable>
</div>
</template>

<script>
import AddBike from '@/components/AddBike'
import DataTable from '@/components/DataTable'

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
    allBikes() {
      return this.$store.getters['bike/allBikes']
    }
  }
}
</script>
