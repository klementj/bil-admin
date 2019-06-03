<template>
    <v-form class="uploader">
      <v-sheet for="file-upload" class="sheet d-flex" color="white" min-height="400">
        <v-img 
        id="preview-image" 
        :src="imgSrc"
        alt="No preview of image"
        >
          <template v-slot:placeholder>
            <v-layout fill-height align-center justify-center ma-0 >
              <input id="file-upload" class="btn" type="file" @change="onfileSelected">
              <v-progress-circular v-if="inProgress" indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </template>
        </v-img>
      </v-sheet>
      
      <v-text-field id="title-image" v-model="title" name="title" label="Title of image" type="text"></v-text-field>
      <v-text-field id="alt-image" v-model="alt" name="alt" label="Alternative text" type="text"></v-text-field>
      <v-btn class="ml-auto" color="primary" @click="uploadFile">Upload</v-btn>
    </v-form>
</template>

<script>
import ImageService from '@/services/image.service'
import Compressor from 'compressorjs'

export default {
  name: 'ImageUpload',

  data () {
    return {
      selectedFile: null,
      title: undefined,
      alt: undefined,
      imgSrc: undefined,
      inProgress: false
    }
  },

  methods: {
    onfileSelected(event) {
      this.selectedFile = event.target.files[0]
      this.inProgress = true
      this.imgSrc = URL.createObjectURL(this.selectedFile)
      this.inProgress = false      
    },
    uploadFile() {
      if (this.selectedFile === null) {
        return
      }      
      const imageService = new ImageService
      
      console.log(this.title); // Not undefined
      
      // Initial compression to make sure we don't upload huge images.
      new Compressor(this.selectedFile, {
        // default quality
        quality: 0.8,
        // Ipad retina screensize
        maxWidth: 2732,
        maxHeight: 2048,
        success(result){
          const formData = new FormData()
          formData.append('file', result, result.name)

          console.log('this.title',this.title); //Undefined?
          formData.set('title', this.title)
          formData.set('alt', this.alt)

          imageService.create(formData)
            .then(() => {
              // eslint-disable-next-line
              console.log('Upload success', formData);
            })
        },
        error(error) {
          // eslint-disable-next-line
          console.log(error.message)
        }
      })
    }
  }
}
</script>

<style>
.uploader .sheet {
 padding: 5px
}

.uploader #preview-image {
  display: inline;
} 
/* 
  REMOVES SELECT BUTTON
 */
/* .uploader input[type="file"] {
  display: none;
} */
/* For button */
/* .uploader .btn {
  display: inline-block;
  margin: .5rem .5rem 1rem .5rem;
  clear: both;
  font-family: inherit;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  text-transform: initial;
  border: none;
  border-radius: .2rem;
  outline: none;
  padding: 0 1rem;
  height: 36px;
  line-height: 36px;
  color: #fff;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;
  background: #454cad;
  border-color: #454cad;
  cursor: pointer;
} */

</style>
