<template>
    <v-card>
        <v-card-title>
            <h2> Bookings </h2>
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
        </v-card-title>    
        <v-data-table
        :headers="header"
        :items="fullBookings"
        :search="search"
        >
            <template v-slot:items="fullBookings">
                <td class="text-xs-left">{{fullName(fullBookings.item.user)}}</td>
                <td class="text-xs-right">{{fullBookings.item.bike.title}}</td>
                <td class="text-xs-right">{{fullBookings.item.startTime.substr(0, 10)}}</td>
                <td class="text-xs-right">{{fullBookings.item.endTime.substr(0, 10)}}</td>
            </template>
            <template v-slot:no-results>
                <v-alert :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
            </v-alert>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    name: "DataTableBooking",
    
    props: ['bookings'],

    data() {
        return{
            search: '',
            header: [
                { text: 'User', align: 'left' , value: 'user' },
                { text: 'Bike', align: 'right' , value: 'bike' },
                { text: 'Start', align: 'right' , value:'startTime' },
                { text: 'End', align: 'right' , value: 'endTime' }
            ]
        }
    },

    methods:{
        findUserById: function(id){
            return this.$store.getters['user/allUsers'].find(u => u.id === id);
        },

        fullName: function(item) {
            return item.firstName + " " + item.lastName;
        },

        findBikeById: function(id){
            return this.$store.getters['bike/allBikes'].find(b => b.id === id);
        },
    },

    computed: {
        fullBookings: function(){
            let newBookings = Array.from(this.bookings);
            
            newBookings.forEach(booking => {
               booking.user = this.findUserById(booking.user);

               booking.bike = this.findBikeById(booking.bike);
            });

            return newBookings;
        }
    }
}
</script>

<style>

</style>
