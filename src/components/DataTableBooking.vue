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
            <template v-slot:no-results>
                <v-alert :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
            </v-alert>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "DataTableBooking",
    
    props: {
        bookings: Array
    },

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

    methods: {
        getUserName(id){
            const { firstName, lastName} = this.Users.find(user => user === id)
            return { firstName, lastName }
        }
    },

    computed: {
        ...mapGetters({
            Users: 'user/allUsers',
            Bikes: 'bike/allBikes'
        })
    }
}
</script>

<style>

</style>
