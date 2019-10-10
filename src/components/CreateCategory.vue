<template >
    <v-btn @click="See" color="primary"
    >
            Make Category
            <v-dialog v-model="dialog" max-width="500px" >
                
                <v-toolbar text>
                    <v-toolbar-title>
                        Make Category
                    </v-toolbar-title>
                </v-toolbar>
                <v-card>
                    <v-card-text>
                        <v-container grid-list-md>
                            <v-layout wrap>
                            <v-flex xs12 sm6 md4>
                                <v-text-field v-model="form.title" label="Titel"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field v-model="form.description" label="Description"></v-text-field>
                            </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1 white--text" flat @click="close">Cancel</v-btn>
                        <v-btn color="blue darken-1 white--text" flat @click="save">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
    </v-btn>
</template>

<script>
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
        See(){
            this.dialog = true
        },
        close(){
            this.dialog = false
        }
        
    }

    
}
</script>