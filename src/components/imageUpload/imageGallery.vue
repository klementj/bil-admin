<template>
<div class="image-gallery">

  <!-- Gallery -->
  <!-- 
    Image coponent. 
    Hvis ikke featured, så Toggle til featured ved klik.
    This on click send ID med op
    Put i probs: {featured: String}
    Sorter images Array så den kommer først. 

    Check data-id on div
  -->
  <div class="image" v-for="image in images" :key="image.id" :data-id="image.id">
    <img :src="image.url">
  </div>

  <!-- Add image button -->
  <div class="featured">
    <addButton :images="images"/>
  </div>

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
    images: Array,
    featuredImage: Number
  },

}
</script>

<style>
.image-gallery{
  display:grid;
  grid-template-rows: minmax(200px, 350px) minmax(0, auto);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
}

.image{

}

.image > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured {
  grid-column: 1 / 5;
  grid-row: 1 / 2;
}

</style>
