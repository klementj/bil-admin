<template >
  <v-btn @click="dialog = true" color="primary" outlined rounded small class="my-auto">
    <v-icon left small>mdi-plus</v-icon> Create new category
    
    <v-dialog v-model="dialog" max-width="500px" >    
      <v-card>       
        <v-card-title>Create new category</v-card-title>

        <v-card-text>
          <v-text-field v-model="form.title" label="Titel"></v-text-field>
          <v-textarea v-model="form.description" label="Description" counter maxlength="120"></v-textarea>
        </v-card-text>


        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" outlined @click="save">Create category</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-btn>
</template>

<script>
import { mapActions } from "vuex";

export default {

    data(){
        return{
            dialog: false,
            form: {
                title: "",
                description: ""
            }
        }
    },

    methods: {
        save(){
            this.addCategory(this.form).then(this.dialog = false, this.form = {title: "", description: ""})
        },
        ...mapActions({
            addCategory: 'category/addCategory'
        })   
    }

    
}
</script>
