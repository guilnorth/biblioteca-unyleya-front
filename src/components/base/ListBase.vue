<template>
  <div>
    <ListResourceBase
      @open-detail="goToD"
      :endpoint="$router.currentRoute.params.endpoint"
    />
    <ModalBase ref="dialog" :onClosedEvent="dimiss">
      <router-view></router-view>
    </ModalBase>
  </div>
</template>

<script>
import ModalBase from "../../components/modal/ModalBase";
import ListResourceBase from "./ListResourceBase";
export default {
  name: "ListBase",
  components: {
    ModalBase,
    ListResourceBase
  },
  mounted() {
    if (this.$router.currentRoute.params.id) this.$refs.dialog.dialog = true;
  },
  methods: {
    goToD: function(id) {
      const { endpoint } = this.$router.currentRoute.params;

      this.$router.replace(`/${endpoint}/${id}`);
      this.$refs.dialog.dialog = !this.$refs.dialog.dialog;
    },
    dimiss: function() {
      const { endpoint } = this.$router.currentRoute.params;
      this.$router.replace(`/${endpoint}`);
    }
  }
};
</script>

<style lang="scss" scoped></style>
