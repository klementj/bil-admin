<template>
    <v-card>
        <v-toolbar flat>
      <v-toolbar-title>Opret ny reservation</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
        <v-date-picker 
            v-model="form.timeStart"
            name="first_name"
            label="Fornavn"
            type="datetime"
        ></v-date-picker>
        <v-text-field 
            v-model="form.timeEnd"
            name="first_name"
            label="Fornavn"
            type="datetime"
        ></v-text-field>
        <v-select 
            v-model="form.bike"
            name="first_name"
            label="Fornavn"
            type="text"
        ></v-select>
        <v-select 
            v-model="form.user"
            name="first_name"
            label="Fornavn"
            type="text"
        ></v-select>
    </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "CreateBooking",

    data() {
        return {
            form: {
                timeStart: 0,
                timeEnd: 0,
                bike: null,
                user: null
            }
        }
    },

    methods: {
        onSubmit() {
            //Do dispatch booking request here
        }
    }
}
</script>
