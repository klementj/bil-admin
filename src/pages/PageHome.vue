<template>
  <div>
    <ImageGallery></ImageGallery>
    <v-btn @click="testNotification({ message: 'Notification uden sat farve'})">Standard</v-btn>
    <v-btn @click="testNotification({ message: 'Hurra. Du har vundet', color: 'success'})">Primary color</v-btn>
    <v-btn @click="testNotification({ message: 'Fejl... Fej--', color: 'error'})">Error color</v-btn>
  </div>
</template>

<script>
import ImageGallery from '@/components/imageUpload/imageGallery'

export default {
  name: 'PageHome',

  components: {
    ImageGallery
  },
  
  methods: {
    testNotification(payload) {
      this.$store.dispatch('notification/notify', payload)
    }
  }
}
</script>
