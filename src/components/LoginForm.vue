<template>
  <b-form @submit="onSubmit" v-if="show" id="form">
    <!-- Email -->
    <b-form-group
      id="input-group-email"
      label="Email"
      label-for="input-email"
    >
      <b-form-input
        id="input-email"
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
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  },
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

</style>
