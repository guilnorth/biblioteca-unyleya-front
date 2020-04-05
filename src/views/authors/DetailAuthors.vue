<template>
  <FormDetail
    @on-save-form="onHandleSave"
    @on-delete-form="onHandleDelete"
    :idItem="detail.id"
  >
    <template v-slot:detail>
      <div class="d-flex flex-column mb-6 mx-auto">
        <div class="d-flex">
          <v-icon>mdi-account-box-outline</v-icon>
          <v-card-text>{{ detail.name }}</v-card-text>
        </div>
        <div class="d-flex">
          <div class="d-flex" align="center" justify="center">
            <v-icon>mdi-calendar</v-icon>
            <v-card-text>{{ detail.year_birth }}</v-card-text>
          </div>
          <div
            v-if="detail.gender === 'F'"
            class="d-flex"
            align="center"
            justify="center"
          >
            <v-icon>mdi-gender-female</v-icon>
            <v-card-text>Feminino</v-card-text>
          </div>
          <div v-else class="d-flex" align="center" justify="center">
            <v-icon>mdi-gender-male</v-icon>
            <v-card-text>Masculino</v-card-text>
          </div>
        </div>
        <div class="d-flex">
          <v-icon>mdi-earth</v-icon>
          <v-card-text>{{ detail.nationality }}</v-card-text>
        </div>
      </div>
    </template>
    <template v-slot:editForm>
      <FormAuthors :item="detail" />
    </template>
  </FormDetail>
</template>

<script>
import FormDetail from "../../components/FormDetail";
import FormAuthors from "./FormAuthors";
import { mapActions, mapState } from "vuex";
export default {
  name: "DetailAuthors",
  components: { FormDetail, FormAuthors },
  data: () => ({}),
  mounted() {
    const id = parseInt(this.$router.currentRoute.params.id);
    if (id && id !== "undefined") this.getOne({ id });
    else this.resetDetail();
  },
  computed: {
    ...mapState({
      detail: state => state.authors.detail
    })
  },
  methods: {
    ...mapActions("authors", [
      "getOne",
      "save",
      "update",
      "delete",
      "getList",
      "resetDetail"
    ]),
    ...mapActions("modal", ["closeModal"]),
    onHandleSave: function() {
      if (this.detail.id)
        this.update({ id: this.detail.id, data: this.detail });
      else this.save({ data: this.detail });
    },
    onHandleDelete: function() {
      if (this.detail.id) this.delete({ id: this.detail.id });
      this.closeModal();
    }
  }
};
</script>

<style lang="scss" scoped></style>
