<template>
  <b-container>
    <LoginForm id="form"></LoginForm>
  </b-container>
</template>

<script>
import LoginForm from './components/LoginForm.vue';

export default {
  name: 'app',
  components: {
    LoginForm
  }
}
</script>

<style>
#form {
  margin: 10rem auto;
  padding: 2rem;
  max-width: 400px;
  /* border: 1px solid #ddd; */
  /* box-shadow: 1px 1px 10px #ddd; */
}
</style>
