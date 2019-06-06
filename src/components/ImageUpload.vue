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
              <v-progress-circular v-if="inProgress" indeterminate color="primary"></v-progress-circular>
              <input id="file-upload" class="btn" type="file" @change="onfileSelected">
            </v-layout>
          </template>
        </v-img>
      </v-sheet>
      
      <v-text-field id="title-image" v-model="form.title" name="title" label="Title of image" type="text"></v-text-field>
      <v-text-field id="alt-image" v-model="form.alt" name="alt" label="Alternative text" type="text"></v-text-field>
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
      form: {
        compressedImage: null,
        title: undefined,
        alt: undefined
      },
      imgSrc: undefined,
      inProgress: false
    }
  },

  methods: {
    onfileSelected(event) {
      this.inProgress = true
      this.compressFile(event.target.files[0])
    },

    compressFile(image) {
      if (image === null) {
        return
      }
      new Promise((resolve, reject) => {
        // Initial compression to make sure we don't upload huge images.
        new Compressor(image, {
          success: resolve,
          error: reject,
          // default quality
          quality: 0.8,
          // Ipad retina screensize
          maxWidth: 2732,
          maxHeight: 2048,
        })
      }).then( result => {
        this.imgSrc = URL.createObjectURL(result)
        this.form.compressedImage = result
        this.inProgress = false
      }).catch( error => {
        console.log('compress error', error);
      }).finally(() => {
        console.log('Compress success');
      })
    },

    uploadFile() {
      if (this.form.compressedImage === null || this.form.title === undefined || this.form.alt === undefined) {
        return
      }

      const imageService = new ImageService
      const formData = new FormData()

      formData.append('file', this.form.compressedImage, this.form.compressedImage.name)
      formData.set('title', this.form.title)
      formData.set('alt', this.form.alt)

      imageService.create(formData)
      .then(() => {
        this.$store.dispatch('notification/notify', { message: 'Picture was uploaded succesfully', color: 'success'})
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

</style>
