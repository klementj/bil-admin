<template>
<div>
  <h1>Home</h1>

  <v-btn @click="testNotification({ message: 'Notification uden sat farve'})">Standard</v-btn>
  <v-btn @click="testNotification({ message: 'Hurra. Du har vundet', color: 'success'})">Primary color</v-btn>
  <v-btn @click="testNotification({ message: 'Fejl... Fej--', color: 'error'})">Error color</v-btn>
</div>

</template>

<script>
export default {
  name: 'PageHome',

  methods: {
    testNotification(payload) {
      this.$store.dispatch('notification/notify', payload)
    }
  }
}
</script>
