<template>
<div>
  <Booking />
  <DataTableBooking :bookings="allBookings" />
</div>
</template>

<script>
import Booking from '@/components/CreateBooking.vue'
import DataTableBooking from '@/components/DataTableBooking.vue'

export default {
  name: 'PageBookings',

  components: {
    Booking,
    DataTableBooking
  },

  created: function (){
    this.$store.dispatch('bike/fetchAllBikes');
    this.$store.dispatch('user/fetchAllUsers');
    this.$store.dispatch('booking/fetchAllBookings');
  },

  computed: {
    allBookings: function(){
      return this.$store.getters['booking/allBookings'];
    }
  }
}
</script>
