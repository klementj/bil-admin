<template>
  <b-form @submit.prevent="onSubmit" v-if="show" id="form">
    <h3>Log in</h3>
    <b-alert v-if="alert" show dismissible fade :variant="alert.variant">{{ alert.message }}</b-alert>
    <!-- Email -->
    <b-form-group
      id="input-group-email"
      label="Email"
      label-for="input-email"
    >
      <b-form-input
        id="input-email"
        type="email"
        title="Please enter a valid email"
        v-model="form.email"
        required
        placeholder="Enter email"
      ></b-form-input>
    </b-form-group>
    
    <!-- Password -->
    <b-form-group
      id="input-group-password"
      label="Password"
      label-for="input-password"
    >
      <b-form-input
        id="input-password"
        type="password"
        v-model="form.password"
        required
        placeholder="Enter password"
      ></b-form-input>
    </b-form-group>

    <!-- Submit button -->
    <b-button type="submit" variant="primary">Submit</b-button>
  </b-form>
</template>

<script>

export default {
  name: 'LoginForm',

  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      show: true
    }
  },

  methods: {
    onSubmit() {
      const {email, password} = this.form
      this.$store.dispatch('auth/login', {email, password})
    },
  },

  props: {
    alert: {
      type: Object,
      required: false
    },
  }
}
</script>
