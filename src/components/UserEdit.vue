<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="userInfo.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Firstname:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="userInfo.firstName"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Your Lastname:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="userInfo.lastName"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ userInfo }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'UserEdit',
  data() {
    return{
      userInfo: {
        firstName: 'john',
        lastName: 'doe',
        email: 'johh@doe.com',
        phone: '12345678',
        role: "admin"
      } 
    }
  },

  methods: {
    onSubmit() {
      alert(JSON.stringify(this.userInfo))
    }
  }
}
</script>

