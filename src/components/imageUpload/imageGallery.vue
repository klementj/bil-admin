<template>
<div>
  <v-container grid-list-sm fluid>
    <v-layout row wrap>

      <v-flex
        v-for="image in images"
        :key="image.id"
        xs4
        d-flex
        :data-id="image.id"
      >
        <v-card flat tile >
          <v-img
            :src="image.url"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-layout
                fill-height
                align-center
                justify-center
                ma-0
              >
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
        </v-card>
      </v-flex>

      <!-- Add image button -->
      <v-flex xs4 d-flex class="add-btn">
            <addButton :images="images"></addButton>
      </v-flex>

    </v-layout>
  </v-container>
</div>
</template>

<script>
import addButton from '@/components/imageUpload/addButton'

export default {
  name: 'ImageGallery',

  components: {
    addButton
  },

  props: {
    images: Array
  }
}
</script>

<style>
.add-btn {
  border: 1px dotted #eee;
  height: 100%;
  width: 100%;
}
</style>
