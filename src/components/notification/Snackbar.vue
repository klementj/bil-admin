<template>
  <v-snackbar flat v-model="show" :color="notification.color">
    {{notification.message}}
    <v-btn flat @click="show = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      notification: {
        message: '',
        color: ''
      }
    }
  },

  created: function () {
    this.$store.watch(state => state.notification.message, () => {
      const { message, color } = this.$store.state.notification
      if (message !== ''){
        this.show = true
        this.notification.message = message
        this.notification.color = color
        this.$store.dispatch('notification/reset')
      }
    })
  }
}
</script>
