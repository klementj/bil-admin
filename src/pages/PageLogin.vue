<template>
  <LoginForm :alert="alert"/>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
  name: 'PageHome',

  components: {
    LoginForm
  },

  props: {
    alert: {
      type: Object,
      required: false
    }
  }
}
</script>