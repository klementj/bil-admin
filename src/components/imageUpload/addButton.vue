<template>
  <v-dialog v-model="dialog"  max-width="800px" >
 
    <!-- Add button -->
    <template v-slot:activator="{ on }">
      <button v-ripple class="add-button" v-on="on" type="button">
        <v-icon>mdi-image-plus</v-icon> 
        Add image
      </button>
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
.add-button{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 80px;
  height: 100%;
  border: 1px dotted #e0e0e0;
}
.theme--dark .add-button{
  border-color: #7b7b78;
}
</style>
