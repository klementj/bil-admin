<template>
<div>
  <h1>Home</h1>

  <!-- <UploadBtn /> -->

  <ImageUpload />

  <v-btn @click="testNotification({ message: 'Notification uden sat farve'})">Standard</v-btn>
  <v-btn @click="testNotification({ message: 'Hurra. Du har vundet', color: 'success'})">Primary color</v-btn>
  <v-btn @click="testNotification({ message: 'Fejl... Fej--', color: 'error'})">Error color</v-btn>
</div>

</template>

<script>
// import UploadBtn from '@/components/UploadButton'
import ImageUpload from '@/components/ImageUpload'

export default {
  name: 'PageHome',

  components: {
    // UploadBtn,
    ImageUpload
  },

  methods: {
    testNotification(payload) {
      this.$store.dispatch('notification/notify', payload)
    }
  }
}
</script>
