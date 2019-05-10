<template>
  <v-app>
    <v-content>
      <Drawer/>
      <Nav/>

      <router-view class="mt-2 ml-3"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Nav from "@/views/Nav";
import Drawer from "@/views/Drawer";
export default {
  name: "App",
  components: {
    Nav,
    Drawer
  },
  data() {
    return {};
  },
  computed: {}
};
</script>
