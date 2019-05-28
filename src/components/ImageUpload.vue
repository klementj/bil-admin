<template>
  <div>
    <input type="file" @change="onfileSelected">
    <button @click="uploadFile">Upload</button>
  </div>
</template>

<script>
import ImageService from '@/services/image.service'
import Compressor from 'compressorjs'

export default {
  name: 'ImageUpload',

  data () {
    return {
      selectedFile: null
    }
  },

  methods: {
    onfileSelected(event) {
      this.selectedFile = event.target.files[0]
    },
    uploadFile() {
      if (this.selectedFile === null) {
        return
      }
      
      const imageService = new ImageService

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
          formData.set('title', 'En titel til billedet')
          formData.set('alt', 'En titel til billedet')

          imageService.create(formData)
            .then(() => {
              // eslint-disable-next-line
              console.log('Upload success');
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

</style>
