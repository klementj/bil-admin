<template>
    <div>
        <v-toolbar flat>
      <v-toolbar-title>Create New Project</v-toolbar-title>
    </v-toolbar>
    <v-card>
        <v-card-text>
    <v-form>

        <!-- Project name -->
        <v-text-field
          v-model="form.projectName"
          name="projectName"
          label="Project Name"
          type="text"
        ></v-text-field>

        <v-card-title>Project period</v-card-title>

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

            <v-card-title @click="showLocation = !showLocation">Project Location</v-card-title>

            <!-- Location -->
            <v-card-text
            v-if="showLocation"
            >
                <v-text-field
                v-model="form.location.street"
                name="street"
                label="Street name"
                ></v-text-field>
                <v-text-field
                v-model="form.location.streetNumber"
                name="streetNumber"
                label="Street number"
                ></v-text-field>
                <v-text-field
                v-model="form.location.areaCode"
                name="areaCode"
                label="AreaCode"
                ></v-text-field>
                <v-text-field
                v-model="form.location.town"
                name="town"
                label="Town name"
                type="text"
                ></v-text-field>
                <v-text-field
                v-model="form.location.municipal"
                name="municipal"
                label="Municipal"
                type="text"
                ></v-text-field>
            </v-card-text>

            <v-card-title @click="showRestrictions = !showRestrictions">Booking restrictions</v-card-title>

            <!-- Restrictinons -->
            <v-card-text
            v-if="showRestrictions">
                <v-checkbox
                v-model="form.restrictions.default"
                label="Use default booking rules?"
                ></v-checkbox>

                <!-- Duration -->
                <v-text-field
                v-model="form.restrictions.duration.minDays"
                name="minDays"
                label="Minimum booking period"
                :disabled="form.restrictions.default"
                ></v-text-field>
                <v-text-field
                v-model="form.restrictions.duration.maxDays"
                name="maxDays"
                label="Maximum booking period"
                :disabled="form.restrictions.default"
                ></v-text-field>

                <!-- Times  -->
                <slot v-for="day in days">
                    <weekDays :propDay="day" @timeChanged="updateTime"/>
                </slot>

                <!-- Schema NOT IMPLEMENTED -->

                <!-- Extend -->
                <v-checkbox
                v-model="form.restrictions.extend.allow"
                label="Allow bookings made in this project to be extended?"
                :disabled="form.restrictions.default"
                ></v-checkbox>
                <v-text-field
                v-model="form.restrictions.extend.minAmount"
                name="minAmount"
                label="Minimum booking extend period"
                :disabled="form.restrictions.default"
                ></v-text-field>
                <v-text-field
                v-model="form.restrictions.extend.maxAmount"
                name="maxAmount"
                label="Maximum booking extend period"
                :disabled="form.restrictions.default"
                ></v-text-field>
            </v-card-text>
    </v-form>
    </v-card-text>
    </v-card>
    <v-btn  @click="onSubmit()">Create Project</v-btn>
    </div>
</template>

<script>
import WeekDays from './TimeSelectorWeekdays.vue'
import { mapActions } from 'vuex';

export default {
    name: "CreateProject",
    components:{
        WeekDays
    },
    data(){
        return {
            showLocation:false,
            showRestrictions: false,

            menu1: false,
            menu2: false,

            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],

            today: new Date().toISOString().substr(0, 10),

            events: [
                {
                    name: "Weekly Meeting",
                    start: new Date().toISOString().substr(0, 10) + ' 09:00',
                    end: new Date().toISOString().substr(0, 10) + ' 10:00'
                },
                {
                    name: "Open",
                    start: new Date().toISOString().substr(0, 10) + " 09:00",
                    end: new Date().toISOString().substr(0, 10) + " 15:00"
                },
                {
                    name: "Workday",
                    start: new Date().toISOString().substr(0, 10),
                }
            ],

            form:{
                projectName: "",
                start_time: new Date().toISOString().substr(0, 10),
                end_time: new Date().toISOString().substr(0, 10),
                location: {
                    street: "",
                    streetNumber: null,
                    areaCode: null,
                    town: "",
                    municipal: ""
                },
                restrictions: {
                    default: true,
                    duration: {
                    minDays: null,
                    maxDays: null
                },
                    times: [],
                    schema: {},
                    extend: {
                        allow: false,
                        minAmount: null,
                        maxAmount: null
                    }
                }
            }
        }    
    },

    methods: {
        onSubmit: function(){
            this.addProject(this.form);
        },
        updateTime: function(timeObj){
            let timesArr = this.form.restrictions.times;
            
            let dayToReplace = timesArr.findIndex(day => day.day == timeObj.day);
            if(dayToReplace >= 0){
                timesArr[dayToReplace] = timeObj;
            }
            else {
                timesArr.push(timeObj);
            }
        }
    },

    computed: {
        validSelection: function(){
            return this.form.start_time < this.form.end_time ? true : false;
        },
        ...mapActions({
            addProject: 'project/addProject'
        })
    }
}
</script>

<style scoped>
    .dateSelectionInvalid{
        border: 1px solid var(--v-error-base);
    }
</style>