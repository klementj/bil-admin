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
          v-model="MoneyConversion"
          name="title"
          label="Price of bike"
          type="text"
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
    show: true,
    }
  },

  methods: {
    onSubmit() {
      this.$store.dispatch('bike/addBike', this.form)
    },

    
    ConvertToDecimals(data) {
        const testnumber = ((data/100).toFixed(2)).replace(/[.]/g, ",")
        return  testnumber.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    ConverToCurrency(data) {
      const dataArr = data.split(",")
      const currencyNumber =  data.replace(/[^0-9//\d.]+(\d*)/g, "")
      return parseFloat(currencyNumber.replace(/[^0-9]/g, "") + dataArr[1])
    }    
  },

  computed: {
    MoneyConversion: {
      get: function(){
        return this.ConvertToDecimals(this.form.price)
      },
      set: function(newValue){
        this.form.price = this.ConverToCurrency(newValue)
      }
    }
  }
}
</script>

