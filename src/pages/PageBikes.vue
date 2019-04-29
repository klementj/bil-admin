<template>
<div>
  <!-- <h1>PageBikes</h1> -->
  <AddBike class="custom-card my-3"/>
  <b-card bg-variant="dark" text-variant="white" class="custom-card my-3" header="All bikes">
    <pre class="m-0">{{ allBikes }}</pre>
  </b-card>
  <b-table responsive hover :items="allBikes" :fields="fields"></b-table>
</div>
</template>

<script>
import AddBike from '@/components/AddBike'

export default {
  name: 'PageBikes',

  components: {
    AddBike
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
