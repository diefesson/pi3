<template>
  <div class="post">
    <div class="post-top">
        <img class="post-top-image" v-bind:src="post.ong.image" />
        <span>{{ post.ong.name }}</span>
    </div>
    <img class="post-middle" v-bind:src="post.image" />
    <div class="post-bottom">SHARE</div>
  </div>
</template>

<style src="../styles/post.scss" lang="scss" scoped></style>

<script>
export default {
  name: "Post",
  props: ["post"],
};
</script>