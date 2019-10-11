<template>
    <v-row>
        <v-col cols="12" sm="4">
            <v-text-field
            placeholder="Day">
            </v-text-field>
        </v-col>

        <v-col cols="12" sm="4">
            <v-text-field
            placeholder="Start date">
            </v-text-field>
        </v-col>

        <v-col cols="12" sm="4">
            <v-text-field
             placeholder="End date">
            </v-text-field>
        </v-col>
    </v-row>
</template>

<script>
export default {
    components: {
        TimeSelectorWeekdays
    },

    props: {
        namesArray: Array
    },
    
    date(){
        return {
            dateTimeSlot: {
                day: '',
                startTime: Date,
                endTime: Date
            }
        }
    },

    methods: {
        timeChanged: function(){
            this.$emit('updateTime', )
        }
    }
}
</script>