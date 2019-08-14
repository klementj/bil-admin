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
                <td class="text-xs-left">{{bookings.item.user}}</td>
                <td class="text-xs-right">{{bookings.item.bike}}</td>
                <td class="text-xs-right">{{bookings.item.startTime}}</td>
                <td class="text-xs-right">{{bookings.item.endTime}}</td>
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
                { text: 'User', align: 'left' , value: 'user' },
                { text: 'Bike', align: 'right' , value: 'bike' },
                { text: 'Start', align: 'right' , value:'startTime' },
                { text: 'End', align: 'right' , value: 'endTime' }
            ]
        }
    },

    computed: {
    }
}
</script>

<style>

</style>
