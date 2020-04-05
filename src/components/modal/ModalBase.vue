<template>
  <v-dialog v-model="dialog" max-width="600px" @input="onClosed">
    <v-card>
      <v-card-title>
        <span class="headline">User Profile</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <slot></slot>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ModalBase",
  props: ["onClosedEvent"],
  data: () => ({
    dialog: false
  }),
  methods: {
    onClosed: function() {
      console.log("123");
      return this.onClosedEvent();
    }
  }
};
</script>

<style lang="scss" scoped></style>
