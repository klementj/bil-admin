<template>
    <v-card>
        <v-card-title>
        Bookings
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
export default {
    name: "DataTableBooking",
    
    props: {
        bookings: Array
    },

    data() {
        return{
            search: '',
            header: [
                { text: 'User', align: 'left' , value: 'user.firstName' },
                { text: 'Bike', align: 'left' , value: 'bike.title' },
                { text: 'Start', align: 'right' , value:'startTime' },
                { text: 'End', align: 'right' , value: 'endTime' }
            ]
        }
    },

    // computed: {

    //     makeUserName(id){            
    //       const user = this.Users.find(user => user.id === id)
    //       console.log("Users",this.Users)
    //       const userName = user.firstName + " " + user.lastName
    //       return userName
    //     }
    // }
}
</script>

<style>

</style>
