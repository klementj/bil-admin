<template>
    <v-card>
        <v-toolbar flat>
      <v-toolbar-title>Opret ny reservation</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
        <v-form>
            <v-date-picker
                v-model="form.dates"
                multiple
                scrollable>
            </v-date-picker>

            <v-text-field 
                v-model="form.timeStart"
                readonly="true"
                name="first_name"
                label="Start tidspunkt"
                type="text"
            ></v-text-field>
            <v-text-field 
                v-model="form.timeEnd"
                readonly="true"
                name="first_name"
                label="Slut tidspunkt"
                type="text"
            ></v-text-field>
            
            <v-select 
                v-model="form.bike"
                v-bind:items="listBikes"
                item-text="title"
                name="first_name"
                label="Cykel"
                type="text"
            ></v-select>
            <v-select 
                v-model="form.user"
                v-bind:items="allUsers"
                :item-text="userFullName"
                item-value="lastName"
                name="first_name"
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
            form: {
                dates: [],
                bike: null,
                user: null
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
        }
    },

    computed: {
        listBikes: function(){
            return this.$store.getters['bike/allBikes'];
        },
        allUsers: function(){
            return this.$store.getters['user/allUsers'];
        },
    }
}
</script>
