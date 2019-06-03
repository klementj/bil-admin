<template>
  <Booking />
</template>

<script>
import Booking from '@/components/CreateBooking.vue'

export default {
  name: 'PageBookings',

  components: {
    Booking
  },

  created: function (){
            this.$store.dispatch('bike/fetchAllBikes');
            this.$store.dispatch('user/fetchAllUsers');
        }
}
</script>
