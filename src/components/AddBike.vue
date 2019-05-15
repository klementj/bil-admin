<template>
  <b-form @submit.prevent="onSubmit" v-if="show" id="form_bike">
    <h2>Add bike</h2>
    <!-- Title -->
    <b-form-group
      id="input-group-title"
      label="Name"
      label-for="input-title"
    >
      <b-form-input
        required
        id="input-title"
        type="text"
        title="Please enter a name for the bike"
        v-model="form.title"
        placeholder="Enter name of bike"
      ></b-form-input>
    </b-form-group>
    
    <!-- Description -->
    <b-form-group
      id="input-group-description"
      label="Description"
      label-for="input-description"
    >
      <b-form-textarea
        required
        id="input-description"
        type="text"
        v-model="form.description"
        placeholder="Enter description..."
      ></b-form-textarea>
    </b-form-group>

    <!-- Price -->
    <b-form-group
      id="input-group-price"
      label="Price"
      label-for="input-price"
    >
      <b-form-input
        required
        id="input-price"
        type="number"
        v-model="form.price"
        placeholder="Enter price"
      ></b-form-input>
    </b-form-group>

    <!-- Submit button -->
    <b-button type="submit" variant="primary">Add bike</b-button>
  </b-form>
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

