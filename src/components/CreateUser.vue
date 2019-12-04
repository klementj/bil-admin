<template>
  <v-card>
    <v-card-title>New User</v-card-title>
    <v-card-text>
      <v-form ref="form">
        <v-row>

          <!-- Firstname -->
          <v-col cols="6">
            <v-text-field
              v-model="form.first_name"
              name="first_name"
              label="First name"
              :rules="first_nameRules"
              type="text"
            ></v-text-field>
          </v-col>

          <!-- Lastname -->
          <v-col cols="6">
            <v-text-field
              v-model="form.last_name"
              name="last_name"
              label="Last name"
              :rules="last_nameRules"
              type="text"
            ></v-text-field>
          </v-col>

          <!-- Password -->
          <v-col cols="12">
            <v-text-field
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              v-model="form.password"
              name="password"
              label="Password"
              :rules="passwordRules"

              :type="show ? 'text' : 'password'"
              @click:append="show = !show"
            ></v-text-field>
          </v-col>

          <!-- Email -->
          <v-col cols="12">
            <v-text-field
              v-model="form.email"
              name="email"
              label="Email"
              :rules="emailRules"
              type="text"
            ></v-text-field>
          </v-col>
          
          <!-- Phonenumber -->
          <v-col cols="12">
            <v-text-field
              v-model="form.phone"
              name="phonenumber"
              label="Phone number"
              :rules="phoneRules"
              type="number"
              hint="Optional"
              persistent-hint
            ></v-text-field>
          </v-col>

          <!-- Roles -->
          <v-col cols="12">
            <v-select
              v-model="form.role"
              :items="roles"
              name="role"
              label="Role"
              type="text"
            ></v-select>
          </v-col>
        
        </v-row>
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
      v => (v && v.length >= 8) || 'Telefon nummeret skal være valid'
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
 
