<template>
<div>
  <AddBike/>
  <pre>
  {{allBikes}}
  </pre>
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
