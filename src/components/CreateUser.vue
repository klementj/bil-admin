<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>Create New User</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <!-- Firstname -->
        <v-text-field
          v-model="form.first_name"
          name="first_name"
          label="Fornavn"
          type="text"
        ></v-text-field>

        <!-- Lastname -->
        <v-text-field
          v-model="form.last_name"
          name="last_name"
          label="Efternavn"
          type="text"
        ></v-text-field>

        <!-- Password -->
        <v-text-field
          v-model="form.password"
          name="password"
          label="Kodeord"
          type="password"
        ></v-text-field>

        <!-- Phonenumber -->
        <v-text-field
          v-model="form.phone"
          name="phonenumber"
          label="Telefonnummer"
          type="number"
        ></v-text-field>

        <!-- Email -->
        <v-text-field
          v-model="form.email"
          name="email"
          label="Email"
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
      v => !v === " " || "Kun mellemrum er ikke et navn"
    ],
    last_nameRules: [
      v => !!v || 'efternavn er påkrævet',
      v => !!v === " " || "Kun mellemrum er ikke et navn"
    ],
    passwordRules: [
      v => !!v || 'Password påkrævet',
      v => (v && v.length >= 6) || 'Navnet skal være længere end 6 tegn'
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
    roles: ["user","management","admin"],
    show: true
  }
  },
methods: {
  onSubmit() {
    return this.$store.dispatch('user/createUser', this.form);
  }
}
}
</script>
 
