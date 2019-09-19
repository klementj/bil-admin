<template>
  <v-switch
    label="Toggle dark theme"
    v-model="isDark"
  ></v-switch>
</template>

<script>
export default {
  name: 'ToggleTheme',

  computed: {
    isDark: {
      get() {
        return this.$store.state.ui.isDark
      },
      set(val) {
        this.$vuetify.theme.dark = val
      }
    }
  }
}
</script>

<style>

</style>
