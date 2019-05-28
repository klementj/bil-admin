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
        :items="user"
        :search="search"
        >
            <template v-slot:items="user">
                <td class="text-xs-left">{{user.item.firstName}}</td>
                <td class="text-xs-right">{{user.item.lastName}}</td>
                <td class="text-xs-right">{{user.item.email}}</td>
                <td class="text-xs-right">{{user.item.phone}}</td>
                <td class="text-xs-right">{{user.item.bookings}}</td>
                <td class="text-xs-right">{{user.item.role}}</td>
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
        user: Array
    },

    data() {
        return{
            search: '',
            header: [
                { text: 'Navn', value: 'firstName' },
                { text: 'Efternavn', value: 'lastName' },
                { text: 'Email', value:'email' },
                { text: 'Cykel lån', value: 'bookings' },
                { text: 'tlf.', value: 'phone' },
                { text: 'bruger rolle', value: 'role' }
            ]
        }
    }
}
</script>

<style>

</style>
