<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card>
        <v-toolbar flat>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field v-model="form.email" prepend-icon="mdi-account" name="email" label="Enter email" type="email"></v-text-field>
            <v-text-field 
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              v-model="form.password" 
              prepend-icon="mdi-lock" 
              name="password" 
              label="Enter password" 
              class="input-group--focused"
              :type="show ? 'text' : 'password'"
              @click:append="show = !show"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="onSubmit">Log in</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
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
      show: false,
    }
  },

  mounted(){
    this.$store.dispatch('auth/tryAutoLogin')
  },

  methods: {
    onSubmit() {
      const {email, password} = this.form
      this.$store.dispatch('auth/login', {email, password})
    },
  }
}
</script>
