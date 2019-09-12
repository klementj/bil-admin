<template>
  <v-card>
    <v-card-title class="headline">Add image</v-card-title>
 
      <!-- v-model="valid" -->
    <v-form 
      class="uploader"
      ref="form"
      lazy-validation
    >
      <v-card-text>

        <ImageEditor 
          v-if="form.image.loaded" 
          ref="editor" 
          :data="form.image"
        ></ImageEditor>
        
        <ImageInput 
          v-else 
          ref="loader" 
          :data="form.image"
        ></ImageInput>

        
        <!-- Title input -->
        <v-text-field 
          id="title-image" 
          v-model="form.title"
          :rules="rules.title"
          name="title" 
          label="Title of image" 
          type="text"
          required
        ></v-text-field>

        <!-- Alt text input -->
        <v-text-field 
          id="alt-image" 
          v-model="form.alt"
          :rules="rules.alt"
          name="alt" 
          label="Alternative text" 
          type="text"
          required
        ></v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <!-- Cancel button -->
        <v-btn color="teal" text @click="closeDialog">Clear</v-btn>
        <!-- Upload button -->
        <v-btn 
          color="success"
          text
          outlined
          :loading="btn.loading"
          :disabled="btn.disabled"
          @click="addImage"
        >
          Add image
          <!-- <v-icon right>mdi-cloud-upload</v-icon> -->
        </v-btn>
      </v-card-actions>

    </v-form>
  </v-card>
</template>

<script>
import ImageService from '@/services/image.service'
import ImageInput from '@/components/imageUpload/imageInput'
import ImageEditor from '@/components/imageUpload/editor'

import Compressor from 'compressorjs'

export default {
  name: 'ImageDialog',

  components: {
    ImageInput,
    ImageEditor
  },

  data () {
    return {
      form: {
        image: {
          cropped: false,
          cropping: false,
          loaded: false,
          name: '',
          type: '',
          url: null,
          blob: ''
        },
        title: undefined,
        alt: undefined
      },

      rules: {
        title: [
          v => !!v || 'Title is required'
        ],
        alt: [
          v => !!v || 'An alternative text is required'
        ]
      },
      btn: {
        disabled: false,
        loading: false 
      },
      inProgress: false
    }
  },

  methods: {
    addImage() {
      if (!this.form.image.cropped) {
        this.$refs.editor.crop()
      }
      if (this.$refs.form.validate()) {
        this.uploadFile()
      }
    },

    closeDialog(){
      if (this.$refs.editor !== undefined) {
        this.$refs.editor.reset()
      }
      this.$refs.form.reset()
      this.$emit('close:dialog')

      if (this.btn.loading) this.btn.loading = false
      if (this.btn.disabled) this.btn.disabled = false
    },

    compressFile(image) {
      if (image === null) {
        this.$store.dispatch('notification/notify', { message: "Something's not right, please try again", color: 'error'})
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
        this.form.image.url = result
        this.inProgress = false
      }).catch( error => {
        // eslint-disable-next-line
        console.log('compress error', error);
      }).finally(() => {
        // eslint-disable-next-line
        console.log('Compress success');
      })
    },

    uploadFile() {
      if (this.form.image.url === null) {
        return
      }

      this.btn.loading = true
      this.btn.disabled = true

      const imageService = new ImageService
      const formData = new FormData()

      formData.append('file', this.form.image.blob, this.form.image.name)
      formData.set('title', this.form.title)
      formData.set('alt', this.form.alt)

      imageService.create(formData)
      .then(({ data }) => {

        if (data.code === 201) {
          const image = {
            url: this.form.image.url,
            title: this.form.title,
            alt: this.form.alt,
            id: data.data.id
          }
    
          this.btn.loading = false
          this.btn.disabled = false
          this.$store.dispatch('notification/notify', { message: 'Picture was uploaded succesfully', color: 'success'})
          this.closeDialog()
          this.$emit('add:image', image)
        } else {
          this.$store.dispatch('notification/notify', { message: `Something went wront. Please try again ${data.error}`, color: 'error'})
        }
      })
    }
  }
}
</script>

<style>

</style>
