<template>
  <div>
    <ImageUpload />
    <v-btn @click="testNotification({ message: 'Notification uden sat farve'})">Standard</v-btn>
    <v-btn @click="testNotification({ message: 'Hurra. Du har vundet', color: 'success'})">Primary color</v-btn>
    <v-btn @click="testNotification({ message: 'Fejl... Fej--', color: 'error'})">Error color</v-btn>
  </div>
</template>

<script>
import ImageUpload from '@/components/ImageUpload'

export default {
  name: 'PageHome',

  components: {
    ImageUpload
  },

  methods: {
    testNotification(payload) {
      this.$store.dispatch('notification/notify', payload)
    }
  }
}
</script>
