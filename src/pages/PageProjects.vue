<template>
  <v-card>
    <CreateProject/>
  </v-card>
</template>

<script>
import CreateProject from '@/components/CreateProject.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'PageProjects',

  components: {
    CreateProject
  },

  created(){
    this.fetchProjects;
  },

  computed: {
    ...mapGetters({
      allProjects: 'project/allProjects',
    }),
    ...mapActions({
      fetchProjects: 'project/fetchAllProjects',
    })
  }
}
</script>

<style>

</style>
