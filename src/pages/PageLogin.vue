<template>
<div>
  <LoginForm :alert="alert"/>
</div>
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