<template>
  <nav class="nav">
    <v-toolbar app flat class="white">
      <v-toolbar-side-icon @click="toggleDrawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text text--darken-3">
        <span class="font-weight-light">todo</span>
        <span class="font-weight-bold">Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat>
        <v-icon>launch</v-icon>
        <span class="text-uppercase">sign out</span>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    toggleDrawer() {
      this.$store.dispatch("toggleDrawer");
    }
  }
};
</script>

<style scoped>
.primary--text {
  color: red !important;
  caret-color: red !important;
}
</style>
