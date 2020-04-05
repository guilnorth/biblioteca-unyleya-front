<template>
  <div class="d-flex flex-wrap">
    <div class="d-flex pa-6" v-for="n in authorsList" :key="n.id">
      <CardBase :onHandleClick="onHandleItem" />
    </div>
  </div>
</template>

<script>
import CardBase from "../../components/base/CardBase";
import { mapActions, mapState } from "vuex";
export default {
  name: "ListAuthors",
  props: ["onItemEvent"],
  components: { CardBase },
  mounted() {
    this.getList();
    //if (this.$router.currentRoute.params.id) this.$refs.dialog.dialog = true;
  },
  computed:{
    ...mapState({
      authorsList: state => state.authors.list,
      //notification: state => state.users.data.notification
    })
  },
  methods: {
    ...mapActions("authors", ["getList"]),
    onHandleItem: function() {
      //Buscar os dados
      //
      return this.onItemEvent(12);
    }
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped></style>
