<template>
  <v-container>
    <v-row>

      <v-col cols="12" md="4">
          <TotalBikes />
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="pa-2" outlined tile> TEST 2</v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="pa-2" outlined tile> TEST 2</v-card>
      </v-col>

    </v-row>

    <v-row>
      <v-col>
        <v-btn @click="testNotification({ message: 'Notification uden sat farve'})">Standard</v-btn>
        <v-btn @click="testNotification({ message: 'Hurra. Du har vundet', color: 'success'})">Primary color</v-btn>
        <v-btn @click="testNotification({ message: 'Fejl... Fej--', color: 'error'})">Error color</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TotalBikes from '@/components/widgets/TotalBikes.vue'

export default {
  name: 'PageHome',

  components: {
    TotalBikes
  },

  methods: {
    testNotification(payload) {
      this.$store.dispatch('notification/notify', payload)
    }
  }
}
</script>
