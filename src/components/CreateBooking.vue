<template>
    <v-card>
        <v-toolbar flat>
      <v-toolbar-title>Create new booking</v-toolbar-title>
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
                label="Bike"
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
                label="User"
                type="text"
            ></v-select>
        </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="onSubmit">Add booking</v-btn>
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
                    image: null,
                    name: "Dummy Project",
                    startDate: new Date().toISOString().substr(0, 10),
                    endDate: new Date().toISOString().substr(0, 10),
                    location: {
                        street: "Over There",
                        streetNumber: 27,
                        areaCode: 2160,
                        town: "That Place",
                        municipal: "Here"
                    },
                    restrictions: {
                        duration: {
                            minDays: 2,
                            maxDays: 7
                        },
                        times:[{begin: new Date().toISOString().substr(0, 10), end: new Date().toISOString().substr(0, 10)},
                            {begin: new Date().toISOString().substr(0, 10), end: new Date().toISOString().substr(0, 10)}],
                        schema: {},
                        extend: {
                            allowed: true,
                            minAmount: 2,
                            maxAmount: 7
                        }
                    }
                }
            }
        }
    },

    methods: {
        async onSubmit() {
            let arr = this.getDateRange(this.form.start_time, this.form.end_time);

            let invalidDates = this.compareDateArrays(arr, this.bookedDates);

            if(invalidDates.length === 0 && this.checkProjectParameters(arr) && this.validSelection){
                let booking = await this.$store.dispatch('booking/addBooking', this.form);
                this.$store.dispatch('notification/notify', {message: 'Success booking created', color: 'success'});
                this.bookedDates.push(... arr);
                return booking;
            } else {
                this.$store.dispatch('notification/notify', {message: 'Error booking not created', color: 'error'});
                return false;
            }
        },
        userFullName: function(item){
            return item.firstName + " " + item.lastName;
        },
        //returns all dates a bike is booked in an array
        checkBikeAvailablility: function(){
            this.bookedDates = [];

            let bookings = this.$store.getters['booking/allBookings'];

            bookings.forEach(booking => {

                if(booking.bike === this.form.bike){
                 this.bookedDates.push(... this.getDateRange(booking.startTime, booking.endTime));
                }
            })
        },
        //Returns all dates between two dates; param 1 = start, param 2 = end
        getDateRange: function(date1, date2){
            let dateArr = [];
            let startDate = new Date(date1);
            let endDate = new Date(date2);

            while(startDate <= endDate){
                dateArr.push(startDate.toISOString().split('T')[0]);
                startDate.setDate(startDate.getDate() + 1);
            }
            return dateArr;
        },
        //Compares two arrays and return matching entries in an array
        compareDateArrays: function(arr1, arr2){
            let matches = [];
                arr1.forEach( date1 => {
                    arr2.some( date2 => {
                        if(date1 === date2){
                            matches.push(date1);
                        }
                    });
                })
            return matches;
        },
        //All requirements from project definitions goes here; takes array of dates as argument
        checkProjectParameters: function(arr){
            let project = this.dummyData.project;
            //Is duration requirements met?
            if(arr.length >= project.restrictions.duration.minDays && arr.length <= project.restrictions.duration.maxDays){
                return true;
            }
            return false;
        }
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
        },
        address: function() {
            return "Not implemented"
        }
    },
}
</script>

<style scoped>
.dateSelectionInvalid{
    border: 1px solid var(--v-error-base);
}
</style>
