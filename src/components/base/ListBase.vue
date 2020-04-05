<template>
  <div>
    <ListResourceBase
      @open-detail="goToDetail"
      :endpoint="$router.currentRoute.params.endpoint"
    />
    <ModalBase
      :titleModal="modalTitle[this.$router.currentRoute.params.endpoint]"
    >
      <router-view></router-view>
    </ModalBase>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ModalBase from "../../components/modal/ModalBase";
import ListResourceBase from "./ListResourceBase";
export default {
  name: "ListBase",
  components: {
    ModalBase,
    ListResourceBase
  },
  mounted() {
    if (this.$router.currentRoute.params.id) this.openModal();
  },
  data: () => ({
    modalTitle: {
      authors: "Autor",
      books: "Livro",
      genres: "Gênero",
      publishers: "Editora"
    }
  }),
  methods: {
    ...mapActions("modal", ["openModal"]),
    goToDetail: function(id) {
      const { endpoint } = this.$router.currentRoute.params;

      this.$router.replace(`/${endpoint}/${id}`);
      this.openModal();
    }
  }
};
</script>

<style lang="scss" scoped></style>
