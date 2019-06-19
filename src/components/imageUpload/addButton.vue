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
 <!-- v-on:close:dialog="dialog = false" -->
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
      console.log('Image blob in addImage in imageGallery', image);
      this.images.push(image)
    }
  }
}
</script>

<style>
/* .image-dialog{
  max-width: 500px !important
} */

.image-dialog--addButton{
  max-width: 400px;
  height: 100%;
  /* border: 1px dotted */
}
</style>
