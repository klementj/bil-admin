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
                v-model="form.timeStart"
                label="Date"
                hint="This is the selected date"
                persistent-hint
                readonly
                v-on="on"
                ></v-text-field>
                </template>
                <v-date-picker
                v-model="form.timeStart"
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
                v-model="form.timeEnd"
                label="Date"
                hint="This is the selected date"
                persistent-hint
                readonly
                v-on="on"
                ></v-text-field>
                </template>
                <v-date-picker
                v-model="form.timeEnd"
                :min="form.timeStart + 1"
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

            <v-select 
                v-model="form.bike"
                v-bind:items="listBikes"
                item-text="title"
                name="bike"
                label="Cykel"
                type="text"
            ></v-select>
            <v-select 
                v-model="form.user"
                v-bind:items="allUsers"
                :item-text="userFullName"
                item-value="lastName"
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
                timeStart: new Date().toISOString().substr(0, 10),
                timeEnd: new Date().toISOString().substr(0, 10),
                bike: [],
                user: []
            },
            show: true
        }
    },

    methods: {
        onSubmit() {
            //Do dispatch booking request here
        },
        userFullName: function(item){
            return item.firstName + " " + item.lastName;
        },
    },

    computed: {
        listBikes: function(){
            return this.$store.getters['bike/allBikes'];
        },
        allUsers: function(){
            return this.$store.getters['user/allUsers'];
        },
        reservedDates: function(){
          return [this.form.timeStart, this.form.timeEnd]
        },
        validSelection: function(){
            return this.form.timeStart < this.form.timeEnd ? true : false;
        }
    },
}
</script>

<style scoped>
.dateSelectionInvalid{
    text-decoration-color: red;
    border-color: 1px solid red;
}
</style>
