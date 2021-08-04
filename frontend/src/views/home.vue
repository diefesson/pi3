<template>
  <div class="page-content">
    <feed />
  </div>
</template>

<script>
import Feed from "../components/feed.vue";

export default {
  name: "Home",
  components: { Feed },
};
</script>

<style lang="scss" scoped>
.page-content {
  display: flex;
  justify-content: center;
  height: max-content;
}
</style>
