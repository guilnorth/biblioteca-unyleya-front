<template>
  <v-dialog v-model="dialog" max-width="600px" @click:outside="onClosed">
    <v-card>
      <v-toolbar color="primary">
        <v-toolbar-title class="ligth">{{ titleModal }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn icon dark @click="closeModal">
            <v-icon color="white">mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-text>
        <v-container>
          <slot></slot>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "ModalBase",
  props: ["onClosedEvent", "titleModal"],
  data: () => ({}),
  computed: {
    ...mapState({
      dialog: state => state.modal.isOpen
    })
  },
  methods: {
    ...mapActions("modal", ["openModal", "closeModal"]),
    onClosed: function() {
      this.closeModal();
    }
  }
};
</script>

<style lang="scss" scoped></style>
