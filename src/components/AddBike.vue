<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>Add bike</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <!-- Title -->
        <v-text-field
          v-model="form.title"
          name="title"
          label="Name of bike"
          type="text"
        ></v-text-field>

        <!-- Description -->
        <v-textarea
          v-model="form.description"
          name="description"
          label="Description of bike"
          type="text"
        ></v-textarea>

        <!-- Price -->
        <v-text-field
          v-model="form.price"
          name="title"
          label="Price of bike"
          type="number"
        ></v-text-field>

      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="onSubmit">Add bike</v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>

export default {
  name: 'AddBike',

  data() {
    return {
      form: {
        title: '',
        description: '',
        price: 0,
      },
    show: true
    }
  },

  methods: {
    onSubmit() {
      this.$store.dispatch('bike/addBike', this.form)
    }
  }
}
</script>

