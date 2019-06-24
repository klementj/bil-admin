<template>
    <v-card>
        <v-toolbar flat>
      <v-toolbar-title>Opret ny reservation</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
        <v-form>
            <!-- Start date -->
            <v-menu
              ref="menu1"
              v-model="menu1"
              >
              <template v-slot:activator="{ on }">
                <v-text-field
                v-model="form.start_time"
                label="Start date"
                hint="This is the selected start date"
                persistent-hint
                readonly
                v-on="on"
                ></v-text-field>
                </template>
                <v-date-picker
                v-model="form.start_time"
                name="startTime"
                ></v-date-picker>
            </v-menu>

            <!-- End date -->
            <v-menu
              ref="menu2"
              v-model="menu2"
              >
              <template v-slot:activator="{ on }">
                <v-text-field
                v-model="form.end_time"
                label="End date"
                hint="This is the selected end date"
                persistent-hint
                :class="{'dateSelectionInvalid': !validSelection}"
                readonly
                v-on="on"
                ></v-text-field>
                </template>
                <v-date-picker
                v-model="form.end_time"
                :min="form.start_time + 1"
                name="endTime"
                ></v-date-picker>
            </v-menu>

            <!-- Calendar for display -->
            <v-date-picker
                v-model="selectedDates"
                :events="bookedDates"
                event-color="red"
                no-title
                multiple
                scrollable
                readonly>
            </v-date-picker>

            <!-- Bike -->
            <v-select 
                v-model="form.bike"
                v-bind:items="listBikes"
                item-text="title"
                item-value="id"
                name="bike"
                label="Cykel"
                type="text"
                v-on:change="checkBikeAvailablility()"
            ></v-select>
            <!-- User -->
            <v-select 
                v-model="form.user"
                v-bind:items="allUsers"
                :item-text="userFullName"
                item-value="id"
                name="user"
                label="Bruger"
                type="text"
            ></v-select>
        </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="onSubmit">Tilføj reservation</v-btn>
    </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "CreateBooking",

    data() {
        return {
            menu1: false,
            menu2: false,
            bookedDates: [],
            form: {
                start_time: new Date().toISOString().substr(0, 10),
                end_time: new Date().toISOString().substr(0, 10),
                bike: "",
                user: ""
            },
            show: true,
            dummyData: {
                project: {
                    restrictions: {
                        duration: [2,7],
                        times:[{startDate: new Date().toISOString().substr(0, 10), endDate: new Date().toISOString().substr(0, 10)},
                            {startDate: new Date().toISOString().substr(0, 10), endDate: new Date().toISOString().substr(0, 10)}]
                    }
                }
            }
        }
    },

    methods: {
        onSubmit() {

            return this.$store.dispatch('booking/addBooking', this.form);
        },
        userFullName: function(item){
            return item.firstName + " " + item.lastName;
        },
        checkBikeAvailablility: function(){
            this.bookedDates = [];
            let bookings = this.$store.getters['booking/allBookings'];
            bookings.forEach(booking => {
                if(booking.bike === this.form.bike){
                    this.bookedDates.push(booking.startTime.split('T')[0]);
                    this.bookedDates.push(booking.endTime.split('T')[0]);                    
                }
            })
        },
    },

    computed: {
        listBikes: function(){
            return this.$store.getters['bike/allBikes'];
        },
        allUsers: function(){
            return this.$store.getters['user/allUsers'];
        },
        selectedDates: function(){
            return [this.form.start_time, this.form.end_time]
        },
        validSelection: function(){
            return this.form.start_time < this.form.end_time ? true : false;
        },
        bookings: function(){
            return this.$store.getters['booking/allBookings']
        }
    },
}
</script>

<style scoped>
.dateSelectionInvalid{
    border: 1px solid var(--v-error-base);
}
</style>
