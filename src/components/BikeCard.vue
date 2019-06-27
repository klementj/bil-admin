<template>
      <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          height="200px"
        >
        {{bike.images[1]}}
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">{{bike.title}}</div>
            <MoneyComponent :price="bike.price" /> 
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat>Lej</v-btn>
          <v-btn flat color="purple">Rediger</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-eye' : 'mdi-eye-off' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            {{bike.description}}
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import MoneyComponent from '@/components/MoneyComponent'

export default {
    name: 'BikeCard',

    components: {
        MoneyComponent
    },

    props: {
        bike: Object
    },

    data() {
        return{
            show: false
        }
    }
}
</script>

<style>

</style>
