<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>Create New User</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form ref="form">
        <!-- Firstname -->
        <v-text-field
          v-model="form.first_name"
          name="first_name"
          label="Fornavn"
          :rules="first_nameRules"
          type="text"
        ></v-text-field>

        <!-- Lastname -->
        <v-text-field
          v-model="form.last_name"
          name="last_name"
          label="Efternavn"
          :rules="last_nameRules"
          type="text"
        ></v-text-field>

        <!-- Password -->
        <v-text-field
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          v-model="form.password"
          name="password"
          label="Kodeord"
          :rules="passwordRules"
          :type="show ? 'text' : 'password'"
          @click:append="show = !show"
        ></v-text-field>

        <!-- Phonenumber -->
        <v-text-field
          v-model="form.phone"
          name="phonenumber"
          label="Telefonnummer"
          :rules="phoneRules"
          type="number"
        ></v-text-field>

        <!-- Email -->
        <v-text-field
          v-model="form.email"
          name="email"
          label="Email"
          :rules="emailRules"
          type="text"
        ></v-text-field>

        <!-- Roles -->
        <v-select
          v-model="form.role"
          :items="roles"
          name="role"
          label="Rolle"
          type="text"
        ></v-select>

      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="onSubmit">Opret bruger</v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
import UserService from '@/services/user.service'

const userService = new UserService()

export default {
 name: "CreateUser",
 data() {
  return {
    form: {
      first_name: "",
      last_name: "",
      password: "",
      email: "",
      phone: "",
      role: null
    },
    first_nameRules: [
      v => !!v || 'Navn er påkrævet',
    ],
    last_nameRules: [
      v => !!v || 'efternavn er påkrævet',
    ],
    passwordRules: [
      v => !!v || 'Password påkrævet'
    ],
    emailRules: [
      v => !!v || 'E-mail er påkrævet',
      v => /.+@.+/.test(v) || 'E-mail må være valid'
    ],
    phoneRules: [
      v => !!v || 'Telefon nummer er påkrævet',
      v => (v && v.length >= 8) || 'Telefon nummet skal være valid'
    ],
    //Hard coded roles
    roles: ["user","manager","admin"],
    show: true
  }
  },
methods: {
  onSubmit() {
        userService.create(this.form)
      .then(response => {
        if(response.status === 201) {
          this.$store.commit('user/CREATE_USER', response.data.data)
          this.$refs.form.reset()
        }
      }).catch(error => {
        alert(error.response.data.error)
      })
    // return this.$store.dispatch('user/createUser', this.form);
  }
}
}
</script>
 
