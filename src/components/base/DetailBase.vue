<template>
  <DetailResouceBase :endpoint="$router.currentRoute.params.endpoint" />
</template>

<script>
import DetailResouceBase from "./DetailResouceBase";
export default {
  name: "DetailBase",
  components: { DetailResouceBase }
};
</script>

<style lang="scss" scoped></style>
