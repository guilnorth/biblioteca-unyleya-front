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
      </div>
    </template>
    <template v-slot:editForm>
      <FormGenres :item="detail" />
    </template>
  </FormDetail>
</template>

<script>
import FormDetail from "../../components/FormDetail";
import FormGenres from "./FormGenres";
import { mapActions, mapState } from "vuex";
export default {
  name: "DetailGenres",
  components: { FormDetail, FormGenres },
  data: () => ({}),
  mounted() {
    const id = parseInt(this.$router.currentRoute.params.id);
    if (id && id !== "undefined") this.getOne({ id });
    else this.resetDetail();
  },
  computed: {
    ...mapState({
      detail: state => state.genres.detail
    })
  },
  methods: {
    ...mapActions("genres", [
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
