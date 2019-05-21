<template>
    <v-app>
        <navigation />

        <v-toolbar color="primary" dark fixed app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Bicycle Library</v-toolbar-title>
        </v-toolbar>

        <vcontent fill-height>
            <router-view></router-view>
        </vcontent>
    </v-app>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
    name: 'Main',
    components:{
        Navigation
    },
}
</script>

