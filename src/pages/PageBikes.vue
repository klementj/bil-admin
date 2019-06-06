<template>
<div>
  <AddBike/>
  <DataTable :bikes="allBikes" ></DataTable>
  <MoneyComponent :price='600000000' />
</div>
</template>

<script>
import AddBike from '@/components/AddBike'
import DataTable from '@/components/DataTable'
import MoneyComponent from '@/components/MoneyComponent'

export default {
  name: 'PageBikes',

  components: {
    AddBike,
    DataTable,
    MoneyComponent
  },

  data() {
    return {
      bikes: []
    }
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
