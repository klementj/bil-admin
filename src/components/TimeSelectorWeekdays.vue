<template>
        <v-row align="center">
        <v-checkbox v-model="checkBoxState.dayActive" ></v-checkbox>

        <v-col>
            <v-text-field
            :value="this.propDay"
            readonly
            :disabled="!this.checkBoxState.dayActive"
            placeholder="No day available">
            </v-text-field>
        </v-col>
        
        <v-col>
            <v-text-field
            :disabled="!this.checkBoxState.dayActive"
             placeholder="Start date">
            </v-text-field>
        </v-col>

        <v-col>
            <v-text-field
            :disabled="!this.checkBoxState.dayActive"
            placeholder="End date">
            </v-text-field>
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
                startTime: new Date().toISOString().substr(0, 10),
                endTime: new Date().toISOString().substr(0, 10),
            }
        }
    },
    created(){
        console.log("Child test", this.checkBoxState.dayActive)
    },

    methods: {
        timeChanged: function(){
            this.$emit('updateTime', this.dateTimeSlot)
        },
    }
}
</script>