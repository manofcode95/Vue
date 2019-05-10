<template>
  <v-navigation-drawer app v-model="drawer" class="grey lighten-4">
    <v-responsive class="text-xs-center mt-5 mb-3">
      <v-avatar size="100px" class="grey">
        <img src="/img/luffy.jpg">
      </v-avatar>
    </v-responsive>
    <v-list class="pt-0">
      <v-list-tile v-for="item in items" :key="item.text" router :to="{name:item.routeName}" exact>
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.text }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  methods: {},
  data() {
    return {};
  },
  computed: {
    drawer: {
      get() {
        return this.$store.getters.getDrawer;
      },
      set() {
        return;
      }
    },
    items() {
      return this.$store.getters.getItems;
    }
  }
};
</script>

<style>
</style>
