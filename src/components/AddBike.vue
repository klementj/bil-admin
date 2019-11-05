<template>
  <v-card>
    <v-card-title >Add bike</v-card-title>
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

        <!-- Categories -->
        <v-chip-group
          multiple
          column
          active-class="primary--text"
        >  
          <v-chip v-for="category in allCategories" :key="category" @click="addCategory(category)" >
              {{category.title}}
          </v-chip>
        </v-chip-group>
        
        <CreateCategory/>
              
        <!-- Price -->
        <v-text-field
          v-model="MoneyConversion"
          name="title"
          label="Price of bike"
          type="text"
        ></v-text-field>

        <!-- Image Gallery -->
        <ImageGallery :images="imageObjects"/>

      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="onSubmit">Add bike</v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
import ImageGallery from '@/components/imageUpload/imageGallery'
import CreateCategory from '@/components/CreateCategory'
import { mapGetters } from 'vuex'

export default {
  name: 'AddBike',

  components: {
    ImageGallery,
    CreateCategory
  },

  data() {
    return {
      form: {
        title: '',
        description: '',
        categories: [],
        price: 0,
        images: []
      },
      imageObjects: [],
      show: true
    }
  },

  methods: {
    onSubmit() {
      this.imageObjects.forEach(({ id }) => {
        if (this.form.images.indexOf(id) === -1 ) {
          this.form.images.push(id)
        }
      })    
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
    },
    
    addCategory(category){
      this.form.categories.push(category.id)
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
    },

    ...mapGetters({
      allCategories: 'category/allCategories'
    })
  }
}
</script>

