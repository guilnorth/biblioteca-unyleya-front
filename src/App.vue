<template>
  <v-app>
    <NavigationDrawer ref="drawer" />
    <Header @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" />
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/shared/Header";
import NavigationDrawer from "./components/shared/NavigationDrawer";

export default {
  name: "App",
  components: {
    Header,
    NavigationDrawer
  }
};
</script>
