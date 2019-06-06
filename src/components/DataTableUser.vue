<template>
    <v-card>
        <v-card-title>
            <h2> Brugere </h2>
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
        :items="users"
        :search="search"
        >
            <template v-slot:items="users">
                <td class="text-xs-left">{{users.item.firstName}}</td>
                <td class="text-xs-right">{{users.item.lastName}}</td>
                <td class="text-xs-right">{{users.item.email}}</td>
                <td class="text-xs-right">{{users.item.phone}}</td>
                <td class="text-xs-right">{{users.item.bookings}}</td>
                <td class="text-xs-right">{{users.item.role}}</td>
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
    name: "DataTableUser",
    
    props: {
        users: Array
    },

    data() {
        return{
            search: '',
            header: [
                { text: 'Navn', align: 'left' , value: 'firstName' },
                { text: 'Efternavn', align: 'right' , value: 'lastName' },
                { text: 'Email', align: 'right' , value:'email' },
                { text: 'Cykel lån', align: 'right' , value: 'bookings' },
                { text: 'tlf.', align: 'right' , value: 'phone' },
                { text: 'bruger rolle', align: 'right' , value: 'role' }
            ]
        }
    }
}
</script>

<style>

</style>
