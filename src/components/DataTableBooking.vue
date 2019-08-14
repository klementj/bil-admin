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
        :items="bookings"
        :search="search"
        >
            <template v-slot:items="bookings">
                <td class="text-xs-left">{{findUserById(bookings.item.user)}}</td>
                <td class="text-xs-right">{{findBikeById(bookings.item.bike)}}</td>
                <td class="text-xs-right">{{bookings.item.startTime.substr(0, 10)}}</td>
                <td class="text-xs-right">{{bookings.item.endTime.substr(0, 10)}}</td>
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
    
    props: {
        bookings: Array
    },

    data() {
        return{
            search: '',
            header: [
                { text: 'User', align: 'left' , value: 'Name' },
                { text: 'Bike', align: 'right' , value: 'bike' },
                { text: 'Start', align: 'right' , value:'startTime' },
                { text: 'End', align: 'right' , value: 'endTime' }
            ]
        }
    },

    methods:{
        findUserById: function(id){
            var user = this.$store.getters['user/allUsers'].find(u => u.id = id);
            return this.fullName(user);
        },

        fullName: function(item) {
            return item.firstName + " " + item.lastName;
        },

        findBikeById: function(id){
            var bike = this.$store.getters['bike/allBikes'].find(b => b.id = id);
            return bike.title;
        },
    },

    computed: {
        
    }
}
</script>

<style>

</style>
