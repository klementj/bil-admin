<template>
  <v-dialog v-model="dialog"  max-width="800px" >
 
    <!-- Add button -->
    <template v-slot:activator="{ on }">
      <div 
        v-ripple 
        class="text-xs-center pa-2 image-dialog--addButton"
        v-on="on"
      >
        <v-icon>mdi-image-plus</v-icon>
        <p>Add image</p>
      </div>
    </template>
    
    <!-- Image dialog -->
    <ImageDialog v-on:add:image="addImage( $event )" />
  </v-dialog>

  
</template>

<script>
import ImageDialog from '@/components/imageUpload/imageDialog'

export default {
  name: 'AddImageDialog',

  props: {
    images: Array
  },

  components: {
    ImageDialog
  },

  data() {
    return {
      dialog: false
    }
  },

  methods: {
    addImage(image) {
      this.dialog = false
      this.images.push(image)
    }
  }
}
</script>

<style>
.image-dialog--addButton{
  width: 100%;
  height: 100%;
}
</style>
