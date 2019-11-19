<template>
        <v-row align="center">
        <v-checkbox v-model="checkBoxState.dayActive" ></v-checkbox>

        <v-col sm="auto">
            <v-text-field
            :value="this.propDay"
            readonly
            :disabled="!this.checkBoxState.dayActive"
            placeholder="No day available">
            </v-text-field>
        </v-col>
        
        <v-col sm="auto">
            <input type="time"
            v-model="dateTimeSlot.startTime"
            @change="timeChanged()">
        </v-col>

        <v-col sm="auto">
            <input type="time"
            v-model="dateTimeSlot.endTime"
            @change="timeChanged()">
        </v-col>

        </v-row>
</template>

<script>
export default {
    name: "Weekdays",
    props: {
        propDay: {
            type: String,
            required: true,
            default: "No day Available"
        }
    },

    data(){
        return {
            checkBoxState: {
                dayActive: true,
            },
            dateTimeSlot: {
                day: this.propDay,
                startTime: "01:01",
                endTime: "02:02",
            }
        }
    },

    methods: {
        timeChanged: function(){
            this.$emit('timeChanged', this.dateTimeSlot);
        },
    }
}
</script>