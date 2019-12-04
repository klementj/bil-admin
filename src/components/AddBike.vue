<template>
  <v-card>
    <v-card-title>New bike</v-card-title>
    <v-card-text>
      <v-form>
        <v-row>

          <!-- Title -->
          <v-col cols="12">
            <v-text-field
              v-model="form.title"
              name="title"
              label="Name"
              type="text"
            ></v-text-field>
          </v-col>

          <!-- Description -->
          <v-col cols="12">
            <v-textarea
              v-model="form.description"
              name="description"
              label="Description"
              type="text"
            ></v-textarea>
          </v-col>


          <!-- Categories -->
          <v-col cols="12">
            <v-chip-group
              multiple
              column
            > 
              <v-chip filter outlined v-for="category in allCategories" :key="category.id" @click="toggleCategory(category.id)" >
                {{category.title}}
              </v-chip>
              
              <CreateCategory/>
            </v-chip-group>
          </v-col>
          
          <!-- Price -->
          <v-col cols="10">
            <v-text-field
              v-model="MoneyConversion"
              name="price"
              label="Price"
              type="text"
            ></v-text-field>
          </v-col>
          
          <!-- Discount -->
          <v-col cols="2">
            <v-text-field
              v-model="form.discount"
              name="discount"
              label="Discount"
              type="text"
              suffix="%"
            ></v-text-field>
          </v-col>

          <!-- Image Gallery -->
          <v-col cols="12">
            <ImageGallery :images="imageObjects"/>
          </v-col>

        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="onSubmit">Create bike</v-btn>
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
        discount: 0,
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
    
    toggleCategory(id){
      const categories = this.form.categories
      categories.find(item => item === id) 
        ? categories.splice(categories.indexOf(id), 1) 
        : categories.push(id) 
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

