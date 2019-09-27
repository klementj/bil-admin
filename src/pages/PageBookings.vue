<template>
<div>
  <Booking />
  <DataTableBooking :bookings="allBookings" />
</div>
</template>

<script>
import Booking from '@/components/CreateBooking.vue'
import DataTableBooking from '@/components/DataTableBooking.vue'
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'PageBookings',

  components: {
    Booking,
    DataTableBooking
  },

  created: function (){
    this.fetchBookings
  },

  computed: {
    ...mapGetters({
      allBookings: 'booking/allBookings',
      allBikes: 'bike/allBikes',
      allUser: 'user/allUsers'
    }),
    ...mapActions({
      fetchBookings: 'booking/fetchAllBookings'
    }),
    fullBookings: function(){
          let newBookings = Array.from(this.dontrunawa);
          
          newBookings.forEach(booking => {
              booking.user = this.findUserById(booking.user);

              booking.bike = this.findBikeById(booking.bike);
          });
          return newBookings;
      },
  },

    methods:{
        findUserById: function(id){
            return this.allBikes.find(bike => bike.id === id);
        },
        findBikeById: function(id){
            return this.allUsers.find(user => user.id === id);
        },
    },
}
</script>
