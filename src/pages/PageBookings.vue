<template>
<div>
  <Booking />
  <DataTableBooking :bookings="makeBookings" />
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

  mounted() {
    this.fetchUsers,
    this.fetchBookings,
    this.fetchBikes
  },

  computed: {
    ...mapGetters({
      allBookings: 'booking/allBookings',
      allBikes: 'bike/allBikes',
      allUsers: 'user/allUsers'
    }),
    ...mapActions({
      fetchBookings: 'booking/fetchAllBookings',
      fetchUsers: 'user/fetchAllUsers',
      fetchBikes: 'bike/fetchAllBikes'
    }),
    makeBookings(){

            this.allBookings.forEach(booking => {
                booking.user = this.getUserName(booking.user);

                booking.bike = this.getBikeName(booking.bike)
            })
            return this.allBookings
    }
  },

    methods:{
        getUserName( id ){
            const user = this.allUsers.find(user => user.id === id)

            const userName = user.firstName + " " + user.lastName
           
            return JSON.stringify(userName)
        },

        getBikeName( id ){
          const bike = this.allBikes.find(bike => bike.id === id)
          
          return JSON.stringify(bike.title)
        }
        // findUserById: function(id){
        //     return this.allBikes.find(bike => bike.id === id);
        // },
        // findBikeById: function(id){
        //     return this.allUsers.find(user => user.id === id);
        // },
    },
}
</script>
