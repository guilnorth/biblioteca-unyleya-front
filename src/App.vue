<template>
  <v-app>
    <NavigationDrawer ref="drawer" />
    <Header @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" />
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <v-tooltip left>
              <span>Source</span>
            </v-tooltip>

            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/zgxeLQ"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-col>
        </v-row>
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
  },
 
};
</script>
