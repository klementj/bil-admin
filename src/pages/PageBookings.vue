<template>
<div>
  <Booking />
  <DataTableBooking :bookings="makeBooking" />
</div>
</template>

<script>
import Booking from '@/components/CreateBooking.vue'
import DataTableBooking from '@/components/DataTableBooking.vue'
import moment from 'moment'
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
    makeBooking() {
      
      const bookings = Array.from(this.allBookings)
      bookings.forEach(booking => {
          
          booking.startTime = moment(booking.startTime).format('DD/MM/YY')

          booking.endTime = moment(booking.endTime).format('DD/MM/YY')

          booking.user =  Object.assign(booking.user, this.getUserName(typeof booking.user.id === "undefined" ? booking.user : booking.user.id))

          booking.bike = Object.assign(booking.bike, this.getBikeName(typeof booking.bike.id === "undefined" ? booking.bike : booking.bike.id))
        })
    //   // get: function(){ 
    //   //   return this.bookings
    //   // },
      
    //   // set: function(){
    //   //     let bookings = Array.from(this.allBookings)
          
    //   //     bookings.forEach(booking => {
    //   //       console.log(booking)
            
    //   //         booking.user = this.getUserName(booking.user)

    //   //         booking.bike = this.getBikeName(booking.bike)
    //   //     })
    //   // }
    //   // let bookingArray = Array.from(this.allBookings)

    //   // console.log("bookingArray",bookingArray)
      return bookings
    }
  },

    methods:{
        getUserName( id ){
          const user = this.allUsers.find(user => user.id === id)
          return user
        },

        getBikeName( id ){
          const bike = this.allBikes.find(bike => bike.id === id)         
          return bike
        },

        // findUserById: function(id){
        //     return this.allBikes.find(bike => bike.id === id);
        // },
        // findBikeById: function(id){
        //     return this.allUsers.find(user => user.id === id);
        // },
    },
}
</script>
