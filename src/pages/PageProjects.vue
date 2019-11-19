<template>
  <v-card>
    <CreateProject @onSubmit="createProject"/>
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

  methods: {
    createProject: function(project){
      this.addProject(project);
    }
  },

  computed: {
    ...mapGetters({
      allProjects: 'project/allProjects',
    }),
    ...mapActions({
      fetchProjects: 'project/fetchAllProjects',
      addProject: 'project/addProject'
    })
  }
}
</script>

<style>

</style>
