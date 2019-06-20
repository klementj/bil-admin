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
                v-model="form.startTime"
                label="Start date"
                hint="This is the selected start date"
                persistent-hint
                readonly
                v-on="on"
                ></v-text-field>
                </template>
                <v-date-picker
                v-model="form.startTime"
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
                v-model="form.endTime"
                label="End date"
                hint="This is the selected end date"
                persistent-hint
                :class="{'dateSelectionInvalid': !validSelection}"
                readonly
                v-on="on"
                class="TEST"
                ></v-text-field>
                </template>
                <v-date-picker
                v-model="form.endTime"
                :min="form.startTime + 1"
                name="endTime"
                ></v-date-picker>
            </v-menu>

            <!-- Calendar for display -->
            <v-date-picker
                v-model="reservedDates"
                no-title
                multiple
                scrollable
                readonly>
            </v-date-picker>

            <!-- Bike -->
            <v-select 
                :v-model="setBike"
                v-bind:items="listBikes"
                item-text="title"
                name="bike"
                label="Cykel"
                type="text"
            ></v-select>
            <!-- User -->
            <v-select 
                :v-model="setUser"
                v-bind:items="allUsers"
                :item-text="userFullName"
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
            form: {
                startTime: new Date().toISOString().substr(0, 10),
                endTime: new Date().toISOString().substr(0, 10),
                bike: "",
                user: ""
            },
            show: true
        }
    },

    methods: {
        onSubmit() {
            return this.$store.dispatch('booking/addBooking', this.form);
        },
        userFullName: function(item){
            return item.firstName + " " + item.lastName;
        },
        setBike: function(item){
            this.form.bike = item.id;
        },
        setUser: function(item){
            this.form.user = item.id;
        }
    },

    computed: {
        listBikes: function(){
            return this.$store.getters['bike/allBikes'];
        },
        allUsers: function(){
            return this.$store.getters['user/allUsers'];
        },
        reservedDates: function(){
            return [this.form.startTime, this.form.endTime]
        },
        validSelection: function(){
            return this.form.startTime < this.form.endTime ? true : false;
        }
    },
}
</script>

<style scoped>
.dateSelectionInvalid{
    border: 1px solid red;
}
</style>
