<template>
<div>
  <AddBike/>
  <DataTable :bikes="allBikes" ></DataTable>
  <BikeCard :bike="allBikes[1]"/>
</div>
</template>

<script>
import AddBike from '@/components/AddBike'
import DataTable from '@/components/DataTable'
import BikeCard from '@/components/BikeCard'

export default {
  name: 'PageBikes',

  components: {
    AddBike,
    DataTable,
    BikeCard
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
