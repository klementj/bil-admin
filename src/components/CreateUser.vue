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
          label="Tlf."
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
          :items="Roles"
          name="role"
          label="Rolle"
          type="text"
        ></v-select>

      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="onSubmit">Create user</v-btn>
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
    //Hard coded roles
    Roles: ["user","management","admin"],
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
 